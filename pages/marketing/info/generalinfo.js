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
import MarketingInfoHeader from "../../../components/marketing/marketingHeader/MarketingInfoHeader";
import MarketingInfoSide from "../../../components/marketing/layout/MarketingInfoSide";

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

  const [allStates, setAllStates] = useState([]);
  const [allBusiness, setAllBusiness] = useState([]);
  const [business_id, setBusiness_id] = useState(null);
  const [loading, setLoading] = useState(false);
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
    setLoading(true);
    console.log("مشخصات عمومی");
    axios
      .get(url + "api/user", {
        headers: {
          Authorization: `Bearer ${cookies.get("token")}`,
        },
      })
      .then(function (response) {
        const data = response.data;
        setLoading(false);
        console.log("اینها داده های کار بر هستند");
        console.log(data);
        if (response) {
          setName(data.user.name);
          setLast_name(data.user.last_name);
          setNational_code(data.user.national_code);
          setMobile(data.user.mobile);
          setMobile_2(data.user.mobile_2);
          setEnBirthday(data.user.birthday);
          setBirthday_place_id(data.user.birthday_place_id);
          // getUserBirth_placeState(data.user.birthday_place_id);
          setGender(data.user.gender);
          setAccount_number(data.user.account_number);
          setSheba_number(data.user.sheba_number);
        } else {
          console.log("داده های عمومی دریافت نشد!");
        }
      })
      .catch(function (error) {
        console.log("مشخصات عمومی دریافت نشدند");
        setLoading(false);
      });
  };

  //submit
  const handleSubmitGeneralInfo = (e) => {
    e.preventDefault();

    if (birthday_place == "") {
      document.getElementById("birthday_place").style.borderBlockColor = "red";
      toast.error("لطفا فیلدهای خالی را پر کنید");
      return false;
    }
    console.log(birthday_place);

    setLoading(true);

    axios
      .post(
        url + "api/user/3",
        {
          _method: "PUT",
          // name: name,
          // last_name: last_name,
          // national_code: national_code,
          // birthday: enBirthday,
          birthday_place_id: birthday_place,
          // gender: gender,
          // mobile: mobile,
          mobile_2: mobile_2,
        },
        {
          headers: {
            Authorization: `Bearer ${cookies.get("token")}`,
            // "Content-Type": "multipart/form-data",
          },
        }
      )
      .then(function (response) {
        setLoading(false);
        const data = response.data;
        if (response) {
          toast.success("اطلاعات با موفقیت ثبت شد!");
          router.push("/marketing/info/marketingDetails");
        } else {
          toast.error("ثبت اطلاعات با مشکل مواجه شد!");
        }
      })
      .catch(function (err) {
        console.log(err);
        setLoading(false);
        toast.error("ثبت اطلاعات با مشکل مواجه شد!");
      });
  };

  const gettingStates = async () => {
    await axios
      .get(url + "api/public/place?type=state")
      .then((res) => setAllStates(res.data.place));
  };

  const getUserBirth_placeState = (birthday_place_id) => {
    axios
      .get(url + "api/public/place/" + birthday_place_id)
      .then(function (response) {
        var place = response.data.Place.name;
        setBirthday_place(place);
      });
  };

  useEffect(() => {
    gettingGeneralInfos();
    settingBusinessId();
    gettingStates();
    getUserBirth_placeState();
  }, []);

  return (
    <div className="mx-auto">
      <div className="business-panel-container">
        <div className="business-panel-cols flex grid-cols-12 bg-slate-100 ">
          <div>
            <MarketingInfoSide />
          </div>
          <div className="business-panel-mainbar w-100 lg:col-span-9 col-span-12 shadow-lg shadow-slate-100 relative">
            <MarketingInfoHeader />
            <section className="generalinfo-container max-w-screen-md mx-auto flex justify-center items-center relative ">
              <div className="generalinfo-form bg-white overflow-hidden roundde-lg shadow-md px-5 mt-[5rem]">
                {loading && (
                  <>
                    <span className="ml-2 text-primary">...بارگذاری</span>
                    <div
                      className="spinner-border text-primary ml-2"
                      role="status"
                    ></div>
                  </>
                )}
                <div className="generalinfo-title flex flex-col my-4">
                  <h5 className="text-base font-semibold text-slate-600">
                    مشخصات عمومی
                  </h5>
                  <small className="text-slate-500 text-xs mt-0.5">
                    اطلاعات عمومی صاحب کسب و کار را وارد نمایید
                  </small>
                  {/* <small className="text-red-500 text-xs mt-1">
                    اطلاعات کسب و کار می بایست منطبق بر اطلاعات مجوز فعالیت ثبت
                    گردد
                  </small> */}
                </div>

                <div className="generalinfo">
                  <div className="generalinfo-grid grid grid-cols-12 gap-3">
                    <div className="generalinfo-input lg:col-span-4 col-span-12">
                      {/* <sup className="text-danger">*</sup> */}
                      <label className="text-sm text-slate-700 px-2 mb-2">
                        نام
                      </label>
                      <div className="all-input-group input-group mb-3">
                        <input
                          id="name"
                          readOnly
                          onChange={(e) => setName(e.target.value)}
                          type="text"
                          className="form-control grayBackground "
                          value={name && name}
                          placeholder="نام"
                        />
                      </div>
                    </div>
                    <div className="generalinfo-input lg:col-span-4 col-span-12">
                      {/* <sup className="text-danger">*</sup> */}
                      <label className="text-sm text-slate-700 px-2 mb-2">
                        نام خانوادگی
                      </label>
                      <div className="all-input-group input-group mb-3 grayBackground">
                        <input
                          readOnly
                          onChange={(e) => setLast_name(e.target.value)}
                          type="text"
                          className="form-control grayBackground"
                          value={last_name && last_name}
                          placeholder={"نام خانوادگی"}
                        />
                      </div>
                    </div>
                    <div className="generalinfo-input lg:col-span-4 col-span-12">
                      {/* <sup className="text-danger">*</sup> */}
                      <label className="text-sm text-slate-700 px-2 mb-2">
                        کدملی
                      </label>
                      <div className="all-input-group input-group mb-3">
                        <input
                          readOnly
                          onChange={(e) =>
                            setNational_code(e.currentTarget.value)
                          }
                          type="text"
                          className="form-control grayBackground"
                          value={national_code && national_code}
                          placeholder={"کد ملی"}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="generalinfo-grid grid grid-cols-12 gap-3">
                    <div className="generalinfo-input lg:col-span-4 col-span-12">
                      {/* <sup className="text-danger">*</sup> */}
                      <label className="text-sm text-slate-700 px-2 mb-2">
                        تاریخ تولد
                      </label>
                      <div className="text-sm ">
                        <input
                          type="text"
                          className="form-control grayBackground"
                          value={enBirthday && enBirthday}
                          placeholder={"تاریخ تولد"}
                        />

                        {/* <input
                          hidden={false}
                          id="enBirthday"
                          type="text"
                          value={convertToEn(date, "-")}
                        /> */}
                      </div>
                    </div>
                    <div className="generalinfo-input lg:col-span-4 col-span-12">
                      <sup className="text-danger">*</sup>
                      <label className="text-sm text-slate-700 px-2 mb-2">
                        محل تولد
                      </label>
                      <div className="all-input-group input-group mb-3">
                        <select
                          onChange={(e) => {
                            setBirthday_place(e.target.value);
                            document.getElementById(
                              "birthday_place"
                            ).style.borderBlockColor = "white";
                          }}
                          id="birthday_place"
                          className="form-select"
                          aria-label="Default select example"
                        >
                          {birthday_place ? (
                            <option>{birthday_place}</option>
                          ) : (
                            <option value="0">انتخاب کنید</option>
                          )}
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
                      {/* <sup className="text-danger">*</sup> */}
                      <label className="text-sm text-slate-700 px-2 mb-2">
                        جنسیت
                      </label>
                      <div className="all-input-group input-group mb-3">
                        <input
                          readOnly
                          type="number"
                          className="form-control grayBackground"
                          value={gender && gender}
                          placeholder={"جنسیت"}
                        />
                      </div>
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
                        className="form-control grayBackground"
                      />
                    </div>
                    <div className="generalinfo-input lg:col-span-4 col-span-12">
                      <label className="text-sm text-slate-700 px-2 mb-2 IranSanse">
                        شماره همراه
                      </label>
                      <div className="all-input-group input-group mb-3">
                        <input
                          readOnly
                          onChange={(e) => setMobile(e.target.value)}
                          type="number"
                          className="form-control grayBackground"
                          value={mobile && mobile}
                          placeholder={"شماره همراه"}
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
                          value={mobile_2 && mobile_2}
                          placeholder={"2 شماره همراه"}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="next-btn w-full h-full border-t-2 border-dotted border-slate-100 flex justify-end items-center">
                  {loading && (
                    <>
                      <span className="ml-2 text-primary">...بارگذاری</span>
                      <div
                        className="spinner-border text-primary ml-2"
                        role="status"
                      ></div>
                    </>
                  )}
                  <button
                    id="btnGeneralInfo"
                    name="btnGeneralInfo"
                    onClick={handleSubmitGeneralInfo}
                    className="text-white myButton text-md px-2 py-1 bg-blue-500 hover:bg-blue-400 rounded-md my-6"
                  >
                    ثبت و مرحله بعد
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
