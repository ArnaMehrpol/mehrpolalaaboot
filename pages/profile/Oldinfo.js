import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { toast } from "react-toastify";
import axios, { post } from "axios";
import "react-calendar-datetime-picker/dist/index.css";
import DtPicker, {
  convertToEn,
  convertToFa,
} from "react-calendar-datetime-picker";
import Cookies from "universal-cookie";

const info = () => {
  const [url, seturl] = useState("https://dfgsdfgsdfgj32gsdg.mehrpol.com/");

  const cookies = new Cookies();

  const [userName, setuserName] = useState("");

  const [name, setname] = useState("");
  const [last_name, setlast_name] = useState("");
  const [mobile, setmobile] = useState("");
  const [national_code, setnational_code] = useState("");
  const [birthday, setbirthday] = useState("");
  const [gender, setgender] = useState("");
  const [state, setstate] = useState("");
  const [city, setcity] = useState("");
  const [postal_code, setpostal_code] = useState("");
  const [description, setdescription] = useState("");
  const [refund_type, setrefund_type] = useState("sheba_number");
  const [sheba_number, setsheba_number] = useState("");
  const [card_number, setcard_number] = useState("");
  const [account_number, setaccount_number] = useState("");
  const [token, settoken] = useState("");

  const [allStates, setallStates] = useState([]);
  const [allCities, setallCities] = useState([]);
  const [place_id, setplace_id] = useState("");

  const [user_info, setUser_info] = useState("");

  const [date, setDate] = useState(null);
  const [enBirthday, setEnBirthday] = useState("");
  //Caledar
  const handleCalendar = (date) => {
    const enb = convertToEn(date, "-");
    setEnBirthday(enb);
  };

  //Cookies
  const gettin_user_data_from_cookie = () => {
    const userD = cookies.get("userData");
    console.log(userD);
  };
  //End Cookies

  //upload
  const [picture, setpicture] = useState("");
  const [pictureLink, setpictureLink] = useState("");
  const handleChange = (files) => {
    setpicture(files[0]);
  };

  //End upload

  //ُState & City

  const getStates = async () => {
    var response = await axios.get(url + "api/public/place?type=state");
    var places = response.data.place;
    setallStates(places);
  };

  const getStateChildren = async (id, callback = function (data) {}) => {
    var response = await axios.get(
      url + "api/public/place?type=city&parent_id=" + id
    );

    var places = response.data.place;

    setallCities(places);
    callback(places);
  };

  //*********************************************** */

  const public_info = (e) => {
    axios
      .post(
        url + "api/user/3",
        {
          _method: "PUT",
          name: name,
          last_name: last_name,
          national_code: national_code,
          birthday: enBirthday,
          refund_type: refund_type,
          card_number: card_number,
          sheba_number: sheba_number,
          account_number: account_number,
          picture: picture,
          gender: gender,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then(function (response) {
        console.log(response.data);
        if (response.status == 200) {
          toast.success("اطلاعات با موفقیت ثبت شد!");

          /// console.log(birthday);
          // console.log(token);
        } else {
          toast.error("ثبت اطلاعات با مشکل مواجه شد. دوباره سعی نمایید!");
        }
      });
  }; //End public Info

  const address_info = () => {
    axios.post(
      url + "api/user/addresses",
      {
        name: name,
        mobile: mobile,
        place_id: place_id,
        postal_code: postal_code,
        description: description,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
  };

  const address_info2 = (e) => {
    e.preventDefault();
    axios
      .post(
        url + "api/user/addresses",
        {
          name: name,
          mobile: mobile,
          place_id: place_id,
          postal_code: postal_code,
          description: description,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      )
      .then(function (response) {
        if (response.status == 200) {
          toast.success("آدرس با موفقیت ثبت شد!");
        } else {
          toast.error("آدرس ثبت نشد!");
        }
      });
  };

  const submitInfo = (e) => {
    e.preventDefault();
    handleCalendar();
    public_info();
    address_info();
  };

  const showInfo = () => {
    getting_user_all_data();
    console.log(user_info);
  };
  const getting_user_all_data = async () => {
    // settoken(cookies.get("token"));
    const response = await axios
      .get(url + "api/user", {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
      .then(function (response) {
        setUser_info(response.data);

        const userAllData = response.data;

        setname(userAllData.user.name);
        setlast_name(userAllData.user.last_name);
        setmobile(userAllData.user.mobile);
        setnational_code(userAllData.user.national_code);
        setpictureLink(userAllData.user.picture_link);
        setpicture(userAllData.user.picture_name);
        setbirthday(userAllData.user.birthday);

        setgender(userAllData.user.gender);
        setrefund_type(userAllData.user.refund_type);
        setaccount_number(userAllData.user.account_number);
        setcard_number(userAllData.user.card_number);
        setsheba_number(userAllData.user.sheba_number);
        {
          response && setstate(userAllData.user.address.place.parent.id);
        }
        {
          response &&
            getStateChildren(
              userAllData.user.address.place.parent.id,
              function (data) {
                setcity(userAllData.user.address.place.id);
              }
            );
        }
        {
          response && setdescription(userAllData.user.address.description);
        }
        setpostal_code(userAllData.user.address.postal_code);
      });
  };

  useEffect(() => {
    settoken(cookies.get("token"));
    getStates();
    getting_user_all_data();
    setTimeout(() => {
      showInfo();
    }, 2000);
  }, []);

  return (
    <>
      <div className="container-fluid px-lg-5 mx-auto bg-light py-3 IranSanse">
        <nav aria-label="profile-breadcrumb breadcrumb w-100">
          <div className="breadcrumb bg-white rounded p-3 d-flex align-items-center">
            <div className="profile-breadcrumb-item breadcrumb-item">
              <i className="bi bi-house text-muted me-2"></i>
              <a
                href="#"
                className="text-decoration-none text-muted active IranSanse"
              >
                صفحه اصلی
              </a>
            </div>
            <div
              className="profile-breadcrumb-item breadcrumb-item text-muted"
              aria-current="page"
            >
              پروفایل
            </div>
            <div
              className="profile-breadcrumb-item breadcrumb-item text-muted"
              aria-current="page"
            >
              اطلاعات حساب کاربری
            </div>
          </div>
        </nav>
      </div>
      <div className="container-fluid px-lg-5 mx-auto bg-light">
        <div className="row profilesPage d-flex">
          <div className="sidbar col-lg-3 lg:mb-0 mb-5">
            <nav className="navbar navbar-profile navbar-profile-expand-lg navbar-expand-lg bg-white shadow">
              <div className="navbar-profile-container container-fluid">
                {!picture && !pictureLink ? (
                  ""
                ) : (
                  <>
                    <div className="top-nav d-flex">
                      <div className="top-nav-image relative">
                        <a className="navbar-img" href="#">
                          <Image
                            src={`/${pictureLink}.'\\'.${picture}`}
                            className="img-fluide"
                            width="50px"
                            height="50px"
                          ></Image>
                        </a>
                      </div>
                      <div className="top-nav-info d-flex flex-column ms-3">
                        <p className="fw-bold">{name}</p>
                        <small className="text-muted">{mobile}</small>
                      </div>
                    </div>
                  </>
                )}
                <button
                  className="profile-navbar-toggler navbar-toggler custom-toggler bg-light"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <i className="bi bi-list"></i>
                </button>
                <div
                  className="profile-collapse collapse product-navbar-collapse navbar-collapse w-100"
                  id="navbarNav"
                >
                  <div className="profile-navbar-nav navbar-nav">
                    <div className="profile-nav-item nav-item group d-flex justify-content-between align-items-center border-bottom border-muted p-2">
                      <div className="nav-item-flex d-flex align-items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-5 h-5 text-black group-hover:text-blue-500"
                        ></svg>

                        <a
                          className="profile-nav-link nav-link text-dark group-hover:text-blue-500 lg:mr-0 mr-2"
                          aria-current="page"
                          href="#"
                        >
                          داشبورد
                        </a>
                      </div>
                      <div className="profile-left-icone">
                        <a href="#">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-4 h-4 text-black group-hover:text-blue-500"
                          ></svg>
                        </a>
                      </div>
                    </div>
                    <div className="profile-nav-item nav-item d-flex justify-content-between align-items-center border-bottom border-muted p-2">
                      <div className="nav-item-flex d-flex align-items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-5 h-5 text-black"
                        ></svg>

                        <Link href="/profile/info">
                          <a
                            className="profile-nav-link nav-link active text-dark lg:mr-0 mr-2"
                            aria-current="page"
                          >
                            اطلاعات حساب کاربری
                          </a>
                        </Link>
                      </div>
                      <div className="">
                        <a href="#">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-4 h-4"
                          ></svg>
                        </a>
                      </div>
                    </div>
                    <div className="profile-nav-item d-flex justify-content-between align-items-center border-bottom border-muted p-2">
                      <div className="nav-item-flex d-flex align-items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-5 h-5 text-black"
                        ></svg>

                        <Link href="/profile/orders">
                          <a
                            className="profile-nav-link nav-link active text-dark lg:mr-0 mr-2"
                            aria-current="page"
                          >
                            سفارش ها
                          </a>
                        </Link>
                      </div>
                      <div className="profile-left-icone">
                        <a href="#">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-4 h-4"
                          ></svg>
                        </a>
                      </div>
                    </div>
                    <div className="profile-nav-item d-flex justify-content-between align-items-center border-bottom border-muted p-2">
                      <div className="nav-item-flex d-flex align-items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-5 h-5 text-black"
                        ></svg>
                        <a
                          className="profile-nav-link nav-link active text-dark lg:mr-0 mr-2"
                          aria-current="page"
                          href="#"
                        >
                          سبد خرید
                        </a>
                      </div>
                      <div className="profile-left-icone">
                        <a href="#">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-4 h-4 text-black"
                          ></svg>
                        </a>
                      </div>
                    </div>
                    <div className="profile-nav-item d-flex justify-content-between align-items-center border-bottom border-muted p-2">
                      <div className="nav-item-flex d-flex align-items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-5 h-5 text-black"
                        ></svg>

                        <a
                          className="profile-nav-link nav-link active text-dark lg:mr-0 mr-2"
                          aria-current="page"
                          href="#"
                        >
                          مالی
                        </a>
                      </div>
                      <div className="profile-left-icone">
                        <a href="#">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-4 h-4"
                          ></svg>
                        </a>
                      </div>
                    </div>
                    <div className="profile-nav-item nav-item d-flex justify-content-between align-items-center border-bottom border-muted p-2">
                      <div className="nav-item-flex d-flex align-items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-5 h-5 text-black"
                        ></svg>

                        <a
                          className="profile-nav-link nav-link active text-dark lg:mr-0 mr-2"
                          aria-current="page"
                          href="#"
                        >
                          علاقه مندی ها
                        </a>
                      </div>
                      <div className="profile-left-icone">
                        <a href="#">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-4 h-4"
                          ></svg>
                        </a>
                      </div>
                    </div>
                    <div className="profile-nav-item nav-item d-flex justify-content-between align-items-center border-bottom border-muted p-2">
                      <div className="nav-item-flex d-flex align-items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-5 h-5 text-black"
                        ></svg>

                        <a
                          className="profile-nav-link nav-link active text-dark lg:mr-0 mr-2"
                          aria-current="page"
                          href="#"
                        >
                          دیدگاه ها
                        </a>
                      </div>
                      <div className="profile-left-icone">
                        <a href="#">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-4 h-4"
                          ></svg>
                        </a>
                      </div>
                    </div>
                    <div className="profile-nav-item nav-item d-flex justify-content-between align-items-center border-bottom border-muted p-2">
                      <div className="nav-item-flex d-flex align-items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-5 h-5 text-black"
                        ></svg>

                        <a
                          className="profile-nav-link nav-link active text-dark lg:mr-0 mr-2"
                          aria-current="page"
                          href="#"
                        >
                          پیام ها
                        </a>
                      </div>
                      <div className="profile-left-icone d-flex">
                        <span className="badge bg-danger rounded me-2 d-flex justify-content-center align-items-center">
                          ۶
                        </span>
                        <a href="#">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-4 h-4"
                          ></svg>
                        </a>
                      </div>
                    </div>
                    <div className="profile-nav-item nav-item d-flex justify-content-between align-items-center border-bottom border-muted p-2">
                      <div className="nav-item-flex d-flex align-items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-5 h-5 text-black"
                        ></svg>

                        <a
                          className="profile-nav-link nav-link active text-dark lg:mr-0 mr-2"
                          aria-current="page"
                          href="#"
                        >
                          بازدیدهای اخیر
                        </a>
                      </div>
                      <div className="profile-left-icone d-flex align-items-center justify-content-center">
                        <a href="#">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-4 h-4"
                          ></svg>
                        </a>
                      </div>
                    </div>
                    <div className="profile-nav-item nav-item d-flex justify-content-between align-items-center border-bottom border-muted p-2">
                      <div className="nav-item-flex d-flex align-items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-5 h-5 text-black"
                        ></svg>

                        <a
                          className="profile-nav-link nav-link active text-dark lg:mr-0 mr-2"
                          aria-current="page"
                          href="#"
                        >
                          امتیاز دهی
                        </a>
                      </div>
                      <div className="profile-left-icone d-flex align-items-center justify-content-center">
                        <a href="#">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-4 h-4 text-black"
                          ></svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </div>
          <section className="mainbar col-9">
            <div className="profile-content">
              <div className="mainTitle mb-4">
                <h6 className="text-muted fw-bold IranSanse">
                  اطلاعات حساب کاربری
                </h6>

                <div className="border-bottom border-2 border-primary"></div>
              </div>
              <form id="profile-form" className="profile-info-box">
                {!user_info ? (
                  <>
                    <div className="profile-info col-span-3 md:col-span-1">
                      <label className="IranSanse">نام</label>
                      <input
                        name="first_name"
                        id="first_name"
                        type="text"
                        onChange={(e) => {
                          setname(e.target.value);
                        }}
                        placeholder="نام خود را وارد فرمایید..."
                        className="border IranSanse border-slate-100 focus:outline-none focus:border-slate-400 focus:ring-1 focus:ring-sky-500 overflow-hidden rounded-sm py-1.5 px-2 text-sm"
                      ></input>
                    </div>

                    <div className="profile-info col-span-3 md:col-span-1">
                      <label className="IranSanse">نام خانوادگی</label>
                      <input
                        type="text"
                        onChange={(e) => {
                          setlast_name(e.target.value);
                        }}
                        placeholder="نام خانوادگی خود را وارد نمایید..."
                        className="border IranSanse border-slate-100 focus:outline-none focus:border-slate-400 focus:ring-1 focus:ring-sky-500 overflow-hidden rounded-sm py-1.5 px-2 text-sm"
                      ></input>
                    </div>

                    <div className="profile-info IranSanse col-span-3 md:col-span-1">
                      <label>شماره موبایل</label>
                      <input
                        id="mobile"
                        type="number"
                        onChange={(e) => {
                          setmobile(e.target.value);
                        }}
                        placeholder="شماره موبایل خود را وارد نمایید..."
                        className="border IranSanse border-slate-100 focus:outline-none focus:border-slate-400 focus:ring-1 focus:ring-sky-500 overflow-hidden rounded-sm py-1.5 px-2 text-sm"
                      ></input>
                    </div>
                    <div className="profile-info col-span-3 md:col-span-1">
                      <lable className="text-sm IranSanse">کدملی</lable>
                      <input
                        type="number"
                        id="national_code"
                        onChange={(e) => {
                          setnational_code(e.target.value);
                        }}
                        placeholder="کد ملی خود را وارد نمایید..."
                        className="border IranSanse border-slate-100 focus:outline-none focus:border-slate-400 focus:ring-1 focus:ring-sky-500 overflow-hidden rounded-sm py-1.5 px-2 text-sm"
                      ></input>
                    </div>
                    <div className="profile-info col-span-3 md:col-span-1">
                      <lable className="text-sm IranSanse">تاریخ تولد</lable>
                      <div className="text-sm">
                        <DtPicker
                          className="text-center text-xs IranSanse"
                          onChange={(date) => {
                            setDate(date);
                            handleCalendar(date);
                          }}
                          local="fa"
                          showWeekend={true}
                          inputId="calender"
                          placeholder="تاریخ تولد خود را انتخاب فرمایید"
                        />

                        <input
                          hidden={false}
                          id="enBirthday"
                          type="text"
                          value={convertToEn(date, "-")}
                        />
                      </div>
                    </div>
                    <div className="profile-info col-span-3 md:col-span-1">
                      <lable className="text-sm IranSanse">جنسیت</lable>
                      <div className="radio-box">
                        <input
                          type="radio"
                          name="sex"
                          value="male"
                          label="مرد"
                          onChange={(e) => {
                            setgender(e.target.value);
                          }}
                        ></input>
                        <label
                          for="male"
                          className="pr-2 IranSanse text-slate-400"
                        >
                          مرد
                        </label>
                        <input
                          type="radio"
                          name="sex"
                          value="famale"
                          label="زن"
                          onChange={(e) => {
                            setgender(e.target.value);
                          }}
                        ></input>
                        <label
                          for="female"
                          className="text-slate-400 IranSanse"
                        >
                          زن
                        </label>
                      </div>
                    </div>
                    <div className="profile-info col-span-3 mt-2">
                      <lable className="text-xs IranSanse font-semibold">
                        آدرس
                      </lable>
                    </div>
                    <div className="profile-info col-span-3 md:col-span-1">
                      <lable className="text-sm IranSanse">استان</lable>
                      <select
                        id="states"
                        onChange={(e) => {
                          getStateChildren(e.target.value);
                        }}
                        className="bg-white IranSanse border border-slate-100 focus:outline-none focus:border-slate-400 focus:ring-1 focus:ring-sky-500 overflow-hidden rounded-sm py-1.5 px-2 text-sm text-slate-400"
                      >
                        <option className="IranSanse"> استان</option>
                        {allStates.map(function (place) {
                          return (
                            <option className="IranSanse" value={place.id}>
                              {place.name}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                    <div className="profile-info col-span-3 md:col-span-1">
                      <lable className="text-sm IranSanse">شهر</lable>
                      <select
                        id="city_option"
                        onChange={(e) => {
                          setplace_id(e.target.value);
                        }}
                        className="bg-white IranSanse border border-slate-100 focus:outline-none focus:border-slate-400 focus:ring-1 focus:ring-sky-500 overflow-hidden rounded-sm py-1.5 px-2 text-sm text-slate-400"
                      >
                        <option id="city" className="IranSanse">
                          شهر
                        </option>
                        {allCities.map(function (place) {
                          return (
                            <option className="IranSanse" value={place.id}>
                              {place.name}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                    <div className="profile-info col-span-3 md:col-span-1">
                      <lable className="text-sm IranSanse">کدپستی</lable>
                      <input
                        type="number"
                        id="postal_code"
                        onChange={(e) => {
                          setpostal_code(e.target.value);
                        }}
                        placeholder="کد پستی خود را وارد فرمایید..."
                        className="border IranSanse border-slate-100 focus:outline-none focus:border-slate-400 focus:ring-1 focus:ring-sky-500 overflow-hidden rounded-sm py-1.5 px-2 text-sm text-black"
                      ></input>
                    </div>
                    <div className="profile-info col-span-3 md:col-span-2">
                      <textarea
                        id="description"
                        onChange={(e) => {
                          setdescription(e.target.value);
                        }}
                        placeholder="آدرس خود را وارد فرمایید..."
                        className="border IranSanse border-slate-100 focus:outline-none focus:border-slate-400 focus:ring-1 focus:ring-sky-500 overflow-hidden rounded-sm py-1.5 px-2 text-sm text-black"
                      ></textarea>
                    </div>
                    <div className="profile-info col-span-3 md:col-span-1 border border-slate-500 overflow-hidden rounded-md">
                      <Link href="/">
                        <a
                          className="h-full panel-address-link  flex items-center justify-center"
                          type="button"
                          data-bs-toggle="modal"
                          data-bs-target="#staticBackdrop"
                        >
                          <span className="text-xs text-slate-400">
                            افزودن آدرس
                          </span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-slate-400 mx-0.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                            />
                          </svg>
                        </a>
                      </Link>

                      <div
                        className="modal fade"
                        id="staticBackdrop"
                        data-bs-backdrop="static"
                        data-bs-keyboard="false"
                        tabindex="-1"
                        aria-labelledby="staticBackdropLabel"
                        aria-hidden="true"
                      >
                        <div className="modal-dialog">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5
                                className="modal-title text-base font-semibold"
                                id="staticBackdropLabel"
                              >
                                آدرس ها{" "}
                              </h5>
                              <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              ></button>
                            </div>
                            <div className="modal-body">
                              <div className="panel-addresses bg-white p-4 border-b border-slate-200">
                                <div className="panel-address border-b border-slate-200 pb-5">
                                  <div className="address-title w-full h-full flex justify-between items-center my-4">
                                    <div className="btn-group dropend">
                                      <a
                                        type="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                      >
                                        <i className="bi bi-three-dots"></i>
                                      </a>
                                      <ul className="w-full dropdown-menu divide-y divide-slate-200 p-2">
                                        <li className="flex items-center pb-2 ">
                                          <i className="bi bi-pencil-fill text-sm ml-2"></i>
                                          <span className="text-sm">
                                            ویرایش آدرس
                                          </span>
                                        </li>
                                        <li className="flex items-center pt-2">
                                          <i className="bi bi-trash3-fill text-sm ml-2"></i>
                                          <span className="text-sm">حذف</span>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="flex justify-between items-center">
                                    <div className="flex flex-col">
                                      <div className="location w-full h-full  flex items-center">
                                        <span className="px-1 py-1 bg-blue-500 rounded-full">
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-4 w-4 text-white text-semibold"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                          >
                                            <path
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                            />
                                            <path
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                            />
                                          </svg>
                                        </span>
                                        <p className="text-sm text-black mr-2">
                                          تهران ، خیابان مطهری ، خیابان مفتح ،
                                          پلاک ۸{" "}
                                        </p>
                                      </div>
                                      <div className="email w-full h-full  flex items-center mt-2">
                                        <span className="px-1 py-1 bg-blue-500 rounded-full">
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-4 w-4 text-white text-semibold"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                          >
                                            <path
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                              d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76"
                                            />
                                          </svg>
                                        </span>
                                        <p className="text-sm text-black mr-2">
                                          {" "}
                                          myy@my.com
                                        </p>
                                      </div>
                                      <div className="tel w-full h-full  flex items-center mt-2">
                                        <span className="px-1 py-1 bg-blue-500 rounded-full">
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-4 w-4 text-white text-semibold"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                          >
                                            <path
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                            />
                                          </svg>
                                        </span>
                                        <p className="text-sm text-black mr-2">
                                          ۶۶۵۲۴۸۷۶
                                        </p>
                                      </div>
                                    </div>
                                    <div className="bg-slate-100 w-36 h-32 "></div>
                                  </div>
                                </div>
                                <div className="panel-address">
                                  <div className="address-title w-full h-full flex justify-between items-center my-4">
                                    <div>
                                      <h5 className="text-base font-semibold">
                                        فروشگاه
                                      </h5>
                                    </div>
                                    <div className="btn-group dropend">
                                      <a
                                        type="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                      >
                                        <i className="bi bi-three-dots"></i>
                                      </a>
                                      <ul className="w-full dropdown-menu divide-y divide-slate-200 p-2">
                                        <li className="flex items-center pb-2 ">
                                          <i className="bi bi-pencil-fill text-sm ml-2"></i>
                                          <span className="text-sm">
                                            ویرایش آدرس
                                          </span>
                                        </li>
                                        <li className="flex items-center pt-2">
                                          <i className="bi bi-trash3-fill text-sm ml-2"></i>
                                          <span className="text-sm">حذف</span>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="flex justify-between items-center">
                                    <div className="flex flex-col">
                                      <div className="location w-full h-full  flex items-center">
                                        <span className="px-1 py-1 bg-blue-500 rounded-full">
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-4 w-4 text-white text-semibold"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                          >
                                            <path
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                            />
                                            <path
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                            />
                                          </svg>
                                        </span>
                                        <p className="text-sm text-black mr-2">
                                          تهران ، خیابان مطهری ، خیابان مفتح ،
                                          پلاک ۸{" "}
                                        </p>
                                      </div>
                                      <div className="email w-full h-full  flex items-center mt-2">
                                        <span className="px-1 py-1 bg-blue-500 rounded-full">
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-4 w-4 text-white text-semibold"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                          >
                                            <path
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                              d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76"
                                            />
                                          </svg>
                                        </span>
                                        <p className="text-sm text-black mr-2">
                                          {" "}
                                          myy@my.com
                                        </p>
                                      </div>
                                      <div className="tel w-full h-full  flex items-center mt-2">
                                        <span className="px-1 py-1 bg-blue-500 rounded-full">
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-4 w-4 text-white text-semibold"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                          >
                                            <path
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                            />
                                          </svg>
                                        </span>
                                        <p className="text-sm text-black mr-2">
                                          ۶۶۵۲۴۸۷۶
                                        </p>
                                      </div>
                                    </div>
                                    <div className="bg-slate-100 w-36 h-32 "></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="modal-footer">
                              <button
                                type="button"
                                className="btn btn-danger px-4 py-2 text-xs"
                                data-bs-dismiss="modal"
                              >
                                بستن
                              </button>
                              <button
                                type="button"
                                className="btn btn-primary px-4 py-2 text-xs"
                              >
                                ثبت
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="profile-info col-span-3 md:col-span-2 mt-2">
                      <lable className="text-xs IranSanse font-semibold mb-1 IranSanse">
                        روش بازگرداندن پول
                      </lable>
                      <div className="input-group">
                        <div className="input-group mb-3">
                          <select
                            id=""
                            className="bg-white w-100 border border-slate-100 focus:outline-none focus:border-slate-400 focus:ring-1 focus:ring-sky-500 overflow-hidden rounded-sm py-1.5 px-2 text-sm text-slate-400"
                            onChange={(e) => setrefund_type(e.target.value)}
                          >
                            <option className="IranSanse" disabled value="">
                              انتخاب روش
                            </option>
                            <option className="IranSanse" value="sheba_number">
                              شماره شبا
                            </option>
                            <option
                              className="IranSanse"
                              value="account_number"
                            >
                              شماره حساب
                            </option>
                            <option className="IranSanse" value="card_number">
                              شماره کارت
                            </option>
                          </select>
                        </div>

                        <div className="input-group mb-3">
                          <span
                            className="input-group-text mySpan text-center"
                            id="basic-addon1"
                          >
                            شماره حساب
                          </span>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="شماره حساب"
                            onChange={(e) => {
                              setaccount_number(e.target.value);
                            }}
                          />
                        </div>
                        <div className="input-group mb-3">
                          <span
                            className="input-group-text mySpan "
                            id="basic-addon1"
                          >
                            شماره شبا
                          </span>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="شماره شبا"
                            onChange={(e) => {
                              setsheba_number(e.target.value);
                            }}
                          />
                        </div>
                        <div className="input-group mb-3">
                          <span
                            className="input-group-text mySpan "
                            id="basic-addon1"
                          >
                            شماره کارت
                          </span>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="شماره کارت"
                            onChange={(e) => {
                              setcard_number(e.target.value);
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  // ***************************************************************************************
                  // ***************************************************************************************
                  <>
                    <div className="profile-info col-span-3 md:col-span-1">
                      <label className="IranSanse">نام</label>
                      <input
                        name="first_name"
                        id="first_name"
                        type="text"
                        onChange={(e) => {
                          setname(e.target.value);
                        }}
                        placeholder={name}
                        className="border IranSanse border-slate-100 focus:outline-none focus:border-slate-400 focus:ring-1 focus:ring-sky-500 overflow-hidden rounded-sm py-1.5 px-2 text-sm"
                      ></input>
                    </div>

                    <div className="profile-info col-span-3 md:col-span-1">
                      <label className="IranSanse">نام خانوادگی</label>
                      <input
                        type="text"
                        onChange={(e) => {
                          setlast_name(e.target.value);
                        }}
                        placeholder={last_name}
                        className="border IranSanse border-slate-100 focus:outline-none focus:border-slate-400 focus:ring-1 focus:ring-sky-500 overflow-hidden rounded-sm py-1.5 px-2 text-sm"
                      ></input>
                    </div>

                    <div className="profile-info IranSanse col-span-3 md:col-span-1">
                      <label>شماره موبایل</label>
                      <input
                        id="mobile"
                        type="number"
                        onChange={(e) => {
                          setmobile(e.target.value);
                        }}
                        placeholder={mobile}
                        className="border IranSanse border-slate-100 focus:outline-none focus:border-slate-400 focus:ring-1 focus:ring-sky-500 overflow-hidden rounded-sm py-1.5 px-2 text-sm"
                      ></input>
                    </div>
                    <div className="profile-info col-span-3 md:col-span-1">
                      <lable className="text-sm IranSanse">کدملی</lable>
                      <input
                        type="number"
                        id="national_code"
                        onChange={(e) => {
                          setnational_code(e.target.value);
                        }}
                        placeholder={national_code}
                        className="border IranSanse border-slate-100 focus:outline-none focus:border-slate-400 focus:ring-1 focus:ring-sky-500 overflow-hidden rounded-sm py-1.5 px-2 text-sm"
                      ></input>
                    </div>
                    <div className="profile-info col-span-3 md:col-span-1">
                      <lable className="text-sm IranSanse">تاریخ تولد</lable>
                      <DtPicker
                        className="text-center"
                        onChange={(date) => {
                          setDate(date);
                          handleCalendar(date);
                        }}
                        local="fa"
                        showWeekend={true}
                        inputId="calender"
                        placeholder={birthday}
                      />

                      <input
                        hidden={true}
                        id="enBirthday"
                        type="text"
                        value={convertToEn(date, "-")}
                      />
                    </div>

                    <div className="profile-info col-span-3 md:col-span-1">
                      <lable className="text-sm IranSanse">جنسیت</lable>
                      <div className="radio-box">
                        <input
                          type="radio"
                          id="male"
                          name="sex"
                          value="male"
                          checked={gender == "male" ? true : false}
                          label="مرد"
                          onChange={(e) => {
                            setgender(e.target.value);
                          }}
                        ></input>
                        <label
                          for="male"
                          className="pr-2 IranSanse text-slate-400"
                        >
                          مرد
                        </label>
                        <input
                          type="radio"
                          checked={gender == "female" ? true : false}
                          name="sex"
                          value="famale"
                          label="زن"
                          onChange={(e) => {
                            setgender(e.target.value);
                          }}
                        ></input>
                        <label
                          for="female"
                          className="text-slate-400 IranSanse"
                        >
                          زن
                        </label>
                      </div>
                    </div>
                    <div className="profile-info col-span-3 mt-2">
                      <lable className="text-xs IranSanse font-semibold">
                        آدرس
                      </lable>
                    </div>
                    <div className="profile-info col-span-3 md:col-span-1">
                      <lable className="text-sm IranSanse">استان</lable>
                      <select
                        id="states"
                        value={state}
                        onChange={(e) => {
                          getStateChildren(e.target.value);
                        }}
                        className="bg-white IranSanse border border-slate-100 focus:outline-none focus:border-slate-400 focus:ring-1 focus:ring-sky-500 overflow-hidden rounded-sm py-1.5 px-2 text-sm text-slate-400"
                      >
                        <option className="IranSanse"> استان</option>
                        {allStates.map(function (place) {
                          return (
                            <option className="IranSanse" value={place.id}>
                              {place.name}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                    <div className="profile-info col-span-3 md:col-span-1">
                      <lable className="text-sm IranSanse">شهر</lable>
                      <select
                        id="city_option"
                        value={city}
                        onChange={(e) => {
                          // setcity(e.target.value);
                          setplace_id(e.target.value);
                        }}
                        className="bg-white IranSanse border border-slate-100 focus:outline-none focus:border-slate-400 focus:ring-1 focus:ring-sky-500 overflow-hidden rounded-sm py-1.5 px-2 text-sm text-slate-400"
                      >
                        <option id="city" className="IranSanse">
                          شهر
                        </option>
                        {allCities.map(function (place) {
                          return (
                            <option className="IranSanse" value={place.id}>
                              {place.name}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                    <div className="profile-info col-span-3 md:col-span-1">
                      <lable className="text-sm IranSanse">کدپستی</lable>
                      <input
                        type="number"
                        id="postal_code"
                        onChange={(e) => {
                          setpostal_code(e.target.value);
                        }}
                        placeholder={postal_code}
                        className="border IranSanse border-slate-100 focus:outline-none focus:border-slate-400 focus:ring-1 focus:ring-sky-500 overflow-hidden rounded-sm py-1.5 px-2 text-sm text-black"
                      ></input>
                    </div>
                    <div className="profile-info col-span-3 md:col-span-2">
                      <textarea
                        id="description"
                        onChange={(e) => {
                          setdescription(e.target.value);
                        }}
                        placeholder={description}
                        className="border IranSanse border-slate-100 focus:outline-none focus:border-slate-400 focus:ring-1 focus:ring-sky-500 overflow-hidden rounded-sm py-1.5 px-2 text-sm text-black"
                      ></textarea>
                    </div>
                    <div className="profile-info col-span-3 md:col-span-1 border border-slate-500 overflow-hidden rounded-md">
                      <Link href="/">
                        <a
                          className="h-full panel-address-link  flex items-center justify-center"
                          type="button"
                          data-bs-toggle="modal"
                          data-bs-target="#staticBackdrop"
                        >
                          <span className="text-xs text-slate-400">
                            افزودن آدرس
                          </span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-slate-400 mx-0.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                            />
                          </svg>
                        </a>
                      </Link>

                      <div
                        className="modal fade"
                        id="staticBackdrop"
                        data-bs-backdrop="static"
                        data-bs-keyboard="false"
                        tabindex="-1"
                        aria-labelledby="staticBackdropLabel"
                        aria-hidden="true"
                      >
                        <div className="modal-dialog">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5
                                className="modal-title text-base font-semibold"
                                id="staticBackdropLabel"
                              >
                                آدرس ها{" "}
                              </h5>
                              <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              ></button>
                            </div>
                            <div className="modal-body">
                              <div className="panel-addresses bg-white p-4 border-b border-slate-200">
                                <div className="panel-address border-b border-slate-200 pb-5">
                                  <div className="address-title w-full h-full flex justify-between items-center my-4">
                                    <div className="btn-group dropend">
                                      <a
                                        type="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                      >
                                        <i className="bi bi-three-dots"></i>
                                      </a>
                                      <ul className="w-full dropdown-menu divide-y divide-slate-200 p-2">
                                        <li className="flex items-center pb-2 ">
                                          <i className="bi bi-pencil-fill text-sm ml-2"></i>
                                          <span className="text-sm">
                                            ویرایش آدرس
                                          </span>
                                        </li>
                                        <li className="flex items-center pt-2">
                                          <i className="bi bi-trash3-fill text-sm ml-2"></i>
                                          <span className="text-sm">حذف</span>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="flex justify-between items-center">
                                    <div className="flex flex-col">
                                      <div className="location w-full h-full  flex items-center">
                                        <span className="px-1 py-1 bg-blue-500 rounded-full">
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-4 w-4 text-white text-semibold"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                          >
                                            <path
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                            />
                                            <path
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                            />
                                          </svg>
                                        </span>
                                        <p className="text-sm text-black mr-2">
                                          تهران ، خیابان مطهری ، خیابان مفتح ،
                                          پلاک ۸{" "}
                                        </p>
                                      </div>
                                      <div className="email w-full h-full  flex items-center mt-2">
                                        <span className="px-1 py-1 bg-blue-500 rounded-full">
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-4 w-4 text-white text-semibold"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                          >
                                            <path
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                              d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76"
                                            />
                                          </svg>
                                        </span>
                                        <p className="text-sm text-black mr-2">
                                          {" "}
                                          myy@my.com
                                        </p>
                                      </div>
                                      <div className="tel w-full h-full  flex items-center mt-2">
                                        <span className="px-1 py-1 bg-blue-500 rounded-full">
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-4 w-4 text-white text-semibold"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                          >
                                            <path
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                            />
                                          </svg>
                                        </span>
                                        <p className="text-sm text-black mr-2">
                                          ۶۶۵۲۴۸۷۶
                                        </p>
                                      </div>
                                    </div>
                                    <div className="bg-slate-100 w-36 h-32 "></div>
                                  </div>
                                </div>
                                <div className="panel-address">
                                  <div className="address-title w-full h-full flex justify-between items-center my-4">
                                    <div>
                                      <h5 className="text-base font-semibold">
                                        فروشگاه
                                      </h5>
                                    </div>
                                    <div className="btn-group dropend">
                                      <a
                                        type="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                      >
                                        <i className="bi bi-three-dots"></i>
                                      </a>
                                      <ul className="w-full dropdown-menu divide-y divide-slate-200 p-2">
                                        <li className="flex items-center pb-2 ">
                                          <i className="bi bi-pencil-fill text-sm ml-2"></i>
                                          <span className="text-sm">
                                            ویرایش آدرس
                                          </span>
                                        </li>
                                        <li className="flex items-center pt-2">
                                          <i className="bi bi-trash3-fill text-sm ml-2"></i>
                                          <span className="text-sm">حذف</span>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="flex justify-between items-center">
                                    <div className="flex flex-col">
                                      <div className="location w-full h-full  flex items-center">
                                        <span className="px-1 py-1 bg-blue-500 rounded-full">
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-4 w-4 text-white text-semibold"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                          >
                                            <path
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                            />
                                            <path
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                            />
                                          </svg>
                                        </span>
                                        <p className="text-sm text-black mr-2">
                                          تهران ، خیابان مطهری ، خیابان مفتح ،
                                          پلاک ۸{" "}
                                        </p>
                                      </div>
                                      <div className="email w-full h-full  flex items-center mt-2">
                                        <span className="px-1 py-1 bg-blue-500 rounded-full">
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-4 w-4 text-white text-semibold"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                          >
                                            <path
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                              d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76"
                                            />
                                          </svg>
                                        </span>
                                        <p className="text-sm text-black mr-2">
                                          {" "}
                                          myy@my.com
                                        </p>
                                      </div>
                                      <div className="tel w-full h-full  flex items-center mt-2">
                                        <span className="px-1 py-1 bg-blue-500 rounded-full">
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-4 w-4 text-white text-semibold"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                          >
                                            <path
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                            />
                                          </svg>
                                        </span>
                                        <p className="text-sm text-black mr-2">
                                          ۶۶۵۲۴۸۷۶
                                        </p>
                                      </div>
                                    </div>
                                    <div className="bg-slate-100 w-36 h-32 "></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="modal-footer">
                              <button
                                type="button"
                                className="btn btn-danger px-4 py-2 text-xs"
                                data-bs-dismiss="modal"
                              >
                                بستن
                              </button>
                              <button
                                type="button"
                                className="btn btn-primary px-4 py-2 text-xs"
                              >
                                ثبت
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="profile-info col-span-3 md:col-span-2 mt-2">
                      <lable className="text-xs IranSanse font-semibold mb-1 IranSanse">
                        روش بازگرداندن پول
                      </lable>
                      <div className="input-group">
                        <div className="input-group mb-3">
                          <select
                            id=""
                            placeholder={refund_type}
                            className="bg-white w-100 border border-slate-100 focus:outline-none focus:border-slate-400 focus:ring-1 focus:ring-sky-500 overflow-hidden rounded-sm py-1.5 px-2 text-sm text-slate-400"
                            onChange={(e) => setrefund_type(e.target.value)}
                          >
                            <option className="IranSanse" disabled value="">
                              انتخاب روش
                            </option>
                            <option className="IranSanse" value="sheba_number">
                              شماره شبا
                            </option>
                            <option
                              className="IranSanse"
                              value="account_number"
                            >
                              شماره حساب
                            </option>
                            <option className="IranSanse" value="card_number">
                              شماره کارت
                            </option>
                          </select>
                        </div>

                        <div className="input-group mb-3">
                          <span
                            className="input-group-text mySpan text-center"
                            id="basic-addon1"
                          >
                            شماره حساب
                          </span>
                          <input
                            type="text"
                            className="form-control"
                            placeholder={account_number}
                            onChange={(e) => {
                              setaccount_number(e.target.value);
                            }}
                          />
                        </div>
                        <div className="input-group mb-3">
                          <span
                            className="input-group-text mySpan "
                            id="basic-addon1"
                          >
                            شماره شبا
                          </span>
                          <input
                            type="text"
                            className="form-control"
                            placeholder={sheba_number}
                            onChange={(e) => {
                              setsheba_number(e.target.value);
                            }}
                          />
                        </div>
                        <div className="input-group mb-3">
                          <span
                            className="input-group-text mySpan "
                            id="basic-addon1"
                          >
                            شماره کارت
                          </span>
                          <input
                            type="text"
                            className="form-control"
                            placeholder={card_number}
                            onChange={(e) => {
                              setcard_number(e.target.value);
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {/* End Ravesh Pool */}
                {/* start upload pic */}
                <div className="profile-info col-span-3 md:col-span-2 mt-2">
                  <div className="input-group fileUploader  mb-3">
                    <label htmlFor="fileUpload " className="IranSanse">
                      انتخاب عکس
                    </label>
                    <div className="input-group mb-3">
                      <input
                        type="file"
                        className="form-control"
                        name="picture"
                        id="picture"
                        onChange={(e) => handleChange(e.target.files)}
                      />
                    </div>
                  </div>
                </div>
                {/* End upload pic */}

                <div className="profile-save-btn col-span-3 md:col-span-3 flex justify-end items-end mt-2">
                  <button
                    onClick={submitInfo}
                    className="btn btn-primary myButtons font14 IranSanse"
                    type="submit"
                  >
                    ثبت
                  </button>
                </div>
              </form>
            </div>
          </section>
        </div>
      </div>
      <div className=""></div>
    </>
  );
};
export default info;
