import Image from "next/image";
import React from "react";
import MainCard from "../../components/profile/components/card/MainCard";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import HistoryProducts from "../../components/profile/components/card/HistoryProducts";
import HistoryBusiness from "../../components/profile/components/card/HistoryBusiness";
import Pagination from "../../components/profile/components/pagination/Pagination";
import ShowpathProfile from '../../components/profile/components/showPathProfile/ShowpathProfile'
import ProfileLayout from '../../components/profile/layouts/ProfileLayout'

const history = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
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
        <div className="profile-content w-[1100px] md:col-span-9 col-span-12 md:pb-20 md:mr-3 md:px-0 px-2">
          <div className="mainTitle mb-4">
            <h6 className="text-muted fw-bold border-b-2 border-blue-500 pb-1.5 w-24">
              بازدیدهای اخیر
            </h6>
          </div>
          <nav className="mb-3">
            <div class="nav nav-tabs" id="nav-tab" role="tablist">
              <button
                class="nav-link active"
                id="nav-home-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-home"
                type="button"
                role="tab"
                aria-controls="nav-home"
                aria-selected="true"
              >
                محصولات
              </button>
              <button
                class="nav-link"
                id="nav-profile-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-profile"
                type="button"
                role="tab"
                aria-controls="nav-profile"
                aria-selected="false"
              >
                کسب و کارها
              </button>
            </div>
          </nav>
          <div class="tab-content" id="nav-tabContent">
            <div
              class="tab-pane fade show active"
              id="nav-home"
              role="tabpanel"
              aria-labelledby="nav-home-tab"
              tabindex="0"
            >
              {/* product tab content start */}
              <div
                class="tab-pane fade show active"
                id="nav-home"
                role="tabpanel"
                aria-labelledby="nav-home-tab"
                tabindex="0"
              >
                <div
                  class="tab-pane fade show active"
                  id="pills-home"
                  role="tabpanel"
                  aria-labelledby="pills-home-tab"
                >
                  <div className="product-content">
                    <div className="product-grid grid grid-cols-12 gap-3 border border-slate-100 rounded-md p-3">
                      {/* <div className="product-col md:col-span-4 col-span-12">
                        <HistoryProducts />
                      </div>
                      <div className="product-col md:col-span-4 col-span-12">
                        <HistoryProducts />
                      </div>
                      <div className="product-col md:col-span-4 col-span-12">
                        <HistoryProducts />
                      </div>
                      <div className="product-col md:col-span-4 col-span-12">
                        <HistoryProducts />
                      </div>
                      <div className="product-col md:col-span-4 col-span-12">
                        <HistoryProducts />
                      </div>
                      <div className="product-col md:col-span-4 col-span-12">
                        <HistoryProducts />
                      </div> */}
                    </div>
                  </div>
                </div>
                <div
                  class="tab-pane fade"
                  id="pills-profile"
                  role="tabpanel"
                  aria-labelledby="pills-profile-tab"
                ></div>
              </div>
              {/* product tab content end */}
            </div>
            <div
              class="tab-pane fade"
              id="nav-profile"
              role="tabpanel"
              aria-labelledby="nav-profile-tab"
              tabindex="0"
            >
              <div className="business-content ">
                <div className="business-grid grid grid-cols-12 gap-3 border border-slate-100 rounded-md p-4">
                  {/* <div className="business-col md:col-span-4 col-span-12">
                    <HistoryBusiness />
                  </div>
                  <div className="business-col md:col-span-4 col-span-12">
                    <HistoryBusiness />
                  </div>
                  <div className="business-col md:col-span-4 col-span-12">
                    <HistoryBusiness />
                  </div>
                  <div className="business-col md:col-span-4 col-span-12">
                    <HistoryBusiness />
                  </div>
                  <div className="business-col md:col-span-4 col-span-12">
                    <HistoryBusiness />
                  </div>
                  <div className="business-col md:col-span-4 col-span-12">
                    <HistoryBusiness />
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          <Pagination />
        </div>
      </div>
    </div>
    </>
  );
};

export default history;
