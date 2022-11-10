import React, { memo, useContext, useEffect, useState } from "react";
import Link from "next/link";
import MyContext from "../../../context/MyContext";
import { useRouter } from "next/router";
import Cookies from "universal-cookie";
import axios from "axios";

const Navbar = memo(() => {
  const [url, seturl] = useState("https://dfgsdfgsdfgj32gsdg.mehrpol.com/");
  const cookies = new Cookies();
  const router = useRouter();
  const { user, logout } = useContext(MyContext);

  const userData = cookies.get("dataUser");
  const userName = userData && `${userData.name} ${userData.last_name}`;

  const tokenSetter = () => {
    const ttt = cookies.get("token", { path: "/" });
  };
  tokenSetter();
  cookies.get("token", { path: "/" });

  //Logout
  const logoutFunction = (e) => {
    e.preventDefault();
    axios
      .post(url + "api/user/auth/logout", {
        headers: {
          Authorization: `Bearer ${cookies.get("token")}`,
        },
      })
      .then(function (response) {
        if (response) {
          cookies.set("token", "");
          toast.success("شما با موفقیت از سایت خارج شدید!");
          cookies.remove("dataUser");
          router.push("/");
        } else {
          toast.error("خروج شما با مشکل مواجه شد!");
        }
      });
  };

  return (
    <div className="mb-3">
      <div className="sm:hidden"></div>
      <div className="hidden lg:block w-[90%] max-w-[2000px] mt-3 mx-auto">
        <div className="flex lg:justify-between items-start text-[12px] xl:text-[16px] xl:font-semibold">
          <ul className="flex 2xl:justify-between items-center w-[45%] xl:w-[50%]">
            <li className="flex items-center text-[#1b1b1b] sm:px-1 lg:px-2 xl:px-3 rounded-xl cursor-pointer hover:bg-[#f43f5e] hover:text-[#ffffff] ">
              <Link href="/">
                <a className="nav-link flex items-center" aria-current="page">
                  <i className="bi bi-house ml-2 xl:text-[18px]"></i>
                  <p className="">خانه</p>
                </a>
              </Link>
            </li>
            <li className="flex items-center text-[#1b1b1b] sm:px-1 lg:px-2 xl:px-3 rounded-xl cursor-pointer hover:bg-[#f43f5e] hover:text-[#ffffff]">
              <i className="bi bi-archive ml-2 xl:text-[18px]"></i>
              <p className="">محصولات</p>
            </li>
            <li
              className="flex items-center text-[#1b1b1b] sm:px-1 lg:px-2 xl:px-3 rounded-xl cursor-pointer hover:bg-[#f43f5e] hover:text-[#ffffff]"
              style={{ cursor: "pointer" }}
            >
              <i className="bi bi-coin ml-2 xl:text-[18px]"></i>
              <p className="">کسب و کارها</p>
            </li>
            <li
              className="flex items-center text-[#1b1b1b] sm:px-1 lg:px-2 xl:px-3 rounded-xl cursor-pointer hover:bg-[#f43f5e] hover:text-[#ffffff]"
              style={{ cursor: "pointer" }}
            >
              <i className="bi bi-book ml-2 xl:text-[18px]"></i>
              <p className="">مجله</p>
            </li>
            <li
              className="flex items-center text-[#1b1b1b] sm:px-1 lg:px-2 xl:px-3 rounded-xl cursor-pointer hover:bg-[#f43f5e] hover:text-[#ffffff]"
              style={{ cursor: "pointer" }}
            >
              <i className="bi bi-question-diamond ml-2 xl:text-[18px]"></i>
              <p className="">راهنما</p>
            </li>
          </ul>
          <ul>
            <li
              className="flex items-center text-[#1b1b1b] sm:px-1 xl:px-3 rounded-xl cursor-pointer hover:bg-[#f43f5e] hover:text-[#ffffff]"
              style={{ cursor: "pointer" }}
            >
              <i className="bi bi-shop ml-2 xl:text-[18px]"></i>
              <p className="">کسب و کار خود را رایگان کنید</p>
            </li>
          </ul>
          <ul className="flex justify-end items-center">
            <li
              className="flex items-center text-[#1b1b1b] sm:px-1 xl:px-3 rounded-xl cursor-pointer hover:bg-[#f43f5e] hover:text-[#ffffff]"
              style={{ cursor: "pointer" }}
            >
              <Link href="/profile/cart">
                <a className="nav-link flex items-center" aria-current="page">
                  <span
                    hidden
                    className="badge text-bg-danger my-badge animate-bounce"
                  >
                    4
                  </span>
                  <i className="bi bi-cart3 ml-2 xl:text-[18px]"></i>
                  <p className="">سبد سفارش</p>
                </a>
              </Link>
            </li>
            {userName ? (
              <>
                <li className="nav-item">
                  <Link href="/profile/dashboard">
                    <a className="nav-link startTab " aria-current="page">
                      <i className="bi bi-person-circle"></i>
                      {userName.includes("null") ? "کابر" : userName}
                      {/* علیرضا بهرام زادگان خوش آمدید */}
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/">
                    <a
                      onClick={logoutFunction}
                      className="nav-link startTab "
                      aria-current="page"
                    >
                      <i className="bi bi-door-open-fill"></i> خروج
                    </a>
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li
                  className="flex items-center text-[#1b1b1b] sm:px-1 xl:px-3 rounded-xl cursor-pointer hover:bg-[#f43f5e] hover:text-[#ffffff]"
                  style={{ cursor: "pointer" }}
                >
                  <Link href="/login">
                    <a
                      className="nav-link startTab flex items-center"
                      aria-current="page"
                    >
                      <i className="bi bi-box-arrow-in-left ml-2 xl:text-[18px]"></i>
                      <p className="">ورود</p>
                    </a>
                  </Link>
                </li>
                <li
                  className="flex items-center text-[#1b1b1b] sm:px-1 xl:px-3 rounded-xl cursor-pointer hover:bg-[#f43f5e] hover:text-[#ffffff]"
                  style={{ cursor: "pointer" }}
                >
                  <Link href="/register">
                    <a
                      className="nav-link startTab flex items-center"
                      aria-current="page"
                    >
                      <i className="bi bi-person-plus ml-2 xl:text-[18px]"></i>
                      <p className="">ثبت نام</p>
                    </a>
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
        <div>
          {/* <div class="wrapper">
      <div class="item menu">
        <div class="linee linee1"></div>
        <div class="linee linee2"></div>
        <div class="linee linee3"></div>
      </div>
      <div class="item gallery">
        <div class="dot dot1"></div>
        <div class="dot dot2"></div>
        <div class="dot dot3"></div>
        <div class="dot dot4"></div>
        <div class="dot dot5"></div>
        <div class="dot dot6"></div>
      </div>
      <button class="item add">
        <div class="circle">
          <div class="close">
          <div class="line line1"></div>
          <div class="line line2"></div>
        </div>
        </div>
        <input type="search" placeholder="search" class="search" />
        
      </button>

      <div class="nav-items items1">
        <i class="fas fa-home"></i>
      </div>
      <div class="nav-items items2">
        <i class="fas fa-camera"></i>
      </div>
      <div class="nav-items items3">
        <i class="fas fa-folder"></i>
      </div>
      <div class="nav-items items4">
        <i class="fas fa-heart"></i>
      </div>
      <div class="box">
        <div class="box-line box-line1"></div>
        <div class="box-line box-line2"></div>
        <div class="box-line box-line3"></div>
        <div class="box-line box-line4"></div>
      </div>
    </div>

    <div class="effect"></div> */}
        </div>
        <div></div>
      </div>
    </div>
  );
});

export default Navbar;
