import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Cookies from "universal-cookie";
import axios from "axios";
import { toast } from "react-toastify";

import { HandleSubmitSocial } from "./social";
import Modal from "../../../components/Modal";

const cookies = new Cookies();

const social = () => {
  const [url, seturl] = useState("https://dfgsdfgsdfgj32gsdg.mehrpol.com/");

  const [whatsappLink, setWhatsappLink] = useState("");

  const [instagramLink, setInstagramLink] = useState("");
  const [linkedinLink, setLinkedinLink] = useState("");
  const [telegramId, setTelegramId] = useState("");
  const [telegramLink, setTelegramLink] = useState("");
  const [facebook, setFacebook] = useState("");
  const [aparat, setAparat] = useState("");
  const [youtube, setYoutube] = useState("");
  const [twitter, setTwitter] = useState("");
  const [skype, setSkype] = useState("");
  const [link, setLink] = useState("");
  const [allSocials, setAllSocials] = useState([]);
  const [socialId, setSocialId] = useState(null);

  const [newNetwork, setNewNetwork] = useState("");
  const [showModal, setShowModal] = useState(false);

  const [type, setType] = useState("");
  const [token, setToken] = useState("");

  const router = useRouter();

  //Social Networks

  const handelNewNetwork = (e) => {
    setType(newNetwork);
    console.log(newNetwork);
  };

  //submit
  const handleSubmitSocial = (e) => {
    e.preventDefault();
    setType("");
    axios
      .post(
        url + "api/businesses/" + cookies.get("b-Id") + "/social-networks",
        {
          link: link,
          type: type,
        },
        {
          headers: {
            Authorization: `Bearer ${cookies.get("token")}`,
          },
        }
      )
      .then(function (response) {
        gettingAllSocial();
        toast.success("اطلاعات با موفقیت ثبت شد!");
      })
      .catch((error) => {
        toast.error("ثبت اطلاعات با مشکل مواجه شد. لطفا دوباره سعی نمایید!");
        console.log(error.message);
      });
  };
  //************************** */
  //Getting All Social Network

  const gettingAllSocial = () => {
    axios
      .get(url + "api/businesses/" + cookies.get("b-Id") + "/social-networks", {
        headers: {
          Authorization: `Bearer ${cookies.get("token")}`,
        },
      })
      .then(function (response) {
        setAllSocials(response.data.data);
        console.log("داده ها دریافت شدند");
      })
      .catch(function (error) {
        console.log("مشکلی هست");
        console.log(error.messgae);
      });
  };
  //Delete Social Network
  // ****************************************
  const modalHandler = () => {
    setShowModal(!showModal);
    console.log(socialId);
  };
  // *****************************************
  const deleteSocial = (e) => {
    e.preventDefault();
    axios
      .post(
        url +
          "api/businesses/" +
          cookies.get("b-Id") +
          "/social-networks/" +
          socialId,
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
        gettingAllSocial();
        toast.success("مشخصات شبکه اجتماعی مورد نظر با موفقیت پاک شد!");
      })
      .catch(function (err) {
        toast.error("عملیات انجام نشد. لطفا مجددا سعی فرمایید!");
        console.log(err.message);
      });
  };
  //************************** */

  useEffect(() => {
    setToken(cookies.get("token"));
    gettingAllSocial();
  }, []);

  return (
    <div className="zIndex">
      <div classNameName="business-panel-container">
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
                    <div className="business-nav-item nav-item bg-blue-500 rounded-md px-4">
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
                      <div className="w-full h-full flex flex-col mt-5 pr-3">
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
                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                          />
                        </svg>
                      </span>
                      <div className="w-full h-full flex flex-col mt-5 pr-3">
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
                            d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
                          />
                        </svg>
                      </span>
                      <div className="w-full h-full flex flex-col mt-5 pr-3">
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
                            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                          />
                        </svg>
                      </span>
                      <div className="w-full h-full flex flex-col mt-5">
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
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                      </span>
                      <div className="w-full h-full flex flex-col pr-3 mt-5">
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
                      <div className="px-2 py-2 bg-blue-500 rounded-md relative">
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
                            d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                          />
                        </svg>
                      </div>
                      <div className="w-full h-full flex flex-col mt-5 pr-3">
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
          {/* *********************************************************************** */}
          {/* *********************************************************************** */}
          <div className="business-panel-mainbar lg:col-span-9 col-span-12 shadow-lg shadow-slate-100 relative overflow-x-hidden">
            <header className="header-container max-w-screen-xl px-12 mx-auto bg-white h-[60px] relative lg:z-[99999999]">
              <div className="header-flex h-full flex items-center">
                <button className="text-danger me-2 fs-6">
                  {/* <i class="bi bi-trash"></i>   //در اینجا زنگ باید قرار بگیرد */}
                </button>
              </div>
            </header>

            <section className="max-w-screen-md mx-auto my-14 relative z-[99999999]">
              <div className="social-form bg-white p-5">
                <div className="social-title flex flex-col mb-4">
                  <h5 className="text-base font-semibold">شبکه های اجتماعی </h5>
                  <small className="text-slate-500 text-xs mt-1">
                    در این قسمت آدرس شبکه های اجتماعی خود را وارد کنید.
                  </small>
                </div>
                <div className="social-inputs"></div>
                <label className="text-xs text-primary mb-3">
                  افزودن سایر شبکه های اجتماعی
                </label>
                <div className="d-flex justify-between">
                  <select
                    onChange={(e) => {
                      setNewNetwork(e.target.value);
                    }}
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>انتخاب کنید</option>
                    <option value="whatsapp">whatsapp</option>
                    <option value="instagram">instagram</option>
                    <option value="linkedin">linkedin</option>
                    <option value="telegram">telegram</option>
                    <option value="facebook">facebook</option>
                    <option value="aparat">aparat</option>
                    <option value="youtube">youtube</option>
                    <option value="twitter">twitter</option>
                    <option value="skype">skype</option>
                  </select>
                  <button
                    onClick={handelNewNetwork}
                    className="btn btn-warning mr-5"
                    disabled={newNetwork == "" ? true : false}
                  >
                    اضافه
                  </button>
                </div>
                {/* ********************************************************** */}
                {type == "" && ""}
                {type == "whatsapp" && (
                  <div className="social-input mt-3">
                    <label className="text-xs text-slate-500 mb-2 ">
                      واتساپ
                    </label>
                    <div className="social-input-group input-group mb-3 placeholder-slate-300">
                      <input
                        onChange={(e) =>
                          setLink(
                            "https://wa.me/+98" + e.target.value.toString()
                          )
                        }
                        type="number"
                        className="form-control"
                        id="basic-url"
                        aria-describedby="basic-addon3"
                        placeholder="شماره همراه خود را بدون صفر وارد کنید"
                      />

                      <div
                        className="input-group-text input-group-text-whatsapp bg-slate-50 text-xs text-slate-400 flex relative"
                        id="basic-addon3"
                      >
                        <div className="absolute right-[-36px]">۹۸ +</div>
                        <span className="text-slate-500">whatsapp</span>

                        <button className="text-danger me-2 fs-6">
                          <i class="bi bi-trash"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                )}
                {type == "instagram" && (
                  <div className="social-input mt-3">
                    <label className="text-xs text-slate-500 mb-2">
                      اینستاگرام
                    </label>
                    <div className="social-input-group input-group mb-3 placeholder-slate-300">
                      <input
                        onChange={(e) =>
                          setLink("https://www.instagram.com/" + e.target.value)
                        }
                        type="text"
                        className="form-control"
                        id="basic-url"
                        aria-describedby="basic-addon3"
                        placeholder="نام کاربری اینستاگرام خود را وارد فرمایید"
                      />

                      <div
                        className="input-group-text bg-slate-50 text-xs text-slate-400 flex relative"
                        id="basic-addon3"
                      >
                        <span className="text-slate-500">instagram</span>

                        <button className="text-danger me-2 fs-6">
                          <i class="bi bi-trash"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                )}
                {type == "linkedin" && (
                  <div className="social-input mt-3">
                    <label className="text-xs text-slate-500 mb-2">
                      لینکداین
                    </label>
                    <div className="social-input-group input-group mb-3 placeholder-slate-300">
                      <input
                        onChange={(e) => setLink(e.target.value)}
                        type="text"
                        className="form-control"
                        id="basic-url"
                        aria-describedby="basic-addon3"
                        placeholder="لینک پروفایل Linkedin خود را وارد فرمایید"
                      />
                      <div
                        className="input-group-text bg-slate-50 text-xs text-slate-400  flex relative"
                        id="basic-addon3"
                      >
                        <span className="text-slate-500 mr-[22px]">
                          linkdin
                        </span>

                        <button className="text-danger me-2 fs-6">
                          <i class="bi bi-trash"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                )}
                {type == "telegram" && (
                  <div className="social-input mt-3">
                    <label className="text-xs text-slate-500 mb-2">
                      تلگرام
                    </label>
                    <div className="social-input-group input-group mb-3 placeholder-slate-300">
                      <input
                        onChange={(e) => setLink(e.target.value)}
                        type="text"
                        className="form-control"
                        id="basic-url"
                        aria-describedby="basic-addon3"
                        placeholder="ID تلگرام خود را وارد نمایید"
                      />

                      <div
                        className="input-group-text bg-slate-50 text-xs text-slate-400  flex relative"
                        id="basic-addon3"
                      >
                        <span className="text-slate-500 mr-[8px]">
                          telegram
                        </span>

                        <button className="text-danger me-2 fs-6">
                          <i class="bi bi-trash"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                )}
                {type == "facebook" && (
                  <div className="social-input mt-3">
                    <label className="text-xs text-slate-500 mb-2">
                      فیس بوک
                    </label>
                    <div className="social-input-group input-group mb-3 placeholder-slate-300">
                      <input
                        onChange={(e) => setLink(e.target.value)}
                        type="text"
                        className="form-control"
                        id="basic-url"
                        aria-describedby="basic-addon3"
                        placeholder=" لینک پیج فیس بوک خود را وارد نمایید"
                      />

                      <div
                        className="input-group-text bg-slate-50 text-xs text-slate-400 flex relative"
                        id="basic-addon3"
                      >
                        <span className="text-slate-500">facebook</span>

                        <button className="text-danger me-2 fs-6">
                          <i class="bi bi-trash"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                )}
                {type == "aparat" && (
                  <div className="social-input mt-3">
                    <label className="text-xs text-slate-500 mb-2">
                      آپارات
                    </label>
                    <div className="social-input-group input-group mb-3 placeholder-slate-300">
                      <input
                        onChange={(e) => setLink(e.target.value)}
                        type="text"
                        className="form-control"
                        id="basic-url"
                        aria-describedby="basic-addon3"
                        placeholder="نام کانال آپارت خود را وارد فرمایید"
                      />

                      <div
                        className="input-group-text bg-slate-50 text-xs text-slate-400 flex relative"
                        id="basic-addon3"
                      >
                        <span className="text-slate-500">aparat</span>

                        <button className="text-danger me-2 fs-6">
                          <i class="bi bi-trash"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                )}
                {type == "youtube" && (
                  <div className="social-input mt-3">
                    <label className="text-xs text-slate-500 mb-2">
                      یوتیوب
                    </label>
                    <div className="social-input-group input-group mb-3 placeholder-slate-300">
                      <input
                        onChange={(e) => setLink(e.target.value)}
                        type="text"
                        className="form-control"
                        id="basic-url"
                        aria-describedby="basic-addon3"
                        placeholder="لینک کانال یوتیوب خود را وارد نمایید"
                      />

                      <div
                        className="input-group-text bg-slate-50 text-xs text-slate-400  flex relative"
                        id="basic-addon3"
                      >
                        <span className="text-slate-500 mr-[8px]">youtybe</span>

                        <button className="text-danger me-2 fs-6">
                          <i class="bi bi-trash"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                )}
                {type == "twitter" && (
                  <div className="social-input mt-3">
                    <label className="text-xs text-slate-500 mb-2">
                      توییتر
                    </label>
                    <div className="social-input-group input-group mb-3 placeholder-slate-300">
                      <input
                        onChange={(e) => setLink(e.target.value)}
                        type="text"
                        className="form-control"
                        id="basic-url"
                        aria-describedby="basic-addon3"
                        placeholder="لینک توییتر خود را وارد نمایید"
                      />

                      <div
                        className="input-group-text bg-slate-50 text-xs text-slate-400  flex relative"
                        id="basic-addon3"
                      >
                        <span className="text-slate-500 mr-[8px]">twitter</span>

                        <button className="text-danger me-2 fs-6">
                          <i class="bi bi-trash"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                )}
                {type == "skype" && (
                  <div className="social-input mt-3">
                    <label className="text-xs text-slate-500 mb-2">
                      اسکایپ
                    </label>
                    <div className="social-input-group input-group mb-3 placeholder-slate-300">
                      <input
                        onChange={(e) => setLink(e.target.value)}
                        type="text"
                        className="form-control"
                        id="basic-url"
                        aria-describedby="basic-addon3"
                        placeholder="لینک اسکایپ خود را وارد نمایید"
                      />

                      <div
                        className="input-group-text bg-slate-50 text-xs text-slate-400  flex relative"
                        id="basic-addon3"
                      >
                        <span className="text-slate-500 mr-[8px]">skype</span>

                        <button className="text-danger me-2 fs-6">
                          <i class="bi bi-trash"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                )}
                {/* *********************************************************************** */}
                <div className="save-btn w-full h-full border-t-2 border-dotted border-slate-100 flex justify-end items-center">
                  <button
                    onClick={handleSubmitSocial}
                    type="submit"
                    className="btn btn-success mt-3"
                  >
                    ثبت
                  </button>
                </div>
                ********************************************************************************************
                {/* Delete Modal  */}
                {showModal ? (
                  <Modal delete={deleteSocial} modalHandler={modalHandler} />
                ) : null}
                {/* ********************************************************** */}
                {allSocials &&
                  allSocials.map((social) => {
                    return (
                      <>
                        <div className="social-input mt-3">
                          <label className="text-xs text-slate-500 mb-2 ">
                            {social.type}
                          </label>
                          <div className="social-input-group input-group mb-3 placeholder-slate-300">
                            <input
                              type="text"
                              className="form-control"
                              id="basic-url"
                              aria-describedby="basic-addon3"
                              value={social.link}
                            />

                            <div
                              className="input-group-text input-group-text-whatsapp bg-slate-50 text-xs text-slate-400 flex relative"
                              id="basic-addon3"
                            >
                              <span className="text-slate-500">
                                {social.type}
                              </span>

                              <button
                                onClick={(e) => {
                                  setSocialId(social.id);
                                  console.log(social.id);
                                  modalHandler();
                                }}
                                className="text-danger me-2 fs-6"
                              >
                                <i class="bi bi-trash"></i>
                              </button>
                            </div>
                          </div>
                        </div>
                      </>
                    );
                  })}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default social;
