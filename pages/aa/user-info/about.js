import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Cookies from "universal-cookie";
import { useRouter } from "next/router";
import axios from "axios";
import { toast } from "react-toastify";

const about = () => {
  const [url, seturl] = useState("https://dfgsdfgsdfgj32gsdg.mehrpol.com/");
  const router = useRouter();
  const cookies = new Cookies();
  const [ok, setOk] = useState("");

  const [business_id, setBusiness_id] = useState(0);

  const [introduce, setIntroduce] = useState("");
  const [managementMessage, setManagementMessage] = useState("");
  const [vision, setVision] = useState("");
  const [mission, setMission] = useState("");
  const [accessories, setAccessories] = useState("");
  const [token, setToken] = useState("");

  const cookieSetter = () => {
    setBusiness_id(cookies.get("b-Id"));
  };

  useEffect(() => {
    setToken(cookies.get("token"));
    gettingAbouteInfos();
  }, []);
  const handleSubmitAbout = (e) => {
    e.preventDefault();
    axios
      .post(
        url + "api/businesses/" + cookies.get("b-Id"),
        {
          _method: "PUT",
          about: introduce,
          message_from_management: managementMessage,
          vision: vision,
          mission: mission,
          accessories: accessories,
        },
        {
          headers: {
            Authorization: `Bearer ${cookies.get("token")}`,
          },
        }
      )
      .then(function (response) {
        const data = response.data;
        // router.push("./management");
        toast.success("اطلاعات با موفقیت ثبت شد!");
      })
      .catch((error) => {
        toast.error("عملیات انجام نشد. لطفا دوباره سعی فرمایید");
        console.log(error.message);
      });
  };

  //Gettin AbouteInfos
  const gettingAbouteInfos = () => {
    axios
      .get(url + "api/businesses/" + cookies.get("b-Id"), {
        headers: {
          Authorization: `Bearer ${cookies.get("token")}`,
        },
      })
      .then(function (response) {
        const data = response.data;
        console.log(data);
        setOk("ok");
        setIntroduce(data.about);
        setManagementMessage(data.message_from_management);
        setVision(data.vision);
        setMission(data.mission);
        setAccessories(data.accessories);
      })
      .catch(function (error) {
        console.log("not ok");
        console.log(token);
      });
  };
  return (
    <div>
      <div className="business-panel-container">
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
          <div className="business-panel-mainbar lg:col-span-9 col-span-12 shadow-lg shadow-slate-100 relative">
            <header className="header-container max-w-screen-xl px-12 mx-auto bg-white h-[60px] relative lg:z-[9999999]">
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
            <section className="about-container max-w-screen-md mx-auto lg:px-0 px-6 relative z-[9999]">
              <div className="about-form bg-white overflow-hidden roundde-lg shadow-md px-5 mt-[4.5rem]">
                <div className="about-title flex flex-col my-4">
                  <h5 className="text-base font-semibold">درباره ما</h5>
                  <small className="text-slate-500 text-xs mt-0.5"></small>
                </div>
                <div className="about-list-tabele-content">
                  <div className="about-list-title flex flex-col mb-4">
                    <h5 className="text-base font-semibold">
                      معرفی کسب و کار (حداقل 400 کاراکتر و حداکثر 800 کاراکتر)
                    </h5>
                    <textarea
                      onChange={(e) => setIntroduce(e.target.value)}
                      placeholder={
                        ok != " " && introduce != ""
                          ? introduce
                          : "معرفی کسب و کار"
                      }
                      className="myBg"
                      name="introduce"
                      id=""
                      cols="30"
                      rows="10"
                    ></textarea>
                  </div>

                  <div className="about-list-title flex flex-col mb-4">
                    <h5 className="text-base font-semibold">
                      پیام مدیریت (حداقل 200 کاراکتر و حداکثر 600 کاراکتر)
                    </h5>
                    <textarea
                      onChange={(e) => setManagementMessage(e.target.value)}
                      placeholder={
                        ok != " " && managementMessage != ""
                          ? managementMessage
                          : "پیام مدیریت"
                      }
                      className="myBg"
                      name="introduce"
                      id=""
                      cols="30"
                      rows="10"
                    ></textarea>
                  </div>

                  <div className="about-list-title flex flex-col mb-4">
                    <h5 className="text-base font-semibold">
                      چشم انداز (حداقل 100 کاراکتر و حداکثر 600 کاراکتر)
                    </h5>
                    <textarea
                      onChange={(e) => setVision(e.target.value)}
                      placeholder={
                        ok != "" && vision != "" ? vision : "چشم انداز"
                      }
                      className="myBg"
                      name="introduce"
                      id=""
                      cols="30"
                      rows="10"
                    ></textarea>
                  </div>

                  <div className="about-list-title flex flex-col mb-4">
                    <h5 className="text-base font-semibold">
                      ماموریت (حداقل 100 کاراکتر و حداکثر 800 کاراکتر)
                    </h5>
                    <textarea
                      onChange={(e) => {
                        setMission(e.target.value);
                      }}
                      placeholder={
                        ok != "" && mission != "" ? mission : "ماموریت"
                      }
                      className="myBg"
                      name="introduce"
                      id=""
                      cols="30"
                      rows="10"
                    ></textarea>
                  </div>

                  <div className="about-list-title flex flex-col mb-4">
                    <h5 className="text-base font-semibold">لوازم و تجهیزات</h5>
                    <textarea
                      onChange={(e) => setAccessories(e.target.value)}
                      placeholder={
                        ok != "" && accessories != ""
                          ? accessories
                          : "لوازم و تجهیزات"
                      }
                      className="myBg"
                      name="introduce"
                      id=""
                      cols="30"
                      rows="10"
                    ></textarea>
                  </div>

                  <div className="next-btn mb-2 w-full h-full border-t-2 border-dotted border-slate-100 flex justify-end items-center">
                    <button
                      onClick={handleSubmitAbout}
                      className="text-white  font-semibold btn btn-primary"
                    >
                      ثبت و مرحله بعد
                    </button>
                    <button
                      onClick={() => {
                        router.push("/aa/user-info/management");
                      }}
                      className="text-white me-2 font-semibold btn btn-primary"
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

export default about;
