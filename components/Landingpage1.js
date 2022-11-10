import React, { useEffect, useState } from "react";
import Link from "next/link";
// import SearchInput from "./searchInput";

const Landingpage1 = () => {
  const [searchInput, setSearchInput] = useState(null);
  useEffect(() => {
    // setSearchInput(<SearchInput />);
  }, []);
  return (
    <>
      <h1 className="text-center IranSanse mb-5">
        خرید و فروش خود را با
        <span className="text-danger animate-pulse"> مهرپل </span>
        ساده کنید
      </h1>
      <div className="mt-3">
        <form action="#" method="GET" className="search-bar-form IranSanse">
          <div className="searchParent">
            <input
              type="text"
              className="form-control searchInput"
              id="mainSearch"
              placeholder="در بیشتر از یک میلیون کالا و خدمات جستجو کنید..."
            />
            <span className="searchButton  bg-red-300">
              <i className="bi bi-search "></i>
            </span>
          </div>

          {/* ************************************************************************ */}

          {/* ************************************************************************* */}
        </form>

        <nav className="navbar mt-4 searchNavbaar navbar-expand-lg ">
          <div className="container">
            <a className="navbar-brand noStyleLink" href="#">
              بیشترین جستجوها :
            </a>
            <button
              className="navbar-toggler"
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
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav  mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link href="#">
                    <a className="nav-link" aria-current="page">
                      کفش آدیداس
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="#">
                    <a className="nav-link" aria-current="page">
                      ماشین چمن زنی
                    </a>
                  </Link>
                </li>
                <Link href="#">
                  <a className="nav-link" aria-current="page">
                    صندلی چرمی اداری
                  </a>
                </Link>
              </ul>
            </div>
          </div>
        </nav>
        <div className="d-block  text-center IranSanse mt-5">
          <h4 className="IranSanse">ساده ترین راه برای سفارش کالا و خدمات</h4>
          <p className="IranSanse">
            با بزرگترین سبد کالا و خدمات، قیمت گذاری شفاف و پشتیبانی دائمی،
            کارایی بازار مهرپل را بهبود بخشید
          </p>
        </div>
      </div>
    </>
  );
};

export default Landingpage1;
