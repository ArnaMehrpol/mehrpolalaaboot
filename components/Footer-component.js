import React, { Component } from "react";
const Footer = () => {
  return (
    <>
      <div className="footer-top mt-4">
        <div className="container footer-top-container px-2">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12 p-4">
              <div className="info">
                <div className="info_title d-inline-flex">
                  <svg
                    className="text-light me-2"
                    width="25"
                    height="25"
                    viewBox="0 0 37 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="10" cy="24" r="10" fill="currentColor"></circle>
                    <circle
                      cx="30"
                      cy="13"
                      r="7"
                      fill="currentColor"
                      fill-opacity="0.4"
                    ></circle>
                    <circle
                      cx="15"
                      cy="4"
                      r="4"
                      fill="currentColor"
                      fill-opacity="0.7"
                    ></circle>
                  </svg>
                  <h5 className="text-light me-2">اطلاعات مهرپل</h5>
                </div>
                <ul className="info_list">
                  <li className="mt-2">
                    <a href="#">درباره ما</a>
                  </li>
                  <li className="mt-2">
                    <a href="#">تماس باما</a>
                  </li>
                  <li className="mt-2">
                    <a href="#">قوانین و مقررات</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 p-4">
              <div className="info">
                <div className="info_title d-inline-flex">
                  <svg
                    className="text-light me-2"
                    width="25"
                    height="25"
                    viewBox="0 0 37 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="10" cy="24" r="10" fill="currentColor"></circle>
                    <circle
                      cx="30"
                      cy="13"
                      r="7"
                      fill="currentColor"
                      fill-opacity="0.4"
                    ></circle>
                    <circle
                      cx="15"
                      cy="4"
                      r="4"
                      fill="currentColor"
                      fill-opacity="0.7"
                    ></circle>
                  </svg>
                  <h5 className="text-light me-2">خدمات مشتریان </h5>
                </div>
                <ul className="info_list">
                  <li className="mt-2">
                    <a href="#">پرسش های متداول</a>
                  </li>
                  <li className="mt-2">
                    <a href="#">شرایط استفاده </a>
                  </li>
                  <li className="mt-2">
                    <a href="#">حریم خصوصی</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 p-4">
              <div className="info">
                <div className="info_title d-inline-flex">
                  <svg
                    className="text-light me-2"
                    width="25"
                    height="25"
                    viewBox="0 0 37 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="10" cy="24" r="10" fill="currentColor"></circle>
                    <circle
                      cx="30"
                      cy="13"
                      r="7"
                      fill="currentColor"
                      fill-opacity="0.4"
                    ></circle>
                    <circle
                      cx="15"
                      cy="4"
                      r="4"
                      fill="currentColor"
                      fill-opacity="0.7"
                    ></circle>
                  </svg>
                  <h5 className="text-light me-2">راهنمای خرید</h5>
                </div>
                <ul className="info_list">
                  <li className="mt-2">
                    <a href="#">نحوه ثبت سفارش</a>
                  </li>
                  <li className="mt-2">
                    <a href="#">رویه ارسال سفارش</a>
                  </li>
                  <li className="mt-2">
                    <a href="#">شیوه های پرداخت</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 p-4">
              <div className="info">
                <div className="info_title d-inline-flex">
                  <svg
                    className="text-light me-2"
                    width="25"
                    height="25"
                    viewBox="0 0 37 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="10" cy="24" r="10" fill="currentColor"></circle>
                    <circle
                      cx="30"
                      cy="13"
                      r="7"
                      fill="currentColor"
                      fill-opacity="0.4"
                    ></circle>
                    <circle
                      cx="15"
                      cy="4"
                      r="4"
                      fill="currentColor"
                      fill-opacity="0.7"
                    ></circle>
                  </svg>
                  <h5 className="text-light me-2">همراه ما باشید!</h5>
                </div>
                <div className="membership mt-2">
                  <small>
                    کاربر محترم جهت عضویت در خبرنامه سایت،ایمیل خود را وارد
                    نمایید.
                  </small>
                  <form className="email-box mt-4 d-flex justify-content-between align-items-center relative">
                    <div className="email-box-input">
                      <input
                        className="form-contorol input-group p-1 px-5 ps-12"
                        type="email"
                        name="email"
                        placeholder="آدرس پست الکترونیک"
                      ></input>
                      <i className="bi bi-envelope-paper px-2 text-secondery mx-2"></i>
                    </div>
                    <button class="btn btn-primary btn-small p-1" type="button">
                      <small>عضویت</small>
                      <i class="bi bi-arrow-left ms-1"></i>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <div className="footer-down">
          <div className="container">
            <div className="footer-down-flex d-flex justify-content-lg-between align-items-lg-center">
              <div className="social d-flex flex-column">
                <div class="social-icons d-flex mb-lg-1">
                  <a
                    href="#"
                    className="d-flex justify-content-center align-items-center rounded-circle me-3 bg-white"
                  >
                    <i className="bi bi-facebook text-dark"></i>
                  </a>
                  <a
                    href="#"
                    className="d-flex justify-content-center align-items-center rounded-circle me-3 bg-white"
                  >
                    <i className="bi bi-twitter text-dark"></i>
                  </a>
                  <a
                    href="#"
                    className="d-flex justify-content-center align-items-center rounded-circle me-3 bg-white"
                  >
                    <i className="bi bi-instagram text-dark"></i>
                  </a>
                  <a
                    href="#"
                    className="d-flex justify-content-center align-items-center rounded-circle me-3 bg-white"
                  >
                    <i className="bi bi-whatsapp text-dark"></i>
                  </a>
                </div>
                <small className="text-white">
                  کلیه حقوق این سایت متعلق به مهرپل است.
                </small>
              </div>
              <div className="d-flex mt-4">
                <a href="#">
                  <span className="d-flex justify-content-lg-center align-items-lg-center rounded-3 bg-white p-2 ms-1">
                    <img
                      src="./assets/img/certificates/2.png"
                      height="50"
                      width="50"
                    />
                  </span>
                </a>
                <a href="#">
                  <span className="d-flex justify-content-lg-center align-items-lg-center rounded-3 bg-white p-2 ms-1">
                    <img
                      src="./assets/img/certificates/3.png"
                      height="50"
                      width="50"
                    />
                  </span>
                </a>
                <a href="#">
                  <span className="d-flex justify-content-lg-center align-items-lg-center rounded-3 bg-white p-2 ms-1">
                    <img
                      src="./assets/img/certificates/4.png"
                      height="50"
                      width="50"
                    />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
