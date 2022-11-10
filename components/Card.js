import Link from "next/link";
import Image from "next/image";
import React from "react";

const Card = () => {
  return (
    <>
      <div className="card product-card">
        <Link href="#">
          <a className="card-img-tiles" data-abc="true">
            <div className="inner-main-img d-flex justify-content-center align-items-center">
              <div className="">
                <Link href="/">
                  <a className="inner-main-img-add text-decoration-none">
                    <i class="bi bi-plus-circle"></i>
                  </a>
                </Link>
                <div className="product-insert d-flex flex-column border rounded shadow">
                  <Link href="/">
                    <a className="border-bottom">
                      <i class="bi bi-heart"></i>
                    </a>
                  </Link>
                  <Link href="/">
                    <a className="">
                      <i class="bi bi-reply-fill"></i>
                    </a>
                  </Link>
                </div>
              </div>

              <div className="main-img p-4">
                <Image
                  src="/../public/assets/img/products/1.png"
                  alt="product_Category"
                  className="img-fluid"
                  width="300px"
                  height="350px"
                ></Image>
              </div>
            </div>
          </a>
        </Link>
        <div className="card-body">
          <a href="/" className="text-decoration-none">
            <p className="card-title product-card-title text-right text-dark fw-bold">
              دستگاه چوب خرد کن وسرشاخه خرد کن
            </p>
          </a>
          <div className="d-flex justify-content-between align-itemc-center">
            <div className="offer">
              <a href="/" className="text-decoration-none">
                <del className="price-offer text-muted ms-3">۱۵۶.۰۰۰</del>
              </a>
              <a
                href="/"
                className="btn-offer text-decoration-none text-white rounded"
              >
                <small className="fs-6">۳۱٪</small>
              </a>
            </div>
            <div className="product-score d-inline-flex">
              <i className="bi bi-star-fill me-1 text-warning"></i>
              <i className="bi bi-star-fill me-1 text-warning"></i>
              <i className="bi bi-star-fill me-1 text-warning"></i>
              <i className="bi bi-star-fill text-warning"></i>
            </div>
          </div>
          <div className="price my-2 d-inline-flex ">
            <a href="/" className="text-decoration-none text-dark pe-2">
              <p className="">۱۱۹.۰۰۰</p>
            </a>
            <div className="price-unity">
              <small>توما</small>
              <span>ن</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Card;
