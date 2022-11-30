import Link from "next/link";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/router";


const MarketingLayout = ({children}) => {
  const router = useRouter();

  return (
    
    <div className="col-span-12 business-panel-sibar md:col-span-2">
      <nav className="navbar navbar-business w-[] navbar-business-expand-lg navbar-expand-lg">
        <div className="navbar-business-container container-fluid mx-4">
          <div className="top-nav d-flex">
            <div className="bg-white rounded-full business-logo w-14 h-14">
              <Link href="/">
                <Image
                  src="/../public/assets/img/logos/1.png"
                  width="60px"
                  height="60px"
                  className="flex items-center justify-center w-full h-full rounded-full"
                ></Image>
              </Link>
            </div>
            <div className="flex flex-col mr-3 business-name">
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
                      <a className="flex dropdown-item" href="#">
                        <Image
                          src="/../public/assets/img/logos/3.png"
                          width="35px"
                          height="35px"
                          className="flex items-center justify-center rounded-full"
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
                      <a className="flex dropdown-item" href="#">
                        <Image
                          src="/../public/assets/img/logos/1.png"
                          width="35px"
                          height="35px"
                          className="flex items-center justify-center rounded-full"
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
                      <a className="flex dropdown-item" href="#">
                        <Image
                          src="/../public/assets/img/logos/3.png"
                          width="35px"
                          height="35px"
                          className="flex items-center justify-center rounded-full"
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
              <Link href="/panel/personnel/add">
                <a>GO</a>
              </Link>
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
              <div className="px-4 bg-blue-500 rounded-md business-nav-item nav-item">
                <div className="flex items-center w-full h-full nav-item-flex">
                  <i className="bi bi-speedometer text-sm text-white"></i>
                  <Link href="/">
                    <a
                      className="business-nav-link nav-link text-xs text-white mr-1"
                      aria-current="page"
                    >
                      داشبورد
                    </a>
                  </Link>
                </div>
              </div>
              <div className=" px-4 my-1 bg-white group-hover:text-blue-500 rounded-md business-nav-item nav-item">
                <div className="flex items-center w-full h-full nav-item-flex">
                  <i className="bi bi-person text-sm text-black"></i>
                  <Link href="/marketing/info/generalinfo">
                    <a
                      className="business-nav-link  nav-link  mr-1 ${router.pathname === '/../../user-info/about' ? 'bg-blue-500 text-blue-50' : ''} "
                      aria-current="page"
                    >
                      <span className="text-xs text-black">
                        {" "}
                        اطلاعات کسب و کار
                      </span>
                    </a>
                  </Link>
                </div>
              </div>
              <div className="px-4 mb-1 bg-white rounded-md business-nav-item nav-item">
                <div className="flex items-center w-full h-full nav-item-flex">
                  <i className="bi bi-cloud-upload text-sm text-black"></i>
                  <Link href="/marketing/upload/slides">
                    <a
                      className="business-nav-link nav-link text-xs text-black mr-1 ${router.pathname === '/../../upload/slides' ? 'bg-blue-500 text-blue-50' : ''}"
                      aria-current="page"
                    >
                      بارگذاری
                    </a>
                  </Link>
                </div>
              </div>
              <div className="accordion mb-1 border-none" id="accordionPanelsStayOpenExample">
                
                <div className="w-full accordion-item border-none relative ">
                  <div className="cursor-pointer"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseOne"
                      aria-expanded="true"
                      aria-controls="panelsStayOpen-collapseOne">
                  <h2
                    className="accordion-header px-4 py-2"
                    id="panelsStayOpen-headingOne"
                  >
                    <a
                      className="text-xs collapsed text-slate-600"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseOne"
                      aria-expanded="false"
                      aria-controls="panelsStayOpen-collapseOne"
                    >
                      <i className="bi bi-layout-text-window text-xs text-black ml-2"></i>
                      محصولات
                    </a>
                  </h2>
                  </div>
                  <div
                    id="panelsStayOpen-collapseOne"
                    className="accordion-collapse collapse show bg-[##f3f4f6 ]"
                    aria-labelledby="panelsStayOpen-headingOne"
                  >
                    <div className="w-full accordion-body space-y-2 bg-slate-100">
                      <div className="flex items-center bg-slate-100">
                        <span className="flex items-center shadow-lg justify-center w-8 h-8 ml-2 bg-white active:bg-blue-500">
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
                              d="M12 6v12m6-6H6"
                            />
                          </svg>
                        </span>
                        <Link href="/marketing/products/add">
                          <a className="mr-1 text-[12px] text-slate-600">
                            ۱. افزودن محصول
                          </a>
                        </Link>
                      </div>
                      <div className="flex items-center">
                        <span className="flex items-center shadow-lg justify-center w-8 h-8 ml-2 bg-white">
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
                              d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                            />
                          </svg>
                        </span>
                        <Link href="/marketing/products/list">
                          <a className="mr-1 text-[12px] text-slate-600">
                            ۲. لیست محصولات
                          </a>
                        </Link>
                      </div>
                      {/* <div className="flex items-center">
                        <span className="flex items-center justify-center w-5 h-5 bg-slate-100">
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
                              d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                            />
                          </svg>
                        </span>
                        <Link href="/marketing/products/accept">
                          <a className="mr-1 text-[10px] text-slate-600">
                            ۳. محصولات دریافتی
                          </a>
                        </Link>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>

              <div className="px-4 mb-1 bg-white rounded-md business-nav-item nav-item">
                <div className="flex items-center w-full h-full nav-item-flex">
                  <i className="bi bi-diagram-3 text-sm text-black"></i>
                  <Link href="/marketing/dashboard">
                    <a
                      className="business-nav-link nav-link text-xs text-black mr-1"
                      aria-current="page"
                    >
                      خدمات
                    </a>
                  </Link>
                </div>
              </div>
              <div className="accordion mb-1 border-none" id="accordionPanelsStayOpenOrders">
                
                <div className="w-full accordion-item border-none relative ">
                  <div className="cursor-pointer"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseOneOrders"
                      aria-expanded="true"
                      aria-controls="panelsStayOpen-collapseOneOrders">
                  <h2
                    className="accordion-header px-4 py-2"
                    id="panelsStayOpen-headingOne"
                  >
                    <a
                      className="text-xs collapsed text-slate-600"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseOneOrders"
                      aria-expanded="false"
                      aria-controls="panelsStayOpen-collapseOneOrders"
                    >
                      <i className="bi bi-person-lines-fill text-sm text-black ml-2"></i>
                      سفارش ها
                    </a>
                  </h2>
                  </div>
                  <div
                    id="panelsStayOpen-collapseOneOrders"
                    className="accordion-collapse collapse show bg-[##f3f4f6 ]"
                    aria-labelledby="panelsStayOpen-headingOne"
                  >
                    <div className="w-full accordion-body space-y-2 bg-slate-100">
                      <div className="flex items-center bg-slate-100">
                        <span className="flex items-center shadow-lg justify-center w-8 h-8 ml-2 bg-white active:bg-blue-500">
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
                              d="M12 6v12m6-6H6"
                            />
                          </svg>
                        </span>
                        <Link href="/marketing/orders/Order">
                          <a className="mr-1 text-[12px] text-slate-600">
                            ۱. سفارش مشتریان
                          </a>
                        </Link>
                      </div>
                      <div className="flex items-center">
                        <span className="flex items-center shadow-lg justify-center w-8 h-8 ml-2 bg-white">
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
                              d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                            />
                          </svg>
                        </span>
                        <Link href="/marketing/orders/Request">
                          <a className="mr-1 text-[12px] text-slate-600">
                            ۲. درخواست من
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-4 mb-1 bg-white rounded-md business-nav-item nav-item">
                <div className="flex items-center w-full h-full nav-item-flex">
                  <i className="bi bi-person-lines-fill text-sm text-black"></i>
                  <Link href="/">
                    <a
                      className="business-nav-link nav-link text-xs text-black mr-1"
                      aria-current="page"
                    >
                      سفارش ها
                    </a>
                  </Link>
                </div>
              </div>
              <div className="px-4 mb-1 bg-white rounded-md business-nav-item nav-item">
                <div className="flex items-center w-full h-full nav-item-flex">
                  <i className="bi bi-cart2 text-sm text-black"></i>
                  <Link href="/">
                    <a
                      className="business-nav-link nav-link text-xs text-black mr-1"
                      aria-current="page"
                    >
                      سبد خرید
                    </a>
                  </Link>
                </div>
              </div>
              <div className="px-4 mb-1 bg-white rounded-md business-nav-item nav-item">
                <div className="flex items-center w-full h-full nav-item-flex">
                  <i className="bi bi-wallet2 text-sm text-black"></i>
                  <Link href="/">
                    <a
                      className="business-nav-link nav-link text-xs text-black mr-1"
                      aria-current="page"
                    >
                      مالی
                    </a>
                  </Link>
                </div>
              </div>
              <div className="px-4 mb-1 bg-white rounded-md business-nav-item nav-item">
                <div className="flex items-center w-full h-full nav-item-flex">
                  <i className="bi bi-envelope-plus text-sm text-black"></i>
                  <Link href="/">
                    <a
                      className="business-nav-link nav-link text-xs text-black mr-1"
                      aria-current="page"
                    >
                      پیام ها
                    </a>
                  </Link>
                </div>
              </div>
              <div className="px-4 mb-1 bg-white rounded-md business-nav-item nav-item">
                <div className="flex items-center w-full h-full nav-item-flex">
                  <i className="bi bi-chat-right-text text-sm text-black"></i>
                  <Link href="/">
                    <a
                      className="business-nav-link nav-link text-xs text-black mr-1"
                      aria-current="page"
                    >
                      دیدگاه ها
                    </a>
                  </Link>
                </div>
              </div>
              <div className="px-4 mb-1 bg-white rounded-md business-nav-item nav-item">
                <div className="flex items-center w-full h-full nav-item-flex">
                  <i className="bi bi-star text-sm text-black"></i>
                  <Link href="/">
                    <a
                      className="business-nav-link nav-link text-xs text-black mr-1"
                      aria-current="page"
                    >
                      علاقه مندی ها
                    </a>
                  </Link>
                </div>
              </div>
              <div className="px-4 mb-1 bg-white rounded-md business-nav-item nav-item">
                <div className="flex items-center w-full h-full nav-item-flex">
                  <i className="bi bi-newspaper text-sm text-black"></i>
                  <Link href="/marketing/dashboard">
                    <a
                      className="business-nav-link nav-link text-xs text-black mr-1"
                      aria-current="page"
                    >
                      مقالات
                    </a>
                  </Link>
                </div>
              </div>
              <div className="px-4 mb-1 bg-white rounded-md business-nav-item nav-item">
                <div className="flex items-center w-full h-full nav-item-flex">
                  <i className="bi bi-people text-sm text-black"></i>
                  <Link href="/">
                    <a
                      className="business-nav-link nav-link text-xs text-black mr-1"
                      aria-current="page"
                    >
                      مدیریت پرسنل
                    </a>
                  </Link>
                </div>
              </div>
              <Link href="/">
                <a className="flex items-center w-full h-full nav-item-flex px-4 mb-1 bg-white rounded-md business-nav-item nav-item">
                  <i className="bi bi-folder2-open text-sm text-black"></i>
                  <span
                    className="business-nav-link nav-link text-xs text-black mr-1"
                    aria-current="page"
                  >
                    شکایات
                  </span>
                </a>
              </Link>
              <div className="px-4 mb-1 bg-white rounded-md business-nav-item nav-item">
                <div className="flex items-center w-full h-full nav-item-flex">
                  <i className="bi bi-gear text-sm text-black"></i>
                  <Link href="/">
                    <a
                      className="business-nav-link nav-link text-xs text-black mr-1"
                      aria-current="page"
                    >
                      تنظیمات
                    </a>
                  </Link>
                </div>
              </div>
              <div className="px-4 mb-1 bg-white rounded-md business-nav-item nav-item">
                <div className="flex items-center w-full h-full nav-item-flex">
                  <i className="bi bi-link-45deg text-sm text-black"></i>
                  <Link href="/">
                    <a
                      className="business-nav-link nav-link text-xs text-black mr-1"
                      aria-current="page"
                    >
                      ارتباط با ما
                    </a>
                  </Link>
                </div>
              </div>
              <div className="px-4 mb-1 bg-white rounded-md business-nav-item nav-item">
                <div className="flex items-center w-full h-full nav-item-flex">
                  <i className="bi bi-link-45deg text-sm text-black"></i>
                  <Link href="/profile/dashboard">
                    <a
                      className="business-nav-link nav-link text-xs text-black mr-1"
                      aria-current="page"
                    >
                      برگشت به پروفایل
                    </a>
                  </Link>
                </div>
              </div>
              <div className="px-4 mb-1 bg-white rounded-md business-nav-item nav-item">
                <div className="flex items-center w-full h-full nav-item-flex">
                  <i className="bi bi-power text-sm text-black"></i>
                  <Link href="/">
                    <a
                      className="business-nav-link nav-link text-xs text-black mr-1"
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
  );
};

export default MarketingLayout;
