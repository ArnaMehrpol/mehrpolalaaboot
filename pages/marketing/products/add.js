import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import MarketingLayout from '../../../components/marketing/layout/MarketingLayout'
import MarketingMainHeader from '../../../components/marketing/marketingHeader/MarketingMainHeader'
import ChooseFile from "../../../components/marketing/fileManager/components/share/ChooseFile";
import MainRoot from "../../../components/marketing/fileManager/components/MainRoot";
import Cookies from "universal-cookie";

const add = () => {

  const cookies = new Cookies();

  const tokenId = cookies.get('token')

  console.log({tokenId})

  const [fileManager, setFileManager] = useState(false)

  //یک متد تعریف شده برای بستن پنجره فایل منیجر
  const closeMainRoot = () =>{
    setFileManager(prevChooseFile => prevChooseFile = false)
  }

  return (
    <>
      <div hidden={!fileManager}>
        <MainRoot closeMainRoot={closeMainRoot}/>
      </div>
      <div>
        <div className="business-panel-container">
          <div className="grid grid-cols-12 business-panel-cols bg-slate-100">
            <MarketingLayout/>
            <div className="relative col-span-12 overflow-hidden shadow-lg business-panel-mainbar md:col-span-10 shadow-slate-100">
              <MarketingMainHeader/>
              <div lassName="mainbar-content mt-10 md:col-span-9 col-span-12 md:pb-20 md:mr-3 md:px-0 px-4">
                <section className="max-w-screen-lg mx-auto px-3 lg:mt-[85px] mt-[42px] overflow-hidden">
                  <div className="p-4 bg-white rounded-lg shadow-md ">
                    <div className="flex flex-col add-products-title">
                      <h5 className="font-semibold md:text-base taxt-sm">محصولات</h5>
                      <small className="text-slate-600 text-xs">
                        اطلاعات محصولات خود را وارد نمایید .
                      </small>
                    </div>
                    <div className="flex flex-col add-products-flex">
                      <div className="grid grid-cols-12 gap-3 add-products-grid">
                        <div className="col-span-12 add-products-input md:col-span-3">
                          <label className="px-2 mb-2 text-sm text-slate-700">حوزه</label>
                          <select
                            class="form-select form-select-text-style py-[0.575rem] pr-2"
                            aria-label="Default select example"
                          >
                            <option selected> انتخاب کنید</option>
                            <option className="text-sm text-slate-400" value="1">
                              کشاورزی
                            </option>
                            <option className="text-sm text-slate-400" value="2">
                              کالای دیجیتال
                            </option>
                            <option className="text-sm text-slate-400" value="3">
                              آرایشی و بهداشتی
                            </option>
                          </select>
                        </div>
                        <div className="col-span-12 add-products-input md:col-span-3">
                          <label className="px-2 mb-2 text-sm text-slate-700">شاخه</label>
                          <select
                            class="form-select form-select-text-style py-[0.575rem] pr-2"
                            aria-label="Default select example"
                          >
                            <option selected>انتخاب کنید</option>
                            <option className="text-sm text-slate-400" value="1">
                              تاسیسات
                            </option>
                            <option className="text-sm text-slate-400" value="2">
                              لوازم خانگی
                            </option>
                            <option className="text-sm text-slate-400" value="3">
                              صنایع چوبی
                            </option>
                          </select>
                        </div>
                        <div className="col-span-12 add-products-input md:col-span-3">
                          <label className="px-2 mb-2 text-sm text-slate-700">
                            زیرشاخه
                          </label>
                          <select
                            class="form-select form-select-text-style py-[0.575rem] pr-2"
                            aria-label="Default select example"
                          >
                            <option selected> انتخاب کنید</option>
                            <option className="text-sm text-slate-400" value="1">
                              گوشی موبایل
                            </option>
                            <option className="text-sm text-slate-400" value="2">
                              کابینت
                            </option>
                            <option className="text-sm text-slate-400" value="3">
                              کفش ورزشی زنانه
                            </option>
                          </select>
                        </div>
                        <div className="col-span-12 add-products-input md:col-span-3">
                          <label className="px-2 mb-2 text-sm text-slate-700">
                            کاربرد در صنایع
                          </label>
                          <select
                            class="form-select form-select-text-style py-[0.575rem] pr-2"
                            aria-label="Default select example"
                          >
                            <option selected>حداکثر سه مورد</option>
                            <option className="text-sm text-slate-400" value="1">
                              گوشی موبایل
                            </option>
                            <option className="text-sm text-slate-400" value="2">
                              کابینت
                            </option>
                            <option className="text-sm text-slate-400" value="3">
                              کفش ورزشی زنانه
                            </option>
                          </select>
                        </div>
                        <div className="col-span-12 add-products-input md:col-span-3">
                          <label className="px-2 mb-2 text-sm text-slate-700">
                            نام محصول
                          </label>
                          <select
                            class="form-select form-select-text-style py-[0.575rem] pr-2"
                            aria-label="Default select example"
                          >
                            <option selected> انتخاب کنید</option>
                            <option className="text-sm text-slate-400" value="1">
                              کشاورزی
                            </option>
                            <option className="text-sm text-slate-400" value="2">
                              کالای دیجیتال
                            </option>
                            <option className="text-sm text-slate-400" value="3">
                              آرایشی و بهداشتی
                            </option>
                          </select>
                        </div>
                        <div className="col-span-12 add-products-select md:col-span-3">
                          <label className="px-2 mb-2 text-sm text-slate-700">برند</label>
                          <select
                            class="form-select form-select-text-style py-[0.575rem] pr-2"
                            aria-label="Default select example"
                          >
                            <option selected>انتخاب کنید</option>
                            <option className="text-sm text-slate-400" value="1">
                              تاسیسات
                            </option>
                            <option className="text-sm text-slate-400" value="2">
                              لوازم خانگی
                            </option>
                            <option className="text-sm text-slate-400" value="3">
                              صنایع چوبی
                            </option>
                          </select>
                        </div>
                        <div className="col-span-12 add-products-input md:col-span-3">
                          <label className="px-2 mb-2 text-sm text-slate-700">
                            تعداد موجودی
                          </label>
                          <div class="all-input-group input-group mb-3">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="عدد"
                            />
                          </div>
                        </div>
                        <div className="col-span-12 add-products-input md:col-span-3">
                          <label className="px-2 mb-2 text-sm text-slate-700">
                            حداقل موجودی
                          </label>
                          <div class="all-input-group input-group mb-3">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="۱۰ درصد تعداد موجودی"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col add-products-Introduction">
                        <div className="flex flex-col my-4 add-products-title">
                          <h5 className="text-xs font-semibold md:text-sm">
                            معرفی محصول
                          </h5>
                        </div>
                        <div className="w-full h-full bg-white border rounded-md h-36 border-slate-100">
                          <p className="px-4 py-4 text-slate-400">
                            دراین قسمت یک ادیتور قرار میگیرد
                          </p>
                          {/* دقیقا در همین محلی که در پایین تعداد کاراکتر گفته شده داخل ادیتور هم تعداد کاراکتر باید نمایش داده بشود  */}
                          <span className="text-xs text-slate-500 h-full flex items-center pb-5 pr-4">
                            ۱۴/۲۰۰ کاراکتر
                          </span>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-3 mt-4 products-specifications-cols">
                        <div className="col-span-2 products-specifications-col md:col-span-1">
                          <div className="flex flex-col my-3 products-specifications-title">
                            <h5 className="text-xs font-semibold md:text-sm">
                              مشخصات محصول
                            </h5>
                          </div>
                          <div className="grid grid-cols-2 p-3 space-y-2 border rounded-md border-slate-100">
                            <div className="w-full col-span-2 md:col-span-1">
                              <p className="text-sm text-slate-400">حجم محصول</p>
                            </div>
                            <div class="all-input-group w-full md:col-span-1 col-span-2 input-group">
                              <input
                                type="text"
                                className="form-control"
                                placeholder=""
                              />
                            </div>
                            <div className="w-full col-span-2 md:col-span-1">
                              <p className="text-sm text-slate-400">رنگ محصول</p>
                            </div>
                            <div className="w-full col-span-2 md:col-span-1">
                              <select
                                class="form-select form-select-text-style py-[0.575rem] pr-2"
                                aria-label="Default select example"
                              >
                                <option selected>انتخاب کنید</option>
                                <option className="text-sm text-slate-400" value="1">
                                  قرمز
                                </option>
                                <option className="text-sm text-slate-400" value="2">
                                  آبی
                                </option>
                                <option className="text-sm text-slate-400" value="3">
                                  سبز
                                </option>
                              </select>
                            </div>
                            <div className="w-full col-span-2 md:col-span-1">
                              <p className="text-sm text-slate-400">رایحه محصول</p>
                            </div>
                            <div className="w-full col-span-2 md:col-span-1">
                              <select
                                class="form-select form-select-text-style py-[0.575rem] pr-2"
                                aria-label="Default select example"
                              >
                                <option selected>انتخاب کنید</option>
                                <option className="text-sm text-slate-400" value="1">
                                  تند و تلخ
                                </option>
                                <option className="text-sm text-slate-400" value="2">
                                  گرم و تند
                                </option>
                                <option className="text-sm text-slate-400" value="3">
                                  سرد و شیرین
                                </option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="col-span-2 products-upload-col md:col-span-1">
                          <div className="flex items-center justify-between">
                            <div className="flex flex-col my-3 products-specifications-title">
                              <h5 className="text-xs font-semibold md:text-sm">
                                بارگذاری تصاویر محصول
                              </h5>
                            </div>
                            <Link href="/">
                              <a className="flex items-center h-full">
                                <p className="text-xs text-slate-400">مشاهده همه </p>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={1.5}
                                  stroke="currentColor"
                                  className="w-3 h-3 mr-1 text-slate-400"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15.75 19.5L8.25 12l7.5-7.5"
                                  />
                                </svg>
                              </a>
                            </Link>
                          </div>
                          <div className="border border-slate-100 rounded-md p-3.5">
                            <div className="grid w-full grid-cols-4 gap-4 ">
                              <div className="w-full col-span-4 px-2 py-6 border rounded-sm md:col-span-1 border-slate-100">
                                
                                  <button 
                                        onClick={()=>{setFileManager(true)}}
                                        className="flex items-center justify-center">
                                    <div className="flex items-center justify-between">
                                      <span className="text-xs text-slate-400">
                                        افزودن
                                      </span>
                                    </div>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      strokeWidth={1.5}
                                      stroke="currentColor"
                                      className="w-6 h-6 mx-2 text-slate-400"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                                      />
                                    </svg>
                                  </button>
                                <span className="w-full text-slate-400 md:text-[8px] text-xs flex justify-center">
                                  حداکثر ۱۰۰ کیلو بایت{" "}
                                </span>
                              </div>
                              <div className="relative col-span-4 overflow-hidden border rounded-sm md:col-span-1 border-slate-100 ">
                                <span className="absolute left-0 flex flex-col justify-center w-4 h-full space-y-2 bg-black rounded-sm rounded-r-none opacity-50">
                                  <Link href="/">
                                    <a>
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-4 h-4 opacity-100 text-slate-400"
                                      >
                                        <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                                        />
                                      </svg>
                                    </a>
                                  </Link>
                                  <Link href="/">
                                    <a>
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-4 h-4 opacity-100 text-rose-500"
                                      >
                                        <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                        />
                                      </svg>
                                    </a>
                                  </Link>
                                </span>
                              </div>
                              <div className="relative col-span-4 border rounded-sm md:col-span-1 border-slate-100">
                                <span className="absolute left-0 flex flex-col justify-center w-4 h-full space-y-2 bg-black rounded-sm rounded-r-none opacity-50">
                                  <Link href="/">
                                    <a>
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-4 h-4 opacity-100 text-slate-400"
                                      >
                                        <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                                        />
                                      </svg>
                                    </a>
                                  </Link>
                                  <Link href="/">
                                    <a>
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-4 h-4 opacity-100 text-rose-500"
                                      >
                                        <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                        />
                                      </svg>
                                    </a>
                                  </Link>
                                </span>
                                <Image
                                  src="/public/assets/img/products/2.png"
                                  width="50"
                                  height="50"
                                  className=""
                                ></Image>
                                {/* eror dar mamayesh ax */}
                              </div>
                              <div className="relative col-span-4 border rounded-sm md:col-span-1 border-slate-100">
                                <span className="absolute left-0 flex flex-col justify-center w-4 h-full space-y-2 bg-black rounded-sm rounded-r-none opacity-50">
                                  <Link href="/">
                                    <a>
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-4 h-4 opacity-100 text-slate-400"
                                      >
                                        <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                                        />
                                      </svg>
                                    </a>
                                  </Link>
                                  <Link href="/">
                                    <a>
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-4 h-4 opacity-100 text-rose-500"
                                      >
                                        <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                        />
                                      </svg>
                                    </a>
                                  </Link>
                                </span>
                                <Image
                                  src="/public/assets/img/products/2.png"
                                  width="50"
                                  height="50"
                                  className=""
                                ></Image>
                              </div>
                            </div>
                            <div className="w-full h-full flex md:flex-row flex-col justify-between md:items-center mt-[18px] mb-2 md:space-y-0 space-y-2">
                              <p className="text-[9px] text-slate-500 flex items-center">
                                برای کاهش حجم تصاویر از این لینک استفاده نمایید
                              </p>
                              <div className="inline-flex items-center">
                                <Link href="/">
                                  <a className="px-2 rounded-md bg-slate-600 hover:bg-slate-500 ">
                                    <span className="text-white text-[7px]">
                                      کاهش حجم تصاویر
                                    </span>
                                  </a>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-12 gap-3 mt-2">
                        <div className="col-span-12 lg:col-span-3">
                          <label className="px-2 mb-2 text-sm text-slate-700">وزن</label>
                          <select
                            class="form-select form-select-text-style py-[0.575rem] pr-2"
                            aria-label="Default select example"
                          >
                            <option selected> انتخاب کنید</option>
                            <option className="text-sm text-slate-400" value="1">
                              گرم
                            </option>
                            <option className="text-sm text-slate-400" value="2">
                              تن
                            </option>
                          </select>
                        </div>
                        <div className="col-span-12 lg:col-span-3">
                          <label className="px-2 mb-2 text-sm text-slate-700">قیمت</label>
                          <div class="all-input-group input-group mb-3">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="تومان"
                            />
                          </div>
                        </div>
                        <div className="col-span-12 lg:col-span-3">
                          <label className="px-2 mb-2 text-sm text-slate-700">
                            روش فروش
                          </label>
                          <select
                            class="form-select form-select-text-style py-[0.575rem] pr-2"
                            aria-label="Default select example"
                          >
                            <option selected> انتخاب کنید</option>
                            <option className="text-sm text-slate-400" value="1">
                              اعتباری
                            </option>
                            <option className="text-sm text-slate-400" value="2">
                              تهاتر
                            </option>
                            <option className="text-sm text-slate-400" value="3">
                              حضوری
                            </option>
                          </select>
                        </div>
                        <div className="col-span-12 lg:col-span-3">
                          <label className="px-2 mb-2 text-sm text-slate-700">
                            حداقل تعداد خرید
                          </label>
                          <div class="all-input-group input-group mb-3">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="عدد"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col discount ">
                        <div className="flex flex-col my-4 discount-title">
                          <h5 className="text-xs font-semibold md:text-sm">تخفیف</h5>
                          <small className="text-xs text-justify text-slate-500 ">
                            در صورت ارائه تخفیف می توانید از روش های زیر استفاده نمایید و
                            در صورت همپوشانی روش های تخفیف ، سیسیتم بر اساس بیشترین درصد
                            اعمال خواهد نمود .
                          </small>
                        </div>
                        <div className="p-3 space-y-3 border rounded-md discount-border border-slate-500">
                          <div className="flex flex-col justify-between w-full space-y-3 discount-price md:flex-row md:items-end md:space-y-0">
                            <div className="flex flex-col">
                              <p className="mb-3 text-xs font-semibold text-slate-500">
                                ۱. تخفیف بر اساس مبلغ
                              </p>
                              <div className="grid grid-cols-2 gap-4">
                                <div className="flex items-center w-full h-full col-span-2 md:col-span-1">
                                  <p className="text-xs text-slate-600 md:w-12 w-14">
                                    بیشتر از
                                  </p>
                                  <div class="all-input-group md:w-36 w-full input-group">
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="تومان"
                                    />
                                  </div>
                                </div>
                                <div className="flex items-center w-full h-full col-span-2 md:col-span-1">
                                  <p className="text-xs text-slate-600 md:w-12 w-14">
                                    به میزان
                                  </p>
                                  <div class="all-input-group md:w-36 w-full input-group">
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="درصد"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col">
                              <p className="mb-3 text-xs font-semibold text-slate-500">
                                مبلغ نهایی پس از تخفیف
                              </p>
                              <div class="all-input-group md:md:w-36 w-full input-group">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="تومان"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col justify-between w-full space-y-3 discount-date md:flex-row md:items-end md:space-y-0">
                            <div className="flex flex-col">
                              <p className="mb-3 text-xs font-semibold text-slate-500">
                                ۲. تخفیف بر اساس تاریخ
                              </p>
                              <div className="grid grid-cols-3 gap-4 space-y-3 md:space-y-0">
                                <div className="flex items-center w-full h-full col-span-3 md:col-span-1">
                                  <p className="text-xs text-slate-600 md:w-12 w-14">
                                    از تاریخ
                                  </p>
                                  <div class="all-input-group md:w-36 w-full input-group">
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder=""
                                    />
                                  </div>
                                </div>
                                <div className="flex items-center w-full h-full col-span-3 md:col-span-1">
                                  <p className="text-xs text-slate-600 md:w-12 w-14">
                                    تا تاریخ
                                  </p>
                                  <div class="all-input-group md:w-36 w-full input-group">
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder=""
                                    />
                                  </div>
                                </div>
                                <div className="flex items-center w-full h-full col-span-3 md:col-span-1">
                                  <p className="text-xs text-slate-600 md:w-12 w-14">
                                    به میزان
                                  </p>
                                  <div class="all-input-group md:w-36 w-full input-group">
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="درصد"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col mt-8">
                              <p className="block mb-3 text-xs font-semibold md:hidden text-slate-500">
                                مبلغ نهایی پس از تخفیف
                              </p>
                              <div class="all-input-group md:w-36 w-full  input-group">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="تومان"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col justify-between w-full space-y-3 discount-counter md:flex-row md:items-end md:space-y-0">
                            <div className="flex flex-col ">
                              <p className="mb-3 text-xs font-semibold text-slate-500">
                                ۳. تخفیف بر اساس تعداد
                              </p>
                              <div className="grid grid-cols-3 gap-4 space-y-3 md:space-y-0">
                                <div className="flex items-center w-full h-full col-span-3 md:col-span-1">
                                  <p className="text-xs text-slate-600 md:w-12 w-14">
                                    از تعداد
                                  </p>
                                  <div class="all-input-group md:w-36 w-full input-group">
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="حداقل خرید + ۱"
                                    />
                                  </div>
                                </div>
                                <div className="flex items-center w-full h-full col-span-3 md:col-span-1">
                                  <p className="text-xs text-slate-600 md:w-12 w-14">
                                    تا تعداد
                                  </p>
                                  <div class="all-input-group md:w-36 w-full input-group">
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder=""
                                    />
                                  </div>
                                </div>
                                <div className="flex items-center w-full h-full col-span-3 md:col-span-1">
                                  <p className="text-xs text-slate-600 md:w-12 w-14">
                                    به میزان
                                  </p>
                                  <div class="all-input-group md:w-36 w-full input-group">
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="درصد"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col mt-8">
                              <p className="block mb-3 text-xs font-semibold md:hidden text-slate-500">
                                مبلغ نهایی پس از تخفیف
                              </p>
                              <div class="all-input-group md:md:w-36 w-full input-group">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="تومان"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col justify-between w-full space-y-3 discount-counter md:flex-row md:items-end md:space-y-0">
                            <div className="flex flex-col ">
                              <div className="grid grid-cols-3 gap-4 space-y-3 md:space-y-0">
                                <div className="flex items-center w-full h-full col-span-3 md:col-span-1">
                                  <p className="text-xs text-slate-600 md:w-12 w-14">
                                    از تعداد
                                  </p>
                                  <div class="all-input-group md:w-36 w-full input-group">
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="حداقل خرید + ۱"
                                    />
                                  </div>
                                </div>
                                <div className="flex items-center w-full h-full col-span-3 md:col-span-1">
                                  <p className="text-xs text-slate-600 md:w-12 w-14">
                                    تا تعداد
                                  </p>
                                  <div class="all-input-group md:w-36 w-full input-group">
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder=""
                                    />
                                  </div>
                                </div>
                                <div className="flex items-center w-full h-full col-span-3 md:col-span-1">
                                  <p className="text-xs text-slate-600 md:w-12 w-14">
                                    به میزان
                                  </p>
                                  <div class="all-input-group md:w-36 w-full input-group">
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="درصد"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col mt-8">
                              <p className="block mb-3 text-xs font-semibold md:hidden text-slate-500">
                                مبلغ نهایی پس از تخفیف
                              </p>
                              <div class="all-input-group md:md:w-36 w-full input-group">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="تومان"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="grid grid-cols-12 gap-3 mt-4">
                          <div className="col-span-12 md:col-span-3">
                            <label className="px-2 mb-2 text-sm text-slate-700">
                              زمان آماده سازی
                            </label>
                            <div class="all-input-group input-group mb-3">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="تعداد روز کاری"
                              />
                            </div>
                          </div>
                          <div className="col-span-12 md:col-span-3">
                            <label className="px-2 mb-2 text-sm text-slate-700">
                              روش ارسال
                            </label>
                            <select
                              class="form-select form-select-text-style py-[0.575rem] pr-2"
                              aria-label="Default select example"
                            >
                              <option selected>انتخاب کنید</option>
                              <option className="text-sm text-slate-400" value="1">
                                پست
                              </option>
                              <option className="text-sm text-slate-400" value="2">
                                اسنپ باکس
                              </option>
                            </select>
                          </div>
                          <div className="col-span-12 md:col-span-3">
                            <label className="px-2 mb-2 text-sm text-slate-700">
                              مدت زمان عودت
                            </label>
                            <div class="all-input-group input-group mb-3">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="تعداد روز کاری"
                              />
                            </div>
                          </div>
                          <div className="col-span-12 md:col-span-3">
                            <label className="px-2 mb-2 text-sm text-slate-700">
                              روش عودت
                            </label>
                            <select
                              class="form-select form-select-text-style py-[0.575rem] pr-2"
                              aria-label="Default select example"
                            >
                              <option selected> انتخاب کنید</option>
                              <option
                                className="text-sm text-slate-400"
                                value="1"
                              ></option>
                              <option
                                className="text-sm text-slate-400"
                                value="2"
                              ></option>
                              <option
                                className="text-sm text-slate-400"
                                value="3"
                              ></option>
                            </select>
                          </div>
                          <div className="col-span-12 md:col-span-3">
                            <label className="px-2 mb-2 text-sm text-slate-700">
                              شرایط فرروش
                            </label>
                            <select
                              class="form-select form-select-text-style py-[0.575rem] pr-2"
                              aria-label="Default select example"
                            >
                              <option selected> انتخاب کنید</option>
                              <option
                                className="text-sm text-slate-400"
                                value="1"
                              ></option>
                              <option
                                className="text-sm text-slate-400"
                                value="2"
                              ></option>
                              <option
                                className="text-sm text-slate-400"
                                value="3"
                              ></option>
                            </select>
                          </div>
                          <div className="col-span-12 md:col-span-3">
                            <label className="px-2 mb-2 text-sm text-slate-700">
                              هزینه ارسال
                            </label>
                            <div class="all-input-group input-group mb-3">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="تومان"
                              />
                            </div>
                          </div>
                          <div className="col-span-12 md:col-span-3">
                            <label className="px-2 mb-2 text-sm text-slate-700">
                              گارانتی
                            </label>
                            <select
                              class="form-select form-select-text-style py-[0.575rem] pr-2"
                              aria-label="Default select example"
                            >
                              <option selected> انتخاب کنید</option>
                              <option
                                className="text-sm text-slate-400"
                                value="1"
                              ></option>
                              <option
                                className="text-sm text-slate-400"
                                value="2"
                              ></option>
                              <option
                                className="text-sm text-slate-400"
                                value="3"
                              ></option>
                            </select>
                          </div>
                          <div className="col-span-12 md:col-span-3">
                            <label className="px-2 mb-2 text-sm text-slate-700">
                              مالیات بر ارزش افزوده
                            </label>
                            <select
                              class="form-select form-select-text-style py-[0.575rem] pr-2"
                              aria-label="Default select example"
                            >
                              <option selected> انتخاب کنید </option>
                              <option
                                className="text-sm text-slate-400"
                                value="1"
                              ></option>
                              <option
                                className="text-sm text-slate-400"
                                value="2"
                              ></option>
                              <option
                                className="text-sm text-slate-400"
                                value="3"
                              ></option>
                            </select>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-3 mt-4">
                          <div className="col-span-2 md:col-span-1">
                            <label className="px-2 mb-2 text-sm text-slate-700">
                              ارسال به کسب و کارهای مورد علاقه
                            </label>
                            <select
                              class="form-select form-select-text-style py-[0.575rem] pr-2"
                              aria-label="Default select example"
                            >
                              <option selected> انتخاب کنید</option>
                              <option
                                className="text-sm text-slate-400"
                                value="1"
                              ></option>
                              <option
                                className="text-sm text-slate-400"
                                value="2"
                              ></option>
                              <option
                                className="text-sm text-slate-400"
                                value="3"
                              ></option>
                            </select>
                          </div>
                          <div className="col-span-2 md:col-span-1">
                            <label className="px-2 mb-2 text-sm text-slate-700">
                              ارسال به حوزه های مرتبط
                            </label>
                            <select
                              class="form-select form-select-text-style py-[0.575rem] pr-2"
                              aria-label="Default select example"
                            >
                              <option selected>انتخاب کنید</option>
                              <option
                                className="text-sm text-slate-400"
                                value="1"
                              ></option>
                              <option
                                className="text-sm text-slate-400"
                                value="2"
                              ></option>
                              <option
                                className="text-sm text-slate-400"
                                value="3"
                              ></option>
                            </select>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-3 mt-4">
                          <div className="col-span-2 standard-col md:col-span-1">
                            <div className="flex items-center justify-between">
                              <div className="flex flex-col my-3 products-specifications-title">
                                <h5 className="text-xs font-semibold md:text-sm">
                                  استانداردها / مجوز ها
                                </h5>
                              </div>
                              <Link href="/">
                                <a className="flex items-center h-full">
                                  <p className="text-xs text-slate-400">مشاهده همه </p>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-3 h-3 mr-1 text-slate-400"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M15.75 19.5L8.25 12l7.5-7.5"
                                    />
                                  </svg>
                                </a>
                              </Link>
                            </div>
                            <div className="p-4 border rounded-md border-slate-100">
                              <div className="grid w-full grid-cols-3 gap-4 ">
                                <div className="relative col-span-3 border rounded-sm md:col-span-1 border-slate-100">
                                  <span className="absolute left-0 flex flex-col justify-center w-4 h-full space-y-2 bg-black rounded-sm rounded-r-none opacity-50">
                                    <Link href="/">
                                      <a>
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          strokeWidth={1.5}
                                          stroke="currentColor"
                                          className="w-4 h-4 opacity-100 text-slate-400"
                                        >
                                          <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                                          />
                                        </svg>
                                      </a>
                                    </Link>
                                    <Link href="/">
                                      <a>
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          strokeWidth={1.5}
                                          stroke="currentColor"
                                          className="w-4 h-4 opacity-100 text-rose-500"
                                        >
                                          <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                          />
                                        </svg>
                                      </a>
                                    </Link>
                                  </span>
                                  <Image
                                    src="/public/assets/img/products/2.png"
                                    width="50"
                                    height="50"
                                    className=""
                                  ></Image>
                                  {/*inja mojavezha va estandardha gharar migire */}
                                </div>
                                <div className="relative col-span-3 border rounded-sm md:col-span-1 border-slate-100">
                                  <span className="absolute left-0 flex flex-col justify-center w-4 h-full space-y-2 bg-black rounded-sm rounded-r-none opacity-50">
                                    <Link href="/">
                                      <a>
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          strokeWidth={1.5}
                                          stroke="currentColor"
                                          className="w-4 h-4 opacity-100 text-slate-400"
                                        >
                                          <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                                          />
                                        </svg>
                                      </a>
                                    </Link>
                                    <Link href="/">
                                      <a>
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          strokeWidth={1.5}
                                          stroke="currentColor"
                                          className="w-4 h-4 opacity-100 text-rose-500"
                                        >
                                          <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                          />
                                        </svg>
                                      </a>
                                    </Link>
                                  </span>
                                  <Image
                                    src="/public/assets/img/products/2.png"
                                    width="50"
                                    height="50"
                                    className=""
                                  ></Image>
                                  {/* eror dar mamayesh ax */}
                                </div>
                                <div className="col-span-3 px-2 py-6 border rounded-sm md:col-span-1 border-slate-100">
                                  <Link href="/">
                                    <a className="flex items-center justify-center">
                                      <div className="flex items-center justify-between">
                                        <span className="text-xs text-slate-400">
                                          افزودن
                                        </span>
                                      </div>
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-6 h-6 mx-2 text-slate-400"
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
                          <div className="col-span-2 product-usage-col md:col-span-1">
                            <div className="flex items-center justify-between">
                              <div className="flex flex-col my-3 products-specifications-title">
                                <h5 className="text-xs font-semibold md:text-sm">
                                  راهنمای استفاده از محصول
                                </h5>
                              </div>
                              <Link href="/">
                                <a className="flex items-center h-full">
                                  <p className="text-xs text-slate-400">مشاهده همه </p>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-3 h-3 mr-1 text-slate-400"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M15.75 19.5L8.25 12l7.5-7.5"
                                    />
                                  </svg>
                                </a>
                              </Link>
                            </div>
                            <div className="p-4 border rounded-md border-slate-100">
                              <div className="grid w-full grid-cols-3 gap-4 ">
                                <div className="relative col-span-3 border rounded-sm md:col-span-1 border-slate-100">
                                  <span className="absolute left-0 flex flex-col justify-center w-4 h-full space-y-2 bg-black rounded-sm rounded-r-none opacity-50">
                                    <Link href="/">
                                      <a>
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          strokeWidth={1.5}
                                          stroke="currentColor"
                                          className="w-4 h-4 opacity-100 text-slate-400"
                                        >
                                          <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                                          />
                                        </svg>
                                      </a>
                                    </Link>
                                    <Link href="/">
                                      <a>
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          strokeWidth={1.5}
                                          stroke="currentColor"
                                          className="w-4 h-4 opacity-100 text-rose-500"
                                        >
                                          <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                          />
                                        </svg>
                                      </a>
                                    </Link>
                                  </span>
                                  <Image
                                    src="/public/assets/img/products/2.png"
                                    width="50"
                                    height="50"
                                    className=""
                                  ></Image>
                                  {/*inja pdf gharar migire */}
                                </div>
                                <div className="hidden col-span-3 md:col-span-1 md:block"></div>
                                <div className="col-span-3 px-2 py-6 border rounded-sm md:col-span-1 border-slate-100">
                                  <Link href="/">
                                    <a className="flex items-center justify-center">
                                      <div className="flex items-center justify-between">
                                        <span className="text-xs text-slate-400">
                                          افزودن
                                        </span>
                                      </div>
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-6 h-6 mx-2 text-slate-400"
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
                        </div>
                        <div className="mt-4 space-y-2 question-content">
                          <div className="flex flex-col mb-2 discount-title">
                            <h5 className="text-xs font-semibold md:text-sm">
                              سوالات متداول
                            </h5>
                          </div>
                          <div class="flex">
                            <span class="inline-flex items-center md:px-3 px-1 md:text-sm text-[10px] text-gray-900 bg-gray-200 rounded-r-md border border-r-0 border-gray-300 dark:bg-gray-600 ">
                              سوال
                            </span>
                            <input
                              type="text"
                              id="website-admin"
                              class="rounded-none rounded-l-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full md:text-sm text-[8px] border-gray-300 p-2.5"
                              placeholder="از زمان سفارش محصول تا زمان تحویل به مشتری حدودا چقدر زمان می برد ؟"
                            />
                          </div>
                          <div class="flex">
                            <span class="inline-flex items-center md:px-3 px-1 md:text-sm text-[10px] text-gray-900 bg-gray-200 rounded-r-md border border-r-0 border-gray-300">
                              پاسخ
                            </span>
                            <input
                              type="text"
                              id="website-admin"
                              class="rounded-none rounded-l-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full md:text-sm text-[8px] border-gray-300 p-2.5"
                              placeholder="با توجه به زمان سفارش و مکان تحویل محصول بین ۲ تا ۵ روز کاری متغییر است"
                            />
                          </div>
                        </div>
                        <div className="inline-flex justify-end w-full my-3 btn-add">
                          <Link href="/">
                            <a className="link-add-slide md:w-36 w-24 h-full md:px-2.5 px-1 md:py-1.5 py-0.5 border border-slate-400 rounded-md flex items-center justify-center">
                              <span className="ml-3 text-xs text-slate-400">افزودن</span>
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
                      <div className="flex justify-end w-full h-full py-4 border-t-2 border-dotted next-btn border-slate-100">
                        <div className="flex items-center justify-between w-full">
                          <div className="inline-flex items-center">
                            <div className="ml-4 drop-btn">
                              <Link href="/">
                                <a
                                  class="flex bg-orange-400  hover:bg-orange-500 text-white rounded-md text-xs px-2 py-2"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  وضعیت محصول
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-4 h-4 text-white"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                    />
                                  </svg>
                                </a>
                              </Link>
                              <div class="dropdown">
                                <ul class="dropdown-menu w-20">
                                  <li className="text-xs text-right">
                                    <a class="dropdown-item" href="#">
                                      در حال آماده سازی
                                    </a>
                                  </li>
                                  <li className="text-xs text-right">
                                    <a class="dropdown-item" href="#">
                                      ارسال شده
                                    </a>
                                  </li>
                                  <li className="text-xs text-right">
                                    <a class="dropdown-item" href="#">
                                      دریافت شده{" "}
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="before-btn">
                              <Link href="/">
                                <a
                                  class="bg-orange-400  hover:bg-orange-500 text-white rounded-md text-xs px-2 py-1.5"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  پیش نمایش
                                </a>
                              </Link>
                            </div>
                          </div>
                          <div className="end-save">
                            <Link href="/">
                              <a className="px-2 py-1 my-6 bg-blue-500 rounded-md hover:bg-blue-400">
                                <span className="text-xs text-white">ثبت نهایی</span>
                              </a>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default add;
