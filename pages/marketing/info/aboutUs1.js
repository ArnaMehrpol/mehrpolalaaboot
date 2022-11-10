import Link from "next/link";
import Image from "next/image";
import React from "react";
import MarketingInfoSide from "../../../components/marketing/layout/MarketingInfoSide";
import MarketingInfoHeader from "../../../components/marketing/marketingHeader/MarketingInfoHeader";


const about = () => {
  return (
    <div className="mx-auto">
      <div className="business-panel-container">
        <div className="business-panel-cols flex bg-slate-100 ">
          <div>
            <MarketingInfoSide/>
          </div>
          <div className="business-panel-mainbar w-100 lg:col-span-9 col-span-12 shadow-lg shadow-slate-100 relative">
            <MarketingInfoHeader/>
            <section className="about-container max-w-screen-md mx-auto lg:px-0 px-6 relative z-[]">
              <div className="about-form bg-white overflow-hidden roundde-lg shadow-md px-5 mt-[4.5rem]">
                <div className="about-title flex flex-col my-4">
                  <h5 className="text-base font-semibold">درباره ما</h5>
                  <small className="text-slate-500 text-xs mt-0.5">
                    در این قسمت ییام مدیریت و توضیحات خود را وارد کنید.
                  </small>
                </div>
                <div className="about-list-tabele-content">
                  <div className="about-list-title flex flex-col mb-4">
                    <h5 className="text-base font-semibold">
                      امکانات و تجهیزات{" "}
                    </h5>
                  </div>
                  <table class="about-list-tabele table table-bordered rounded-md overflow-hidden mb-8">
                    <thead>
                      <tr className=" bg-blue-100 text-center text-slate-500 font-semibold text-xs">
                        <th scope="col">ردیف</th>
                        <th scope="col">نام تجهیزات</th>
                        <th scope="col">تعداد</th>
                        <th scope="col">مشخصات تجهیزات</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="text-center">
                        <th scope="row" className="text-slate-500">
                          ۱
                        </th>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr className="text-center">
                        <th scope="row" className="text-slate-500">
                          ۲
                        </th>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr className="text-center">
                        <th scope="row" className="text-slate-500">
                          ۳
                        </th>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr className="text-center">
                        <th scope="row" className="text-slate-500">
                          ۴
                        </th>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="next-btn w-full h-full border-t-2 border-dotted border-slate-100 flex justify-end items-center">
                    <Link href="/aa/user-info/management">
                      <a className="px-2 py-1 bg-blue-500 hover:bg-blue-400 rounded-md my-6">
                        <span className="text-white text-xs font-semibold">
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

export default about;
