import Link from "next/link";
import Image from "next/image";
import React from "react";

const businesspanel = () => {
  return (
    <div>
      <div className="business-panel-container">
        <div className="business-panel-cols grid grid-cols-12 bg-slate-100">
          <div className="business-panel-sibar lg:col-span-3 col-span-12">
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
                    <div className="business-nav-item nav-item bg-blue-500 rounded-md px-4">
                      <div className="w-full h-full nav-item-flex flex items-center">
                        <i class="bi bi-speedometer text-sm text-white"></i>
                        <Link href="/">
                          <a
                            class="business-nav-link nav-link text-xs text-white mr-1"
                            aria-current="page"
                          >
                            داشبورد
                          </a>
                        </Link>
                      </div>
                    </div>
                    <div className="business-nav-item nav-item bg-white rounded-md px-4 my-1">
                      <div className="w-full h-full nav-item-flex flex items-center">
                        <i class="bi bi-person text-sm text-black"></i>
                        <Link href="/aa/user-info/generalinfo">
                          <a
                            class="business-nav-link nav-link text-xs text-black mr-1 ${router.pathname === '/../../user-info' ? 'bg-blue-500 text-blue-50' : ''}"
                            aria-current="page"
                          >
                            اطلاعات کاربری
                          </a>
                        </Link>
                      </div>
                    </div>
                    <div className="business-nav-item nav-item bg-white rounded-md px-4 mb-1">
                      <div className="w-full h-full nav-item-flex flex items-center">
                        <i class="bi bi-cloud-upload text-sm text-black"></i>
                        <Link href="/">
                          <a
                            class="business-nav-link nav-link text-xs text-black mr-1"
                            aria-current="page"
                          >
                            بارگذاری
                          </a>
                        </Link>
                      </div>
                    </div>
                    <div className="business-nav-item nav-item bg-white rounded-md px-4 mb-1">
                      <div className="w-full h-full nav-item-flex flex items-center">
                        <i class="bi bi-layout-text-window text-sm text-black"></i>
                        <Link href="/">
                          <a
                            class="business-nav-link nav-link text-xs text-black mr-1"
                            aria-current="page"
                          >
                            محصولات
                          </a>
                        </Link>
                      </div>
                    </div>
                    <div className="business-nav-item nav-item bg-white rounded-md px-4 mb-1">
                      <div className="w-full h-full nav-item-flex flex items-center">
                        <i class="bi bi-diagram-3 text-sm text-black"></i>
                        <Link href="/">
                          <a
                            class="business-nav-link nav-link text-xs text-black mr-1"
                            aria-current="page"
                          >
                            خدمات
                          </a>
                        </Link>
                      </div>
                    </div>
                    <div className="business-nav-item nav-item bg-white rounded-md px-4 mb-1">
                      <div className="w-full h-full nav-item-flex flex items-center">
                        <i class="bi bi-person-lines-fill text-sm text-black"></i>
                        <Link href="/">
                          <a
                            class="business-nav-link nav-link text-xs text-black mr-1"
                            aria-current="page"
                          >
                            سفارش ها
                          </a>
                        </Link>
                      </div>
                    </div>
                    <div className="business-nav-item nav-item bg-white rounded-md px-4 mb-1">
                      <div className="w-full h-full nav-item-flex flex items-center">
                        <i class="bi bi-cart2 text-sm text-black"></i>
                        <Link href="/">
                          <a
                            class="business-nav-link nav-link text-xs text-black mr-1"
                            aria-current="page"
                          >
                            سبد خرید
                          </a>
                        </Link>
                      </div>
                    </div>
                    <div className="business-nav-item nav-item bg-white rounded-md px-4 mb-1">
                      <div className="w-full h-full nav-item-flex flex items-center">
                        <i class="bi bi-wallet2 text-sm text-black"></i>
                        <Link href="/">
                          <a
                            class="business-nav-link nav-link text-xs text-black mr-1"
                            aria-current="page"
                          >
                            مالی
                          </a>
                        </Link>
                      </div>
                    </div>
                    <div className="business-nav-item nav-item bg-white rounded-md px-4 mb-1">
                      <div className="w-full h-full nav-item-flex flex items-center">
                        <i class="bi bi-envelope-plus text-sm text-black"></i>
                        <Link href="/">
                          <a
                            class="business-nav-link nav-link text-xs text-black mr-1"
                            aria-current="page"
                          >
                            پیام ها
                          </a>
                        </Link>
                      </div>
                    </div>
                    <div className="business-nav-item nav-item bg-white rounded-md px-4 mb-1">
                      <div className="w-full h-full nav-item-flex flex items-center">
                        <i class="bi bi-chat-right-text text-sm text-black"></i>
                        <Link href="/">
                          <a
                            class="business-nav-link nav-link text-xs text-black mr-1"
                            aria-current="page"
                          >
                            دیدگاه ها
                          </a>
                        </Link>
                      </div>
                    </div>
                    <div className="business-nav-item nav-item bg-white rounded-md px-4 mb-1">
                      <div className="w-full h-full nav-item-flex flex items-center">
                        <i class="bi bi-star text-sm text-black"></i>
                        <Link href="/">
                          <a
                            class="business-nav-link nav-link text-xs text-black mr-1"
                            aria-current="page"
                          >
                            علاقه مندی ها
                          </a>
                        </Link>
                      </div>
                    </div>
                    <div className="business-nav-item nav-item bg-white rounded-md px-4 mb-1">
                      <div className="w-full h-full nav-item-flex flex items-center">
                        <i class="bi bi-newspaper text-sm text-black"></i>
                        <Link href="/">
                          <a
                            class="business-nav-link nav-link text-xs text-black mr-1"
                            aria-current="page"
                          >
                            مقالات
                          </a>
                        </Link>
                      </div>
                    </div>
                    <div className="business-nav-item nav-item bg-white rounded-md px-4 mb-1">
                      <div className="w-full h-full nav-item-flex flex items-center">
                        <i class="bi bi-people text-sm text-black"></i>
                        <Link href="/">
                          <a
                            class="business-nav-link nav-link text-xs text-black mr-1"
                            aria-current="page"
                          >
                            مدیریت پرسنل
                          </a>
                        </Link>
                      </div>
                    </div>
                    <div className="business-nav-item nav-item bg-white rounded-md px-4 mb-1">
                      <div className="w-full h-full nav-item-flex flex items-center">
                        <i class="bi bi-folder2-open text-sm text-black"></i>
                        <Link href="/">
                          <a
                            class="business-nav-link nav-link text-xs text-black mr-1"
                            aria-current="page"
                          >
                            شکایات
                          </a>
                        </Link>
                      </div>
                    </div>
                    <div className="business-nav-item nav-item bg-white rounded-md px-4 mb-1">
                      <div className="w-full h-full nav-item-flex flex items-center">
                        <i class="bi bi-gear text-sm text-black"></i>
                        <Link href="/">
                          <a
                            class="business-nav-link nav-link text-xs text-black mr-1"
                            aria-current="page"
                          >
                            تنظیمات
                          </a>
                        </Link>
                      </div>
                    </div>
                    <div className="business-nav-item nav-item bg-white rounded-md px-4 mb-1">
                      <div className="w-full h-full nav-item-flex flex items-center">
                        <i class="bi bi-link-45deg text-sm text-black"></i>
                        <Link href="/">
                          <a
                            class="business-nav-link nav-link text-xs text-black mr-1"
                            aria-current="page"
                          >
                            ارتباط با مهرپل
                          </a>
                        </Link>
                      </div>
                    </div>
                    <div className="business-nav-item nav-item bg-white rounded-md px-4 mb-1">
                      <div className="w-full h-full nav-item-flex flex items-center">
                        <i class="bi bi-power text-sm text-black"></i>
                        <Link href="/">
                          <a
                            class="business-nav-link nav-link text-xs text-black mr-1"
                            aria-current="page"
                          >
                            خروج
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </div>
          <div className="business-panel-mainbar lg:col-span-9 col-span-12 shadow-lg shadow-slate-100 relative overflow-hidden">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default businesspanel;
