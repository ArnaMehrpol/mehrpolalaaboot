import React, { useEffect, useState } from 'react'
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import Cookies from "universal-cookie";
import axios from 'axios';


const MarketingInfoSide = () => {
  const cookies = new Cookies();

  const url ="https://dfgsdfgsdfgj32gsdg.mehrpol.com/";
  const router = useRouter();
  const [allBusiness, setAllBusiness] = useState([]);
  const [business_id, setBusiness_id] = useState(null);
  const [name, setName] = useState("");
  const [last_name, setLast_name] = useState("");
  const [chooseBusiness, setChooseBusiness] = useState(false)

  useEffect(()=>{
    axios
      .get(url + "api/user/businesses", {
        headers: {
          Authorization: `Bearer ${cookies.get("token")}`,
        },
      })
      .then((response) => {
        console.log({response})
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
  },[])

  useEffect(()=>{
    if(chooseBusiness === true){
      cookies.set('b-Id', business_id , { path: '/' });
      setChooseBusiness(false)
    }
  },[chooseBusiness])

  const settingBusinessId = (res) => {
    axios
      .get(url + "api/user/businesses", {
        headers: {
          Authorization: `Bearer ${cookies.get("token")}`,
        },
      })
      .then((response) => {
        console.log({response})
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

  const cookieSetter = (e) => {
    if (business_id == null) {
      toast.error("اول کسب و کار خود را انتخاب نماببد!");
    } else {
      cookies.set("b-Id", business_id, { path: "/" });
      toast.success("کسب و کار ست شد");
      console.log(business_id);
    }
  };

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

  return (
    <div className=' bg-slate-100'>
      <div className="business-panel-sidbar w-[350px] lg:col-span-3 col-span-12 my-8">
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
                  <div className="business-name flex flex-col mr-3">
                  <select
                className="form-select font11"
                aria-label="Default select example"
                onChange={(e) => {
                  if(e.target.value !== 'chosen'){
                    setChooseBusiness(true)
                    setBusiness_id(e.target.value);
                  }
                }}
              >
                <option selected value='chosen'>کسب و کار خود را انتخاب نمایید</option>
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
              {/* <small className="IranSanse mb-1">
                پس از انتخاب کسب و کار دکمه زیر را بزنید
              </small> */}

              {/* <button
                onClick={cookieSetter}
                className="btn btn-outline-primary"
              >
                ست
              </button> */}
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
                  id="navbarSupportedContent">
                  <div className="business-navbar-nav navbar-nav">
                    <div className="business-nav-item nav-item bg-blue-500 rounded-md px-4 mb-3">
                      <div className="w-full h-full nav-item-flex flex items-center">
                        <i className="bi bi-person font-semibold text-sm text-white"></i>
                        
                          <a
                            className="business-nav-link nav-link text-xs text-white mr-1"
                            aria-current="page"
                          >
                            اطلاعات کسب و کار
                          </a>
                        
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
                        <Link href="/marketing/info/generalinfo">
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
                    <div className="business-nav-item-active nav-item rounded-md flex items-center">
                      <span className="px-2 py-2 bg-blue-500 rounded-md relative mt-5">
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
                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                          />
                        </svg>
                      </span>
                      <div className="w-full h-full flex flex-col mt-16 pr-3">
                        <Link href="/marketing/info/marketingDetails">
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
                    <div className="business-nav-item-active nav-item rounded-md flex items-center">
                      <span className="px-2 py-2 bg-blue-500 rounded-md relative mt-5">
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
                            d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
                          />
                        </svg>
                      </span>
                      <div className="w-full h-full flex flex-col pr-3 mt-16">
                        <Link href="/marketing/info/aboutUs">
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
                        <Link href="/marketing/info/management">
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
                        <Link href="/marketing/info/agreement">
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
                        <Link href="/marketing/info/social">
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
                        <Link href="/marketing/dashboard">
                          <a>
                            <p className="text-xs font-semibold">
                              بازگشت به منوی کسب و کار
                            </p>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </div>
    </div>
  )
}

export default MarketingInfoSide
