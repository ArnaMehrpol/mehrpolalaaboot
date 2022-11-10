import Link from "next/link";
import Image from "next/image";
import React from "react";
import MarketingUploadSide from "../../../components/marketing/layout/MarketingUploadSide";
import MarketingInfoHeader from "../../../components/marketing/marketingHeader/MarketingInfoHeader";


const certificate = () => {
  return (
    <div>
      <div className="business-panel-container">
        <div className="business-panel-cols flex grid-cols-12 bg-slate-100 ">
          <div>
            <MarketingUploadSide/>          
          </div>
          <div className="business-panel-mainbar w-100 lg:col-span-9 col-span-12 shadow-lg shadow-slate-100 relative overflow-hidden">
            <MarketingInfoHeader/>
            <section className="certificate-container max-w-screen-lg px-12 mx-auto flex justify-center items-center relative z-[9999] mt-16">
              <div className=" bg-white overflow-hidden rounded-lg shadow-md px-5">
                <div className="certificate-title flex flex-col my-4">
                  <h5 className="text-base font-semibold">گواهینامه ها</h5>
                  <small className="text-slate-600 text-xs mt-0.5">
                    مجوز مرتبط با کسب و کار در این قسمت وارد کنید
                  </small>
                </div>
                <div className="certificate-flex flex flex-col">
                  <div className="btn-add inline-flex">
                    <Link href="/">
                      <a className="link-add-slide w-36 h-full bg-amber-500 hover:bg-amber-400 px-2.5 py-1.5 rounded-md flex items-center justify-between">
                        <span className="text-xs text-white font-semibold mr-2">
                          افزودن گواهینامه
                        </span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6 text-white font-semibold"
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
                  <div className="certificate-cols grid grid-cols-12 gap-3 my-4">
                  <div className="image-col lg:col-span-3 md:col-span-4 col-span-12">
                      <div className="h-full w-44 image-col-image bg-slate-50  rounded-md relative">
                        <div className="w-7 h-full image-col-bg bg-black absolute left-0 opacity-50 rounded-md rounded-r-none z-10">
                          <div className="image-col-icons w-full h-full flex flex-col items-center justify-center space-y-4">
                            <Link href="/">
                              <a>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={1.5}
                                  stroke="currentColor"
                                  className="w-5 h-5 text-slate-400 opacity-100"
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
                                  className="w-5 h-5 text-rose-500 opacity-100"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                  />
                                </svg>
                              </a>
                            </Link>
                          </div>
                        </div>
                        <Image
                          src="/../public/assets/img/pic/certificate.png"
                          width="250px"
                          height="260px"
                          className="overflow-hidden rounded-md"
                        ></Image>
                      </div>
                    </div>
                    <div className="image-col lg:col-span-3 md:col-span-4 col-span-12">
                      <div className="h-full w-44 image-col-image bg-slate-50  rounded-md relative">
                        <div className="w-7 h-full image-col-bg bg-black absolute left-0 opacity-50 rounded-md rounded-r-none z-10">
                          <div className="image-col-icons w-full h-full flex flex-col items-center justify-center space-y-4">
                            <Link href="/">
                              <a>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={1.5}
                                  stroke="currentColor"
                                  className="w-5 h-5 text-slate-400 opacity-100"
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
                                  className="w-5 h-5 text-rose-500 opacity-100"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                  />
                                </svg>
                              </a>
                            </Link>
                          </div>
                        </div>
                        <Image
                          src="/../public/assets/img/pic/certificate.jpg"
                          width="250px"
                          height="260px"
                          className="overflow-hidden rounded-md"
                        ></Image>
                      </div>
                    </div>
                    <div className="image-col lg:col-span-3 md:col-span-4 col-span-12">
                      <div className="h-full w-44 image-col-image bg-slate-50  rounded-md relative">
                        <div className="w-7 h-full image-col-bg bg-black absolute left-0 opacity-50 rounded-md rounded-r-none z-10">
                          <div className="image-col-icons w-full h-full flex flex-col items-center justify-center space-y-4">
                            <Link href="/">
                              <a>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={1.5}
                                  stroke="currentColor"
                                  className="w-5 h-5 text-slate-400 opacity-100"
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
                                  className="w-5 h-5 text-rose-500 opacity-100"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                  />
                                </svg>
                              </a>
                            </Link>
                          </div>
                        </div>
                        <Image
                          src="/../public/assets/img/pic/certificate.png"
                          width="250px"
                          height="260px"
                          className="overflow-hidden rounded-md"
                        ></Image>
                      </div>
                    </div>
                    <div className="image-col lg:col-span-3 md:col-span-4 col-span-12">
                      <div className="h-full w-44 image-col-image bg-slate-50  rounded-md relative">
                        <div className="w-7 h-full image-col-bg bg-black absolute left-0 opacity-50 rounded-md rounded-r-none z-10">
                          <div className="image-col-icons w-full h-full flex flex-col items-center justify-center space-y-4">
                            <Link href="/">
                              <a>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={1.5}
                                  stroke="currentColor"
                                  className="w-5 h-5 text-slate-400 opacity-100"
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
                                  className="w-5 h-5 text-rose-500 opacity-100"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                  />
                                </svg>
                              </a>
                            </Link>
                          </div>
                        </div>
                        <Image
                          src="/../public/assets/img/pic/certificate.png"
                          width="250px"
                          height="260px"
                          className="overflow-hidden rounded-md"
                        ></Image>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="next-btn w-full h-full border-t-2 border-dotted border-slate-100 flex justify-end items-center">
                  <Link href="/">
                    <a className="px-2 py-1 bg-blue-500 hover:bg-blue-400 rounded-md my-6">
                      <span className="text-white text-xs font-semibold">
                        ثبت و مرحله بعد
                      </span>
                    </a>
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default certificate;
