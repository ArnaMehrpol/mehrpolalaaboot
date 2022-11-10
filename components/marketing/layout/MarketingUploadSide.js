import React from 'react'
import Link from "next/link";
import Image from "next/image";

const MarketingUploadSide = () => {
  return (
    <div>
      <div className="business-panel-sidbar w-[300px] lg:col-span-3 col-span-12 my-8">
        <nav className="navbar navbar-business navbar-business-expand-lg navbar-expand-lg">
          <div class="navbar-business-container container-fluid mx-4">
            <div className="top-nav d-flex relative z-20">
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
                <div className="business-nav-item-upload nav-item bg-blue-500 rounded-md px-4 mb-3">
                  <div className="w-full h-full nav-item-flex flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5 font-semibold text-sm text-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                      />
                    </svg>
                    <Link href="/">
                      <a
                        class="business-nav-link nav-link text-xs text-white mr-1"
                        aria-current="page"
                      >
                        بارگذاری
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="business-nav-item-upload-active nav-item rounded-md flex items-center">
                  <span className="px-2 py-2 bg-blue-500 rounded-md relative mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                    </svg>

                  </span>
                  <div className="w-full h-full flex flex-col pr-3 mt-0">
                    <Link href="/marketing/upload/slides">
                      <a>
                        <p className="text-xs font-semibold text-slate-600 hover:text-slate-500">
                        ۱.اسلایدها
                        </p>
                        <p className="text-slate-400 text-[9px] mt-2">
                          اسلایدها جهت نمایش در صفحه   
                        </p>
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="business-nav-item-upload-inactive nav-item rounded-md flex items-center">
                  <span className="px-2 py-2 bg-white rounded-md relative mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-slate-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </span>
                  <div className="w-full h-full flex flex-col mt-0 pr-3">
                    <Link href="/marketing/upload/images">
                      <a>
                        <p className="text-xs font-semibold text-slate-600 hover:text-slate-500">
                          ۲.تصاویر کاری
                        </p>
                        <p className="text-slate-400 text-[9px] mt-2">
                          تصاویر مربوط به کسب و کار
                        </p>
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="business-nav-item-upload-active nav-item rounded-md flex items-center">
                  <span className="px-2 py-2 bg-white rounded-md relative mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 text-slate-600"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75"
                      />
                    </svg>
                  </span>
                  <div className="w-full h-full flex flex-col pr-3 mt-0">
                    <Link href="/marketing/upload/permissions">
                      <a>
                        <p className="text-xs font-semibold text-slate-600 hover:text-slate-500">
                          ۳.مجوزها
                        </p>
                        <p className="text-slate-400 text-[9px] mt-2">
                          مجوزهای کسب و کار
                        </p>
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="business-nav-item-upload-inactive nav-item rounded-md flex items-center">
                  <span className="px-2 py-2 bg-white rounded-md relative mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 text-slate-600"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 01-3.6 9.75m6.633-4.596a18.666 18.666 0 01-2.485 5.33"
                      />
                    </svg>
                  </span>
                  <div className="w-full h-full flex flex-col mt-0">
                    <Link href="/marketing/upload/signature">
                      <a>
                        <p className="text-xs font-semibold text-slate-600 hover:text-slate-500 pr-3">
                          ۴.امضا و مهر
                        </p>
                        <p className="text-slate-400 text-[9px] mt-2 pr-3">
                          امضا و مهر مدیران کسب و کار
                        </p>
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="business-nav-item-upload-inactive nav-item rounded-md flex items-center">
                  <span className="px-2 py-2 bg-white rounded-md relative mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 text-slate-600"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
                      />
                    </svg>
                  </span>
                  <div className="w-full h-full flex flex-col pr-3 mt-0">
                    <Link href="/marketing/upload/catalog">
                      <a>
                        <p className="text-xs font-semibold text-slate-600 hover:text-slate-500">
                          ۵.کاتالوگ
                        </p>
                        <p className="text-slate-400 text-[9px] mt-2">
                          کاتالوگ محصولات و خدمات
                        </p>
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="business-nav-item-upload-inactive nav-item rounded-md flex items-center">
                  <span className="px-2 py-2 bg-white rounded-md relative mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 text-slate-600"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
                      />
                    </svg>
                  </span>
                  <div className="w-full h-full flex flex-col pr-3 mt-0">
                    <Link href="/marketing/upload/certificate">
                      <a>
                        <p className="text-xs font-semibold text-slate-600 hover:text-slate-500">
                          ۶.گواهینامه ها
                        </p>
                        <p className="text-slate-400 text-[9px] mt-2">
                          گواهینامه های اخذ شده
                        </p>
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="business-nav-item-upload-inactive nav-item rounded-md flex items-center">
                  <span className="px-2 py-2 bg-white rounded-md relative mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 text-slate-600"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                      />
                    </svg>
                  </span>
                  <div className="w-full h-full flex flex-col pr-3 mt-0">
                    <Link href="/marketing/upload/consent">
                      <a>
                        <p className="text-xs text-slate-600 hover:text-slate-500 font-semibold">
                          ۷. رضایت نامه
                        </p>
                        <p className="text-slate-400 text-[9px] mt-2">
                          رضایت نامه مدیران کسب و کار
                        </p>
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="business-nav-item-upload-inactive nav-item rounded-md flex items-center">
                  <span className="px-2 py-2 bg-white rounded-md relative mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 text-slate-600"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z"
                      />
                    </svg>
                  </span>
                  <div className="w-full h-full flex flex-col pr-3 mt-0">
                    <Link href="/marketing/upload/chart">
                      <a>
                        <p className="text-xs font-semibold text-slate-600 hover:text-slate-500">
                          ۸.چارت سازمانی
                        </p>
                        <p className="text-slate-400 text-[9px] mt-2">
                          چارت سازمانی کسب و کار
                        </p>
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="business-nav-item-upload-active nav-item rounded-md flex items-center">
                  <span className="px-2 py-2 bg-white rounded-md relative mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 text-slate-600"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                      />
                    </svg>
                  </span>
                  <div className="w-full h-full flex flex-col pr-3 mt-0">
                    <Link href="/marketing/upload/educational">
                      <a>
                        <p className="text-xs font-semibold text-slate-600 hover:text-slate-500">
                          ۹.فایل های آموزشی
                        </p>
                        <p className="text-slate-400 text-[9px] mt-2">
                          فایل ها جهت آموزش
                        </p>
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="business-nav-item-upload-active nav-item rounded-md flex items-center">
                  <span className="px-2 py-2 bg-white rounded-md relative mb-4">
                    {/* <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 text-slate-600"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                      />
                    </svg> */}
                  </span>
                  <div className="w-full h-full flex flex-col pr-3 mt-0">
                    <Link href="/marketing/dashboard">
                      <a>
                        <p className="text-xs font-semibold text-slate-600 hover:text-slate-500">
                          بازگشت به پنل کسب و کار
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

export default MarketingUploadSide
