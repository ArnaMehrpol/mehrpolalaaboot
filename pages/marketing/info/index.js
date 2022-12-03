import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";

const Userinfo = () => {
  return (
    <div>
      <div className="business-panel-container">
        <div className="business-panel-cols grid grid-cols-12 bg-slate-100 ">
          <div className="business-panel-sidbar lg:col-span-3 col-span-12 my-8">
            <nav className="navbar navbar-business navbar-business-expand-lg navbar-expand-lg">
              <div class="navbar-business-container container-fluid mx-4">
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
                    <div class="dropdown">
                      <a
                        class="dropdown-toggle"
                        href="#"
                        id="dropdownMenuLink"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      ></a>

                      <ul
                        class="dropdown-menu"
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
                  <i class="bi bi-list"></i>
                </button>
                <div
                  class="business-collapse collapse product-navbar-collapse navbar-collapse w-full mt-4"
                  id="navbarSupportedContent"
                >
                  <div class="business-navbar-nav navbar-nav">
                    <div className="business-nav-item nav-item bg-blue-500 rounded-md px-4 mb-3">
                      <div className="w-full h-full nav-item-flex flex items-center">
                        <i class="bi bi-person font-semibold text-sm text-white"></i>
                        <Link href="/">
                          <a
                            class="business-nav-link nav-link text-xs text-white mr-1"
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
                            <p className="text-slate-400 text-[9px] mt-2 pr-3">
                              اطلاعات عمومی صاحب کسب و کار را وارد نمایید
                            </p>
                          </a>
                        </Link>
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
                        <Link href="userinfo/generalinfo">
                          <a>
                            <p className="text-xs font-semibold">
                              ۲.اطلاعات کسب و کار
                            </p>
                            <p className="text-slate-400 text-[9px] mt-2">
                              اطلاعات کسب و کار خود را در این قسمت واردکنید
                            </p>
                          </a>
                        </Link>
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
                        <Link href="userinfo/about">
                          <a>
                            <p className="text-xs font-semibold">۳.درباره ما</p>
                            <p className="text-slate-400 text-[9px] mt-2">
                              در این قسمت پیام مدیریت و توضیحات خود را وارد
                              نمایید
                            </p>
                          </a>
                        </Link>
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
                            <p className="text-slate-400 text-[9px] mt-2 pr-3">
                              در این قسمت اطلاعات مربوط به مدیران را وارد کنید
                            </p>
                          </a>
                        </Link>
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
                        <Link href="userinfo/agreement">
                          <a>
                            <p className="text-xs font-semibold">۵.قراردادها</p>
                            <p className="text-slate-400 text-[9px] mt-2">
                              در این قسمت قراردادهای خود را وارد نمایید
                            </p>
                          </a>
                        </Link>
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
                        <Link href="userinfo/social">
                          <a>
                            <p className="text-xs font-semibold">
                              ۶.شبکه های اجتماعی
                            </p>
                            <p className="text-slate-400 text-[9px] mt-2">
                              در این قسمت آدرس شبکه های اجتماعی را واردکنید
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
          <div className="business-panel-mainbar lg:col-span-9 col-span-12 shadow-lg shadow-slate-100 relative">
            <header className="header-container max-w-screen-xl px-12 mx-auto bg-white h-[60px] relative ">
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
                <form className="d-flex me-auto relative mr-20" role="search">
                  <input
                    className="px-6 py-1.5 bg-slate-100 rounded-full focus:outline-none focus:border-slate-400 focus:ring-1 focus:ring-sky-600 overflow-hidden"
                    type="search"
                    placeholder=""
                    aria-label="Search"
                  />
                  <i class="bi bi-search absolute right-5 bottom-1"></i>
                </form>
              </div>
            </header>
            <section className="about-container max-w-screen-md mx-auto lg:px-0 px-6 relative ">
              <div className="about-form bg-white overflow-hidden roundde-lg shadow-md px-5 mt-[4.5rem]">
                <div className="about-title flex flex-col my-4">
                  <h5 className="text-base font-semibold">درباره ما</h5>
                  <small className="text-slate-500 text-xs mt-0.5">
                    در این قسمت ییام مدیریت و توضیحات خود را وارد کنید.
                  </small>
                </div>
                <div className="about-list-tabele-content">
                  <div className="about-list-title flex flex-col mb-4">
                    <h5 className="text-base font-semibold">
                      امکانات و تجهیزات{" "}
                    </h5>
                  </div>
                  <table class="about-list-tabele table table-bordered rounded-md overflow-hidden mb-8">
                    <thead>
                      <tr className=" bg-blue-100 text-center text-slate-500 font-semibold text-xs">
                        <th scope="col">ردیف</th>
                        <th scope="col">نام تجهیزات</th>
                        <th scope="col">تعداد</th>
                        <th scope="col">مشخصات تجهیزات</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="text-center">
                        <th scope="row" className="text-slate-500">
                          ۱
                        </th>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr className="text-center">
                        <th scope="row" className="text-slate-500">
                          ۲
                        </th>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr className="text-center">
                        <th scope="row" className="text-slate-500">
                          ۳
                        </th>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr className="text-center">
                        <th scope="row" className="text-slate-500">
                          ۴
                        </th>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="next-btn w-full h-full border-t-2 border-dotted border-slate-100 flex justify-end items-center">
                    <Link href="userinfo/info">
                      <a className="px-2 py-1 bg-blue-500 hover:bg-blue-400 rounded-md my-6">
                        <span className="text-white text-xs font-semibold">
                          ثبت و مرحله بعد
                        </span>
                      </a>
                    </Link>
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

export default Userinfo;
