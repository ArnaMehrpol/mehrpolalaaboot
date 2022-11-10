import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Cookies from "universal-cookie";
import { useRouter } from "next/router";
import axios from "axios";
import { toast } from "react-toastify";
import Modal from "../../../components/Modal";

const management = () => {
  const [url, seturl] = useState("https://dfgsdfgsdfgj32gsdg.mehrpol.com/");
  const cookies = new Cookies();
  const [managerName, setManagerName] = useState("");
  const [managerLastname, setManagerLastname] = useState("");
  const [managerMobile, setManagerMobile] = useState("");
  const [managerPosition, setManagerPosition] = useState("");
  const [managerPic, setManagerPic] = useState("");
  const [token, setToken] = useState("");
  const [ok, setOk] = useState("");
  const [manager_id, setManager_id] = useState(0);
  const [managerAllInfos, setManagerAllInfos] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [count, setCount] = useState(0);

  const router = useRouter();

  const managerPicHandler = (file) => {
    setManagerPic(file[0]);
  };

  const handleSubmitManagerInfo = (e) => {
    e.preventDefault();

    axios
      .post(
        url + "api/businesses/" + cookies.get("b-Id") + "/managers",
        {
          first_name: managerName,
          last_name: managerLastname,
          role: managerPosition,
          mobile: managerMobile,
          picture: managerPic,
        },
        {
          headers: {
            Authorization: `Bearer ${cookies.get("token")}`,
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then(function (response) {
        const data = response.data;
        // setBusiness_id(data.business.id);
        gettingManagerInfoes();
        toast.success("اطلاعات با موفقیت ثبت شد!");
      })
      .catch((error) => {
        toast.error("ثبت اطلاعات با مشکل مواجه شد!");
        console.log(error.message);
      });
  };
  //Gettin Manager Infos
  const gettingManagerInfoes = () => {
    axios
      .get(url + "api/businesses/" + cookies.get("b-Id") + "/managers", {
        headers: {
          Authorization: `Bearer ${cookies.get("token")}`,
        },
      })
      .then(function (response) {
        var AllDatas = response.data.data;
        console.log(AllDatas);

        setManagerAllInfos(AllDatas);
      })
      .catch(function (error) {
        console.log("not ok");
        console.log(token);
      });
  };
  // ****************************************
  const modalHandler = () => {
    setShowModal(!showModal);
    console.log(manager_id);
  };
  // *****************************************
  const deleteManager = (e) => {
    e.preventDefault();
    axios
      .post(
        url +
          "api/businesses/" +
          cookies.get("b-Id") +
          "/managers/" +
          manager_id,
        {
          _method: "DELETE",
        },
        {
          headers: {
            Authorization: `Bearer ${cookies.get("token")}`,
          },
        }
      )
      .then(function (response) {
        modalHandler();
        gettingManagerInfoes();
        toast.success("مشخصات مدیر مورد نظر با موفقیت پاک شد!");
      })
      .catch(function (err) {
        toast.error("عملیات انجام نشد. لطفا مجددا سعی فرمایید!");
        console.log(err.message);
      });
  };

  useEffect(() => {
    setToken(cookies.get("token"));
    gettingManagerInfoes();
  }, []);

  return (
    <div className="zIndex">
      <div className="business-panel-container zIndex">
        <div className="business-panel-cols grid grid-cols-12 bg-slate-100 ">
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
                  <div className="business-name flex flex-col mr-3">
                    <div className="dropdown">
                      <a
                        className="dropdown-toggle"
                        href="#"
                        id="dropdownMenuLink"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      ></a>

                      <ul
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuLink"
                      >
                        <li className="border-b border-slate-200">
                          <Link href="/">
                            <a className="dropdown-item flex" href="#">
                              <Image
                                src="/../public/assets/img/logos/3.png"
                                width="35px"
                                height="35px"
                                className="rounded-full flex justify-center items-center"
                              ></Image>
                              <div className="flex flex-col mr-3">
                                <p className="text-xs font-semibold">
                                  فروشگاه رضا
                                </p>
                                <small className="text-xs">امیر باقری</small>
                              </div>
                            </a>
                          </Link>
                        </li>
                        <li className="border-b border-slate-200">
                          <Link href="/">
                            <a className="dropdown-item flex" href="#">
                              <Image
                                src="/../public/assets/img/logos/1.png"
                                width="35px"
                                height="35px"
                                className="rounded-full flex justify-center items-center"
                              ></Image>
                              <div className="flex flex-col mr-3">
                                <p className="text-xs font-semibold">
                                  فروشگاه رضا
                                </p>
                                <small className="text-xs">امیر باقری</small>
                              </div>
                            </a>
                          </Link>
                        </li>
                        <li className="border-b border-slate-200">
                          <Link href="/">
                            <a className="dropdown-item flex" href="#">
                              <Image
                                src="/../public/assets/img/logos/3.png"
                                width="35px"
                                height="35px"
                                className="rounded-full flex justify-center items-center"
                              ></Image>
                              <div className="flex flex-col mr-3">
                                <p className="text-xs font-semibold">
                                  فروشگاه رضا
                                </p>
                                <small className="text-xs">امیر باقری</small>
                              </div>
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <p className="text-xs font-semibold py-0.5">
                      فروشگاه شیک نو
                    </p>
                    <small className="text-xs">آرش محمدی </small>
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
                          strokeWidth={1}
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
                          strokeWidth={1}
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
          <div className="business-panel-mainbar lg:col-span-9 col-span-12 shadow-lg shadow-slate-100 relative overflow-x-hidden">
            <header className="header-container max-w-screen-xl px-12 mx-auto bg-white h-[60px] relative lg:z-[99999999]">
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
            <section className="management-container max-w-screen-md mx-auto flex justify-center items-center relative z-[9999]">
              <div className="management-form bg-white overflow-hidden roundde-lg shadow-md px-5 mt-[2rem]">
                <div className="management-title flex flex-col my-4">
                  <h5 className="text-base font-semibold">مدیران</h5>
                  <small className="text-slate-600 text-xs mt-0.5">
                    در این قسمت اطلاعات مربوط به مدیران را وارد کنید.
                  </small>
                </div>
                <div className="grid grid-cols-6 gap-3">
                  <div className="lg:col-span-4 col-span-6">
                    <div className="col-span-12">
                      <div className="grid grid-cols-6 gap-2">
                        <div className="col-span-3">
                          <label className="text-sm text-slate-600 px-2 mb-2">
                            نام
                          </label>
                          <div className="all-input-group input-group">
                            <input
                              onChange={(e) => setManagerName(e.target.value)}
                              type="text"
                              className="form-control"
                              placeholder="نام"
                              id="managerName"
                            />
                          </div>
                        </div>
                        <div className="col-span-3">
                          <label className="text-sm text-slate-600 px-2 mb-2">
                            نام خانوادگی
                          </label>
                          <div className="all-input-group input-group">
                            <input
                              onChange={(e) =>
                                setManagerLastname(e.target.value)
                              }
                              type="text"
                              className="form-control"
                              placeholder="نام خانوادگی"
                              id="managerLastname"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-6 gap-2 mt-[1.25rem]">
                        <div className="col-span-3">
                          <label className="text-sm text-slate-600 px-2 mb-2">
                            شماره همراه
                          </label>
                          <div className="all-input-group input-group">
                            <input
                              onChange={(e) => setManagerMobile(e.target.value)}
                              type="text"
                              className="form-control"
                              placeholder="شماره همراه"
                              id="managerMobile"
                            />
                          </div>
                        </div>
                        <div className="col-span-3">
                          <label className="text-sm text-slate-600 px-2 mb-2">
                            سمت
                          </label>
                          <select
                            onChange={(e) => setManagerPosition(e.target.value)}
                            className="form-select form-select-text-style py-[0.575rem]"
                            aria-label="Default select example"
                            id="managerPosition"
                          >
                            <option selected>انتخاب کنید</option>
                            <option
                              className="text-slate-400 text-sm"
                              value="مدیر عامل"
                            >
                              مدیر عامل
                            </option>
                            <option
                              className="text-slate-400 text-sm"
                              value="رئیس هیات مدیره"
                            >
                              رئیس هیات مدیره
                            </option>
                            <option
                              className="text-slate-400 text-sm"
                              value="تایب رئیس هیات مدیره"
                            >
                              تایب رئیس هیات مدیره
                            </option>
                            <option
                              className="text-slate-400 text-sm"
                              value="معاون"
                            >
                              معاون
                            </option>
                            <option
                              className="text-slate-400 text-sm"
                              value="مدیر"
                            >
                              مدیر
                            </option>
                            <option
                              className="text-slate-400 text-sm"
                              value="مسئول"
                            >
                              مسئول
                            </option>
                            <option
                              className="text-slate-400 text-sm"
                              value="سایر"
                            >
                              سایر
                            </option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="lg:col-span-2 col-span-6">
                    <label className="text-sm text-slate-600 pr-3 mb-2">
                      تصویر
                    </label>
                    <input
                      onChange={(e) => managerPicHandler(e.target.value)}
                      type="file"
                      name="managerPic"
                      id="managerPic"
                      placeholder="عکس را انتخاب نمایید"
                    />
                  </div>
                </div>
                <div className="save-btn flex justify-end items-end mt-4">
                  <button
                    id="btnGeneralInfo"
                    name="btnGeneralInfo"
                    onClick={handleSubmitManagerInfo}
                    className="text-white myButton text-md px-2 py-1 bg-blue-500 hover:bg-blue-400 rounded-md my-6"
                    disabled={
                      managerName == "" ||
                      managerLastname == "" ||
                      managerMobile == "" ||
                      managerPosition == "" ||
                      managerPic == ""
                        ? true
                        : false
                    }
                  >
                    ثبت اطلاعات
                  </button>
                </div>
                <div className="management-list-tabele-content">
                  <div className="management-list-title flex flex-col mb-4">
                    <h5 className="text-base font-semibold">لیست مدیران</h5>
                  </div>
                  <table className="management-list-tabele w-full h-full table table-bordered rounded-md mb-8">
                    <thead>
                      <tr className=" bg-blue-200 text-center text-slate-600 font-semibold text-xs">
                        <th scope="col">ردیف</th>
                        <th scope="col">نام</th>
                        <th scope="col">نام خانوادگی</th>
                        <th scope="col">سمت</th>
                        <th scope="col">شماره همراه</th>
                        <th scope="col">تصویر</th>
                        <th scope="col">عملیات</th>
                      </tr>
                    </thead>
                    <tbody className="">
                      {managerAllInfos.map(function (managerAllInfo) {
                        return (
                          <tr className="text-center">
                            <th scope="row" className="text-slate-600">
                              {(count = count + 1)}
                            </th>
                            <td>{managerAllInfo.first_name}</td>
                            <td>{managerAllInfo.last_name}</td>
                            <td>{managerAllInfo.role}</td>
                            <td>{managerAllInfo.mobile}</td>
                            <td
                              value={() => {
                                setManager_id(managerAllInfo.id);
                              }}
                              id="manager_id"
                            >
                              {managerAllInfo.picture}
                            </td>
                            <td className="w-full h-full flex justify-center items-center">
                              {/* <Link href="/">
                                <a className="border-l border-slate-200">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-5 h-5 ml-3 text-slate-400 "
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                                    />
                                  </svg>
                                </a>
                              </Link> */}
                              <button
                                type="button"
                                onClick={(e) => {
                                  setManager_id(managerAllInfo.id);
                                  console.log(managerAllInfo.id);
                                  modalHandler();
                                }}
                              >
                                <i class="bi bi-trash text-danger"></i>
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                  {/* Delete Modal  */}
                  {showModal ? (
                    <Modal delete={deleteManager} modalHandler={modalHandler} />
                  ) : null}
                  {/* ********************************************************** */}

                  <div className="next-btn w-full h-full border-t-2 border-dotted border-slate-100 flex justify-end items-center">
                    <button
                      id="btnGeneralInfo"
                      name="btnGeneralInfo"
                      onClick={() => {
                        router.push("/aa/user-info/agreement");
                      }}
                      className="text-white myButton text-md px-2 py-1 bg-blue-500 hover:bg-blue-400 rounded-md my-6"
                    >
                      مرحله بعد
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default management;
