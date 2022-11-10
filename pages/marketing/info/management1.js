import Link from "next/link";
import Image from "next/image";
import React from "react";
import MarketingInfoSide from "../../../components/marketing/layout/MarketingInfoSide";
import MarketingInfoHeader from "../../../components/marketing/marketingHeader/MarketingInfoHeader";

const social = () => {
  return (
    <div className='mx-auto'
      dir="rtl">
    <div className="business-panel-container ">
    <div className="business-panel-cols flex bg-slate-100 ">
      <div>
        <MarketingInfoSide/>
      </div>
          <div className="business-panel-mainbar w-100 lg:col-span-9 col-span-12 shadow-lg shadow-slate-100 relative overflow-x-hidden">
          <MarketingInfoHeader/>
            <section className="management-container max-w-screen-md mx-auto flex justify-center items-center relative z-[9]">
              <div className="management-form bg-white overflow-hidden roundde-lg shadow-md px-5 mt-[2rem]">
                <div className="management-title flex flex-col my-4">
                  <h5 className="text-base font-semibold">مدیران</h5>
                  <small className="text-slate-600 text-xs mt-0.5">
                    در این قسمت اطلاعات مربوط به مدیران را وارد کنید.
                  </small>
                </div>
                <div className="grid grid-cols-6 gap-3">
                  <div className="lg:col-span-4 col-span-6">
                    <div className="col-span-12">
                      <div className="grid grid-cols-6 gap-2">
                        <div className="col-span-3">
                          <label className="text-sm text-slate-600 px-2 mb-2">
                            نام
                          </label>
                          <div class="all-input-group input-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="نام"
                            />
                          </div>
                        </div>
                        <div className="col-span-3">
                          <label className="text-sm text-slate-600 px-2 mb-2">
                            نام خانوادگی
                          </label>
                          <div class="all-input-group input-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="نام خانوادگی"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-6 gap-2 mt-[1.25rem]">
                        <div className="col-span-3">
                          <label className="text-sm text-slate-600 px-2 mb-2">
                            شماره همراه
                          </label>
                          <div class="all-input-group input-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="شماره همراه"
                            />
                          </div>
                        </div>
                        <div className="col-span-3">
                          <label className="text-sm text-slate-600 px-2 mb-2">
                            سمت
                          </label>
                          <select
                            class="form-select form-select-text-style py-[0.575rem]"
                            aria-label="Default select example"
                          >
                            <option selected>انتخاب کنید</option>
                            <option
                              className="text-slate-400 text-sm"
                              value="1"
                            >
                              مدیر عامل
                            </option>
                            <option
                              className="text-slate-400 text-sm"
                              value="2"
                            >
                              مدیریت
                            </option>
                            <option
                              className="text-slate-400 text-sm"
                              value="3"
                            >
                              مدیر داخلی
                            </option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="lg:col-span-2 col-span-6">
                    <label className="text-sm text-slate-600 pr-3 mb-2">
                      تصویر
                    </label>
                    <div
                      className="w-full
                     h-32 border border-slate-200 overflow-hidden rounded-md relative text-white bg-white"
                    >
                      <div className="">
                        <Link href="/">
                          <a className="w-full h-full absolute flex justify-center items-center">
                            <p className="text-slate-400 text-xs ml-3">
                              بارگذاری تصویر
                            </p>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-6 h-6 text-slate-400"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                              />
                            </svg>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="save-btn flex justify-end items-end mt-4">
                  <Link href="/">
                    <a className="px-3.5 py-1 bg-blue-500 hover:bg-blue-400 rounded-md">
                      <span className="text-white text-xs">ثبت اطلاعات</span>
                    </a>
                  </Link>
                </div>
                <div className="management-list-tabele-content">
                  <div className="management-list-title flex flex-col mb-4">
                    <h5 className="text-base font-semibold">لیست مدیران</h5>
                  </div>
                  <table class="management-list-tabele w-full h-full table table-bordered rounded-md mb-8">
                    <thead>
                      <tr className=" bg-blue-200 text-center text-slate-600 font-semibold text-xs">
                        <th scope="col">ردیف</th>
                        <th scope="col">نام و نام خانوادگی</th>
                        <th scope="col">سمت</th>
                        <th scope="col">شماره همراه</th>
                        <th scope="col">تصویر</th>
                        <th scope="col">عملیات</th>
                      </tr>
                    </thead>
                    <tbody className="">
                      <tr className="text-center">
                        <th scope="row" className="text-slate-600">
                          ۱
                        </th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td className="w-full h-full flex justify-center items-center">
                          <Link href="/">
                            <a className="border-l border-slate-200">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-5 h-5 ml-3 text-slate-400 "
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                                />
                              </svg>
                            </a>
                          </Link>
                          <Link href="#">
                            <a>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-5 h-5 text-red-500 mr-3"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                />
                              </svg>
                            </a>
                          </Link>
                        </td>
                      </tr>
                      <tr className="text-center">
                        <th scope="row" className="text-slate-600">
                          ۲
                        </th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td className="w-full h-full flex justify-center items-center">
                          <Link href="/">
                            <a className="border-l border-slate-200">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-5 h-5 ml-3 text-slate-400 "
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                                />
                              </svg>
                            </a>
                          </Link>
                          <Link href="#">
                            <a>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-5 h-5 text-red-500 mr-3"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                />
                              </svg>
                            </a>
                          </Link>
                        </td>
                      </tr>
                      <tr className="text-center">
                        <th scope="row" className="text-slate-600">
                          ۳
                        </th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td className="w-full h-full flex justify-center items-center">
                          <Link href="/">
                            <a className="border-l border-slate-200">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-5 h-5 ml-3 text-slate-400 "
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                                />
                              </svg>
                            </a>
                          </Link>
                          <Link href="#">
                            <a>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-5 h-5 text-red-500 mr-3"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                />
                              </svg>
                            </a>
                          </Link>
                        </td>
                      </tr>
                      <tr className="text-center">
                        <th scope="row" className="text-slate-600">
                          ۴
                        </th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td className="w-full h-full flex justify-center items-center">
                          <Link href="/">
                            <a className="border-l border-slate-200">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-5 h-5 ml-3 text-slate-400 "
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                                />
                              </svg>
                            </a>
                          </Link>
                          <Link href="#">
                            <a>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-5 h-5 text-red-500 mr-3"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                />
                              </svg>
                            </a>
                          </Link>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="next-btn w-full h-full border-t-2 border-dotted border-slate-100 flex justify-end items-center">
                    <Link href="/aa/user-info/agreement">
                      <a className="px-2 py-1 bg-blue-500 hover:bg-blue-400 rounded-md my-6">
                        <span className="text-white text-xs">
                          ثبت و مرحله بعد
                        </span>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default social;



// <div className="business-panel-sidbar lg:col-span-3 col-span-12 my-8">
//             <nav className="navbar navbar-business navbar-business-expand-lg navbar-expand-lg">
//               <div class="navbar-business-container container-fluid mx-4">
//                 <div className="top-nav d-flex">
//                   <div className="business-logo w-14 h-14 rounded-full bg-white">
//                     <Link href="/">
//                       <Image
//                         src="/../public/assets/img/logos/1.png"
//                         width="60px"
//                         height="60px"
//                         className="w-full h-full rounded-full flex justify-center items-center"
//                       ></Image>
//                     </Link>
//                   </div>
//                   <div className="business-name flex flex-col mr-3">
//                     <div class="dropdown">
//                       <a
//                         class="dropdown-toggle"
//                         href="#"
//                         id="dropdownMenuLink"
//                         data-bs-toggle="dropdown"
//                         aria-expanded="false"
//                       ></a>

//                       <ul
//                         class="dropdown-menu"
//                         aria-labelledby="dropdownMenuLink"
//                       >
//                         <li className="border-b border-slate-200">
//                           <Link href="/">
//                             <a className="dropdown-item flex" href="#">
//                               <Image
//                                 src="/../public/assets/img/logos/3.png"
//                                 width="35px"
//                                 height="35px"
//                                 className="rounded-full flex justify-center items-center"
//                               ></Image>
//                               <div className="flex flex-col mr-3">
//                                 <p className="text-xs font-semibold">
//                                   فروشگاه رضا
//                                 </p>
//                                 <small className="text-xs">امیر باقری</small>
//                               </div>
//                             </a>
//                           </Link>
//                         </li>
//                         <li className="border-b border-slate-200">
//                           <Link href="/">
//                             <a className="dropdown-item flex" href="#">
//                               <Image
//                                 src="/../public/assets/img/logos/1.png"
//                                 width="35px"
//                                 height="35px"
//                                 className="rounded-full flex justify-center items-center"
//                               ></Image>
//                               <div className="flex flex-col mr-3">
//                                 <p className="text-xs font-semibold">
//                                   فروشگاه رضا
//                                 </p>
//                                 <small className="text-xs">امیر باقری</small>
//                               </div>
//                             </a>
//                           </Link>
//                         </li>
//                         <li className="border-b border-slate-200">
//                           <Link href="/">
//                             <a className="dropdown-item flex" href="#">
//                               <Image
//                                 src="/../public/assets/img/logos/3.png"
//                                 width="35px"
//                                 height="35px"
//                                 className="rounded-full flex justify-center items-center"
//                               ></Image>
//                               <div className="flex flex-col mr-3">
//                                 <p className="text-xs font-semibold">
//                                   فروشگاه رضا
//                                 </p>
//                                 <small className="text-xs">امیر باقری</small>
//                               </div>
//                             </a>
//                           </Link>
//                         </li>
//                       </ul>
//                     </div>
//                     <p className="text-xs font-semibold py-0.5">
//                       فروشگاه شیک نو
//                     </p>
//                     <small className="text-xs">آرش محمدی </small>
//                   </div>
//                 </div>
//                 <button
//                   className="business-navbar-toggler navbar-toggler custom-toggler bg-light"
//                   type="button"
//                   data-bs-toggle="collapse"
//                   data-bs-target="#navbarSupportedContent"
//                   aria-controls="navbarSupportedContent"
//                   aria-expanded="false"
//                   aria-label="Toggle navigation"
//                 >
//                   <i class="bi bi-list"></i>
//                 </button>
//                 <div
//                   class="business-collapse collapse product-navbar-collapse navbar-collapse w-full mt-4"
//                   id="navbarSupportedContent"
//                 >
//                   <div class="business-navbar-nav navbar-nav">
//                     <div className="business-nav-item nav-item bg-blue-500 rounded-md px-4 mb-3">
//                       <div className="w-full h-full nav-item-flex flex items-center">
//                         <i class="bi bi-person font-semibold text-sm text-white"></i>
//                         <Link href="/">
//                           <a
//                             class="business-nav-link nav-link text-xs text-white mr-1"
//                             aria-current="page"
//                           >
//                             اطلاعات کاربری
//                           </a>
//                         </Link>
//                       </div>
//                     </div>
//                     <div className="business-nav-item-active nav-item rounded-md flex items-center">
//                       <span className="px-2 py-2 bg-blue-500 rounded-md relative">
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           className="h-6 w-6 text-white"
//                           fill="none"
//                           viewBox="0 0 24 24"
//                           stroke="currentColor"
//                           strokeWidth={2}
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
//                           />
//                         </svg>
//                       </span>
//                       <div className="w-full h-full flex flex-col mt-4 pr-3">
//                         <p className="text-xs font-semibold">۱. مشخصات عمومی</p>
//                         <p className="text-slate-400 text-[9px] mt-2 pr-3">
//                           اطلاعات عمومی صاحب کسب و کار را وارد نمایید
//                         </p>
//                       </div>
//                     </div>
//                     <div className="business-nav-item-active nav-item rounded-md flex items-center">
//                       <span className="px-2 py-2 bg-blue-500 rounded-md relative mt-5">
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           className="h-6 w-6 text-white"
//                           fill="none"
//                           viewBox="0 0 24 24"
//                           stroke="currentColor"
//                           strokeWidth={2}
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
//                           />
//                         </svg>
//                       </span>
//                       <div className="w-full h-full flex flex-col mt-16 pr-3">
//                         <p className="text-xs font-semibold">
//                           ۲.اطلاعات کسب و کار
//                         </p>
//                         <p className="text-slate-400 text-[9px] mt-2">
//                           اطلاعات کسب و کار خود را در این قسمت واردکنید
//                         </p>
//                       </div>
//                     </div>
//                     <div className="business-nav-item-active nav-item rounded-md flex items-center">
//                       <span className="px-2 py-2 bg-blue-500 rounded-md relative mt-5">
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           className="h-6 w-6 text-white"
//                           fill="none"
//                           viewBox="0 0 24 24"
//                           stroke="currentColor"
//                           strokeWidth={2}
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
//                           />
//                         </svg>
//                       </span>
//                       <div className="w-full h-full flex flex-col pr-3 mt-16">
//                         <p className="text-xs font-semibold">۳.درباره ما</p>
//                         <p className="text-slate-400 text-[9px] mt-2">
//                           در این قسمت پیام مدیریت و توضیحات خود را وارد نمایید
//                         </p>
//                       </div>
//                     </div>
//                     <div className="business-nav-item-inactive nav-item rounded-md flex items-center">
//                       <span className="px-2 py-2 bg-blue-500 rounded-md relative mt-5">
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           className="h-6 w-6 text-white"
//                           fill="none"
//                           viewBox="0 0 24 24"
//                           stroke="currentColor"
//                           strokeWidth={2}
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
//                           />
//                         </svg>
//                       </span>
//                       <div className="w-full h-full flex flex-col mt-16">
//                         <p className="text-xs font-semibold pr-3">۴.مدیران</p>
//                         <p className="text-slate-400 text-[9px] mt-2 pr-3">
//                           در این قسمت اطلاعات مربوط به مدیران را وارد کنید
//                         </p>
//                       </div>
//                     </div>
//                     <div className="business-nav-item-inactive nav-item rounded-md flex items-center">
//                       <span className="px-2 py-2 bg-white rounded-md relative mt-5">
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           className="h-6 w-6 text-slate-600"
//                           fill="none"
//                           viewBox="0 0 24 24"
//                           stroke="currentColor"
//                           strokeWidth={1}
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
//                           />
//                         </svg>
//                       </span>
//                       <div className="w-full h-full flex flex-col pr-3 mt-16">
//                         <p className="text-xs font-semibold">۵.قراردادها</p>
//                         <p className="text-slate-400 text-[9px] mt-2">
//                           در این قسمت قراردادهای خود را وارد نمایید
//                         </p>
//                       </div>
//                     </div>
//                     <div className="business-nav-item-active nav-item rounded-md flex items-center">
//                       <div className="px-2 py-2 bg-white rounded-md relative mt-5">
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           className="h-6 w-6 text-slate-600"
//                           fill="none"
//                           viewBox="0 0 24 24"
//                           stroke="currentColor"
//                           strokeWidth={1}
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
//                           />
//                         </svg>
//                       </div>
//                       <div className="w-full h-full flex flex-col pr-3 mt-16">
//                         <p className="text-xs font-semibold">
//                           ۶.شبکه های اجتماعی
//                         </p>
//                         <p className="text-slate-400 text-[9px] mt-2">
//                           در این قسمت آدرس شبکه های اجتماعی را واردکنید
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </nav>
//           </div>