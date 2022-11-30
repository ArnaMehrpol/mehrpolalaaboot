import React, { memo, useContext, useEffect, useState } from "react";
import Link from "next/link";
import MyContext from "../context/MyContext";
import { useRouter } from "next/router";
import { Cookies } from "next/dist/server/web/spec-extension/cookies";
import LoadingModal from "./LoadingModal";

const Navbar = memo(() => {
  const cookies = new Cookies();
  const router = useRouter();
  const { user, logout } = useContext(MyContext);
  const [myToken, setMyToken] = useState("");

  const tokenSetter = () => {
    const ttt = cookies.get("token", { path: "/" });
    console.log(ttt);
  };
  tokenSetter();
  // useEffect(() => {
  //   tokenSetter();
  // });
  cookies.get("token", { path: "/" });
  return (
    <>
      <nav className="navbar  myNavbar navbar-expand-lg fixed-top">
        <div className="container">
          {/* <Link href="#">
            <a className="navbar-brand p-2">
              <i className="bi bi-apple"></i> مهر پل
            </a>
          </Link> */}
          <button
            className="navbar-toggler bg-dark"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse divideNavbar"
            id="navbarSupportedContent"
          >
            {/* ***************************************************** */}

            <div>
              <ul className="navbar-nav mw-auto mb-2 mb-lg-0">
                <li className="nav-item ">
                  <Link href="/">
                    <a className="nav-link " aria-current="page">
                      <i className="bi bi-house-fill "></i> خانه
                    </a>
                  </Link>
                </li>
                <li className="nav-item ">
                  <Link href="/Products">
                    <a className="nav-link " aria-current="page">
                      <i className="bi bi-easel2-fill"></i> محصولات
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="#">
                    <a className="nav-link " aria-current="page">
                      <i className="bi bi-coin"></i> کسب و کارها
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="#">
                    <a className="nav-link " aria-current="page">
                      <i className="bi bi-book-half"></i> مجله
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="#">
                    <a className="nav-link " aria-current="page">
                      <i className="bi bi-briefcase-fill"></i> عضو کسب و کارهای
                      مهرپل شوید
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/aa/user-info/generalinfo">
                    {/* aa/user-info/generalinfo */}
                    <a className="nav-link " aria-current="page">
                      <i className="bi bi-book-half"></i> تست
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/products/add">
                    {/* aa/user-info/generalinfo */}
                    <a className="nav-link " aria-current="page">
                      <i className="bi bi-book-half"></i> 2تست
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/products/list">
                    {/* aa/user-info/generalinfo */}
                    <a className="nav-link " aria-current="page">
                      <i className="bi bi-book-half"></i> 3تست
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <ul className="navbar-nav mw-auto mb-2 mb-lg-0">
                {myToken ? (
                  <li className="nav-item">
                    <Link href="/dash">
                      <a className="nav-link" aria-current="page">
                        <i className="bi bi-speedometer"></i> داشبورد
                      </a>
                    </Link>
                  </li>
                ) : (
                  ""
                )}
                <li className="nav-item">
                  <Link href="/profile/cart">
                    <a className="nav-link" aria-current="page">
                      <span className="badge text-bg-danger my-badge animate-bounce">
                        4
                      </span>
                      <i className="bi bi-cart4"></i> سبد خرید
                    </a>
                  </Link>
                </li>
                {user ? (
                  <>
                    <li className="nav-item">
                      <Link href="/register">
                        <a className="nav-link startTab " aria-current="page">
                          <i className="bi bi-person-circle"></i>
                          {/* {user} */}
                          علیرضا بهرام زادگان خوش آمدید
                        </a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="#">
                        <a
                          onClick={logout}
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
                    <li className="nav-item">
                      <Link href="/login">
                        <a className="nav-link startTab " aria-current="page">
                          <i className="bi bi-door-open-fill"></i> ورود
                        </a>
                      </Link>
                    </li>
                    <li className="nav-item mt-1"> | </li>

                    <li className="nav-item">
                      <Link href="/register">
                        <a className="nav-link startTab " aria-current="page">
                          <i className="bi bi-file-text-fill"></i> ثبت نام
                        </a>
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </div>

            {/* **************************************************************************** */}
          </div>
        </div>
      </nav>
    </>
  );
});

export default Navbar;
