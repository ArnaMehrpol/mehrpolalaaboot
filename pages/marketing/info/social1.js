import Link from "next/link";
import Image from "next/image";
import React from "react";
import MarketingInfoSide from "../../../components/marketing/layout/MarketingInfoSide";
import MarketingInfoHeader from "../../../components/marketing/marketingHeader/MarketingInfoHeader";

const social = () => {
  return (
    <div className="mx-auto">
      <div className="business-panel-container">
        <div className="business-panel-cols flex bg-slate-100 ">
          <div>
            <MarketingInfoSide/>
          </div>
          <div className="business-panel-mainbar w-100 lg:col-span-9 col-span-12 shadow-lg shadow-slate-100 relative overflow-x-hidden">
            <MarketingInfoHeader/>
            <section className="max-w-screen-md mx-auto my-14 relative z-[]">
              <div className="social-form bg-white p-5">
                <div className="social-title flex flex-col mb-4">
                  <h5 className="text-base font-semibold">شبکه های اجتماعی </h5>
                  <small className="text-slate-500 text-xs mt-1">
                    در این قسمت آدرس شبکه های اجتماعی خود را وارد کنید.
                  </small>
                </div>
                <div className="social-inputs">
                  <div className="social-input">
                    <label className="text-xs text-slate-500 mb-2">
                      واتساپ
                    </label>
                    <div class="social-input-group input-group mb-3 placeholder-slate-300">
                      <input
                        type="text"
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
                        <span className="text-slate-500">/ whatsapp.com</span>
                        <Link href="/">
                          <a className="text-slate-400 hover:text-slate-500">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 mx-3"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                              />
                            </svg>
                          </a>
                        </Link>
                        <Link href="/">
                          <a className="text-slate-400 hover:text-slate-500">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                              />
                            </svg>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="social-input mt-3">
                    <label className="text-xs text-slate-500 mb-2">
                      اینستاگرام
                    </label>
                    <div class="social-input-group input-group mb-3 placeholder-slate-300">
                      <input
                        type="text"
                        className="form-control"
                        id="basic-url"
                        aria-describedby="basic-addon3"
                      />

                      <div
                        className="input-group-text bg-slate-50 text-xs text-slate-400 flex relative"
                        id="basic-addon3"
                      >
                        <span className="text-slate-500">/ instagram.com </span>
                        <Link href="/">
                          <a className="text-slate-400 hover:text-slate-500">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 mx-3"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                              />
                            </svg>
                          </a>
                        </Link>
                        <Link href="/">
                          <a className="text-slate-400 hover:text-slate-500">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                              />
                            </svg>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="social-input mt-3">
                    <label className="text-xs text-slate-500 mb-2">
                      لینکدین
                    </label>
                    <div class="social-input-group input-group mb-3 placeholder-slate-300">
                      <input
                        type="text"
                        className="form-control"
                        id="basic-url"
                        aria-describedby="basic-addon3"
                      />
                      <div
                        className="input-group-text bg-slate-50 text-xs text-slate-400  flex relative"
                        id="basic-addon3"
                      >
                        <span className="text-slate-500 mr-[22px]">
                          / linkdin.com{" "}
                        </span>
                        <Link href="/">
                          <a className="text-slate-400 hover:text-slate-500">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 mx-3"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                              />
                            </svg>
                          </a>
                        </Link>
                        <Link href="/">
                          <a className="text-slate-400 hover:text-slate-500">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                              />
                            </svg>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="social-input mt-3">
                    <label className="text-xs text-slate-500 mb-2">
                      تلگرام
                    </label>
                    <div class="social-input-group input-group mb-3 placeholder-slate-300">
                      <input
                        type="text"
                        className="form-control"
                        id="basic-url"
                        aria-describedby="basic-addon3"
                      />

                      <div
                        className="input-group-text bg-slate-50 text-xs text-slate-400  flex relative"
                        id="basic-addon3"
                      >
                        <span className="text-slate-500 mr-[8px]">
                          / telegram.com{" "}
                        </span>
                        <Link href="/">
                          <a className="text-slate-400 hover:text-slate-500">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 mx-3"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                              />
                            </svg>
                          </a>
                        </Link>
                        <Link href="/">
                          <a className="text-slate-400 hover:text-slate-500">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                              />
                            </svg>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <Link href="/">
                  <a className="social-link w-52 h-full bg-amber-500 hover:bg-amber-400 px-2.5 py-1.5 border border-slate-400 rounded-md inline-flex items-center justify-center my-3">
                    <span className="text-xs text-white">
                      افزودن سایر شبکه های اجتماعی
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-white mr-2"
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
                <div class="all-input-group input-group mt-3 mb-3">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="نام کاربری خود را وارد کنید"
                  />

                  <div
                    className="flex items-center  px-12 bg-slate-50 social-dropdown-toggle border border-slate-100 rounded-end overflow-hidden rounded-3xl"
                    data-bs-toggle="dropdown"
                  >
                    <span className="text-sm text-slate-400 mr-[12px]">
                      انتخاب کنید
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4 text-slate-400"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </div>

                  <ul class="dropdown-menu">
                    <li>
                      <a className="dropdown-item flex" href="#">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-4 h-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                          />
                        </svg>
                        <span className="text-xs text-slate-600 mr-2">
                          محمد مهدوی
                        </span>
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item flex" href="#">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-4 h-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                          />
                        </svg>
                        <span className="text-xs text-slate-600 mr-2">
                          علی نجفی
                        </span>
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item flex" href="#">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-4 h-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                          />
                        </svg>
                        <span className="text-xs text-slate-600 mr-2">
                          سارا محمدی{" "}
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="save-btn w-full h-full border-t-2 border-dotted border-slate-100 flex justify-end items-center">
                  <Link href="/">
                    <a className="px-4 py-1 bg-blue-500 hover:bg-blue-400 rounded-md mt-4">
                      <span className="text-white text-sm">ثبت</span>
                    </a>
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default social;
