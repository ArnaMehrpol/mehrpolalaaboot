import React from "react";
import Link from "next/link";
import Image from "next/image";

const details = () => {
  return (
    <div>
      <section
        className="max-w-screen-lg mx-auto px-3 relative z-[9999] lg:mt-[85px] mt-[42px] overflow-hidden"
        dir="rtl"
      >
        <div className="px-3 overflow-hidden bg-white rounded-lg shadow-md ">
          <div className="flex flex-col my-4 add-personnel-title">
            <h5 className="font-semibold md:text-base taxt-sm">
              جزئیات شکایات در یافتی
            </h5>
            <small className="text-slate-600 text-xs mt-0.5">
              در این بخش جزئیات شکایات دریافتی نمایش داده می شود .
            </small>
          </div>
          <div className="bg-blue-100 rounded-xl p-4 space-y-4">
            <div className="bg-white rounded-lg border border-slate-100 p-4 flex flex-col space-y-2">
              <div className="flex md:flex-row flex-col md:space-y-0 space-y-1">
                <span className="text-slate-600 text-xs">شاکی :</span>
                <span className="text-slate-400 text-xs md:mr-16 mr-0">
                  {" "}
                  کلینیک ساختمانی مپ / امیر رضا باقری
                </span>
                <span className="text-slate-400 text-xs md:mr-4 mr-0">
                  {" "}
                  کد شناسه ۱۲۴۵۸
                </span>
              </div>
              <div className="flex md:flex-row flex-col md:space-y-0 space-y-1">
                <span className="text-slate-600 text-xs">متشاکی :</span>
                <span className="text-slate-400 text-xs md:mr-14 mr-0">
                  {" "}
                  شیک نو / فرزانه رحیمی
                </span>
                <span className="text-slate-400 text-xs md:mr-4 mr-0">
                  کد شناسه ۲۴۵۱۲
                </span>
              </div>
              <div className="flex md:flex-row flex-col md:space-y-0 space-y-1">
                <span className="text-slate-600 text-xs">شماره سفارش :</span>
                <span className="text-slate-400 text-xs md:mr-8 mr-0">
                  ۲۴۵۱۲
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-slate-600 text-xs mb-3">متن شکایت :</span>
                <div class="w-full input-group">
                  <textarea
                    className="form-control placeholder:text-[10px] text-slate-400"
                    aria-label="With textarea"
                    rows="6"
                    cols="50"
                    placeholder="با توجه به اعلام حداکثر زمان ارسال متاسفانه محصول با سه روز تاخیر ارسال شده و تا زمان ارسال نیز کسی پاسخگو نبود ."
                  ></textarea>
                </div>
              </div>
              <div className="text-slate-600 text-xs my-3">پیوست :</div>
              <div className="flex space-x-16 rtl:space-x-reverse">
                <Link href="">
                  <a className="text-[11px] mb-3 text-blue-500 hover:text-blue-400">
                    قرارداد شماره ۱۱۲۱۹
                  </a>
                </Link>
                <Link href="">
                  <a className="text-[11px] mb-3 text-blue-500 hover:text-blue-400">
                    فیلم
                  </a>
                </Link>
              </div>
              <div className="flex md:space-x-14 space-x-7 rtl:space-x-reverse">
                <Link href="">
                  <a className="text-[11px] mb-3 text-blue-500 hover:text-blue-400">
                    فاکتور شماره ۱/۱۱۲۱۹
                  </a>
                </Link>
                <Link href="">
                  <a className="text-[11px] mb-3 text-blue-500 hover:text-blue-400">
                    عکس شماره یک
                  </a>
                </Link>
              </div>
              <div className="w-full flex md:flex-row flex-col justify-between ">
                <div className="flex md:space-x-12 space-x-6 rtl:space-x-reverse">
                  <Link href="">
                    <a className="text-[11px] mb-3 text-blue-500 hover:text-blue-400">
                      نامه شماره الف/ ۱۱۱/۱۰{" "}
                    </a>
                  </Link>
                  <Link href="">
                    <a className="text-[11px] mb-3 text-blue-500 hover:text-blue-400">
                      عکس شماره دو
                    </a>
                  </Link>
                </div>
              </div>
              <div className="flex md:flex-row flex-col justify-between md:items-center md:space-y-0 space-y-3">
                <div className="flex space-x-2 space-x-reverse">
                  <span className="text-slate-600 text-xs">
                    مهلت پاسخگویی :
                  </span>
                  <span className="text-slate-600 text-xs">۱۴۰۱/۰۶/۳۱</span>
                </div>
                <div className="inline-flex justify-end">
                  <Link href="detailsTwo">
                    <a className="text-xs text-white bg-blue-500 hover:bg-blue-400 flex justify-center items-center px-2 py-2 rounded-sm">
                      پاسخ به شکایت
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg border border-slate-100 p-4 flex flex-col space-y-2">
              <div className="flex md:flex-row flex-col md:space-y-0 space-y-1">
                <span className="text-slate-600 text-xs">متشاکی :</span>
                <span className="text-slate-400 text-xs md:mr-14 mr-0">
                  {" "}
                  شیک نو / فرزانه رحیمی
                </span>
                <span className="text-slate-400 text-xs md:mr-4 mr-0">
                  کد شناسه ۲۴۵۱۲
                </span>
              </div>
              <div className="flex md:flex-row flex-col md:space-y-0 space-y-1">
                <span className="text-slate-600 text-xs">شاکی :</span>
                <span className="text-slate-400 text-xs md:mr-16 mr-0">
                  {" "}
                  کلینیک ساختمانی مپ / امیر رضا باقری
                </span>
                <span className="text-slate-400 text-xs md:mr-4 mr-0">
                  کد شناسه ۱۲۴۵۸
                </span>
              </div>
              <div className="flex md:flex-row flex-col md:space-y-0 space-y-1">
                <span className="text-slate-600 text-xs">شماره سفارش :</span>
                <span className="text-slate-400 text-xs md:mr-8 mr-0">
                  ۲۴۵۱۲
                </span>
              </div>
              <div className="flex md:flex-row flex-col">
                <span className="text-slate-600 text-xs">تاریخ ثبت پاسخ :</span>
                <span className="text-slate-400 text-xs md:mr-6 mr-0">
                  ۱۴۰۱/۰۶/۳۱
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-slate-600 text-xs mb-3">متن پاسخ :</span>
                <div class="w-full input-group">
                  <textarea
                    className="form-control placeholder:text-[10px]  text-slate-400"
                    aria-label="With textarea"
                    rows="6"
                    cols="50"
                    placeholder="باسلام و عذرخواهی از مشکل پیش آمده دلیل تاخیر در ارسال محصول خریداری شده عدم تامین مواد اوله توسط تامین کنندگان این شرکت در زمان مقرربوده است بنابراین با توجه به این مشکل مراتب عذرخواهی ماراپذیرا باشیدهمچنین تاریخ تحویل مواد اولیه جهت رویت شما به پیوست ارسال می گرددد امیدوار است تجربه خریدهای بعدی برایتان لذت بخش باشد"
                  ></textarea>
                </div>
              </div>
              <div className="text-slate-600 text-xs my-3">پیوست :</div>
              <div className="flex space-x-16 rtl:space-x-reverse">
                <Link href="">
                  <a className="text-[11px] mb-3 text-blue-500 hover:text-blue-400">
                    قرارداد شماره ۱۱۲۱۹
                  </a>
                </Link>
                <Link href="">
                  <a className="text-[11px] mb-3 text-blue-500 hover:text-blue-400">
                    فیلم
                  </a>
                </Link>
              </div>
              <div className="flex md:space-x-14 space-x-7 rtl:space-x-reverse">
                <Link href="">
                  <a className="text-[11px] mb-3 text-blue-500 hover:text-blue-400">
                    فاکتور شماره ۱/۱۱۲۱۹
                  </a>
                </Link>
                <Link href="">
                  <a className="text-[11px] mb-3 text-blue-500 hover:text-blue-400">
                    عکس شماره یک
                  </a>
                </Link>
              </div>
              <div className="w-full flex md:flex-row flex-col justify-between ">
                <div className="flex md:space-x-12 space-x-6 rtl:space-x-reverse">
                  <Link href="">
                    <a className="text-[11px] mb-3 text-blue-500 hover:text-blue-400">
                      نامه شماره الف/ ۱۱۱/۱۰{" "}
                    </a>
                  </Link>
                  <Link href="">
                    <a className="text-[11px] mb-3 text-blue-500 hover:text-blue-400">
                      عکس شماره دو
                    </a>
                  </Link>
                </div>
                <div className="inline-flex justify-end">
                  <Link href="">
                    <a className="text-xs text-white bg-blue-500 hover:bg-blue-400 flex justify-center items-center px-4 py-2 rounded-sm">
                      ارسال
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg border border-slate-100 p-4 flex flex-col space-y-2">
              <div className="w-full flex flex-col">
                <p className="md:text-sm text-xs text-slate-600">
                  آیا پاسخ شکایت نظر شما را تامین نموده است ؟{" "}
                </p>
                <div className="w-full flex md:flex-row flex-col md:items-center md:justify-around mt-3 md:space-y-0 space-y-3">
                  <Link href="/">
                    <a className="bg-blue-500 hover:bg-blue-400 text-white md:text-xs text-[10px] md:px-12 px-6 py-1.5 flex justify-center items-center rounded-sm">
                      بلی - پایان رسیدگی به شکایت
                    </a>
                  </Link>
                  <Link href="/">
                    <a className="bg-orange-500 hover:bg-orange-400 text-white md:text-xs text-[10px] md:px-7 px-3 py-1.5 flex justify-center items-center rounded-sm">
                      خیر - ارجاع به دپارتمان حقوقی و قراردادی
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default details;
