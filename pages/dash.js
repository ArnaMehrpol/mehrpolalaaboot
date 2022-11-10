import React from "react";

const dash = () => {
  return (
    <div className="dash-wrapper mt-5">
      <div className="dash-sidebar">
        <nav className=" mySidebarNavbar navbar-expand-lg bg-light">
          <div className="container-fluid sidebar-bg-color mt-2 text-center">
            <a className="navbar-brand text-white" href="#">
              Mehrpol
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
              className="collapse navbar-collapse sidebar-bg-color"
              id="navbarSupportedContent"
            >
              <ul className="  mb-2 mb-lg-0  ul-sidebar list-group">
                <li className="nav-item ">
                  <a className="nav-link active" aria-current="page" href="#">
                    خانه
                  </a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link" href="#">
                    محصولات
                  </a>
                </li>
                {/* ************************************************************* */}
                {/* <p>
                  <a
                    className="btn btn-primary text-white"
                    data-bs-toggle="collapse"
                    href="#collapseExample"
                    role="button"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                  >
                    نمایش لینک ها
                  </a>
                </p> */}
                {/* <div className="collapse" id="collapseExample"> */}
                {/* ************************************************************************* */}
                <div className="accordion accordion-flush" id="shahr">
                  <div className="accordion-item ">
                    <h2 className="accordion-header" id="flush-headingOne">
                      <button
                        className="  accordion-button collapsed sidebar-bg-color"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseOne"
                        aria-expanded="false"
                        aria-controls="flush-collapseOne"
                      >
                        <span className="m-2">شهرها</span>
                      </button>
                    </h2>
                    <div
                      id="flush-collapseOne"
                      className="accordion-collapse  collapse bg-secondary "
                      aria-labelledby="flush-headingOne"
                      data-bs-parent="#shahr"
                    >
                      <div className="accordion-body text-white">تهران</div>
                      <div className="accordion-body text-white">آمل</div>
                      <div className="accordion-body text-white">برازجان</div>
                      <div className="accordion-body text-white">نوسود</div>
                    </div>
                  </div>
                  {/* ************************************************************************** */}
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingTwo">
                      <button
                        className="accordion-button collapsed sidebar-bg-color"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseTwo"
                        aria-expanded="false"
                        aria-controls="flush-collapseTwo"
                      >
                        <span className="m-2">استان ها</span>
                      </button>
                    </h2>
                    <div
                      id="flush-collapseTwo"
                      className="accordion-collapse collapse bg-secondary"
                      aria-labelledby="flush-headingTwo"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body text-white">تهران</div>
                      <div className="accordion-body text-white">مرکزی</div>
                      <div className="accordion-body text-white">گیلان</div>
                      <div className="accordion-body text-white">مازندران</div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingThree">
                      <button
                        className="accordion-button collapsed sidebar-bg-color"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseThree"
                        aria-expanded="false"
                        aria-controls="flush-collapseThree"
                      >
                        <span className="m-2">شعبات</span>
                      </button>
                    </h2>
                    <div
                      id="flush-collapseThree"
                      className="accordion-collapse collapse bg-secondary"
                      aria-labelledby="flush-headingThree"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body text-white">تهران</div>
                      <div className="accordion-body text-white">اصفهان</div>
                      <div className="accordion-body text-white">شیراز</div>
                      <div className="accordion-body text-white">رشت</div>
                    </div>
                  </div>
                </div>
                {/* </div> */}

                {/* ************************************************************* */}
                <li className="nav-item ">
                  <a className="nav-link active" aria-current="page" href="#">
                    تقربحات
                  </a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link" href="#">
                    حسابداری
                  </a>
                </li>
                {/* ******************************************************************** */}
              </ul>
            </div>
          </div>
        </nav>
      </div>

      {/* *************************************************
       ************************************************* */}
      {/* Start Main */}
      <div className="dash-main">
        {/* ***************** Start Navbar *********************** */}
        <div id="main-navbar">
          <nav className="navbar navbar-expand-lg mySidebarNavbar">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">
                کاربر: علیرضا بهرام زادگان
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
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">
                      <i className="bi bi-bell position-relative pt-1">
                        <span className="position-absolute mt-1  top-0 start-100 translate-middle badge rounded-pill bg-danger">
                          +9
                        </span>
                      </i>
                    </a>
                  </li>
                  <li className="nav-item me-3">
                    <a className="nav-link" href="#">
                      <i className="bi bi-envelope position-relative pt-1">
                        <span className="position-absolute mt-1 top-0 start-100 translate-middle badge rounded-pill bg-danger">
                          +9
                        </span>
                      </i>
                    </a>
                  </li>
                </ul>
                <form className="d-flex" role="search">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="جستجو..."
                    aria-label="Search"
                  />
                  <button className="btn btn-outline-success" type="submit">
                    جستجو
                  </button>
                </form>
              </div>
            </div>
          </nav>
          {/* *************************** شروع پارت دوم مین ****************************** */}
          <div className="d-flex justify-content-between p-2">
            <p className="text-white">داشبورد</p>
            <a href="#" className="btn btn-sm btn-primary">
              گزارش
            </a>
          </div>
          {/* *************************** پابان پارت دوم مین ****************************** */}

          {/* *************************** شروع پارت سوم مین ****************************** */}
          <div className="main-part3-cards-parent">
            <div className="card text-white bg-primary mb-3 main-part3-cards col-3">
              <div className="card-header">تبلیغات</div>
              <div className="card-body">
                <h5 className="card-title">ماه جاری</h5>
                <p className="card-text">نتیجه</p>
              </div>
            </div>
            <div className="card text-white bg-secondary mb-3 main-part3-cards col-3">
              <div className="card-header">فروش کالا</div>
              <div className="card-body">
                <h5 className="card-title">ماه جاری</h5>
                <p className="card-text">156/258</p>
              </div>
            </div>
            <div className="card text-white bg-success mb-3 main-part3-cards col-3">
              <div className="card-header">شرکتهای جدید</div>
              <div className="card-body">
                <h5 className="card-title">ماه جاری</h5>
                <p className="card-text">275</p>
              </div>
            </div>
            <div className="card text-white bg-danger mb-3 main-part3-cards col-3">
              <div className="card-header">محصولات جدید</div>
              <div className="card-body">
                <h5 className="card-title">ماه جاری</h5>
                <p className="card-text">89741</p>
              </div>
            </div>
            <div className="card text-black bg-warning mb-3 main-part3-cards col-3">
              <div className="card-header">مرجوعی</div>
              <div className="card-body">
                <h5 className="card-title">ماه جاری</h5>
                <p className="card-text">987</p>
              </div>
            </div>
            <div className="card text-white bg-info mb-3 main-part3-cards col-3">
              <div className="card-header">استخدام جدید</div>
              <div className="card-body">
                <h5 className="card-title">ماه جاری</h5>
                <p className="card-text">222</p>
              </div>
            </div>
          </div>
          {/* *************************** پابان پارت سوم مین ****************************** */}

          {/* *************************** تمام مین رو باید قبل از این دیو بگذارید****************************** */}
        </div>
      </div>

      {/* ************** این پایینی آخر مین نوبار است ****************** */}
    </div>
  );
};

export default dash;
