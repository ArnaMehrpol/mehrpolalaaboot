import React from "react";
import Card from "../products/Card";
import AddressBar from "../products/AddressBar";
import BestProduct from "../products/BestProduct";
import Brand from "../products/Brand";
import Magazine from "../products/Magazine";

const Products = () => {
  return (
    <>
      <div className="container-fluid px-5  mx-lg-auto">
        <AddressBar />
        <div className="row my-productsPage">
          <div className="my-sidebar h-100 border border-munted rounded p-3">
            {/* ************** */}
            <div className="dastebandi border-bottom border-munted">
              <div className="border-blue bg-primary"></div>
              <p className="text-muted fw-bold">دسته بندی</p>
            </div>
            <div className="my-products-categories my-lg-4">
              <div className="my-products-category">
                <input
                  type="radio"
                  id="sanaye-choob"
                  name="products-category"
                  value=""
                />
                <label className="text-muted ms-2 mb-2" for="sanaye-choob">
                  {" "}
                  صنایع چوب
                </label>
              </div>
              <div className="my-products-category">
                <input
                  type="radio"
                  id="sanaye-pooshak"
                  name="products-category"
                  value=""
                />
                <label className="text-muted ms-2 mb-2" for="sanaye-pooshak">
                  پوشاک
                </label>
              </div>
              <div className="my-products-category">
                <input
                  type="radio"
                  id="sanaye-bargh-electronic"
                  name="products-category"
                  value=""
                />
                <label
                  className="text-muted h6 ms-2 mb-2"
                  for="sanaye-bargh-electronic"
                >
                  برق و الکترونیک
                </label>
              </div>
              <div className="my-products-category">
                <input
                  type="radio"
                  id="sanaye-amlak"
                  name="products-category"
                  value=""
                />
                <label className="text-muted h6 ms-2 mb-2" for="sanaye-amlak">
                  املاک
                </label>
              </div>
              <div className="my-products-category">
                <input
                  type="radio"
                  id="sanaye-lavazemkhanegi"
                  name="products-category"
                  value=""
                />
                <label
                  className="text-muted h6 ms-2 mb-2"
                  for="sanaye-lavazemkhanegi"
                >
                  لوازم خانگی
                </label>
              </div>
              <div className="my-products-category">
                <input
                  type="radio"
                  id="sanaye-keshavarzi"
                  name="products-category"
                  value=""
                />
                <label
                  className="text-muted h6 ms-2 mb-2"
                  for="sanaye-lavazemkhanegi"
                >
                  کشاورزی
                </label>
              </div>
              <div className="my-products-category">
                <input
                  type="radio"
                  id="sanaye-aab"
                  name="products-category"
                  value=""
                />
                <label className="text-muted h6 ms-2 mb-2" for="sanaye-aab">
                  آب
                </label>
              </div>
              <div className="my-products-category">
                <input
                  type="radio"
                  id="sanaye-plastic"
                  name="products-category"
                  value=""
                />
                <label className="text-muted ms-2 mb-2" for="sanaye-plastic">
                  پلاستیک
                </label>
              </div>
              <div className="my-products-category">
                <input
                  type="radio"
                  id="sanaye-plastic"
                  name="products-khodro"
                  value=""
                />
                <label className="text-muted h6 ms-2" for="sanaye-khodro">
                  خودرو
                </label>
              </div>
            </div>
            <div className="mahdodehGheymat border-bottom border-munted relative my-lg-4">
              <div className="border-mahdodehGheymat bg-primary"></div>
              <p className="text-muted fw-bold">محدوده قیمت</p>
            </div>
            <div className="az-ta-price pb-4">
              <label for="az-price" className="text-muted">
                از
              </label>
              <span className="text-muted ms-1">:</span>
              <input
                type="number"
                id="az-price"
                name="az-price"
                value="0"
                className="border borer-muted rounded"
              />
            </div>
            <div className="az-ta-price">
              <label for="ta-price" className="text-muted">
                تا
              </label>
              <span className="text-muted ms-1">:</span>
              <input
                type="number"
                id="ta-price"
                name="ta-price"
                value="0"
                className="border borer-muted rounded"
              />
            </div>
            <div className="az-ta-price my-3">
              <small className="text-muted text-start fw-semibold">
                قیمت ها به تومان می باشد.
              </small>
            </div>
            <div className="inventory border-bottom border-munted relative my-lg-4 relative">
              <div className="border-inventory bg-primary"></div>
              <p className="text-muted fw-bold">موجودی</p>
            </div>

            <div className="kalahaye-mojood">
              <small className="text-muted">فقط کالاهای موجود</small>
              <div class="form-check form-switch">
                <input
                  class="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                ></input>
              </div>
            </div>
            {/* End my-products-category */}
          </div>
          <div className="h-100 mainbar ">
            <nav class="navbar navbar-expand-lg bg-light" dir="ltr">
              <div class="container-fluid">
                <div className="product-count flex" dir="rtl">
                  <span className="text-muted pe-2">3.124</span>
                  <span className="text-muted">کالا</span>
                </div>
                <button
                  className="navbar-toggler collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <i class="bi bi-list"></i>
                </button>
                <div
                  className="product-navbar-collapse navbar-collapse collapse"
                  id="navbarNav"
                  dir="rtl"
                >
                  <ul className="navbar-nav flex flex-lg-row">
                    <li className="nav-item d-flex align-items-center">
                      <i className="bi bi-list-ul me-2 text-muted"></i>
                      <span className="nav-link text-muted" aria-current="page">
                        {" "}
                        ترتیب نمایش :
                      </span>
                    </li>
                    <li className="nav-item dropdown list-unstyled">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        id="navbarDarkDropdownMenuLink"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        جزییات
                      </a>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="navbarDarkDropdownMenuLink"
                      >
                        <li>
                          <a className="dropdown-item" href="#">
                            <div className="my-products-category">
                              <input
                                type="radio"
                                id="sanaye-choob"
                                name="products-category"
                                value=""
                              />
                              <label
                                className="text-muted ms-2 mb-2"
                                for="sanaye-choob"
                              >
                                کمد
                              </label>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            <div className="my-products-category">
                              <input
                                type="radio"
                                id="sanaye-pooshak"
                                name="products-category"
                                value=""
                              />
                              <label
                                className="text-muted ms-2 mb-2"
                                for="sanaye-pooshak"
                              >
                                مبلمان
                              </label>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            <div className="my-products-category">
                              <input
                                type="radio"
                                id="sanaye-pooshak"
                                name="products-category"
                                value=""
                              />
                              <label
                                className="text-muted ms-2 mb-2"
                                for="sanaye-pooshak"
                              >
                                تخت
                              </label>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            <div className="my-products-category">
                              <input
                                type="radio"
                                id="sanaye-pooshak"
                                name="products-category"
                                value=""
                              />
                              <label
                                className="text-muted ms-2 mb-2"
                                for="sanaye-pooshak"
                              ></label>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            <div className="my-products-category">
                              <input
                                type="radio"
                                id="sanaye-pooshak"
                                name="products-category"
                                value=""
                              />
                              <label
                                className="text-muted ms-2 mb-2"
                                for="sanaye-pooshak"
                              ></label>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            <div className="my-products-category">
                              <input
                                type="radio"
                                id="sanaye-pooshak"
                                name="products-category"
                                value=""
                              />
                              <label
                                className="text-muted ms-2 mb-2"
                                for="sanaye-pooshak"
                              ></label>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            <div className="my-products-category">
                              <input
                                type="radio"
                                id="sanaye-pooshak"
                                name="products-category"
                                value=""
                              />
                              <label
                                className="text-muted ms-2 mb-2"
                                for="sanaye-pooshak"
                              ></label>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            <div className="my-products-category">
                              <input
                                type="radio"
                                id="sanaye-pooshak"
                                name="products-category"
                                value=""
                              />
                              <label
                                className="text-muted ms-2 mb-2"
                                for="sanaye-pooshak"
                              ></label>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            <div className="my-products-category">
                              <input
                                type="radio"
                                id="sanaye-pooshak"
                                name="products-category"
                                value=""
                              />
                              <label
                                className="text-muted ms-2 mb-2"
                                for="sanaye-pooshak"
                              ></label>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">
                        <span className="text-muted">پرفروش ترین</span>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">
                        <span className="text-muted">پربازدیدترین</span>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">
                        <span className="text-muted">جدیدترین</span>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">
                        <span className="text-muted">ارزان ترین</span>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">
                        <span className="text-muted">گران ترین</span>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">
                        {" "}
                        <span className="text-muted">بیشترین تخفیف</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
            <div className="product-row row my-4">
              <div className="product-col col-lg-3 col-md-4 mb-lg-0 mb-sm-4">
                <Card />
              </div>
              <div className="product-col col-lg-3 col-md-4 mb-lg-0 mb-sm-4">
                <Card />
              </div>
              <div className="product-col col-lg-3 col-md-4 mb-lg-0 mb-sm-4">
                <Card />
              </div>
              <div className="product-col col-lg-3 d-md-none d-lg-block mb-lg-0 mb-sm-4">
                <Card />
              </div>
            </div>
            <div className="product-row row my-4">
              <div className="product-col col-lg-3 col-md-4 mb-lg-0 mb-sm-4">
                <Card />
              </div>
              <div className="product-col col-lg-3 col-md-4 mb-lg-0 mb-sm-4">
                <Card />
              </div>
              <div className="product-col col-lg-3 col-md-4 mb-lg-0 mb-sm-4">
                <Card />
              </div>
              <div className="product-col col-lg-3 d-md-none d-lg-block mb-lg-0 mb-sm-4">
                <Card />
              </div>
            </div>
            <div className="product-row row my-4">
              <div className="product-col col-lg-3 col-md-4 mb-lg-0 mb-sm-4">
                <Card />
              </div>
              <div className="product-col col-lg-3 col-md-4 mb-lg-0 mb-sm-4">
                <Card />
              </div>
              <div className="product-col col-lg-3 col-md-4 mb-lg-0 mb-sm-4">
                <Card />
              </div>
              <div className="product-col col-lg-3 d-md-none d-lg-block mb-lg-0 mb-sm-4">
                <Card />
              </div>
            </div>
            <div className="product-row row my-4">
              <div className="product-col col-lg-3 col-md-4 mb-lg-0 mb-sm-4">
                <Card />
              </div>
              <div className="product-col col-lg-3 col-md-4 mb-lg-0 mb-sm-4">
                <Card />
              </div>
              <div className="product-col col-lg-3 col-md-4 mb-lg-0 mb-sm-4">
                <Card />
              </div>
              <div className="product-col col-lg-3 d-d-md-none d-lg-block mb-lg-0 mb-sm-4">
                <Card />
              </div>
            </div>
            <div className="product-row row my-4">
              <div className="product-col col-lg-3 col-md-4 mb-lg-0 mb-sm-4">
                <Card />
              </div>
              <div className="product-col col-lg-3 col-md-4 mb-lg-0 mb-sm-4">
                <Card />
              </div>
              <div className="product-col col-lg-3 col-md-4 mb-lg-0 mb-sm-4">
                <Card />
              </div>
              <div className="product-col col-lg-3 d-d-md-none d-lg-block mb-lg-0 mb-sm-4">
                <Card />
              </div>
            </div>
            <div className="product-row row my-4">
              <div className="product-col col-lg-3 col-md-4 mb-lg-0 mb-sm-4">
                <Card />
              </div>
              <div className="product-col col-lg-3 col-md-4 mb-lg-0 mb-sm-4">
                <Card />
              </div>
              <div className="product-col col-lg-3 col-md-4 mb-lg-0 mb-sm-4">
                <Card />
              </div>
              <div className="product-col col-lg-3 d-d-md-none d-lg-block mb-lg-0 mb-sm-4">
                <Card />
              </div>
            </div>
            <nav aria-label="Page navigation example">
              <ul className="pagination d-flex flex-row  justify-content-end">
                <li className="page-item">
                  <a
                    className="page-link text-dark"
                    href="#"
                    aria-label="Previous"
                  >
                    <span aria-hidden="true">&laquo;</span>
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link text-dark" href="#">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link text-dark" href="#">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link text-dark" href="#">
                    3
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link text-dark" href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <BestProduct />
      <Brand />
      <Magazine />
    </>
  );
};
export default Products;
