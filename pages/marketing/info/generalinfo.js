import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Cookies from "universal-cookie";
import "react-calendar-datetime-picker/dist/index.css";
import DtPicker, {
  convertToEn,
  convertToFa,
} from "react-calendar-datetime-picker";
import { useRouter } from "next/router";
import axios from "axios";
import { toast } from "react-toastify";

const generalinfo = () => {
  const [url, seturl] = useState("https://dfgsdfgsdfgj32gsdg.mehrpol.com/");
  const [cookie, setCookie] = useState(null);
  const [token, settoken] = useState("");
  const router = useRouter();

  const [userData, setUserData] = useState("");

  const [name, setName] = useState("");
  const [last_name, setLast_name] = useState("");
  const [national_code, setNational_code] = useState("");
  const [date, setDate] = useState("");
  const [enBirthday, setEnBirthday] = useState("");
  const [birthday_place, setBirthday_place] = useState("");
  const [birthday_place_id, setBirthday_place_id] = useState(0);

  const [gender, setGender] = useState("");
  // const [position, setPosition] = useState("");
  const [mobile, setMobile] = useState("");
  const [mobile_2, setMobile_2] = useState("");
  const [account_number, setAccount_number] = useState("");
  const [sheba_number, setSheba_number] = useState("");
  const [allStates, setAllStates] = useState([]);
  const [allBusiness, setAllBusiness] = useState([]);
  const [business_id, setBusiness_id] = useState(null);
  const cookies = new Cookies();
  let totalBusiness = [];

  //Cookie
  const cookieSetter = (e) => {
    if (business_id == null) {
      toast.error("اول کسب و کار خود را انتخاب نماببد!");
    } else {
      cookies.set("b-Id", business_id, { path: "/" });
      toast.success("کسب و کار ست شد");
      console.log(business_id);
    }
  };

  //Calendar
  const handleCalendar = (date) => {
    const enb = convertToEn(date, "-");
    setEnBirthday(enb);
  };
  // setting Business Id

  const settingBusinessId = (res) => {
    axios
      .get(url + "api/user/businesses", {
        headers: {
          Authorization: `Bearer ${cookies.get("token")}`,
        },
      })
      .then((response) => {
        setAllBusiness(response.data.data);
        if (response) {
          console.log(response.data.data);
          console.log("داده ها دریافت شدند");
        } else {
          console.log("بیزنسی ثبت نشده");
        }
      })
      .catch(function (error) {
        console.log(error.message);
      });
  };

  //Gettin generalInfos
  const gettingGeneralInfos = () => {
    axios
      .get(url + "api/user", {
        headers: {
          Authorization: `Bearer ${cookies.get("token")}`,
        },
      })
      .then(function (response) {
        const data = response.data;
        if (response) {
          // setOk("ok");
          setName(data.user.name);
          setLast_name(data.user.last_name);
          setNational_code(data.user.national_code);
          setMobile(data.user.mobile);
          setMobile_2(data.user.mobile_2);
          setEnBirthday(data.user.birthday);
          setBirthday_place_id(data.user.birthday_place_id);

          setGender(data.user.gender);
          setAccount_number(data.user.account_number);
          setSheba_number(data.user.sheba_number);
        } else {
          console.log("داده های بیزنس دریافت نشد!");
        }
      })
      .catch(function (error) {
        console.log("not ok");
      });
  };

  //submit
  const handleSubmitGeneralInfo = (e) => {
    e.preventDefault();

    axios
      .post(
        url + "api/user/3",
        {
          _method: "PUT",
          name: name,
          last_name: last_name,
          national_code: national_code,
          birthday: enBirthday,
          birthday_place_id: birthday_place,
          gender: gender,
          mobile: mobile,
          mobile_2: mobile_2,
          account_number: account_number,
          sheba_number: sheba_number,
        },
        {
          headers: {
            Authorization: `Bearer ${cookies.get("token")}`,
            // "Content-Type": "multipart/form-data",
          },
        }
      )
      .then(function (response) {
        const data = response.data;
        if (response) {
          toast.success("اطلاعات با موفقیت ثبت شد!");
          router.push("./info");
        } else {
          toast.error("ثبت اطلاعات با مشکل مواجه شد!");
        }
      })
      .catch(function (err) {
        console.log(err);
        toast.error("ثبت اطلاعات با مشکل مواجه شد!");
      });
  };

  const gettingStates = async () => {
    await axios
      .get(url + "api/public/place?type=state")
      .then((res) => setAllStates(res.data.place));
  };

  const getUserBirth_placeState = async (birthday_place_id) => {
    await axios.get(url + "api/public/place/" + birthday_place_id);

    var place = response.data.place;
    setBirthday_place(place);
  };

  useEffect(() => {
    gettingGeneralInfos();
    settingBusinessId();
    gettingStates();
    getUserBirth_placeState();
  }, []);

  return (
    <div className="zIndex">
      <div className="business-panel-container">
        <div className="business-panel-cols grid grid-cols-12 bg-slate-100 ">
          {/* ********************************************************************* */}
          <div className="business-panel-sidbar lg:col-span-3 col-span-12 my-8">
            <nav className="navbar navbar-business navbar-business-expand-lg navbar-expand-lg">
              <div className="navbar-business-container container-fluid mx-4">
                <div className="top-nav d-flex">
                  <div className="business-logo w-14 h-14 rounded-full bg-white">
                    <Link href="/">
                      <Image
                        src="/../public/assets/img/logos/1.png"
                        width="60px"
                        height="60px"
                        className="w-full h-full rounded-full flex justify-center items-center"
                      ></Image>
                    </Link>
                  </div>
                  <div className="business-name flex flex-col mr-3 mb-2">
                    <select
                      className="form-select font11"
                      aria-label="Default select example"
                      onChange={(e) => {
                        setBusiness_id(e.target.value);
                      }}
                    >
                      <option selected>کسب و کار خود را انتخاب نمایید</option>
                      {allBusiness
                        ? allBusiness.map(function (allBusiness) {
                            return (
                              <option value={allBusiness.id}>
                                <small>{allBusiness.name}</small>
                              </option>
                            );
                          })
                        : ""}
                    </select>

                    <small className="text-xs mt-1 mb-1">
                      {name} {last_name}
                    </small>
                    <small className="IranSanse mb-1">
                      پس از انتخاب کسب و کار دکمه زیر را بزنید
                    </small>

                    <button
                      onClick={cookieSetter}
                      className="btn btn-outline-primary"
                    >
                      ست
                    </button>
                  </div>
                </div>
                <button
                  className="business-navbar-toggler navbar-toggler custom-toggler bg-light"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <i className="bi bi-list"></i>
                </button>
                <div
                  className="business-collapse collapse product-navbar-collapse navbar-collapse w-full mt-4"
                  id="navbarSupportedContent"
                >
                  <div className="business-navbar-nav navbar-nav">
                    <div className="business-nav-item nav-item bg-blue-500 rounded-md px-4 mb-3">
                      <div className="w-full h-full nav-item-flex flex items-center">
                        <i className="bi bi-person font-semibold text-sm text-white"></i>
                        <Link href="/aa/user-info/generalinfo">
                          <a
                            className="business-nav-link nav-link text-xs text-white mr-1"
                            aria-current="page"
                          >
                            اطلاعات کاربری
                          </a>
                        </Link>
                      </div>
                    </div>
                    <div className="business-nav-item-active nav-item rounded-md flex items-center">
                      <span className="px-2 py-2 bg-blue-500 rounded-md relative">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </span>
                      <div className="w-full h-full flex flex-col mt-4 pr-3">
                        <Link href="/aa/user-info/generalinfo">
                          <a>
                            <p className="text-xs font-semibold">
                              ۱. مشخصات عمومی
                            </p>
                          </a>
                        </Link>
                        <p className="text-slate-400 text-[9px] mt-2 pr-3">
                          اطلاعات عمومی صاحب کسب و کار را وارد نمایید
                        </p>
                      </div>
                    </div>
                    <div className="business-nav-item-inactive nav-item rounded-md flex items-center">
                      <span className="px-2 py-2 bg-white rounded-md relative mt-5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-slate-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                          />
                        </svg>
                      </span>
                      <div className="w-full h-full flex flex-col mt-16 pr-3">
                        <Link href="/aa/user-info/info">
                          <a>
                            <p className="text-xs font-semibold">
                              ۲.اطلاعات کسب و کار
                            </p>
                          </a>
                        </Link>
                        <p className="text-slate-400 text-[9px] mt-2">
                          اطلاعات کسب و کار خود را در این قسمت واردکنید
                        </p>
                      </div>
                    </div>
                    <div className="business-nav-item-inactive nav-item rounded-md flex items-center">
                      <span className="px-2 py-2 bg-white rounded-md relative mt-5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-slate-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
                          />
                        </svg>
                      </span>
                      <div className="w-full h-full flex flex-col pr-3 mt-16">
                        <Link href="/aa/user-info/about">
                          <a>
                            <p className="text-xs font-semibold">۳.درباره ما</p>
                          </a>
                        </Link>
                        <p className="text-slate-400 text-[9px] mt-2">
                          در این قسمت پیام مدیریت و توضیحات خود را وارد نمایید
                        </p>
                      </div>
                    </div>
                    <div className="business-nav-item-inactive nav-item rounded-md flex items-center">
                      <span className="px-2 py-2 bg-white rounded-md relative mt-5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-slate-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                          />
                        </svg>
                      </span>
                      <div className="w-full h-full flex flex-col mt-16">
                        <Link href="/aa/user-info/management">
                          <a>
                            <p className="text-xs font-semibold pr-3">
                              ۴.مدیران
                            </p>
                          </a>
                        </Link>
                        <p className="text-slate-400 text-[9px] mt-2 pr-3">
                          در این قسمت اطلاعات مربوط به مدیران را وارد کنید
                        </p>
                      </div>
                    </div>
                    <div className="business-nav-item-inactive nav-item rounded-md flex items-center">
                      <span className="px-2 py-2 bg-white rounded-md relative mt-5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-slate-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                      </span>
                      <div className="w-full h-full flex flex-col pr-3 mt-16">
                        <Link href="/aa/user-info/agreement">
                          <a>
                            <p className="text-xs font-semibold">۵.قراردادها</p>
                          </a>
                        </Link>
                        <p className="text-slate-400 text-[9px] mt-2">
                          در این قسمت قراردادهای خود را وارد نمایید
                        </p>
                      </div>
                    </div>
                    <div className="business-nav-item-active nav-item rounded-md flex items-center">
                      <div className="px-2 py-2 bg-white rounded-md relative mt-5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-slate-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                          />
                        </svg>
                      </div>
                      <div className="w-full h-full flex flex-col pr-3 mt-16">
                        <Link href="/aa/user-info/social">
                          <a>
                            <p className="text-xs font-semibold">
                              ۶.شبکه های اجتماعی
                            </p>
                          </a>
                        </Link>
                        <p className="text-slate-400 text-[9px] mt-2">
                          در این قسمت آدرس شبکه های اجتماعی را واردکنید
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </div>
          {/* ********************************************************************* */}
          <div className="business-panel-mainbar lg:col-span-9 col-span-12 shadow-lg shadow-slate-100 relative">
            <header className="header-container max-w-screen-xl px-12 mx-auto bg-white h-[60px] relative lg:z-[9999]">
              <div className="header-flex h-full flex items-center">
                <Link href="/">
                  <a className="header-link relative">
                    <span className="w-5 h-5 rounded-full flex justify-center items-center bg-rose-500 text-white text-xs absolute -top-3 -right-[5px] opacity-80">
                      ۳
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5"
                      />
                    </svg>
                  </a>
                </Link>
              </div>
            </header>
            <section className="generalinfo-container max-w-screen-md mx-auto flex justify-center items-center relative z-[9999]">
              <div className="generalinfo-form bg-white overflow-hidden roundde-lg shadow-md px-5 mt-[5rem]">
                <div className="generalinfo-title flex flex-col my-4">
                  <h5 className="text-base font-semibold text-slate-600">
                    مشخصات عمومی
                  </h5>
                  <small className="text-slate-500 text-xs mt-0.5">
                    اطلاعات عمومی صاحب کسب و کار را وارد نمایید
                  </small>
                  <small className="text-red-500 text-xs mt-1">
                    اطلاعات کسب و کار می بایست منطبق بر اطلاعات مجوز فعالیت ثبت
                    گردد
                  </small>
                </div>
                <div className="generalinfo">
                  <div className="generalinfo-grid grid grid-cols-12 gap-3">
                    <div className="generalinfo-input lg:col-span-4 col-span-12">
                      <label className="text-sm text-slate-700 px-2 mb-2">
                        نام
                      </label>
                      <div className="all-input-group input-group mb-3">
                        <input
                          onChange={(e) => setName(e.target.value)}
                          type="text"
                          className="form-control"
                          placeholder={name ? name : "نام"}
                        />
                      </div>
                    </div>
                    <div className="generalinfo-input lg:col-span-4 col-span-12">
                      <label className="text-sm text-slate-700 px-2 mb-2">
                        نام خانوادگی
                      </label>
                      <div className="all-input-group input-group mb-3">
                        <input
                          onChange={(e) => setLast_name(e.target.value)}
                          type="text"
                          className="form-control"
                          placeholder={last_name ? last_name : "نام خانوادگی"}
                        />
                      </div>
                    </div>
                    <div className="generalinfo-input lg:col-span-4 col-span-12">
                      <label className="text-sm text-slate-700 px-2 mb-2">
                        کدملی
                      </label>
                      <div className="all-input-group input-group mb-3">
                        <input
                          onChange={(e) =>
                            setNational_code(e.currentTarget.value)
                          }
                          type="text"
                          className="form-control"
                          placeholder={national_code ? national_code : "کد ملی"}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="generalinfo-grid grid grid-cols-12 gap-3">
                    <div className="generalinfo-input lg:col-span-4 col-span-12">
                      <label className="text-sm text-slate-700 px-2 mb-2">
                        تاریخ تولد
                      </label>
                      <div className="text-sm ">
                        <DtPicker
                          className="text-center IranSanse "
                          onChange={(date) => {
                            setDate(date);
                            handleCalendar(date);
                          }}
                          local="fa"
                          showWeekend={true}
                          inputId="calender"
                          placeholder={
                            enBirthday
                              ? enBirthday
                              : "تاریخ تولد خود را انتخاب فرمایید"
                          }
                        />

                        <input
                          hidden={false}
                          id="enBirthday"
                          type="text"
                          value={convertToEn(date, "-")}
                        />
                      </div>
                    </div>
                    <div className="generalinfo-input lg:col-span-4 col-span-12">
                      <label className="text-sm text-slate-700 px-2 mb-2">
                        استان
                      </label>
                      <div className="all-input-group input-group mb-3">
                        <select
                          onChange={(e) => setBirthday_place(e.target.value)}
                          id="birthState"
                          className="form-select"
                          aria-label="Default select example"
                        >
                          <option value="0">انتخاب کنید</option>
                          {allStates
                            ? allStates.map(function (allStates) {
                                return (
                                  <option value={allStates.id}>
                                    {allStates.name}
                                  </option>
                                );
                              })
                            : ""}
                        </select>
                      </div>
                    </div>
                    <div className="generalinfo-input lg:col-span-4 col-span-12">
                      <label className="text-sm text-slate-700 px-2 mb-2">
                        جنسیت
                      </label>
                      <select
                        className="form-select form-select-text-style  py-[0.575rem]"
                        aria-label="Default select example"
                        onChange={(e) => setGender(e.target.value)}
                      >
                        <option selected>{gender ? gender : "جنسیت"}</option>
                        <option className="text-slate-400 text-sm" value="male">
                          مرد
                        </option>
                        <option
                          className="text-slate-400 text-sm"
                          value="female"
                        >
                          زن
                        </option>
                      </select>
                    </div>
                  </div>
                  <div className="generalinfo-grid grid grid-cols-12 gap-3">
                    <div className="generalinfo-input lg:col-span-4 col-span-12">
                      <label className="text-sm text-slate-700 px-2 mb-2">
                        سمت
                      </label>

                      <input
                        type="text"
                        value={"صاحب کسب و کار"}
                        className="form-control"
                      />
                    </div>
                    <div className="generalinfo-input lg:col-span-4 col-span-12">
                      <label className="text-sm text-slate-700 px-2 mb-2 IranSanse">
                        شماره همراه
                      </label>
                      <div className="all-input-group input-group mb-3">
                        <input
                          onChange={(e) => setMobile(e.target.value)}
                          type="number"
                          className="form-control"
                          placeholder={mobile ? mobile : "شماره همراه"}
                        />
                      </div>
                    </div>
                    <div className="generalinfo-input lg:col-span-4 col-span-12">
                      <label className="text-sm text-slate-700 px-2 mb-2">
                        شماره همراه ۲
                      </label>
                      <div className="all-input-group input-group mb-3">
                        <input
                          onChange={(e) => setMobile_2(e.target.value)}
                          type="number"
                          className="form-control"
                          placeholder={mobile_2 ? mobile_2 : "2 شماره همراه"}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="generalinfo-grid grid grid-cols-12 gap-3">
                    <div className="generalinfo-input lg:col-span-6 col-span-12">
                      <label className="text-sm text-slate-700 px-2 mb-2">
                        حساب بانکی
                      </label>
                      <div className="all-input-group input-group mb-3">
                        <input
                          onChange={(e) => setAccount_number(e.target.value)}
                          type="number"
                          className="form-control"
                          placeholder={
                            account_number ? account_number : "شماره حساب"
                          }
                        />
                      </div>
                    </div>
                    <div className="generalinfo-input lg:col-span-6 col-span-12">
                      <div className="all-input-group input-group mt-[30px]">
                        <input
                          onChange={(e) => setSheba_number(e.target.value)}
                          type="number"
                          className="form-control"
                          placeholder={
                            sheba_number ? sheba_number : "شماره شبا"
                          }
                        />
                      </div>
                    </div>
                  </div>
                  <div className="generalinfo-text my-3">
                    <p className="text-xs text-slate-600 text-justify">
                      این شماره صرفا برای واریز مبالغ دریافتی بابت فروش و برگشتی
                      استفاده می شود و از نظر مهر پل به عنوان حساب مرجع شناخته
                      می شود.
                    </p>
                  </div>
                </div>
                <div className="next-btn w-full h-full border-t-2 border-dotted border-slate-100 flex justify-end items-center">
                  <button
                    id="btnGeneralInfo"
                    name="btnGeneralInfo"
                    onClick={handleSubmitGeneralInfo}
                    className="text-white myButton text-md px-2 py-1 bg-blue-500 hover:bg-blue-400 rounded-md my-6"
                  >
                    ثبت و مرحله بعد
                  </button>
                  <button
                    className="text-white  myButton text-md px-2 py-1 bg-blue-500 hover:bg-blue-400 rounded-md my-6 me-2"
                    onClick={() => {
                      if (business_id == null) {
                        toast.error(
                          "لطفا کسب و کار خود را انتخاب کرده و دکمه ست را بزنید"
                        );
                      } else {
                        router.push("./info");
                      }
                    }}
                  >
                    مرحله بعد
                  </button>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default generalinfo;
