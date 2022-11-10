import Link from "next/link";
import Image from "next/image";
import React from "react";
import MarketingUploadSide from "../../../components/marketing/layout/MarketingUploadSide";
import MarketingInfoHeader from "../../../components/marketing/marketingHeader/MarketingInfoHeader";
import { useState } from "react";
import MainRoot from "../../../components/marketing/fileManager/components/MainRoot";
import DeleteSlide from "../../../components/marketing/fileManager/components/DeleteSlide";

const slides = () => {
  const [show, setShow] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [rootFilesAddress, setrootFilesAddress] = useState();
  const [chooseFiles, setChooseFiles] = useState([]);
  const [slideId, setSlideId] = useState([]);
  const [Type, setType] = useState("slider");
  const closeMainRoot = () => {
    setShow(false);
    setShowDelete(false);
  };

  const InsertIntoSlides = (e) => {
    e.preventDefault();
    alert("Hi");
    for (var i = 0; i < slideId.length; i++) {
      console.log(slideId);
    }
  };

  const rootFilesAddressFunc = (rootFilesAddress) => {
    setrootFilesAddress(rootFilesAddress);
  };
  console.log(rootFilesAddress);
  const chooseFileFromMainRootFunc = (chooseFile) => {
    setChooseFiles(chooseFile);
    // setSlideId(chooseFile.id);
  };

  console.log(chooseFiles);
  // console.log(slideId);

  return (
    <div>
      {show && (
        <MainRoot
          closeMainRoot={closeMainRoot}
          rootFilesAddress={rootFilesAddressFunc}
          chooseFileFromMainRoot={chooseFileFromMainRootFunc}
        />
      )}
      {showDelete && <DeleteSlide closeMainRoot={closeMainRoot} />}
      <div className="business-panel-container">
        <div className="business-panel-cols flex grid-cols- bg-slate-100 ">
          <div>
            <MarketingUploadSide />
          </div>
          <div className="business-panel-mainbar w-100 lg:col-span- col-span- shadow-lg shadow-slate-100 relative overflow-hidden">
            <MarketingInfoHeader />
            <section className="slides-container max-w-screen-lg mx-auto px-12 flex justify-center items-center relative z-[] mt-[85px]">
              <div className=" bg-red overflow-hidden rounded-lg shadow-md px-3">
                <div className="slides-title flex flex-col my-4">
                  <h5 className="text-base font-semibold">اسلایدها</h5>

                  <small className="text-slate-600 text-xs mt-0.5">
                    اسلایدها جهت نمایش در صفحه کسب و کار
                  </small>
                </div>
                <div className="slides-flex flex flex-col">
                  <div className="btn-add inline-flex">
                    <button
                      onClick={() => {
                        setShow(true);
                      }}
                      className="fs-5 text-slate-400 mr-2"
                    >
                      افزودن اسلاید
                      <i className="bi bi-cloud-arrow-up fs-5 mr-2"></i>
                    </button>
                  </div>

                  <div className=" slideContainer items-center">
                    {/* slides-text */}
                    {/* ******************************************************************************************************************************** */}

                    {/* <div className="slides-cols grid grid-cols-12 gap-3 mt-4"> */}
                    {/* <div className=" slide-col lg:col-span-3 col-span-12"> */}
                    {chooseFiles &&
                      chooseFiles.map((file) => (
                        <div className="   m-1">
                          <div className="mySlideCard overflow-hidden silideScale">
                            <img
                              onChange={(e) => {
                                setSlideId(file.id);
                              }}
                              src={`${rootFilesAddress}/${file.name}`}
                              className="rounded-md  "
                              // id={setSlideId(file.id)}
                            />
                          </div>
                        </div>
                      ))}
                  </div>
                  {/* </div> */}
                  {/* </div> */}

                  {/* ******************************************************************************************************************************** */}
                  <div className=" row z-1  bg-salt-400">
                    <p className="text-slate-600 text-xs my-4 ms-2">
                      <span className="ml-1">
                        <i className="bi bi-exclamation-circle fs-6 "></i>
                      </span>
                      برای نمایش بهتر اسلایدها توصیه می شود سایز تصاویر ۸۸۰ در
                      ۱۹۲۰ پیکسل و حداکثر حجم ۳۰۰ کیلو بایت باشد.
                    </p>
                  </div>
                </div>
                <div className="next-btn mb-2 w-full h-full border-t-2 border-dotted border-slate-100 flex justify-end items-center">
                  <button
                    onClick={(e) => {
                      InsertIntoSlides;
                    }}
                    className="text-white btn btn-primary text-xs font-semibold ml-2"
                  >
                    ثبت
                  </button>
                  <button className="text-white btn btn-primary text-xs font-semibold">
                    مرحله بعد
                  </button>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};
export default slides;
