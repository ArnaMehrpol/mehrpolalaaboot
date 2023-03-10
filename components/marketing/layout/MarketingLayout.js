import Link from "next/link";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/router";
import { useState } from "react";

const MarketingLayout = ({ children }) => {
  const router = useRouter();
  const [showMe, setShowMe] = useState(false);
  const [showMe2, setShowMe2] = useState(false);

  return (
    <div className="col-span-12 business-panel-sibar md:col-span-2">
      {/* <div className="col-12 business-panel-sibar col-md-12"> */}
      <nav className="navbar navbar-business  navbar-business-expand-lg navbar-expand-lg">
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
                          <p className="text-xs font-semibold">?????????????? ??????</p>
                          <small className="text-xs">???????? ??????????</small>
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
                          <p className="text-xs font-semibold">?????????????? ??????</p>
                          <small className="text-xs">???????? ??????????</small>
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
                          <p className="text-xs font-semibold">?????????????? ??????</p>
                          <small className="text-xs">???????? ??????????</small>
                        </div>
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
              <p className="text-xs font-semibold py-0.5">?????????????? ?????? ????</p>
              <small className="text-xs">?????? ?????????? </small>
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
                      ??????????????
                    </a>
                  </Link>
                </div>
              </div>
              <div className=" px-4 my-1 bg-white group-hover:text-blue-500 rounded-md business-nav-item nav-item">
                <div className="flex items-center w-32 h-full nav-item-flex">
                  <i className="bi bi-person text-sm text-black"></i>
                  <Link href="/marketing/info/generalinfo">
                    <a
                      className="business-nav-link  nav-link  mr-1 ${router.pathname === '/../../user-info/about' ? 'bg-blue-500 text-blue-50' : ''} "
                      aria-current="page"
                    >
                      <span className="text-xs w-full  text-black">
                        ?????????????? ?????? ?? ??????
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
                      ????????????????
                    </a>
                  </Link>
                </div>
              </div>
              {/* az inja */}
              <div
                className="accordion mb-1 border-none"
                id="accordionPanelsStayOpenExample"
              >
                <div className="w-full accordion-item border-none relative ">
                  <div
                    className="cursor-pointer"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseOne"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseOne"
                  >
                    <h2
                      className="accordion-header px-4 py-2"
                      id="panelsStayOpen-headingOne"
                    >
                      <a
                        onClick={() => {
                          setShowMe(!showMe);
                        }}
                        className="text-xs collapsed text-slate-600"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseOne"
                        aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseOne"
                      >
                        <i
                          onChange={() => {
                            setShowMe(!showMe);
                          }}
                          className="bi bi-layout-text-window text-xs text-black ml-2"
                        ></i>
                        ??????????????
                      </a>
                      {showMe ? (
                        <i className="bi bi-chevron-compact-down mr-11"></i>
                      ) : (
                        <i className="bi bi-chevron-compact-left mr-11"></i>
                      )}
                    </h2>
                  </div>

                  <div
                    id="panelsStayOpen-collapseOne"
                    className="accordion-collapse collapse  bg-[##f3f4f6 ]"
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
                          <a
                            className="mr-1 text-[12px] text-slate-600"
                            role={"button"}
                          >
                            ??. ???????????? ??????????
                          </a>
                        </Link>
                      </div>
                      <div className="flex items-center">
                        <span className="flex items-center shadow-lg justify-center w-8 h-8 ml-2 bg-white">
                          <i class="bi bi-list-check"></i>
                        </span>
                        <Link href="/marketing/products/list">
                          <a className="mr-1 text-[12px] text-slate-600">
                            ??. ???????? ??????????????
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
                            ??. ?????????????? ??????????????
                          </a>
                        </Link>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
              {/* Ta inje Mahsoulat */}
              <div className="px-4 mb-1 bg-white rounded-md business-nav-item nav-item">
                <div className="flex items-center w-full h-full nav-item-flex">
                  <i className="bi bi-diagram-3 text-sm text-black"></i>
                  <Link href="#">
                    <a
                      className="business-nav-link nav-link text-xs text-black mr-1"
                      aria-current="page"
                    >
                      ??????????
                    </a>
                  </Link>
                </div>
              </div>
              <div
                className="accordion mb-1 border-none"
                id="accordionPanelsStayOpenOrders"
              >
                <div className="w-full accordion-item border-none relative ">
                  <div
                    className="cursor-pointer"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseOneOrders"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseOneOrders"
                  >
                    <h2
                      className="accordion-header px-4 py-2"
                      id="panelsStayOpen-headingOne"
                    >
                      <a
                        onClick={() => {
                          setShowMe2(!showMe2);
                        }}
                        className="text-xs collapsed text-slate-600"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseOneOrders"
                        aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseOneOrders"
                      >
                        <i className="bi bi-person-lines-fill text-sm text-black ml-2"></i>
                        ?????????? ????
                      </a>
                      {showMe2 ? (
                        <i className="bi bi-chevron-compact-down mr-10"></i>
                      ) : (
                        <i className="bi bi-chevron-compact-left mr-10"></i>
                      )}
                    </h2>
                  </div>
                  <div
                    id="panelsStayOpen-collapseOneOrders"
                    className="accordion-collapse collapse  bg-[##f3f4f6 ]"
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
                            ??. ?????????? ??????????????
                          </a>
                        </Link>
                      </div>
                      <div className="flex items-center">
                        <span className="flex items-center shadow-lg justify-center w-8 h-8 ml-2 bg-white">
                          <i class="bi bi-list-check"></i>
                        </span>
                        <Link href="/marketing/orders/Request">
                          <a className="mr-1 text-[12px] text-slate-600">
                            ??. ?????????????? ????
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="px-4 mb-1 bg-white rounded-md business-nav-item nav-item">
                <div className="flex items-center w-full h-full nav-item-flex">
                  <i className="bi bi-person-lines-fill text-sm text-black"></i>
                  <Link href="/">
                    <a
                      className="business-nav-link nav-link text-xs text-black mr-1"
                      aria-current="page"
                    >
                      ?????????? ????
                    </a>
                  </Link>
                </div>
              </div> */}
              <div className="px-4 mb-1 bg-white rounded-md business-nav-item nav-item">
                <div className="flex items-center w-full h-full nav-item-flex">
                  <i className="bi bi-cart2 text-sm text-black"></i>
                  <Link href="/">
                    <a
                      className="business-nav-link nav-link text-xs text-black mr-1"
                      aria-current="page"
                    >
                      ?????? ????????
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
                      ????????
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
                      ???????? ????
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
                      ???????????? ????
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
                      ?????????? ???????? ????
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
                      ????????????
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
                      ???????????? ??????????
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
                    ????????????
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
                      ??????????????
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
                      ???????????? ???? ????
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
                      ?????????? ???? ??????????????
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
                      ????????
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
