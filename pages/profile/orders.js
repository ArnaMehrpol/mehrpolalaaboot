import Image from "next/image";
import React from "react";
import Link from "next/link";
import Pagination from "../../components/profile/components/pagination/Pagination";
import ShowpathProfile from '../../components/profile/components/showPathProfile/ShowpathProfile'
import ProfileLayout from '../../components/profile/layouts/ProfileLayout'

const orders = () => {
  return (
    <>
      <div className=' max-w-screen-2xl bg-light md:px-12 pt-3 mx-auto'
        dir="rtl">
        <div>
        <ShowpathProfile/>
        </div>
        <div className='flex '>
          <div>
            <ProfileLayout/>
          </div>
          <div className="profile-content w-[1100px] md:col-span-9 col-span-12 md:pb-20 md:mr-3 md:px-0 px-2">
            <div className="mainTitle mb-4 md:mt-0 mt-4">
              <h6 className="text-muted fw-bold border-b-2 border-blue-500 pb-1.5 w-[70px]">
                سفارش ها
              </h6>
            </div>
            <div>
            <form className="search-flex w-full h-full flex items-center justify-center mb-3">
              <div className="search-bar relative w-75">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none bg-blue-500 hover:bg-blue-400 p-2 rounded-md rounded-r-none">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <input
                  type="text"
                  id="simple-search"
                  className="bg-white border border-gray-100 hover:bg-blue-500 text-gray-900 text-sm rounded-md focus:outline-none focus:ring-blue-400  block w-full pl-10 p-2"
                  placeholder="دنبال چی میگردی؟"
                  required
                />
              </div>
              <div className="filter-btn pr-4">
                <Link href="/">
                  <a
                    className=" px-4 py-1 bg-blue-500 rounded-sm"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <span className="text-sm text-white">فیلتر</span>
                  </a>
                </Link>
                <div className="dropdown-menu">
                  <div className="w-98 h-full flex lg:flex-row flex-col items-center justify-center mb-3 p-1">
                    <div className="w-72">
                      <label className="text-xs text-slate-600 lg:pr-2.5 mb-2 mx-2">
                        تاریخ
                      </label>
                      <div className=" border border-slate-500 flex items-center p-[0.38rem] rounded-md bg-white">
                        <div className="flex items-center">
                          <span className="text-xs text-slate-600">از</span>
                          <input
                            type="text"
                            className="w-full rounded-sm focus:outline-none overflow-hidden mx-1"
                          />
                        </div>
                        <div className=" flex items-center">
                          <span className="text-xs text-slate-600">تا</span>
                          <input
                            type="text"
                            className="w-full mx-2 rounded-sm focus:outline-none overflow-hidden"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="w-72 mx-2">
                      <label className="text-xs text-slate-600 lg:pr-2.5 mb-2  mx-2">
                        مبلغ
                      </label>
                      <div className=" border border-slate-500 flex items-center p-[0.38rem] rounded-md bg-white">
                        <div className="flex items-center">
                          <span className="text-xs text-slate-600">از</span>
                          <input
                            type="text"
                            className="w-full rounded-sm focus:outline-none overflow-hidden mx-1"
                          />
                        </div>
                        <div className=" flex items-center">
                          <span className="text-xs text-slate-600">تا</span>
                          <input
                            type="text"
                            className="w-full mx-2 rounded-sm focus:outline-none overflow-hidden"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="search-btn flex justify-end mt-6">
                      <Link href="/">
                        <a className="px-4 py-1 bg-blue-500 hover:bg-blue-400 rounded-md">
                          <span className="text-white text-xs">جستجو</span>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </form>
            <nav aria-label="profile-breadcrumb breadcrumb w-10">
              <div className="w-100 breadcrumb bg-white rounded p-2 d-flex align-items-center border border-slate-100">
                <div className="profile-breadcrumb-item-mainbar me-4">
                  <a href="#" className="text-decoration-none">
                    <span className="text-xs me-2">همه</span>
                  </a>
                </div>
                <div className="profile-breadcrumb-item-mainbar me-4">
                  <a href="#" className="text-decoration-none">
                    <span className="text-xs me-2"> جاری</span>
                  </a>
                  <span className="badge bg-light rounded-circle">
                    <small className="text-secondary text-xs">۷</small>
                  </span>
                </div>
                <div className="profile-breadcrumb-item-mainbar me-4">
                  <a href="#" className="text-decoration-none">
                    <span className="text-primary me-2 text-xs"> تحویل شده</span>
                  </a>
                  <span className="badge bg-light rounded-circle">
                    <small className="text-secondary text-xs">۳۵</small>
                  </span>
                </div>
                <div className="profile-breadcrumb-item-mainbar me-4">
                  <a href="#" className="text-decoration-none">
                    <span className="text-muted me-2 text-xs">مرجوع شده</span>
                  </a>
                  <span className="badge bg-light rounded-circle">
                    <small className="text-secondary text-xs">۱</small>
                  </span>
                </div>
                <div className="profile-breadcrumb-item-mainbar me-4">
                  <a href="#" className="text-decoration-none">
                    <span className="text-muted me-2 text-xs">لغو شده</span>
                  </a>
                  <span className="badge bg-light rounded-circle">
                    <small className="text-secondary text-xs">۴</small>
                  </span>
                </div>
              </div>
            </nav>
            <div className="w-full grid grid-cols-2 gap-3">
              <div className="col-span-2 md:col-span-1 bg-white rounded-lg border border-gray-200/70 text-[13px]">
                <div className="w-full flex items-center justify-between p-3">
                  <span className="bg-blue-500 text-rose-50 font-semibold inline-flex items-center justify-center px-3 py-1 rounded-full">
                    جاری
                  </span>
                </div>
                <div className="w-full flex items-center px-3">
                  <div className="w-full flex flex-col space-y-2">
                    <div className="w-full flex items-center space-x-1.5 rtl:space-x-reverse">
                      <span className="text-gray-400">تاریخ :</span>
                      <strong>۲۸ شهریور ۱۴۰۱</strong>
                    </div>
                    <div className="w-full flex items-center space-x-1.5 rtl:space-x-reverse">
                      <span className="text-gray-400">کد سفارش :</span>
                      <strong>۱۶۰۱۸۰۸۷</strong>
                    </div>
                  </div>
                  <div className="w-full flex flex-col space-y-2">
                    <div className="w-full flex items-center space-x-1.5 rtl:space-x-reverse justify-end">
                      <span className="text-gray-400">مبلغ سفارش :</span>
                      <strong>
                        ۳۶۵,۰۰۰ <small>تومان</small>
                      </strong>
                    </div>
                    <button className="border border-gray-200/70 rtl:mr-auto inline-flex items-center justify-center space-x-1.5 rtl:space-x-reverse px-2 py-1 rounded-full">
                      <span>مشاهده فاکتور</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="w-full flex items-center -space-x-3 rtl:space-x-reverse p-3 border-dotted border-b-2 border-slate-200">
                  <img
                    src="/assets/img/products/1.png"
                    alt="product-image"
                    className="p-1 rounded-full border border-gray-200/70 relative bg-white"
                    width="50"
                    height="50"
                  />
                  <img
                    src="/assets/img/products/2.png"
                    alt="product-image"
                    className="p-1 rounded-full border border-gray-200/70 relative bg-white"
                    width="50"
                    height="50"
                  />
                  <img
                    src="/assets/img/products/3.png"
                    alt="product-image"
                    className="p-1 rounded-full border border-gray-200/70 relative bg-white"
                    width="50"
                    height="50"
                  />
                  <img
                    src="/assets/img/products/4.png"
                    alt="product-image"
                    className="p-1 rounded-full border border-gray-200/70 relative bg-white"
                    width="50"
                    height="50"
                  />
                </div>
                <div className="flex justify-end m-2">
                  <Link href="/profile/order">
                    <a className="px-2 py-0.5 bg-blue-500 rounded-sm">
                      <span className="text-[10px] text-white">مشاهده بیشتر</span>
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-span-2 md:col-span-1 bg-white rounded-lg border border-gray-200/70 text-[13px]">
                <div className="w-full flex items-center justify-between p-3">
                  <span className="bg-green-500 text-green-100 font-semibold inline-flex items-center justify-center px-2 py-1 rounded-full">
                    تحویل شده
                  </span>
                </div>
                <div className="w-full flex items-center px-3">
                  <div className="w-full flex flex-col space-y-2">
                    <div className="w-full flex items-center space-x-1.5 rtl:space-x-reverse">
                      <span className="text-gray-400">تاریخ :</span>
                      <strong>۲۸ شهریور ۱۴۰۱</strong>
                    </div>
                    <div className="w-full flex items-center space-x-1.5 rtl:space-x-reverse">
                      <span className="text-gray-400">کد سفارش :</span>
                      <strong>۱۶۰۱۸۰۸۷</strong>
                    </div>
                  </div>
                  <div className="w-full flex flex-col space-y-2">
                    <div className="w-full flex items-center space-x-1.5 rtl:space-x-reverse justify-end">
                      <span className="text-gray-400">مبلغ سفارش :</span>
                      <strong>
                        ۳۶۵,۰۰۰ <small>تومان</small>
                      </strong>
                    </div>
                    <button className="border border-gray-200/70 rtl:mr-auto inline-flex items-center justify-center space-x-1.5 rtl:space-x-reverse px-2 py-1 rounded-full">
                      <span>مشاهده فاکتور</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="w-full flex items-center -space-x-3 rtl:space-x-reverse p-3 border-dotted border-b-2 border-slate-200">
                  <img
                    src="/assets/img/products/1.png"
                    alt="product-image"
                    className="p-1 rounded-full border border-gray-200/70 relative bg-white"
                    width="50"
                    height="50"
                  />
                  <img
                    src="/assets/img/products/2.png"
                    alt="product-image"
                    className="p-1 rounded-full border border-gray-200/70 relative bg-white"
                    width="50"
                    height="50"
                  />
                  <img
                    src="/assets/img/products/3.png"
                    alt="product-image"
                    className="p-1 rounded-full border border-gray-200/70 relative bg-white"
                    width="50"
                    height="50"
                  />
                  <img
                    src="/assets/img/products/4.png"
                    alt="product-image"
                    className="p-1 rounded-full border border-gray-200/70 relative bg-white"
                    width="50"
                    height="50"
                  />
                </div>
                <div className="flex justify-end m-2">
                  <Link href="/profile/order">
                    <a className="px-2 py-0.5 bg-blue-500 rounded-sm">
                      <span className="text-[10px] text-white">مشاهده بیشتر</span>
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-span-2 md:col-span-1 bg-white rounded-lg border border-gray-200/70 text-[13px]">
                <div className="w-full flex items-center justify-between p-3">
                  <span className="bg-rose-500 text-rose-100 font-semibold inline-flex items-center justify-center px-2 py-1 rounded-full">
                    لغو شده
                  </span>
                </div>
                <div className="w-full flex items-center px-3">
                  <div className="w-full flex flex-col space-y-2">
                    <div className="w-full flex items-center space-x-1.5 rtl:space-x-reverse">
                      <span className="text-gray-400">تاریخ :</span>
                      <strong>۲۸ شهریور ۱۴۰۱</strong>
                    </div>
                    <div className="w-full flex items-center space-x-1.5 rtl:space-x-reverse">
                      <span className="text-gray-400">کد سفارش :</span>
                      <strong>۱۶۰۱۸۰۸۷</strong>
                    </div>
                  </div>
                  <div className="w-full flex flex-col space-y-2">
                    <div className="w-full flex items-center space-x-1.5 rtl:space-x-reverse justify-end">
                      <span className="text-gray-400">مبلغ سفارش :</span>
                      <strong>
                        ۳۶۵,۰۰۰ <small>تومان</small>
                      </strong>
                    </div>
                    <button className="border border-gray-200/70 rtl:mr-auto inline-flex items-center justify-center space-x-1.5 rtl:space-x-reverse px-2 py-1 rounded-full">
                      <span>مشاهده فاکتور</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="w-full flex items-center -space-x-3 rtl:space-x-reverse p-3 border-dotted border-b-2 border-slate-200">
                  <img
                    src="/assets/img/products/1.png"
                    alt="product-image"
                    className="p-1 rounded-full border border-gray-200/70 relative bg-white"
                    width="50"
                    height="50"
                  />
                  <img
                    src="/assets/img/products/2.png"
                    alt="product-image"
                    className="p-1 rounded-full border border-gray-200/70 relative bg-white"
                    width="50"
                    height="50"
                  />
                  <img
                    src="/assets/img/products/3.png"
                    alt="product-image"
                    className="p-1 rounded-full border border-gray-200/70 relative bg-white"
                    width="50"
                    height="50"
                  />
                  <img
                    src="/assets/img/products/4.png"
                    alt="product-image"
                    className="p-1 rounded-full border border-gray-200/70 relative bg-white"
                    width="50"
                    height="50"
                  />
                </div>
                <div className="flex justify-end m-2">
                  <Link href="/profile/order">
                    <a className="px-2 py-0.5 bg-blue-500 rounded-sm">
                      <span className="text-[10px] text-white">مشاهده بیشتر</span>
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-span-2 md:col-span-1 bg-white rounded-lg border border-gray-200/70 text-[13px]">
                <div className="w-full flex items-center justify-between p-3">
                  <span className="bg-amber-500 text-amber-100 font-semibold inline-flex items-center justify-center px-2 py-1 rounded-full">
                    مرجوعی
                  </span>
                </div>
                <div className="w-full flex items-center px-3">
                  <div className="w-full flex flex-col space-y-2">
                    <div className="w-full flex items-center space-x-1.5 rtl:space-x-reverse">
                      <span className="text-gray-400">تاریخ :</span>
                      <strong>۲۸ شهریور ۱۴۰۱</strong>
                    </div>
                    <div className="w-full flex items-center space-x-1.5 rtl:space-x-reverse">
                      <span className="text-gray-400">کد سفارش :</span>
                      <strong>۱۶۰۱۸۰۸۷</strong>
                    </div>
                  </div>
                  <div className="w-full flex flex-col space-y-2">
                    <div className="w-full flex items-center space-x-1.5 rtl:space-x-reverse justify-end">
                      <span className="text-gray-400">مبلغ سفارش :</span>
                      <strong>
                        ۳۶۵,۰۰۰ <small>تومان</small>
                      </strong>
                    </div>
                    <button className="border border-gray-200/70 rtl:mr-auto inline-flex items-center justify-center space-x-1.5 rtl:space-x-reverse px-2 py-1 rounded-full">
                      <span>مشاهده فاکتور</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="w-full flex items-center -space-x-3 rtl:space-x-reverse p-3 border-dotted border-b-2 border-slate-200">
                  <img
                    src="/assets/img/products/1.png"
                    alt="product-image"
                    className="p-1 rounded-full border border-gray-200/70 relative bg-white"
                    width="50"
                    height="50"
                  />
                  <img
                    src="/assets/img/products/2.png"
                    alt="product-image"
                    className="p-1 rounded-full border border-gray-200/70 relative bg-white"
                    width="50"
                    height="50"
                  />
                  <img
                    src="/assets/img/products/3.png"
                    alt="product-image"
                    className="p-1 rounded-full border border-gray-200/70 relative bg-white"
                    width="50"
                    height="50"
                  />
                  <img
                    src="/assets/img/products/4.png"
                    alt="product-image"
                    className="p-1 rounded-full border border-gray-200/70 relative bg-white"
                    width="50"
                    height="50"
                  />
                </div>
                <div className="flex justify-end m-2">
                  <Link href="/profile/order">
                    <a className="px-2 py-0.5 bg-blue-500 rounded-sm">
                      <span className="text-[10px] text-white">مشاهده بیشتر</span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <Pagination />
          </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default orders;
