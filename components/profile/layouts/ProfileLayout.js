import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import Cookies from "universal-cookie";
import { fixNumbers } from "../../tools/ChangeLanguage";
import { useEffect } from "react";

import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from "../../../redux/loadState/LoadStateAction";
function ProfileLayout({ children }) {
  const cookies = new Cookies();
  const router = useRouter(); 
  const userData = cookies.get('dataUser');
  const userName = userData && `${userData.name} ${userData.last_name}`;
  

  return (
    <>
     <div className=" bg-light md:px-12  pt-3">
       
      {/* start container */}
      <div
        className="bg-light my-3"
        dir="rtl"
      >
        {/* start sidbar */}
        <div className="sidbar md:col-span-3 w-[300px] col-span-">
          <nav className="navbar navbar-profile navbar-profile-expand-lg navbar-expand-lg bg-white shadow">
            <div class="navbar-profile-container container-fluid">
              <div className="top-nav d-flex">
                <div className="top-nav-image relative">
                  <a className="navbar-img" href="#">
                    <Image
                      src="/../public/assets/img/avatars/1.png"
                      className="img-fluide border border-slate-100"
                      width="50px"
                      height="50px"
                    ></Image>
                  </a>
                </div>
                <div className="top-nav-info d-flex flex-column ms-3">
                  <p className="fw-bold">{userName && userName.includes('null') ? 'کاربر' : userName}</p>
                  <small className="text-muted">{userData && fixNumbers(userData.mobile)}</small>
                </div>
              </div>

              <button
                className="profile-navbar-toggler navbar-toggler custom-toggler bg-light"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <i className="bi bi-list"></i>
              </button>
              <div
                class="profile-navbar-collapse collapse product-navbar-collapse navbar-collapse w-100"
                id="navbarNav"
              >
                <div class="profile-navbar-nav navbar-nav">
                  <div className="profile-nav-item nav-item group d-flex justify-content-between align-items-center border-bottom border-muted p-2">
                    <div className="nav-item-flex d-flex align-items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5 text-black group-hover:text-blue-500"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                        />
                      </svg>
                      <Link href="/profile/dashboard">
                        <a
                          className={`profile-nav-link nav-link text-dark group-hover:text-blue-500 lg:mr-0 mr-2 `}
                          aria-current="page"
                          href="#"
                        >
                          داشبورد
                        </a>
                      </Link>
                    </div>
                    <div className="profile-left-icone">
                      <a href="#">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-4 h-4 text-black group-hover:text-blue-500"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 19.5L8.25 12l7.5-7.5"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div class="profile-nav-item nav-item d-flex justify-content-between align-items-center border-bottom border-muted p-2">
                    <div className="nav-item-flex d-flex align-items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5 text-black"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                        />
                      </svg>
                      <Link href="/profile/info">
                        <a
                          className={`profile-nav-link nav-link active text-dark lg:mr-0 mr-2 ${
                            router.pathname === "/profile/info" ? "" : ""
                          }`}
                          aria-current="page"
                          href="#"
                        >
                          اطلاعات حساب کاربری
                        </a>
                      </Link>
                    </div>
                    <div className="">
                      <a href="#">
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
                            d="M15.75 19.5L8.25 12l7.5-7.5"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div class="profile-nav-item d-flex justify-content-between align-items-center border-bottom border-muted p-2 ">
                    <div className="nav-item-flex d-flex align-items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5 text-black"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                        />
                      </svg>
                      <Link href="/profile/orders">
                        <a
                          className={`profile-nav-link nav-link active text-dark lg:mr-0 mr-2 ${
                            router.pathname === "/profile/orders" ? "" : ""
                          }`}
                          aria-current="page"
                          href="#"
                        >
                          سفارش ها
                        </a>
                      </Link>
                    </div>
                    <div className="profile-left-icone">
                      <a href="#">
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
                            d="M15.75 19.5L8.25 12l7.5-7.5"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div class="profile-nav-item d-flex justify-content-between align-items-center border-bottom border-muted p-2">
                    <div className="nav-item-flex d-flex align-items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5 text-black"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                        />
                      </svg>
                      <Link href="/profile/cart">
                        <a
                          className={`profile-nav-link nav-link active text-dark lg:mr-0 mr-2 ${
                            router.pathname === "/profile/cart" ? "" : ""
                          }`}
                          aria-current="page"
                          href="#"
                        >
                          سبد خرید
                        </a>
                      </Link>
                    </div>
                    <div className="profile-left-icone">
                      <a href="#">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-4 h-4 text-black"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 19.5L8.25 12l7.5-7.5"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div class="profile-nav-item d-flex justify-content-between align-items-center border-bottom border-muted p-2">
                    <div className="nav-item-flex d-flex align-items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5 text-black"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
                        />
                      </svg>
                      <Link href="/profile/financials/financial">
                        <a
                          class={`profile-nav-link nav-link active text-dark lg:mr-0 mr-2 ${
                            router.pathname === "/profile/financial" ? "" : ""
                          }`}
                          aria-current="page"
                          href="#"
                        >
                          مالی
                        </a>
                      </Link>
                    </div>
                    <div className="profile-left-icone">
                      <a href="#">
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
                            d="M15.75 19.5L8.25 12l7.5-7.5"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div class="profile-nav-item nav-item d-flex justify-content-between align-items-center border-bottom border-muted p-2">
                    <div className="nav-item-flex d-flex align-items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5 text-black"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                        />
                      </svg>
                      <Link href="/profile/favorites">
                        <a
                          className="profile-nav-link nav-link active text-dark lg:mr-0 mr-2 ${router.pathname === '/profile/favorites' ? 'bg-blue-500 text-blue-50' : ''}"
                          aria-current="page"
                          href="#"
                        >
                          علاقه مندی ها
                        </a>
                      </Link>
                    </div>
                    <div className="profile-left-icone">
                      <a href="#">
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
                            d="M15.75 19.5L8.25 12l7.5-7.5"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div class="profile-nav-item nav-item d-flex justify-content-between align-items-center border-bottom border-muted p-2">
                    <div className="nav-item-flex d-flex align-items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5 text-black"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                        />
                      </svg>
                      <Link href="/profile/comments">
                        <a
                          className={`profile-nav-link nav-link active text-dark lg:mr-0 mr-2 ${
                            router.pathname === "/profile/comments" ? "" : ""
                          }`}
                          aria-current="page"
                          href="#"
                        >
                          دیدگاه ها
                        </a>
                      </Link>
                    </div>
                    <div className="profile-left-icone">
                      <a href="#">
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
                            d="M15.75 19.5L8.25 12l7.5-7.5"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div class="profile-nav-item nav-item d-flex justify-content-between align-items-center border-bottom border-muted p-2">
                    <div className="nav-item-flex d-flex align-items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5 text-black"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                        />
                      </svg>
                      <Link href="/profile/messenger/Messenger">
                        <a
                          className={`profile-nav-link nav-link active text-dark lg:mr-0 mr-2 ${
                            router.pathname === "/profile/message" ? "" : ""
                          }`}
                          aria-current="page"
                          href="#"
                        >
                          پیام ها
                        </a>
                      </Link>
                    </div>
                    <div className="profile-left-icone d-flex">
                      <span class="badge bg-danger rounded me-2 d-flex justify-content-center align-items-center">
                        ۶
                      </span>
                      <a href="#">
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
                            d="M15.75 19.5L8.25 12l7.5-7.5"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div class="profile-nav-item nav-item d-flex justify-content-between align-items-center border-bottom border-muted p-2">
                    <div className="nav-item-flex d-flex align-items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5 text-black"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <Link href="/profile/history">
                        <a
                          className={`profile-nav-link nav-link active text-dark lg:mr-0 mr-2 ${
                            router.pathname === "/profile/history" ? "" : ""
                          }`}
                          aria-current="page"
                          href="#"
                        >
                          بازدیدهای اخیر
                        </a>
                      </Link>
                    </div>
                    <div className="profile-left-icone d-flex align-items-center justify-content-center">
                      <a href="#">
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
                            d="M15.75 19.5L8.25 12l7.5-7.5"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div class="profile-nav-item nav-item d-flex justify-content-between align-items-center border-bottom border-muted p-2">
                    <div className="nav-item-flex d-flex align-items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5 text-black"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                        />
                      </svg>
                      <Link href="/profile/scores/Scores">
                        <a
                          className="profile-nav-link nav-link active text-dark lg:mr-0 mr-2 ${router.pathname === '/profile/scoring' ? '' : ''}"
                          aria-current="page"
                          href="#"
                        >
                          امتیاز دهی
                        </a>
                      </Link>
                    </div>
                    <div className="profile-left-icone d-flex align-items-center justify-content-center">
                      <a href="#">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-4 h-4 text-black"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 19.5L8.25 12l7.5-7.5"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div class="profile-nav-item nav-item d-flex justify-content-between align-items-center p-2">
                    <div className="nav-item-flex d-flex align-items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5 text-black"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                        />
                      </svg>
                      <Link href="/marketing/dashboard">
                        <a
                          className="profile-nav-link nav-link active text-dark lg:mr-0 mr-2 ${router.pathname === '/profile/scoring' ? '' : ''}"
                          aria-current="page"
                          href="#"
                        >
                           ایجاد کسب و کار
                        </a>
                      </Link>
                    </div>
                    <div className="profile-left-icone d-flex align-items-center justify-content-center">
                      <a href="#">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-4 h-4 text-black"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 19.5L8.25 12l7.5-7.5"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
        {/* end sidbar */}
        {/* start mainbar */}
        {/* <div className="mainbar-content md:col-span-9 col-span-12 md:pb-20 md:mr-3 md:px-0 px-2">
          {children}
        </div> */}
        {/* end mainbar */}
      </div>
      {/* end container */}
     </div>
    </>
  );
}

export default ProfileLayout