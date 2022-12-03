import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Cookies from "universal-cookie";
import {
  fixNumbers,
  fixNumbersEnglish,
} from "../../components/tools/ChangeLanguage";
import { axiosSetup } from "../../components/utils/axiosSetup";
import { useSelector, useDispatch } from "react-redux";
import { fetchState } from "../../redux/loadState/LoadStateAction";
import { fetchCities } from "../../redux/loadCities/LoadCitiesAction";
import { isNationalIdValid } from "../../components/tools/validationNationalId";
import DtPicker, {
  convertToFa,
  convertToEn,
} from "react-calendar-datetime-picker";
import "react-calendar-datetime-picker/dist/index.css";
import ShowpathProfile from "../../components/profile/components/showPathProfile/ShowpathProfile";
import ProfileLayout from "../../components/profile/layouts/ProfileLayout";
import { stringify } from "postcss";
import axios from "axios";
import config from "../../components/utils/config";
import { toast } from "react-toastify";
// import { shabaValidate } from "../../components/tools/validateBankDetail";

import DatePicker, { DateObject } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import Footer from "react-multi-date-picker/plugins/range_picker_footer";
import picMap from "../../public/assets/img/pic/googlemap.png";

//gregorian calendar & locale
import gregorian from "react-date-object/calendars/gregorian";
import gregorian_fa from "react-date-object/locales/gregorian_fa";

//arabic calendar & locale
import arabic from "react-date-object/calendars/arabic";
import arabic_fa from "react-date-object/locales/arabic_fa";

//indian calendar & locale
import indian from "react-date-object/calendars/indian";
import indian_fa from "react-date-object/locales/indian_fa";

const infoUser = {
  first_name: "",
  last_name: "",
  mobile: "",
  birthday_place_id: "",
  birthday: "",
  gender: "",
  refund_type: "",
  typeReturnMoney: {
    shaba: "",
    numHesab: "",
    numCard: "",
  },
  picture: "",
  addresses: [],
};

const dataInCookies = {
  tokenId: "",
};

const info = () => {
  const cookies = new Cookies();
  const [isLoadInfo, setIsLoadInfo] = useState(false);
  const [getInfoUserFromDB, setGetInfoUserFromDB] = useState();
  const [loadStates, setLoadStates] = useState({});
  const [loadCities, setLoadCities] = useState([]);
  const [isValidationNationalId, setIsValidationNationalId] = useState(true);
  const [isShabaValidate, setIsShabaValidate] = useState(false);
  const [choosenState, setChoosenState] = useState(false);
  const [resUpdateInfoUser, setResUpdateInfoUser] = useState([]);
  const [catchUpdateInfoUser, setCatchUpdateInfoUser] = useState([]);
  const [reloadStateList, setReloadStateList] = useState(false);
  const [loadingSpinner, setLoadingSpinner] = useState(false);
  const [birthdateUser, setBirthdateUser] = useState({ format: "YYYY-MM-DD" });
  // const userData = cookies.get('dataUser');
  // const tokenId = cookies.get('token')
  const [userAddress, setUserAddress] = useState({
    postalCode: "",
    address: "",
    city: "",
  });
  const dataState = useSelector((state) => state.loadState);
  const dispatch = useDispatch();
  const method = "get";
  const address = "/public/place?type=state";
  const header = {
    Accept: "application/json",
    Authorization: "Bearer " + cookies.get("token"),
  };
  const [date, setDate] = useState(null);
  const [changeInfoUser, setChangeInfoUser] = useState({
    first_name: "",
    last_name: "",
    mobile: "",
    birthday_place_id: "",
    gender: "",
    refund_type: "",
    typeReturnMoney: {
      sheba_number: "",
      account_number: "",
      card_number: "",
    },
    picture: "",
    _method: "put",
  });

  const [resSaveInfoUser, setResSaveInfoUser] = useState([]);
  const [catchSaveInfoUser, setCatchSaveInfoUser] = useState([]);

  // const [birthDaygetFromDB, setBirthDaygetFromDB] = useState({
  //   year: userData &&  userData.birthday && userData.birthday.slice(0,4),
  //   month: userData && userData.birthday && userData.birthday.slice(6,2),
  //   day: userData && userData.birthday && userData.birthday.slice(9,2)
  // })

  console.log({ birthdateUser });
  useEffect(() => {
    dataInCookies.userData = cookies.get("dataUser");
    dataInCookies.tokenId = cookies.get("token");

    axiosSetup(address, method, header, "", getResult);
    function getResult(data) {
      console.log({ data });
      setLoadStates(data);
    }
  }, []);

  useEffect(() => {
    if (reloadStateList === true) {
      axiosSetup(address, method, header, "", getResult);
      function getResult(data) {
        setLoadStates(data);
      }
      setReloadStateList(false);
    }
    //dispatch(fetchState(address, method, header, ''));
    //axiosSetup(method, address, header, '')
  }, [reloadStateList]);

  useEffect(() => {
    const loadInfo = async () => {
      let address = "/user";
      header = {
        Accept: "application/json",
        Authorization: "Bearer " + dataInCookies.tokenId,
      };
      await axiosSetup(address, method, header, "", getResult);
      function getResult(data) {
        setGetInfoUserFromDB(data.data.user);
        setIsLoadInfo(true);
      }
    };
    loadInfo();
  }, []);

  useEffect(() => {
    if (isLoadInfo === true) {
      let objTemp = getInfoUserFromDB?.birthday?.replace(/-/g, "/");
      let birthdateTemp = new DateObject(objTemp)
        .convert(persian, persian_fa)
        .format();
      getInfoUserFromDB &&
        setChangeInfoUser({
          first_name: getInfoUserFromDB.name,
          last_name: getInfoUserFromDB.last_name,
          mobile: getInfoUserFromDB.mobile,
          national_code: getInfoUserFromDB.national_code,
          birthday_place_id: getInfoUserFromDB.birthday_place_id,
          birthday: birthdateTemp,
          gender: getInfoUserFromDB.gender,
          refund_type: getInfoUserFromDB.refund_type,
          typeReturnMoney: {
            sheba_number: getInfoUserFromDB.sheba_number,
            account_number: getInfoUserFromDB.account_number,
            card_number: getInfoUserFromDB.card_number,
          },
          picture: getInfoUserFromDB.icon,
          link_picture: getInfoUserFromDB.picture_link,
          _method: "put",
        });
      setIsLoadInfo(false);
      console.log({ objTemp });
      console.log({ birthdateTemp });
    }
  }, [isLoadInfo]);

  console.log({ changeInfoUser });

  useEffect(() => {
    //setLoadStates(dataState.data.place)
  }, [choosenState]);

  const getDateFromCalenderFun = (val) => {
    console.log({ val });
  };

  const convertToPersian = () => {
    let object = { date, format };
    setBirthdateUser({
      persain: new DateObject(object).convert(persian, persian_fa).format(),
    });
  };

  const convert = (date, format = birthdateUser.format) => {
    let object = { date, format };
    setBirthdateUser({
      gregorian: new DateObject(object)
        .convert(gregorian, gregorian_fa)
        .format(),
      persian: new DateObject(object).format(),
      convToPersain: new DateObject(object)
        .convert(persian, persian_fa)
        .format(),
      arabic: new DateObject(object).convert(arabic, arabic_fa).format(),
      indian: new DateObject(object).convert(indian, indian_fa).format(),

      ...object,
    });
  };

  const selectStateChangeHandler = (e) => {
    const stateId = e.target.value;
    console.log(stateId);
    if (stateId === "reload") {
      setReloadStateList(true);
    }
    if (stateId !== "choosed" && stateId !== "reload") {
      const address = `/public/place?type=city&parent_id=${stateId}`;
      axiosSetup(address, method, header, "", getResult);
      function getResult(data) {
        setLoadCities(data);
        setChoosenState(true);
      }
    }
    // dispatch(fetchCities(address, method, header, ''));
    // cities  =  useSelector( state => state.loadCities);
  };

  const changeHandler = (e) => {
    console.log("lwq", e.target.value);
    if (e.target.name === "national_code") {
      if (e.target.value.length > 10) {
        return;
      }
    }

    setChangeInfoUser({ ...changeInfoUser, [e.target.name]: e.target.value });
  };

  const validationShabaChangeHandler = (e) => {
    // setIsShabaValidate(shabaValidate(fixNumbersEnglish(e.target.value)));
    let num = e.target.value;
    let temp = +num % 97;
    console.log(num.length);
    console.log({ temp });
  };

  console.log({ isShabaValidate });

  const checkValidationNationalId = (e) => {
    if (e.target.value.length > 10) {
      return;
    }
    setIsValidationNationalId(
      isNationalIdValid(fixNumbersEnglish(e.target.value))
    );
  };

  const saveInfoUser = () => {
    let address = `/user`;
    let method = "post";

    console.log(convertToEn(date));
    console.log(fixNumbersEnglish(birthdateUser.gregorian + ""));
    console.log(fixNumbersEnglish(changeInfoUser.national_code));

    axios
      .post(
        config.api_url + "/user/3",
        {
          _method: "put",
          name: changeInfoUser.first_name,
          last_name: changeInfoUser.last_name,
          national_code: changeInfoUser.national_code,
          mobile: changeInfoUser.mobile,
          birthday_place: userAddress.city.length ? userAddress.city : null,
          refund_type: changeInfoUser.refund_type,
          gender: changeInfoUser.gender,
          birthday_place_id: changeInfoUser.birthday_place_id,
          birthday: fixNumbersEnglish(birthdateUser.gregorian + ""),
          picture: changeInfoUser.picture,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: "Bearer " + dataInCookies.tokenId,
          },
        }
      )
      .then((res) => setResUpdateInfoUser(res))
      .catch((err) => setCatchUpdateInfoUser(err));

    // const header = {
    //   'Content-Type': 'multipart/form-data',
    //   'Authorization':"Bearer " + tokenId,
    // }
    // axiosSetup(address, method, header, changeInfoUser, resResult, catchResult)
    // function resResult (data){
    //   setResSaveInfoUser(data)
    // }
    // function catchResult (data){
    //   setCatchSaveInfoUser(data)
    // }
  };

  useEffect(() => {
    if (resUpdateInfoUser.status === 200) {
      toast.success("اطلاعات با موفقیت بروزرسانی شد");
      cookies.set("dataUser", resUpdateInfoUser.data.user, { path: "/" });
      saveAddresses();
      setLoadingSpinner(false);
    } else if (catchUpdateInfoUser.name === "AxiosError") {
      if (catchUpdateInfoUser.code === "ERR_NETWORK") {
        toast.error("اتصال به اینترنت را بررسی کنید");
        setLoadingSpinner(false);
      } else {
        toast.error("بروز رسانی با مشکل مواجه شده است، لطفا دوباره تلاش کنید");
        setLoadingSpinner(false);
      }
    }
  }, [resUpdateInfoUser, catchUpdateInfoUser]);

  console.log({ resUpdateInfoUser });
  console.log({ catchUpdateInfoUser });

  const ChangeHnadlerAddress = (e) => {
    if (e.target.name === "postalCode") {
      if (e.target.value.length > 10) {
        return;
      }
    } else {
    }
    setUserAddress({ ...userAddress, [e.target.name]: e.target.value });
  };

  const saveAddresses = () => {
    if (
      userAddress.postalCode.length &&
      userAddress.city.length &&
      userAddress.address.length
    ) {
      const address = "/user/addresses";
      const method = "post";
      const header = {
        Accept: "application/json",
        Authorization: "Bearer " + dataInCookies.tokenId,
      };
      const sendData = {
        name: "اولین آدرس",
        postal_code: userAddress.postalCode,
        mobile: getInfoUserFromDB.mobile,
        description: userAddress.address,
        place_id: userAddress.city,
        default: "yes",
      };
      axiosSetup(address, method, header, sendData, getResult);
      function getResult(data) {
        console.log(data);
      }
    }

    //  axios.post(config.api_url + '/user/3',
    // {
    //   _method: 'put',
    //   name: changeInfoUser.first_name,
    //   last_name: changeInfoUser.last_name,
    //   national_code: fixNumbersEnglish(changeInfoUser.national_code),
    //   mobile: changeInfoUser.mobile,
    //   birthday_place: userAddress.city.length ? userAddress.city : null,
    //   refund_type: changeInfoUser.refund_type,
    //   gender: changeInfoUser.gender,
    //   birthday_place_id: changeInfoUser.birthday_place_id,
    //   birthday: fixNumbersEnglish(birthdateUser.gregorian+''),
    //   picture: changeInfoUser.picture
    // },
    // {
    //   headers: {
    //     'Content-Type': 'multipart/form-data',
    //     'Authorization':"Bearer " + tokenId,
    //   },
    // }).then(res => setResUpdateInfoUser(res))
    // .catch(err => setCatchUpdateInfoUser(err))
  };
  console.log({ changeInfoUser });
  console.log({ userAddress });
  console.log({ date });
  return (
    <div className=" max-w-screen-2xl bg-light md:px-12 pt-3 mx-auto" dir="rtl">
      <div>
        <ShowpathProfile />
      </div>
      <div className="flex flex-row">
        <div className="">
          <ProfileLayout
            profilePic={changeInfoUser ? changeInfoUser.picture : ""}
          />
        </div>
        <div className="mainbar-content w-[1100px] md:col-span-9 col-span-12 md:pb-20 md:mr-3 md:px-0 px-2">
          <div className="mainTitle mb-4 md:mt-0 mt-4">
            <h6 className="text-muted fw-bold border-b-2 border-blue-500 pb-1.5 w-36">
              پروفایل
            </h6>
          </div>
          <div className="profile-info-box">
            <div className="profile-info col-span-3 md:col-span-1">
              <label className="text-sm">
                <sup className="text-danger">*</sup> نام
              </label>
              <input
                type="text"
                name="first_name"
                value={changeInfoUser.first_name}
                placeholder="نام را وارد کنید"
                onChange={changeHandler}
                className="border border-slate-100 focus:outline-none focus:border-slate-400 focus:ring-1 focus:ring-sky-500 overflow-hidden rounded-sm py-2 px-2 text-sm"
              ></input>
            </div>
            <div className="profile-info col-span-3 md:col-span-1">
              <label className="">
                <sup className="text-danger">*</sup> نام خانوادگی
              </label>
              <input
                name="last_name"
                type="text"
                value={changeInfoUser.last_name}
                placeholder="نام خانوادگی را وارد کنید"
                onChange={changeHandler}
                className="border border-slate-100 focus:outline-none focus:border-slate-400 focus:ring-1 focus:ring-sky-500 overflow-hidden rounded-sm py-2 px-2 text-sm"
              ></input>
            </div>
            <div className="profile-info col-span-3 md:col-span-1">
              <label>
                <sup className="text-danger">*</sup> موبایل
              </label>
              <input
                readOnly
                type="text"
                value={fixNumbers(changeInfoUser.mobile)}
                placeholder="موبایل خود را وارد کنید"
                className="border border-slate-100 focus:outline-none focus:border-slate-400 focus:ring-1 focus:ring-sky-500 overflow-hidden rounded-sm py-2 px-2 text-sm"
              ></input>
            </div>
            <div className="profile-info col-span-3 md:col-span-1">
              <div className="flex justify-start items-end">
                <lable className="text-sm">
                  <sup className="text-danger">*</sup> کدملی
                </lable>
                <p
                  hidden={isValidationNationalId}
                  className="text-[#9a1515] text-[12px] mr-[30px]"
                >
                  کد ملی را صحیح وارد کنید
                </p>
              </div>
              <input
                name="national_code"
                type="number"
                value={changeInfoUser.national_code}
                placeholder="کد ملی خود را وارد کنید"
                // onChange={checkValidationNationalId}
                onChange={(e) => {
                  changeHandler(e);
                  checkValidationNationalId(e);
                }}
                className={`border border-slate-100 focus:outline-none focus:border-slate-400 focus:ring-1 focus:ring-sky-500 overflow-hidden rounded-sm py-2 px-2 text-sm' + ${
                  isValidationNationalId === false
                    ? "border-2 border-[#9a1515] "
                    : ""
                }`}
              />
            </div>
            <div className="profile-info col-span-3 md:col-span-1">
              <lable className="text-sm">
                <sup className="text-danger">*</sup> تاریخ تولد
              </lable>
              {/* <input
              name='birthday'
              type="text"
              value={fixNumbers(changeInfoUser.birthday)}
              placeholder="۱۳۷۳-۰۳-۲۵"
              /> */}
              {/* <DtPicker
                className="border text-center IranSanse border-slate-100 focus:outline-none focus:border-slate-400 focus:ring-1 focus:ring-sky-500 overflow-hidden rounded-sm py-2 px-2 text-sm"
                onChange={setDate}
                local="fa"
                /> */}
              <div className="border-2">
                {/* <SiteCalender getBirthdate={true} valueDate={getDateFromCalenderFun}/> */}
                <DatePicker
                  style={{
                    outline: "none",
                    height: "40px",
                    border: "none",
                    fontSize: "16px",
                    padding: "3px 10px",
                    width: "315px",
                  }}
                  // className="rmdp-mobile"
                  // mobileLabels={{
                  //   OK: "Accept",
                  //   CANCEL: "Close",
                  // }}
                  onChange={convert}
                  // minDate={new DateObject({ calendar: persian }).subtract(-13, "years")}
                  maxDate={new DateObject({ calendar: persian }).add(
                    -13,
                    "years"
                  )}
                  value={
                    birthdateUser.date
                      ? birthdateUser.date
                      : changeInfoUser.birthday
                  }
                  calendar={persian}
                  locale={persian_fa}
                  calendarPosition="bottom-right"
                  plugins={[<Footer position="bottom" />]}
                />
              </div>
            </div>

            <div className="profile-info col-span-3 md:col-span-1">
              <lable htmlFor="male" className="text-sm">
                <sup className="text-danger">*</sup> جنسیت
              </lable>
              <div className=" border-2 py-[10px] px-2">
                <input
                  id="male"
                  checked={changeInfoUser.gender === "male" ? true : false}
                  className="py-1 px-2"
                  type="radio"
                  name="sex"
                  value="male"
                  label="مرد"
                  onClick={(e) =>
                    setChangeInfoUser({
                      ...changeInfoUser,
                      gender: e.target.value,
                    })
                  }
                ></input>
                <label htmlFor="male" className="pr-2 text-slate-400">
                  مرد
                </label>
                <input
                  className="mr-3"
                  checked={changeInfoUser.gender === "female" ? true : false}
                  id="female"
                  type="radio"
                  name="sex"
                  value="female"
                  onClick={(e) =>
                    setChangeInfoUser({
                      ...changeInfoUser,
                      gender: e.target.value,
                    })
                  }
                  label=" زن "
                ></input>
                <label htmlFor="female" className="text-slate-400 mr-2">
                  زن
                </label>
              </div>
            </div>
            <div className="profile-info col-span-3 md:col-span-2 mt-2">
              <div className="flex justify-start items-end">
                <lable className="text-xs font-semibold mb-1">
                  <sup className="text-danger">*</sup> روش بازگرداندن پول
                </lable>
                {/* <p hidden={isShabaValidate} className="text-[#9a1515] text-[12px] mr-[30px]">شماره شبا بانکی را صحیح وارد کنید</p> */}
              </div>
              <div className="input-group w-100 flex items-center">
                <select
                  id="refundType"
                  className="bg-white border border-slate-100 focus:outline-none focus:border-slate-400 focus:ring-1 focus:ring-sky-500 overflow-hidden rounded-sm py-2 px-2 text-sm text-slate-400"
                  onChange={changeHandler}
                  value={changeInfoUser.refund_type}
                  name="refund_type"
                >
                  <option selected> انتخاب کنید</option>
                  <option value="sheba_number">شبا</option>
                  <option value="account_number">حساب </option>
                  <option value="card_number">کارت</option>
                </select>

                <input
                  type="text"
                  name="typeReturnMoney"
                  value={
                    changeInfoUser.refund_type === "sheba_number"
                      ? fixNumbers(changeInfoUser.typeReturnMoney.sheba_number)
                      : changeInfoUser.refund_type === "account_number"
                      ? fixNumbers(
                          changeInfoUser.typeReturnMoney.account_number
                        )
                      : changeInfoUser.refund_type === "card_number"
                      ? fixNumbers(changeInfoUser.typeReturnMoney.card_number)
                      : ""
                  }
                  className="form-control text-left rounded-sm border border-slate-100"
                  aria-label="Text input with dropdown button"
                  onChange={(e) => {
                    changeHandler(e);
                    validationShabaChangeHandler(e);
                  }}
                />
                {changeInfoUser.refund_type === "sheba_number" ? (
                  <p className="p-[7px] border-y-2 border-l-2 border-slate-300 bg-slate-100">
                    IR
                  </p>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="profile-info col-span-3 md:col-span-1 mt-[8px]">
              <lable className="text-sm">
                <sup className="text-danger">*</sup> افزودن عکس پروفایل
              </lable>
              <div className="w-full border border-slate-100 focus:outline-none focus:border-slate-400 focus:ring-1 focus:ring-sky-500 overflow-hidden rounded-sm py-[12px] px-2 text-sm text-black">
                <label
                  className="text-slate-400 flex items-center justify-center cursor-pointer hover:text-slate-400 text-xs"
                  htmlFor="upload-pic-main"
                >
                  افزودن عکس پروفایل
                </label>
                <input
                  hidden
                  onChange={(event) => {
                    if (event.target.files && event.target.files[0]) {
                      setChangeInfoUser({
                        ...changeInfoUser,
                        picture: event.target.files[0],
                      });

                      console.log(event.target.files);

                      // var formData = new FormData();
                      // formData.append("image", event.target.files[0]);

                      // axiosSetup("asd", "post", formData, {
                      //   'Content-Type': 'multipart/form-data'
                      // })
                    }
                  }}
                  id="upload-pic-main"
                  type="file"
                  multiple
                />
                {/* <Link href="/">
                <a className="text-slate-400 flex items-center justify-center hover:text-slate-400 text-xs">
                  
                </a>
              </Link> */}
              </div>
            </div>
            <div className="profile-info col-span-3 mt-2">
              <lable className="text-xs font-semibold">آدرس</lable>
            </div>
            <div className="profile-info col-span-3 md:col-span-1">
              <lable className="text-sm">
                <sup className="text-danger">*</sup> استان
              </lable>
              <select
                id=""
                onChange={selectStateChangeHandler}
                className="bg-white border border-slate-100 focus:outline-none focus:border-slate-400 focus:ring-1 focus:ring-sky-500 overflow-hidden rounded-sm py-1.5 px-2 text-sm text-slate-400"
              >
                <option selected value="choosed">
                  انتخاب کنید
                </option>
                {!loadStates ? (
                  <option value="reloading">داده در حال بارگذاری ...</option>
                ) : loadStates.status !== 200 ? (
                  <option className="flex text-center" value="reload">
                    <i className="bi bi-arrow-clockwise bg-black text-[#982020]">
                      خطا در بارگذاری داده (دوباره تلاش کنید)
                    </i>
                  </option>
                ) : (
                  loadStates.data &&
                  loadStates.data.place.map((state) => (
                    <option key={state.id} value={state.id}>
                      {state.name}
                    </option>
                  ))
                )}
              </select>
            </div>
            <div className="profile-info col-span-3 md:col-span-1">
              <lable className="text-sm">
                <sup className="text-danger">*</sup> شهر
              </lable>
              <select
                id=""
                onChange={(e) => {
                  setUserAddress({ ...userAddress, city: +e.target.value });
                  setChangeInfoUser({
                    ...changeInfoUser,
                    birthday_place_id: +e.target.value,
                  });
                }}
                className="bg-white border border-slate-100 focus:outline-none focus:border-slate-400 focus:ring-1 focus:ring-sky-500 overflow-hidden rounded-sm py-1.5 px-2 text-sm text-slate-400"
              >
                {loadCities.data && (
                  <option selected value="shomareShabe">
                    انتخاب کنید
                  </option>
                )}
                {!choosenState ? (
                  <option value="reloading">استان را انتخاب کنید</option>
                ) : !loadCities ? (
                  <option value="reloading">داده در حال بارگذاری ...</option>
                ) : loadCities.status !== 200 ? (
                  <option className="flex text-center" value="reload">
                    <i className="bi bi-arrow-clockwise bg-black text-[#982020]">
                      خطا در بارگذاری داده (دوباره تلاش کنید)
                    </i>
                  </option>
                ) : (
                  loadCities.data &&
                  loadCities.data.place.map((city) => (
                    <option key={city.id} value={city.id}>
                      {city.name}
                    </option>
                  ))
                )}
              </select>
            </div>
            <div className="profile-info col-span-3 md:col-span-1">
              <lable className="text-sm">
                <sup className="text-danger">*</sup> کدپستی
              </lable>
              <input
                onChange={ChangeHnadlerAddress}
                name="postalCode"
                type="number"
                value={userAddress.postalCode}
                placeholder="۱۳۶۱۶۱۳۲۴۵"
                className="border border-slate-100 focus:outline-none focus:border-slate-400 focus:ring-1 focus:ring-sky-500 overflow-hidden rounded-sm py-2 px-2 text-sm text-black"
              />
            </div>

            <div className="profile-info col-span-3 md:col-span-3">
              <input
                onChange={ChangeHnadlerAddress}
                type="text"
                name="address"
                placeholder="آدرس"
                value={userAddress.address}
                className="border border-slate-100 focus:outline-none focus:border-slate-400 focus:ring-1 focus:ring-sky-500 overflow-hidden rounded-sm py-2 px-2 text-sm text-black"
              />
            </div>
            {/* <button onClick={saveAddresses}>
            ثبت آدرس
          </button> */}

            <div className="profile-info col-span-3 md:col-span-3">
              <div className="w-full align-middle text-center h-70 border border-slate-100 rounded-sm">
                <Image src={picMap} width="1000px" height="400px" />
              </div>
            </div>
            <div className="w-full col-span-3 flex justify-end space-x-2 rtl:space-x-reverse">
              {/* <div className="profile-seen-btn col-span-3 md:col-span-3 flex justify-end items-end mt-2">
                <button className="px-4 py-2 bg-blue-500 hover:bg-blue-400 rounded-md">
                  <span className="text-white text-xs">نمایش آدر س ها</span>
                </button>
            </div> */}
              <div className="profile-save-btn col-span-3 md:col-span-3 flex justify-end items-end mt-2">
                <button
                  onClick={(e) => {
                    saveInfoUser(e);
                    setLoadingSpinner(true);
                  }}
                  className="px-4 py-2 bg-blue-500 hover:bg-blue-400 rounded-md"
                >
                  {loadingSpinner === true ? (
                    <div
                      className="spinner-border text-xs px-2 py-1 text-white"
                      role="status"
                    >
                      <span className="sr-only">Loading...</span>
                    </div>
                  ) : (
                    <span className="text-white text-xs">ثبت</span>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default info;
