import Link from "next/link";
import Image from "next/image";
import React from "react";

const address = () => {
  return (
    <div>
      <div className="max-w-screen-2xl mx-auto business-panel-container bg-slate-100 p-5">
        <section className="max-w-screen-md mx-auto my-14 relative z-[99999999] bg-white">
          <div className="panel-addresses bg-white p-4 border-b border-slate-200">
            <div className="addresses-title">
              <h5 className="text-base font-semibold">آدرس ها </h5>
            </div>
            <div className="panel-address border-b border-slate-200 pb-5">
              <div className="address-title w-full h-full flex justify-between items-center my-4">
                <div>
                  <h5 className="text-base font-semibold">کارخانه</h5>
                </div>
                <div class="btn-group dropend">
                  <a
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i class="bi bi-three-dots"></i>
                  </a>
                  <ul class="w-full dropdown-menu divide-y divide-slate-200 p-2">
                    <li class="flex items-center pb-2 ">
                      <i class="bi bi-pencil-fill text-sm ml-2"></i>
                      <span className="text-sm">ویرایش آدرس</span>
                    </li>
                    <li class="flex items-center pt-2">
                      <i class="bi bi-trash3-fill text-sm ml-2"></i>
                      <span className="text-sm">حذف</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex flex-col">
                  <div className="location w-full h-full  flex items-center">
                    <span className="px-1 py-1 bg-blue-500 rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-white text-semibold"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </span>
                    <p className="text-sm text-black mr-2">
                      تهران ، خیابان مطهری ، خیابان مفتح ، پلاک ۸{" "}
                    </p>
                  </div>
                  <div className="email w-full h-full  flex items-center mt-2">
                    <span className="px-1 py-1 bg-blue-500 rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-white text-semibold"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76"
                        />
                      </svg>
                    </span>
                    <p className="text-sm text-black mr-2"> myy@my.com</p>
                  </div>
                  <div className="tel w-full h-full  flex items-center mt-2">
                    <span className="px-1 py-1 bg-blue-500 rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-white text-semibold"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </span>
                    <p className="text-sm text-black mr-2">۶۶۵۲۴۸۷۶</p>
                  </div>
                </div>
                <div className="bg-slate-100 w-36 h-32 "></div>
              </div>
            </div>
            <div className="panel-address">
              <div className="address-title w-full h-full flex justify-between items-center my-4">
                <div>
                  <h5 className="text-base font-semibold">فروشگاه</h5>
                </div>
                <div class="btn-group dropend">
                  <a
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i class="bi bi-three-dots"></i>
                  </a>
                  <ul class="w-full dropdown-menu divide-y divide-slate-200 p-2">
                    <li class="flex items-center pb-2 ">
                      <i class="bi bi-pencil-fill text-sm ml-2"></i>
                      <span className="text-sm">ویرایش آدرس</span>
                    </li>
                    <li class="flex items-center pt-2">
                      <i class="bi bi-trash3-fill text-sm ml-2"></i>
                      <span className="text-sm">حذف</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex flex-col">
                  <div className="location w-full h-full  flex items-center">
                    <span className="px-1 py-1 bg-blue-500 rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-white text-semibold"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </span>
                    <p className="text-sm text-black mr-2">
                      تهران ، خیابان مطهری ، خیابان مفتح ، پلاک ۸{" "}
                    </p>
                  </div>
                  <div className="email w-full h-full  flex items-center mt-2">
                    <span className="px-1 py-1 bg-blue-500 rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-white text-semibold"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76"
                        />
                      </svg>
                    </span>
                    <p className="text-sm text-black mr-2"> myy@my.com</p>
                  </div>
                  <div className="tel w-full h-full  flex items-center mt-2">
                    <span className="px-1 py-1 bg-blue-500 rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-white text-semibold"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </span>
                    <p className="text-sm text-black mr-2">۶۶۵۲۴۸۷۶</p>
                  </div>
                </div>
                <div className="bg-slate-100 w-36 h-32 "></div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default address;
