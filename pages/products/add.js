import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ChooseFile from "../../components/marketing/fileManager/components/share/ChooseFile";

const add = () => {

  const [fileManager, setFileManager] = useState(false)



  const [category, setCategory] = useState(null);
  const [area, setArea] = useState(null);
  const [subArea, setSubArea] = useState(null);
  const [usingInIndustry, setUsingInIndustry] = useState([]);
  const [productName, setProductName] = useState("");
  const [productBrand, setProductBrand] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [minInventory, setMinInventory] = useState(0);
  const [introduceProduct, setIntroduceProduct] = useState("");
  const [productPro1, setProductPro1] = useState(null);
  const [productPro2, setProductPro2] = useState(null);
  const [productPro3, setProductPro3] = useState(null);
  const [productPic, setProductPic] = useState([]);
  const [weight, setWeight] = useState("");
  const [price, setPrice] = useState(0);
  const [saleMethod, setSaleMethod] = useState("");
  const [minBuy, setMinBuy] = useState(0);
  //Discount
  const [moreThan, setMoreThan] = useState(0);
  const [discountPersent, setDiscountPersent] = useState(0);
  const [priceAfterDiscount, setPriceAfterDiscount] = useState(0);
  const [startDateDiscount, setStartDateDiscount] = useState(null);
  const [endDateDiscount, setEndDateDiscount] = useState(null);
  const [dateDiscountPersent, setDateDiscountPersent] = useState(0);
  const [priceAfteDateDiscountPersent, setPriceAfteDateDiscountPersent] =
    useState(0);
  const [startQuntityDiscount1, setStartQuntityDiscount1] = useState(1);
  const [endQuantityDiscount1, setEndQuantityDiscount1] = useState(1);
  const [quantityDiscountPersent1, setQuantityDiscountPersent1] = useState(0);
  const [priceAfterQuantityDiscount1, setpriceAfterQuantityDiscount1] =
    useState(0);
  const [startQuntityDiscount2, setStartQuntityDiscount2] = useState(1);
  const [endQuantityDiscount2, setEndQuantityDiscount2] = useState(1);
  const [quantityDiscountPersent2, setQuantityDiscountPersent2] = useState(0);
  const [priceAfterQuantityDiscount2, setpriceAfterQuantityDiscount2] =
    useState(0);
  const [startQuntityDiscount3, setStartQuntityDiscount3] = useState(1);
  const [endQuantityDiscount3, setEndQuantityDiscount3] = useState(1);
  const [quantityDiscountPersent3, setQuantityDiscountPersent3] = useState(0);
  const [priceAfterQuantityDiscount3, setpriceAfterQuantityDiscount3] =
    useState(0);
  const [startQuntityDiscount4, setStartQuntityDiscount4] = useState(1);
  const [endQuantityDiscount4, setEndQuantityDiscount4] = useState(1);
  const [quantityDiscountPersent4, setQuantityDiscountPersent4] = useState(0);
  const [priceAfterQuantityDiscount4, setpriceAfterQuantityDiscount4] =
    useState(0);
  //Prepering Product Time
  const [preperingProductTime, setPreperingProductTime] = useState(null);
  const [sendingMethode, setSendingMethode] = useState("");
  const [returnTime, setReturnTime] = useState(0);
  const [returnMethod, setReturnMethod] = useState("");
  const [saleCondition, setSaleCondition] = useState([]);
  const [deliveryPrice, setDeliveryPrice] = useState(0);
  const [warranty, setWarranty] = useState([]);
  const [tax, setTax] = useState(0);
  const [sendingToFavoritBusiness, setSendingToFavoritBusiness] = useState([]);
  const [sendingToFavoritScops, setsendingToFavoritScops] = useState([]);
  const [license, setLicense] = useState([]);
  const [guide, setGuide] = useState([]);
  const [frequentlyAskedQuestions, setFrequentlyAskedQuestions] = useState("");
  const [answerfrequentlyAskedQuestions, setAnswerFrequentlyAskedQuestions] =
    useState("");
  const [productSituation, setProductSituation] = useState("");

  //???? ?????? ?????????? ?????? ???????? ???????? ?????????? ???????? ??????????
  const closeChooseFile = () =>{
    setFileManager(prevChooseFile => prevChooseFile = false)
  }

  return (
    <>
    <div hidden={!fileManager}>
        <ChooseFile closeChooseFile={closeChooseFile}/>
    </div>
    <div>
      <section className="max-w-screen-lg mx-auto px-3 lg:mt-[85px] mt-[42px] overflow-hidden">
        <div className="p-4 bg-white rounded-lg shadow-md ">
          <div className="flex flex-col add-products-title">
            <h5 className="font-semibold md:text-base taxt-sm">??????????????</h5>
            <small className="text-slate-600 text-xs">
              ?????????????? ?????????????? ?????? ???? ???????? ???????????? .
            </small>
          </div>
          <div className="flex flex-col add-products-flex">
            <div className="grid grid-cols-12 gap-3 add-products-grid">
              <div className="col-span-12 add-products-input md:col-span-3">
                <label className="px-2 mb-2 text-sm text-slate-700">????????</label>
                <select
                  onChange={(e) => {
                    setCategory(e.target.value);
                  }}
                  class="form-select form-select-text-style py-[0.575rem] pr-2"
                  aria-label="Default select example"
                >
                  <option selected> ???????????? ????????</option>
                  <option className="text-sm text-slate-400" value="1">
                    ??????????????
                  </option>
                  <option className="text-sm text-slate-400" value="2">
                    ?????????? ??????????????
                  </option>
                  <option className="text-sm text-slate-400" value="3">
                    ???????????? ?? ??????????????
                  </option>
                </select>
              </div>
              <div className="col-span-12 add-products-input md:col-span-3">
                <label className="px-2 mb-2 text-sm text-slate-700">????????</label>
                <select
                  onChange={(e) => {
                    setArea(e.target.value);
                  }}
                  class="form-select form-select-text-style py-[0.575rem] pr-2"
                  aria-label="Default select example"
                >
                  <option selected>???????????? ????????</option>
                  <option className="text-sm text-slate-400" value="1">
                    ??????????????
                  </option>
                  <option className="text-sm text-slate-400" value="2">
                    ?????????? ??????????
                  </option>
                  <option className="text-sm text-slate-400" value="3">
                    ?????????? ????????
                  </option>
                </select>
              </div>
              <div className="col-span-12 add-products-input md:col-span-3">
                <label className="px-2 mb-2 text-sm text-slate-700">
                  ??????????????
                </label>
                <select
                  onChange={(e) => {
                    setSubArea(e.target.value);
                  }}
                  class="form-select form-select-text-style py-[0.575rem] pr-2"
                  aria-label="Default select example"
                >
                  <option selected> ???????????? ????????</option>
                  <option className="text-sm text-slate-400" value="1">
                    ???????? ????????????
                  </option>
                  <option className="text-sm text-slate-400" value="2">
                    ????????????
                  </option>
                  <option className="text-sm text-slate-400" value="3">
                    ?????? ?????????? ??????????
                  </option>
                </select>
              </div>
              <div className="col-span-12 add-products-input md:col-span-3">
                <label className="px-2 mb-2 text-sm text-slate-700">
                  ???????????? ???? ??????????
                </label>
                <select
                  onChange={(e) => {
                    setUsingInIndustry(e.target.value);
                  }}
                  class="form-select form-select-text-style py-[0.575rem] pr-2"
                  aria-label="Default select example"
                >
                  <option selected>???????????? ???? ????????</option>
                  <option className="text-sm text-slate-400" value="1">
                    ???????? ????????????
                  </option>
                  <option className="text-sm text-slate-400" value="2">
                    ????????????
                  </option>
                  <option className="text-sm text-slate-400" value="3">
                    ?????? ?????????? ??????????
                  </option>
                </select>
              </div>
              <div className="col-span-12 add-products-input md:col-span-3">
                <label className="px-2 mb-2 text-sm text-slate-700">
                  ?????? ??????????
                </label>
                <input
                  onChange={(e) => {
                    setProductName(e.target.value);
                  }}
                  className="form-control"
                  type="text"
                  id="product_name"
                  name="product_name"
                />
              </div>
              <div className="col-span-12 add-products-select md:col-span-3">
                <label className="px-2 mb-2 text-sm text-slate-700">????????</label>
                <input
                  onChange={(e) => {
                    setProductBrand(e.target.value);
                  }}
                  className="form-control"
                  name="product_brand"
                  type="text"
                />
              </div>
              <div className="col-span-12 add-products-input md:col-span-3">
                <label className="px-2 mb-2 text-sm text-slate-700">
                  ?????????? ????????????
                </label>
                <div class="all-input-group input-group mb-3">
                  <input
                    onChange={(e) => {
                      setQuantity(e.target.value);
                    }}
                    id="product_number"
                    type="number"
                    className="form-control"
                    placeholder="??????"
                  />
                </div>
              </div>
              <div className="col-span-12 add-products-input md:col-span-3">
                <label className="px-2 mb-2 text-sm text-slate-700">
                  ?????????? ????????????
                </label>
                <div class="all-input-group input-group mb-3">
                  <input
                    onChange={(e) => {
                      setMinInventory(e.target.value);
                    }}
                    type="number"
                    className="form-control"
                    placeholder="???? ???????? ?????????? ????????????"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col add-products-Introduction">
              <div className="flex flex-col my-4 add-products-title">
                <h5 className="text-xs font-semibold md:text-sm">
                  ?????????? ??????????
                </h5>
              </div>
              <div className="w-full h-full bg-white border rounded-md h-36 border-slate-100">
                <p
                  onChange={(e) => {
                    setIntroduceProduct(e.target.value);
                  }}
                  className="px-4 py-4 text-slate-400"
                >
                  ?????????? ???????? ???? ???????????? ???????? ????????????
                </p>
                {/* ?????????? ???? ???????? ???????? ???? ???? ?????????? ?????????? ?????????????? ???????? ?????? ???????? ???????????? ???? ?????????? ?????????????? ???????? ?????????? ???????? ????????  */}
                <span className="text-xs text-slate-500 h-full flex items-center pb-5 pr-4">
                  ????/?????? ??????????????
                </span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 mt-4 products-specifications-cols">
              <div className="col-span-2 products-specifications-col md:col-span-1">
                <div className="flex flex-col my-3 products-specifications-title">
                  <h5 className="text-xs font-semibold md:text-sm">
                    ???????????? ??????????
                  </h5>
                </div>
                <div className="grid grid-cols-2 p-3 space-y-2 border rounded-md border-slate-100">
                  <div className="w-full col-span-2 md:col-span-1">
                    <p className="text-sm text-slate-400">?????? ??????????</p>
                  </div>
                  <div class="all-input-group w-full md:col-span-1 col-span-2 input-group">
                    <input
                      onChange={(e) => {
                        setProductPro1(e.target.value);
                      }}
                      type="text"
                      className="form-control"
                      placeholder=""
                    />
                  </div>
                  <div className="w-full col-span-2 md:col-span-1">
                    <p
                      onChange={(e) => {
                        setProductPro2(e.target.value);
                      }}
                      className="text-sm text-slate-400"
                    >
                      ?????? ??????????
                    </p>
                  </div>
                  <div className="w-full col-span-2 md:col-span-1">
                    <select
                      class="form-select form-select-text-style py-[0.575rem] pr-2"
                      aria-label="Default select example"
                    >
                      <option selected>???????????? ????????</option>
                      <option className="text-sm text-slate-400" value="1">
                        ????????
                      </option>
                      <option className="text-sm text-slate-400" value="2">
                        ??????
                      </option>
                      <option className="text-sm text-slate-400" value="3">
                        ??????
                      </option>
                    </select>
                  </div>
                  <div className="w-full col-span-2 md:col-span-1">
                    <p
                      onChange={(e) => {
                        setProductPro3(e.target.value);
                      }}
                      className="text-sm text-slate-400"
                    >
                      ?????????? ??????????
                    </p>
                  </div>
                  <div className="w-full col-span-2 md:col-span-1">
                    <select
                      class="form-select form-select-text-style py-[0.575rem] pr-2"
                      aria-label="Default select example"
                    >
                      <option selected>???????????? ????????</option>
                      <option className="text-sm text-slate-400" value="1">
                        ?????? ?? ??????
                      </option>
                      <option className="text-sm text-slate-400" value="2">
                        ?????? ?? ??????
                      </option>
                      <option className="text-sm text-slate-400" value="3">
                        ?????? ?? ??????????
                      </option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="col-span-2 products-upload-col md:col-span-1">
                <div className="flex items-center justify-between">
                  <div className="flex flex-col my-3 products-specifications-title">
                    <h5 className="text-xs font-semibold md:text-sm">
                      ???????????????? ???????????? ??????????
                    </h5>
                  </div>

                  <Link href="/">
                    <a className="flex items-center h-full">
                      <p className="text-xs text-slate-400">???????????? ?????? </p>
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
                        className="btn btn-primary" type="button">
                        ????????????
                      </button>
                      {/* <Link href="/">
                        <a className="flex items-center justify-center">
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-slate-400">
                              ????????????
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
                      </Link> */}
                      <span className="w-full text-slate-400 md:text-[8px] text-xs flex justify-center">
                        ???????????? ?????? ???????? ????????{" "}
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
                      ???????? ???????? ?????? ???????????? ???? ?????? ???????? ?????????????? ????????????
                    </p>
                    <div className="inline-flex items-center">
                      <Link href="/">
                        <a className="px-2 rounded-md bg-slate-600 hover:bg-slate-500 ">
                          <span className="text-white text-[7px]">
                            ???????? ?????? ????????????
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
                <label className="px-2 mb-2 text-sm text-slate-700">
                  ???????? ??????
                </label>
                <select
                  onClick={(e) => {
                    setWeight(e.target.value);
                  }}
                  class="form-select form-select-text-style py-[0.575rem] pr-2"
                  aria-label="Default select example"
                >
                  <option selected> ???????????? ????????</option>
                  <option className="text-sm text-slate-400" value="??????">
                    ??????
                  </option>
                  <option className="text-sm text-slate-400" value="????">
                    ????
                  </option>
                </select>
              </div>
              <div className="col-span-12 lg:col-span-3">
                <label className="px-2 mb-2 text-sm text-slate-700">????????</label>
                <div class="all-input-group input-group mb-3">
                  <input
                    onChange={(e) => {
                      setPrice(e.target.value);
                    }}
                    type="number"
                    className="form-control"
                    placeholder="??????????"
                  />
                </div>
              </div>
              <div className="col-span-12 lg:col-span-3">
                <label className="px-2 mb-2 text-sm text-slate-700">
                  ?????? ????????
                </label>
                <select
                  onChange={(e) => {
                    setSaleMethod(e.target.value);
                  }}
                  class="form-select form-select-text-style py-[0.575rem] pr-2"
                  aria-label="Default select example"
                >
                  <option selected> ???????????? ????????</option>
                  <option className="text-sm text-slate-400" value="1">
                    ??????????????
                  </option>
                  <option className="text-sm text-slate-400" value="2">
                    ??????????
                  </option>
                  <option className="text-sm text-slate-400" value="3">
                    ??????????
                  </option>
                </select>
              </div>
              <div className="col-span-12 lg:col-span-3">
                <label className="px-2 mb-2 text-sm text-slate-700">
                  ?????????? ?????????? ????????
                </label>
                <div class="all-input-group input-group mb-3">
                  <input
                    onChange={(e) => {
                      setMinBuy(e.target.value);
                    }}
                    type="text"
                    className="form-control"
                    placeholder="??????"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col discount ">
              <div className="flex flex-col my-4 discount-title">
                <h5 className="text-xs font-semibold md:text-sm">??????????</h5>
                <small className="text-xs text-justify text-slate-500 ">
                  ???? ???????? ?????????? ?????????? ???? ???????????? ???? ?????? ?????? ?????? ?????????????? ???????????? ??
                  ???? ???????? ???????????????? ?????? ?????? ?????????? ?? ???????????? ???? ???????? ?????????????? ????????
                  ?????????? ???? ?????????? ?????????? ???????? .
                </small>
              </div>
              <div className="p-3 space-y-3 border rounded-md discount-border border-slate-500">
                <div className="flex flex-col justify-between w-full space-y-3 discount-price md:flex-row md:items-end md:space-y-0">
                  <div className="flex flex-col">
                    <p className="mb-3 text-xs font-semibold text-slate-500">
                      ??. ?????????? ???? ???????? ????????
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center w-full h-full col-span-2 md:col-span-1">
                        <p className="text-xs text-slate-600 md:w-12 w-14">
                          ?????????? ????
                        </p>
                        <div class="all-input-group md:w-36 w-full input-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="??????????"
                          />
                        </div>
                      </div>
                      <div className="flex items-center w-full h-full col-span-2 md:col-span-1">
                        <p className="text-xs text-slate-600 md:w-12 w-14">
                          ???? ??????????
                        </p>
                        <div class="all-input-group md:w-36 w-full input-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="????????"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <p className="mb-3 text-xs font-semibold text-slate-500">
                      ???????? ?????????? ???? ???? ??????????
                    </p>
                    <div class="all-input-group md:md:w-36 w-full input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="??????????"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-between w-full space-y-3 discount-date md:flex-row md:items-end md:space-y-0">
                  <div className="flex flex-col">
                    <p className="mb-3 text-xs font-semibold text-slate-500">
                      ??. ?????????? ???? ???????? ??????????
                    </p>
                    <div className="grid grid-cols-3 gap-4 space-y-3 md:space-y-0">
                      <div className="flex items-center w-full h-full col-span-3 md:col-span-1">
                        <p className="text-xs text-slate-600 md:w-12 w-14">
                          ???? ??????????
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
                          ???? ??????????
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
                          ???? ??????????
                        </p>
                        <div class="all-input-group md:w-36 w-full input-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="????????"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col mt-8">
                    <p className="block mb-3 text-xs font-semibold md:hidden text-slate-500">
                      ???????? ?????????? ???? ???? ??????????
                    </p>
                    <div class="all-input-group md:w-36 w-full  input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="??????????"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-between w-full space-y-3 discount-counter md:flex-row md:items-end md:space-y-0">
                  <div className="flex flex-col ">
                    <p className="mb-3 text-xs font-semibold text-slate-500">
                      ??. ?????????? ???? ???????? ??????????
                    </p>
                    <div className="grid grid-cols-3 gap-4 space-y-3 md:space-y-0">
                      <div className="flex items-center w-full h-full col-span-3 md:col-span-1">
                        <p className="text-xs text-slate-600 md:w-12 w-14">
                          ???? ??????????
                        </p>
                        <div class="all-input-group md:w-36 w-full input-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="?????????? ???????? + ??"
                          />
                        </div>
                      </div>
                      <div className="flex items-center w-full h-full col-span-3 md:col-span-1">
                        <p className="text-xs text-slate-600 md:w-12 w-14">
                          ???? ??????????
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
                          ???? ??????????
                        </p>
                        <div class="all-input-group md:w-36 w-full input-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="????????"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col mt-8">
                    <p className="block mb-3 text-xs font-semibold md:hidden text-slate-500">
                      ???????? ?????????? ???? ???? ??????????
                    </p>
                    <div class="all-input-group md:md:w-36 w-full input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="??????????"
                      />
                    </div>
                  </div>
                </div>
                {/* ************************************************ */}
                <div className="flex flex-col justify-between w-full space-y-3 discount-counter md:flex-row md:items-end md:space-y-0">
                  <div className="flex flex-col ">
                    <div className="grid grid-cols-3 gap-4 space-y-3 md:space-y-0">
                      <div className="flex items-center w-full h-full col-span-3 md:col-span-1">
                        <p className="text-xs text-slate-600 md:w-12 w-14">
                          ???? ??????????
                        </p>
                        <div class="all-input-group md:w-36 w-full input-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="?????????? ???????? + ??"
                          />
                        </div>
                      </div>
                      <div className="flex items-center w-full h-full col-span-3 md:col-span-1">
                        <p className="text-xs text-slate-600 md:w-12 w-14">
                          ???? ??????????
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
                          ???? ??????????
                        </p>
                        <div class="all-input-group md:w-36 w-full input-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="????????"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col mt-8">
                    <p className="block mb-3 text-xs font-semibold md:hidden text-slate-500">
                      ???????? ?????????? ???? ???? ??????????
                    </p>
                    <div class="all-input-group md:md:w-36 w-full input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="??????????"
                      />
                    </div>
                  </div>
                </div>
                {/* ******************************************************** */}
                {/* ************************************************ */}
                <div className="flex flex-col justify-between w-full space-y-3 discount-counter md:flex-row md:items-end md:space-y-0">
                  <div className="flex flex-col ">
                    <div className="grid grid-cols-3 gap-4 space-y-3 md:space-y-0">
                      <div className="flex items-center w-full h-full col-span-3 md:col-span-1">
                        <p className="text-xs text-slate-600 md:w-12 w-14">
                          ???? ??????????
                        </p>
                        <div class="all-input-group md:w-36 w-full input-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="?????????? ???????? + ??"
                          />
                        </div>
                      </div>
                      <div className="flex items-center w-full h-full col-span-3 md:col-span-1">
                        <p className="text-xs text-slate-600 md:w-12 w-14">
                          ???? ??????????
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
                          ???? ??????????
                        </p>
                        <div class="all-input-group md:w-36 w-full input-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="????????"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col mt-8">
                    <p className="block mb-3 text-xs font-semibold md:hidden text-slate-500">
                      ???????? ?????????? ???? ???? ??????????
                    </p>
                    <div class="all-input-group md:md:w-36 w-full input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="??????????"
                      />
                    </div>
                  </div>
                </div>
                {/* ******************************************************** */}
                {/* ************************************************ */}
                <div className="flex flex-col justify-between w-full space-y-3 discount-counter md:flex-row md:items-end md:space-y-0">
                  <div className="flex flex-col ">
                    <div className="grid grid-cols-3 gap-4 space-y-3 md:space-y-0">
                      <div className="flex items-center w-full h-full col-span-3 md:col-span-1">
                        <p className="text-xs text-slate-600 md:w-12 w-14">
                          ???? ??????????
                        </p>
                        <div class="all-input-group md:w-36 w-full input-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="?????????? ???????? + ??"
                          />
                        </div>
                      </div>
                      <div className="flex items-center w-full h-full col-span-3 md:col-span-1">
                        <p className="text-xs text-slate-600 md:w-12 w-14">
                          ???? ??????????
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
                          ???? ??????????
                        </p>
                        <div class="all-input-group md:w-36 w-full input-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="????????"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col mt-8">
                    <p className="block mb-3 text-xs font-semibold md:hidden text-slate-500">
                      ???????? ?????????? ???? ???? ??????????
                    </p>
                    <div class="all-input-group md:md:w-36 w-full input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="??????????"
                      />
                    </div>
                  </div>
                </div>
                {/* ******************************************************** */}
              </div>
              <div className="grid grid-cols-12 gap-3 mt-4">
                <div className="col-span-12 md:col-span-3">
                  <label className="px-2 mb-2 text-sm text-slate-700">
                    ???????? ?????????? ????????
                  </label>
                  <div class="all-input-group input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="?????????? ?????? ????????"
                    />
                  </div>
                </div>
                <div className="col-span-12 md:col-span-3">
                  <label className="px-2 mb-2 text-sm text-slate-700">
                    ?????? ??????????
                  </label>
                  <select
                    class="form-select form-select-text-style py-[0.575rem] pr-2"
                    aria-label="Default select example"
                  >
                    <option selected>???????????? ????????</option>
                    <option className="text-sm text-slate-400" value="1">
                      ??????
                    </option>
                    <option className="text-sm text-slate-400" value="2">
                      ???????? ????????
                    </option>
                  </select>
                </div>
                <div className="col-span-12 md:col-span-3">
                  <label className="px-2 mb-2 text-sm text-slate-700">
                    ?????? ???????? ????????
                  </label>
                  <div class="all-input-group input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="?????????? ?????? ????????"
                    />
                  </div>
                </div>
                <div className="col-span-12 md:col-span-3">
                  <label className="px-2 mb-2 text-sm text-slate-700">
                    ?????? ????????
                  </label>
                  <select
                    class="form-select form-select-text-style py-[0.575rem] pr-2"
                    aria-label="Default select example"
                  >
                    <option selected> ???????????? ????????</option>
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
                    ?????????? ??????????
                  </label>
                  <select
                    class="form-select form-select-text-style py-[0.575rem] pr-2"
                    aria-label="Default select example"
                  >
                    <option selected> ???????????? ????????</option>
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
                    ?????????? ??????????
                  </label>
                  <div class="all-input-group input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="??????????"
                    />
                  </div>
                </div>
                <div className="col-span-12 md:col-span-3">
                  <label className="px-2 mb-2 text-sm text-slate-700">
                    ??????????????
                  </label>
                  <select
                    class="form-select form-select-text-style py-[0.575rem] pr-2"
                    aria-label="Default select example"
                  >
                    <option selected> ???????????? ????????</option>
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
                    ???????????? ???? ???????? ????????????
                  </label>
                  <select
                    class="form-select form-select-text-style py-[0.575rem] pr-2"
                    aria-label="Default select example"
                  >
                    <option selected> ???????????? ???????? </option>
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
                    ?????????? ???? ?????? ?? ???????????? ???????? ??????????
                  </label>
                  <select
                    class="form-select form-select-text-style py-[0.575rem] pr-2"
                    aria-label="Default select example"
                  >
                    <option selected> ???????????? ????????</option>
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
                    ?????????? ???? ???????? ?????? ??????????
                  </label>
                  <select
                    class="form-select form-select-text-style py-[0.575rem] pr-2"
                    aria-label="Default select example"
                  >
                    <option selected>???????????? ????????</option>
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
                        ?????????????????????? / ???????? ????
                      </h5>
                    </div>
                    <Link href="/">
                      <a className="flex items-center h-full">
                        <p className="text-xs text-slate-400">???????????? ?????? </p>
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
                                ????????????
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
                        ?????????????? ?????????????? ???? ??????????
                      </h5>
                    </div>
                    <Link href="/">
                      <a className="flex items-center h-full">
                        <p className="text-xs text-slate-400">???????????? ?????? </p>
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
                                ????????????
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
                    ???????????? ????????????
                  </h5>
                </div>
                <div class="flex">
                  <span class="inline-flex items-center md:px-3 px-1 md:text-sm text-[10px] text-gray-900 bg-gray-200 rounded-r-md border border-r-0 border-gray-300 dark:bg-gray-600 ">
                    ????????
                  </span>
                  <input
                    type="text"
                    id="website-admin"
                    class="rounded-none rounded-l-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full md:text-sm text-[8px] border-gray-300 p-2.5"
                    placeholder="???? ???????? ?????????? ?????????? ???? ???????? ?????????? ???? ?????????? ?????????? ???????? ???????? ???? ?????? ??"
                  />
                </div>
                <div class="flex">
                  <span class="inline-flex items-center md:px-3 px-1 md:text-sm text-[10px] text-gray-900 bg-gray-200 rounded-r-md border border-r-0 border-gray-300">
                    ????????
                  </span>
                  <input
                    type="text"
                    id="website-admin"
                    class="rounded-none rounded-l-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full md:text-sm text-[8px] border-gray-300 p-2.5"
                    placeholder="???? ???????? ???? ???????? ?????????? ?? ???????? ?????????? ?????????? ?????? ?? ???? ?? ?????? ???????? ???????????? ??????"
                  />
                </div>
              </div>
              <div className="inline-flex justify-end w-full my-3 btn-add">
                <Link href="/">
                  <a className="link-add-slide md:w-36 w-24 h-full md:px-2.5 px-1 md:py-1.5 py-0.5 border border-slate-400 rounded-md flex items-center justify-center">
                    <span className="ml-3 text-xs text-slate-400">????????????</span>
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
                        ?????????? ??????????
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
                            ???? ?????? ?????????? ????????
                          </a>
                        </li>
                        <li className="text-xs text-right">
                          <a class="dropdown-item" href="#">
                            ?????????? ??????
                          </a>
                        </li>
                        <li className="text-xs text-right">
                          <a class="dropdown-item" href="#">
                            ???????????? ??????{" "}
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
                        ?????? ??????????
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="end-save">
                  <Link href="/">
                    <a className="px-2 py-1 my-6 bg-blue-500 rounded-md hover:bg-blue-400">
                      <span className="text-xs text-white">?????? ??????????</span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default add;
