import Image from "next/image";
import Link from "next/link";
import React from "react";
import ShowpathProfile from '../../components/profile/components/showPathProfile/ShowpathProfile'
import ProfileLayout from '../../components/profile/layouts/ProfileLayout'

const order = () => {
  return (
    <>
    <div className=' max-w-screen-2xl bg-light md:px-12 pt-3 mx-auto'
    dir="rtl">
      <div>
        <ShowpathProfile/>
      </div>
      <div className='flex flex-row'>
        <div className=''>
            <ProfileLayout/>
        </div>
        <div className="order-detail-content w-[1100px] md:col-span-9 col-span-12 md:pb-20 md:mr-3 md:px-0 px-2">
          <div className="mainTitle  md:mt-0 mt-4">
            <h6 className="text-muted fw-bold border-b-2 border-blue-500 pb-1.5 w-32">
              سفارش ۱۶۰۱۸۰۷۷۸
            </h6>
          </div>
          <div className="order-box bg-white border border-slate-200 rounded-lg p-2 mt-5">
            <div className="mainTitle-small relative">
              <h6 className="text-sm font-semibold text-slate-500 border-b-2 border-slate-500 w-24 py-1.5">
                جزییات سفارش{" "}
              </h6>
            </div>
            <div className="order-detail my-4">
              <div className="order-flex flex lg:flex-row flex-col lg:items-center md:space-x-16  space-x-0 lg:rtl:space-x-reverse lg:space-y-0 space-y-4">
                <div className="order-date flex items-center">
                  <span className="lg:text-sm text-xs text-slate-400 font-semibold">
                    تاریخ :
                  </span>
                  <strong className="lg:text-sm text-xs">۶خرداد ۱۴۰۱</strong>
                </div>
                <div className="flex items-center">
                  <span className="text-xs text-slate-400 font-semibold">
                    تحویل گیرنده :
                  </span>
                  <span className="text-xs text-black font-semibold">
                    محمد مهدوی
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="text-xs text-slate-400 font-semibold">
                    شماره موبایل :
                  </span>
                  <strong className="lg:text-sm text-xs">۰۹۱۳۴۵۶۷۷۸۹</strong>
                </div>
              </div>
              <div className="order-address flex items-center mt-3">
                <span className="text-xs font-semibold text-slate-400">
                  آدرس:
                </span>
                <strong className="lg:text-sm text-xs">
                  تهران، مرزداران، بزرگراه آیت الله اشرفی اصفهانی، بن بست بهار ،
                  ساختمان بهاران، پ ۹
                </strong>
              </div>
              <div className="order-flex flex lg:flex-row flex-col lg:items-center md:space-x-16  space-x-0 lg:rtl:space-x-reverse lg:space-y-0 space-y-4 mt-3">
                <div className="flex items-center ">
                  <span className="text-xs text-slate-400 font-semibold">
                    شماره قرارداد :
                  </span>
                  <strong className="lg:text-sm text-xs">۱۶۰۱۸۰۷۷</strong>
                </div>
                <div className="flex items-center">
                  <span className="text-xs text-slate-400 font-semibold">
                    مبلغ :
                  </span>
                  <strong className="lg:text-sm text-xs">
                    ۵۶۷.۰۰۰<small className="text-[12px]">تومان</small>
                    <small className="text-[12px]"> (پرداخت اینترنتی)</small>{" "}
                  </strong>
                </div>
                <div className="flex items-center">
                  <span className="text-xs text-slate-400 font-semibold">
                    نام فروشنده :
                  </span>
                  <strong className="lg:text-sm text-xs">علی علوی</strong>
                </div>
              </div>
              <div className="oredr-condition mt-3">
                <p className="text-xs text-slate-400 font-semibold">وضعیت</p>
                <div className="flex lg:flex-row flex-col mt-2">
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-sm"></span>
                    <p className="text-[10px] text-slate-400 mr-3">
                      سفارش در این مرحله قرار دارد .
                    </p>
                  </div>
                  <div className="flex items-center lg:mr-24">
                    <span className="w-2 h-2 bg-green-500 rounded-sm"></span>
                    <p className="text-[10px] text-slate-400 mr-3">
                      سفارش از این مرحله عبور کرده است .
                    </p>
                  </div>
                  <div className="flex items-center lg:mr-24">
                    <span className="w-2 h-2 bg-slate-300 rounded-sm"></span>
                    <p className="text-[10px] text-slate-400 mr-3">
                      سفارش به این مرحله نرسیده است .
                    </p>
                  </div>
                </div>
                <div className="order-diagram w-full h-full flex md:flex-row flex-col mt-3 md:space-y-0 space-y-6 md:items-start items-center">
                  <div className="flex flex-col relative ">
                    <div className="flex">
                      <span className="md:w-32 w-48 md:h-12 h-16 bg-slate-300 text-xs text-slate-600 flex items-center justify-center">
                        در حال آماده سازی
                      </span>
                      <span className="text-xs text-slate-400 absolute top-[42px] right-[74px] md:hidden block">
                        ۱۴۰۱/۰۹/۱۹
                      </span>
                      <i class="bi bi-arrow-down md:hidden block flex items-end absolute -bottom-[23px] right-[91px] text-slate-400 text-[24px]"></i>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-10 h-10 text-slate-200 mt-1 md:block hidden"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                        />
                      </svg>
                    </div>
                    <span className="text-xs text-slate-400 absolute top-[56px] left-[76px] md:block hidden">
                      ۱۴۰۱/۰۹/۱۹
                    </span>
                  </div>
                  <div className="flex flex-col relative ">
                    <div className="flex">
                      <span className="md:w-32 w-48 md:h-12 h-16 bg-slate-300 text-xs text-slate-600 flex items-center justify-center">
                        ارسال شده
                      </span>
                      <span className="text-xs text-slate-400 absolute top-[42px] right-[74px] md:hidden block">
                        ۱۴۰۱/۰۹/۱۹
                      </span>
                      <i class="bi bi-arrow-down md:hidden block flex items-end absolute -bottom-[23px] right-[91px] text-slate-400 text-[24px]"></i>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-10 h-10 text-slate-200 mt-1 md:block hidden"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                        />
                      </svg>
                    </div>
                    <span className="text-xs text-slate-400 absolute top-[56px] left-[76px] md:block hidden">
                      ۱۴۰۱/۰۹/۱۹
                    </span>
                  </div>
                  <div className="flex flex-col relative ">
                    <div className="flex">
                      <span className="md:w-32 w-48 md:h-12 h-16 bg-slate-300 text-xs text-slate-600 flex items-center justify-center">
                        تحویل گرفته
                      </span>
                      <span className="text-xs text-slate-400 absolute top-[42px] right-[74px] md:hidden block">
                        ۱۴۰۱/۰۹/۱۹
                      </span>
                    </div>
                    <span className="text-xs text-slate-400 absolute top-[56px] left-[37px] md:block hidden">
                      ۱۴۰۱/۰۹/۱۹
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-send">
              <div className="mainTitle-small relative mb-4">
                <h6 className="text-sm font-semibold text-slate-500 border-b-2 border-slate-500 w-32 py-1.5">
                  کالاهای خریداری شده
                </h6>
              </div>
              <div className="order-send-cols grid grid-cols-12 gap-3">
                <div className="order-send-col lg:col-span-6 col-span-12">
                  <div className="order-send-flex border-2 border-dotted border-slate-200 rounded-md overflow-hidden flex p-2">
                    <div className="order-send-image flex items-center">
                      <Link href="/">
                        <a className="flex items-center justify-center p-2 border border-slate-100 rounded-full">
                          <Image
                            src="/../public/assets/img/products/10.png"
                            width="35px"
                            height="35px"
                          ></Image>
                        </a>
                      </Link>
                    </div>
                    <div className="flex flex-col pr-3 ">
                      <Link href="/">
                        <a>
                          <p className="text-xs font-semibold text-black">
                            دستگاه کراشر چوب و برگ خرد کن آسیاب دار{" "}
                          </p>
                        </a>
                      </Link>
                      <div className="flex my-2">
                        <span className="px-2 py-1 bg-slate-100 text-xs rounded-md overflow-hidden text-slate-400 ml-3">
                          رنگ:قرمز
                        </span>
                        <span className="px-2 py-1 bg-slate-100 text-xs rounded-md overflow-hidden text-slate-400">
                          گران ترین
                        </span>
                      </div>
                      <div className="flex items-center">
                        <div className="flex relative pl-5">
                          <span className="text-xs font-semibold text-black px-2">
                            ۵۶۷.۰۰۰
                          </span>
                          <span className="text-xs font-semibold text-black">
                            توما
                          </span>
                          <span className="text-xs font-semibold text-black absolute -top-[10px] right-[65px]">
                            ن
                          </span>
                        </div>
                        <div className="flex relative pl-5">
                          <span className="text-xs font-semibold text-rose-500 px-2">
                            ۱۵.۰۰۰
                          </span>
                          <span className="text-xs font-semibold text-rose-500">
                            توما
                          </span>
                          <span className="text-xs font-semibold text-rose-500 absolute -top-[10px] right-[61px]">
                            ن
                          </span>
                          <span className="text-xs font-semibold text-rose-500 pr-5">
                            تخفیف
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="order-send-col lg:col-span-6 col-span-12">
                  <div className="order-send-flex border-2 border-dotted border-slate-200 rounded-md overflow-hidden flex p-2">
                    <div className="order-send-image flex items-center">
                      <Link href="/">
                        <a className="flex items-center justify-center p-2 border border-slate-100 rounded-full">
                          <Image
                            src="/../public/assets/img/products/14.png"
                            width="35px"
                            height="35px"
                          ></Image>
                        </a>
                      </Link>
                    </div>
                    <div className="flex flex-col pr-3 ">
                      <p className="text-xs font-semibold text-black">
                        روتیواتور بازویی سنسوردار AKREP الکتریکی
                      </p>
                      <div className="flex my-2">
                        <span className="px-2 py-1 bg-slate-100 text-xs rounded-md overflow-hidden text-slate-400 ml-3">
                          رنگ:سبز
                        </span>
                        <span className="px-2 py-1 bg-slate-100 text-xs rounded-md overflow-hidden text-slate-400">
                          ارزان ترین
                        </span>
                      </div>
                      <div className="flex items-center">
                        <div className="flex relative pl-5">
                          <span className="text-xs font-semibold text-black px-2">
                            ۵۶۷.۰۰۰
                          </span>
                          <span className="text-xs font-semibold text-black">
                            توما
                          </span>
                          <span className="text-xs font-semibold text-black absolute -top-[10px] right-[65px]">
                            ن
                          </span>
                        </div>
                        <div className="flex relative pl-5">
                          <span className="text-xs font-semibold text-rose-500 px-2">
                            ۳۲.۵۰۰
                          </span>
                          <span className="text-xs font-semibold text-rose-500">
                            توما
                          </span>
                          <span className="text-xs font-semibold text-rose-500 absolute -top-[10px] right-[61px]">
                            ن
                          </span>
                          <span className="text-xs font-semibold text-rose-500 pr-5">
                            تخفیف
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="order-send-col lg:col-span-6 col-span-12">
                  <div className="order-send-flex border-2 border-dotted border-slate-200 rounded-md overflow-hidden flex p-2">
                    <div className="order-send-image flex items-center">
                      <Link href="/">
                        <a className="flex items-center justify-center p-2 border border-slate-100 rounded-full">
                          <Image
                            src="/../public/assets/img/products/12.png"
                            width="35px"
                            height="35px"
                          ></Image>
                        </a>
                      </Link>
                    </div>
                    <div className="flex flex-col pr-3 ">
                      <p className="text-xs font-semibold text-black">
                        {" "}
                        دستگاه نشاکار سه ردیفه ادنیس
                      </p>
                      <div className="flex my-2">
                        <span className="px-2 py-1 bg-slate-100 text-xs rounded-md overflow-hidden text-slate-400 ml-3">
                          رنگ:قرمز
                        </span>
                        <span className="px-2 py-1 bg-slate-100 text-xs rounded-md overflow-hidden text-slate-400">
                          گران ترین
                        </span>
                      </div>
                      <div className="flex relative pl-5">
                        <span className="text-xs font-semibold text-black px-2">
                          ۵۶۷.۰۰۰
                        </span>
                        <span className="text-xs font-semibold text-black">
                          توما
                        </span>
                        <span className="text-xs font-semibold text-black absolute -top-[10px] right-[65px]">
                          ن
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="order-send-col lg:col-span-6 col-span-12">
                  <div className="order-send-flex border-2 border-dotted border-slate-200 rounded-md overflow-hidden flex p-2">
                    <div className="order-send-image flex items-center">
                      <Link href="/">
                        <a className="flex items-center justify-center p-2 border border-slate-100 rounded-full">
                          <Image
                            src="/../public/assets/img/products/20.png"
                            width="35px"
                            height="35px"
                          ></Image>
                        </a>
                      </Link>
                    </div>
                    <div className="flex flex-col pr-3 ">
                      <p className="text-xs font-semibold text-black">
                        دستگاه نشاکار یک ردیفه آدنیس
                      </p>
                      <div className="flex my-2">
                        <span className="px-2 py-1 bg-slate-100 text-xs rounded-md overflow-hidden text-slate-400 ml-3">
                          رنگ:سبز
                        </span>
                        <span className="px-2 py-1 bg-slate-100 text-xs rounded-md overflow-hidden text-slate-400">
                          ارزان ترین
                        </span>
                      </div>
                      <div className="flex relative pl-5">
                        <span className="text-xs font-semibold text-black px-2">
                          ۵۶۷.۰۰۰
                        </span>
                        <span className="text-xs font-semibold text-black">
                          توما
                        </span>
                        <span className="text-xs font-semibold text-black absolute -top-[10px] right-[65px]">
                          ن
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="order-detail-buttons w-full flex items-center justify-end space-x-2 rtl:space-x-reverse py-3">
              <button class="order-detail-button transition-all inline-flex items-center justify-center text-xs py-1.5 px-3 rounded-md bg-white hover:bg-gray-200 text-gray-900 border border-gray-200 pl-5 overflow-hidden">
                <span>لغو درخواست</span>
              </button>
              <button class="order-detail-button transition-all inline-flex items-center justify-center text-xs py-1.5 px-3 rounded-md bg-white hover:bg-gray-200 text-gray-900 border border-gray-200 ml-3">
                <span>ثبت درخواست مرجوعی</span>
              </button>
              <button class="order-detail-button transition-all inline-flex items-center justify-center text-xs py-1.5 px-3 rounded-md bg-white hover:bg-gray-200 text-gray-900 border border-gray-200 pl-5 overflow-hidden">
                <span>ثبت دیدگاه</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};
export default order;
