import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import MarketingLayout from '../../../components/marketing/layout/MarketingLayout'
import MarketingMainHeader from '../../../components/marketing/marketingHeader/MarketingMainHeader'
import Cookies from "universal-cookie";
import { axiosSetup } from "../../../components/utils/axiosSetup";
import { numberWithCommas } from "../../../components/tools/thousandsSeparator";
import { fixNumbers } from "../../../components/tools/ChangeLanguage";
import { shorten } from "../../../components/tools/functionsHelpers";
import Pagination from "../../../components/profile/components/pagination/Pagination";
import axios from "axios";

const stateDiscount ={
  discountMoney: false,
  discountDate: false,
  discountHowmany : false,
}

const add = () => {

  const cookies = new Cookies();
  const discountMoney = useRef(null)
  const discountDate = useRef(null)
  const discountHowmany = useRef(null)
  const discountMoneyDiv = useRef(null)
  const discountMoneyDiv1 = useRef(null)
  const discountDateDiv = useRef(null)
  const discountDateDiv1 = useRef(null)
  const discountHowmanyDiv = useRef(null)
  const discountHowmanyDiv1 = useRef(null)
  const checkedAll = useRef(null)
  const [checkAll, setCheckAll]= useState(false)
  const [resultSearch, setResultSearch] = useState()
  const [searchTextBox, setSearchTextBox] = useState()
  const [loadMarketingProductList,setLoadMarketingProductList] = useState()
  const [tokenId, setTokenId] = useState()
  const [businessId, setBusinessId] = useState()
  const [clickOnPage, setClickOnPage] = useState(false)
  const [urlPage, setUrlPage] = useState('')
  const [productDetailsDiscounts,setProductDetailsDiscounts] = useState({
    qty: '',
    data_start: '',
    data_end: '',
    price:'',
    percent: ''
  })
  const [priceFilter, setPriceFilter] = useState({
    fromPrice: '',
    toPrice: ''
  })
  const [filter, setFilter] = useState({
    "shipping_cost": "",
    "shipping_method": "",
    "sale_terms": "",
    "tax": "",
    "wholesale": "",
  })
  

  useEffect(()=>{
    setTokenId(cookies.get('token'))
    setBusinessId(cookies.get('b-Id'))
    discountMoneyDiv.current.hidden =true;
    // discountMoneyDiv1.current.hidden =true;
    discountDateDiv.current.hidden =true;
    // discountDateDiv1.current.hidden =true;
    discountHowmanyDiv.current.hidden =true;
    // discountHowmanyDiv1.current.hidden =true;
  },[])

  useEffect(()=>{
    const address = `/businesses/${businessId}/shop/products`
    const method = 'get'
    const header = {
    'Accept': "application/json",
    'Authorization':"Bearer " + tokenId,
  }
    axiosSetup(address, method, header, '', getResult)
      function getResult (data){
        setLoadMarketingProductList(data)
      }
  },[tokenId])

  useEffect(()=>{
    if(clickOnPage === true){
      const header = {
        'Accept': "application/json",
        'Authorization':"Bearer " + tokenId,
      }
      axios({
        method: 'get',
        url: urlPage,
        headers: header,
      }).then(res => setLoadMarketingProductList(res))
      .catch(err => console.log({err}))
      
      setClickOnPage(false)
    }
  },[clickOnPage])

  const advanceFilterChangeHandler = (e) =>{
    setFilter({...filter, [e.target.name]: e.target.value})
  }

  const linkPagesFunc = (linkPage) =>{
    setUrlPage(linkPage)
    setClickOnPage(true)
  }

  console.log({filter})

  const selectTypeDiscountMoneyClickHandler = () =>{
    
    discountDate.current.checked = false;
    discountHowmany.current.checked = false;
    stateDiscount.discountMoney = true
    stateDiscount.discountDate = false
    stateDiscount.discountHowmany = false
    discountMoneyDiv.current.hidden =false;
    // discountMoneyDiv1.current.hidden =false;
    discountDateDiv.current.hidden =true;
    // discountDateDiv1.current.hidden =true;
    discountHowmanyDiv.current.hidden =true;
    // discountHowmanyDiv1.current.hidden =true;
  }

  const selectTypeDiscountDateClickHandler = () =>{
    discountMoney.current.checked = false;
    discountHowmany.current.checked = false;
    stateDiscount.discountMoney = false
    stateDiscount.discountDate = true
    stateDiscount.discountHowmany = false
    discountMoneyDiv.current.hidden =true;
    // discountMoneyDiv1.current.hidden =true;
//     discountDateDiv1.current.hidden =false;
    discountDateDiv.current.hidden =false;
    discountHowmanyDiv.current.hidden =true;
    // discountHowmanyDiv1.current.hidden =true;
  }

  const selectTypeDiscountHowmanyClickHandler = () =>{
    discountMoney.current.checked = false;
    discountDate.current.checked = false;
    stateDiscount.discountMoney = false
    stateDiscount.discountDate = false
    stateDiscount.discountHowmany = true
    discountMoneyDiv.current.hidden =true;
    // discountMoneyDiv1.current.hidden =true;
    // discountDateDiv1.current.hidden =true;
    discountDateDiv.current.hidden =true;
    discountHowmanyDiv.current.hidden =false;
    // discountHowmanyDiv1.current.hidden =false;
  }
  const fillDetailProductDiscountsChangeHandler = (e) =>{
    setProductDetailsDiscounts({...productDetailsDiscounts, [e.target.name]: e.target.value})
  }

  const priceFilterChangeHandler = (e) => {
    setPriceFilter({...priceFilter, [e.target.name]: +e.target.value })
  }
  // ?search=${value}
  const searchClickHandler = (e) =>{
    e.preventDefault()
    const address = `/businesses/${businessId}/shop/products`;
    const method = 'get'
    const header = {
      'Accept': "application/json",
      'Authorization':"Bearer " + tokenId,
    }
    const body = JSON.stringify({
     
      "search": searchTextBox
    })
    console.log({body})
    axiosSetup(address, method, header, body, getResult)
    function getResult (data){
      setResultSearch(data)
    }
  }

  const addressPageFunc = () =>{
    
  }
  console.log({resultSearch})
  console.log({checkAll})
  
  return (
    <div>
      <div className="business-panel-container">
        <div className="grid grid-cols-12 business-panel-cols bg-slate-100">
          <MarketingLayout/>
          <div className="relative col-span-12 overflow-hidden shadow-lg business-panel-mainbar md:col-span-10 shadow-slate-100">
            <MarketingMainHeader/>
            <div className="mainbar-content mt-10 md:col-span-9 col-span-12 md:pb-20 md:mr-3 md:px-0 px-4">
              <section className="max-w-screen-lg mx-auto px-3 relative z-[] lg:mt-[85px] mt-[42px] overflow-hidden h-[100vh]">
                <div className=" bg-white overflow-hidden rounded-lg shadow-md px-3">
                  <div className="list-products-title flex flex-col my-4">
                    <h5 className="text-base font-semibold">لیست محصولات</h5>
                    <small className="text-slate-600 text-xs mt-0.5">
                      لیست محصولات در این قسمت نمایش داده می شود .
                    </small>
                  </div>
                  <form className="search-flex w-full h-full flex md:flex-row flex-col md:justify-between md:items-center md:spae-y-0 space-y-4">
                    <div className="md:w-[80%] w-full search-bar relative">
                      <input
                        type="text"
                        id="simple-search"
                        name='search'
                        onChange={(e)=>{setSearchTextBox(e.target.value)}}
                        className="bg-white border border-gray-100 hover:bg-blue-500 text-gray-900 text-sm rounded-md focus:ring-2 focus:outline-none focus:ring-blue-400  block w-full pl-10 p-2"
                        placeholder="محصول مورد نظر خود را جستجو نمائید "
                        required
                      />
                      <div className="flex absolute inset-y-0 left-0 cursor-pointer items-center pl-3 bg-blue-500 hover:bg-blue-400 p-2 rounded-md rounded-r-none">
                        <button className="cursor-pointer"
                                onClick={searchClickHandler}>
                          <svg
                            aria-hidden="true"
                            className="w-5 h-5 text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div className="filter-btn pr-4 flex justify-end mt-1">
                        <button
                          className="md:px-10 px-[28px] md:py-2 bg-blue-500 hover:bg-blue-500 rounded-md"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <span className="md:text-xs text-[11px] text-white">
                            فیلتر
                          </span>
                        </button>
                      <div className="dropdown-menu p-2">
                        <div className="w-full h-full flex lg:flex-row flex-col items-center p-1">
                          <div className="md:w-[470px] mx-2">
                            <label className="flex text-xs text-right text-slate-600 lg:pr-2.5 mb-2">
                              قیمت
                            </label>
                            <div className=" border border-slate-500 flex items-center py-[5px] px-2 rounded-md bg-white">
                              <div className="flex items-center">
                                <span className="text-xs text-slate-600">از</span>
                                <input
                                  name='fromPrice'
                                  value={priceFilter.fromPrice}
                                  onChange={priceFilterChangeHandler}
                                  type="text"
                                  className="w-full rounded-sm focus:outline-none focus:border-slate-400 focus:ring-1 focus:ring-sky-600 overflow-hidden mx-1"
                                />
                              </div>
                              <div className=" flex items-center">
                                <span className="text-xs text-slate-600">تا</span>
                                <input
                                  name='toPrice'
                                  value={priceFilter.toPrice}
                                  onChange={priceFilterChangeHandler}
                                  type="text"
                                  className="w-full mx-2 rounded-sm focus:outline-none focus:border-slate-400 focus:ring-1 focus:ring-sky-600 overflow-hidden"
                                />
                              </div>
                              <small className="txt-slate-500 text-xs">تومان</small>
                            </div>
                          </div>
                          <div className="w-full grid grid-cols-4 gap-2">
                            <div className="md:col-span-1 col-span-4">
                              <label className="px-2 mb-2 text-sm text-slate-700">
                                شرایط فروش
                              </label>
                              <select
                                name='sale_terms'
                                value={filter.sale_terms}
                                onChange={advanceFilterChangeHandler}
                                class="form-select form-select-text-style py-[0.575rem] pr-2"
                                aria-label="Default select example"
                              >
                                <option selected> انتخاب کنید</option>
                                <option
                                  className="text-sm text-slate-400"
                                  value="cash"
                                >نقدی</option>
                                <option
                                  className="text-sm text-slate-400"
                                  value="credit"
                                >اعتباری</option>
                                <option
                                  className="text-sm text-slate-400"
                                  value="barter"
                                >تهاتر</option>
                              </select>
                            </div>
                            <div className="md:col-span-1 col-span-4">
                            <label className="px-2 mb-2 text-sm text-slate-700">
                              روش فروش
                            </label>
                            <select
                              name='wholesale'
                              value={filter.wholesale}
                              onChange={advanceFilterChangeHandler}
                              class="form-select form-select-text-style py-[0.575rem] pr-2"
                              aria-label="Default select example"
                            >
                              <option selected> انتخاب کنید</option>
                              <option className="text-sm text-slate-400" 
                                      value="1">
                                عمده
                              </option>
                              <option className="text-sm text-slate-400" 
                                      value="single">
                                تکی
                              </option>
                              <option className="text-sm text-slate-400" 
                                      value="both">
                                هر دو
                              </option>
                            </select>
                            </div>
                            <div className="md:col-span-1 col-span-4">
                              <label className="px-2 mb-2 text-sm text-slate-700">
                                وضعیت
                              </label>
                              <select
                                name='status'
                                // value={filter.tax}
                                // onChange={advanceFilterChangeHandler}
                                class="form-select form-select-text-style py-[0.575rem] pr-2"
                                aria-label="Default select example"
                              >
                                <option selected> انتخاب کنید</option>
                                <option
                                  className="text-sm text-slate-400"
                                  value="scheduling"
                                >درحال آماده سازی</option>
                                <option
                                  className="text-sm text-slate-400"
                                  value="unavailable"
                                >در دسترس نیست</option>
                                <option
                                  className="text-sm text-slate-400"
                                  value="draft"
                                >پیش نمایش</option>
                              </select>
                            </div>
                            <div className="md:col-span-1 col-span-4">
                              <label className="px-2 mb-2 text-sm text-slate-700">
                                مالیات
                              </label>
                              <select
                                name='tax'
                                value={filter.tax}
                                onChange={advanceFilterChangeHandler}
                                class="form-select form-select-text-style py-[0.575rem] pr-2"
                                aria-label="Default select example"
                              >
                                <option selected> انتخاب کنید </option>
                                <option
                                  className="text-sm text-slate-400"
                                  value="yes"
                                >دارد</option>
                                <option
                                  className="text-sm text-slate-400"
                                  value="no"
                                >ندارد</option>
                                
                              </select>
                              
                            </div>
                          </div>
                        </div>
                        {/* <div className="search-btn flex justify-end my-1">
                          <Link href="/">
                            <a className="px-4 py-1 bg-blue-500 hover:bg-blue-400 rounded-md">
                              <span className="text-white text-xs">جستجو</span>
                            </a>
                          </Link>
                        </div> */}
                      </div>
                    </div>
                  </form>
                  <div className="w-full flex justify-between items-center mt-4">
                    <div className="list-products-title flex flex-col my-4">
                      <h5 className="md:text-base text-sm font-semibold">محصولات</h5>
                    </div>
                    <div className="filter-btn pr-4 flex justify-end mt-1">
                        <button
                          className="md:px-2 px-1 md:py-1.5 bg-orange-500 hover:bg-orange-500 rounded-md"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <span className="md:text-xs text-[9px] text-white">
                            اعمال تخفیف گروهی
                          </span>
                        </button>
                      <div className="dropdown-menu p-2">
                        <div className="p-3 space-y-3 border rounded-md discount-border border-slate-500">
                          <div className="flex flex-col justify-between w-full space-y-3 discount-price md:flex-row md:items-end md:space-y-0">
                            <div className="flex flex-col">
                              <div className="flex items-center">
                                <input 
                                  type='radio'
                                  id='discount-mony' 
                                  ref={discountMoney}
                                  onChange={selectTypeDiscountMoneyClickHandler}
                                  className="mb-3 ml-2 text-xs font-semibold text-slate-500"/>
                                <p className="mb-3 text-xs font-semibold text-slate-500">
                                  ۱. تخفیف بر اساس مبلغ
                                </p>
                              </div>
                              <div
                                ref={discountMoneyDiv}
                                className="grid grid-cols-2 gap-4">
                                <div className="flex items-center w-full h-full col-span-2 md:col-span-1">
                                  <p className="text-xs text-slate-600 md:w-12 w-14">
                                    بیشتر از
                                  </p>
                                  <div class="all-input-group md:w-36 w-full input-group">
                                    <input
                                      name='price'
                                      value={productDetailsDiscounts.price}
                                      onChange={fillDetailProductDiscountsChangeHandler}
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
                                      onChange={fillDetailProductDiscountsChangeHandler}
                                      name='percent'
                                      value={productDetailsDiscounts.percent}
                                      type="text"
                                      className="form-control"
                                      placeholder="درصد"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* <div className="flex flex-col">
                              <p className="mb-3 text-xs font-semibold text-slate-500">
                                مبلغ نهایی پس از تخفیف
                              </p>
                              <div
                                ref={discountMoneyDiv1}
                                class="all-input-group md:md:w-36 w-full input-group">
                                <input
                                  
                                  type="text"
                                  value={`${+productDetailsInfo.price}`*`${+productDetailsDiscounts.percent/100}`}
                                  className="form-control"
                                  placeholder="تومان"
                                />
                              </div> 
                            </div>*/}
                          </div>
                          <div className="flex flex-col justify-between w-full space-y-3 discount-date md:flex-row md:items-end md:space-y-0">
                            <div className="flex flex-col">
                              <div className="flex items-center">
                                <input type='radio' 
                                  id='discount-date' 
                                  ref={discountDate} 
                                  onChange={selectTypeDiscountDateClickHandler}
                                  className="mb-3 ml-2 text-xs font-semibold text-slate-500"/>
                                <p className="mb-3 text-xs font-semibold text-slate-500">
                                  ۲. تخفیف بر اساس تاریخ
                                </p>
                              </div>
                              <div 
                                ref={discountDateDiv}
                                className="grid grid-cols-3 gap-4 space-y-3 md:space-y-0">
                                <div className="flex items-center w-full h-full col-span-3 md:col-span-1">
                                  <p className="text-xs text-slate-600 md:w-12 w-14">
                                    از تاریخ
                                  </p>
                                  <div class="all-input-group md:w-36 w-full input-group">
                                    <input
                                      onChange={fillDetailProductDiscountsChangeHandler}
                                      name='data_start'
                                      value={productDetailsDiscounts.data_start}
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
                                      onChange={fillDetailProductDiscountsChangeHandler}
                                      name='data_end'
                                      value={productDetailsDiscounts.data_end}
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
                                  <div
                                    class="all-input-group md:w-36 w-full input-group">
                                    <input
                                      name='percent'
                                      onChange={fillDetailProductDiscountsChangeHandler}
                                      value={productDetailsDiscounts.percent}
                                      type="text"
                                      className="form-control"
                                      placeholder="درصد"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* <div className="flex flex-col mt-8">
                              <p className="block mb-3 text-xs font-semibold md:hidden text-slate-500">
                                مبلغ نهایی پس از تخفیف
                              </p>
                              <div 
                                 ref={discountDateDiv1}
                                class="all-input-group md:w-36 w-full  input-group">
                                <input
                                  readOnly
                                  value={`${+productDetailsInfo.price}`*`${+productDetailsDiscounts.percent/100}`}
                                  type="text"
                                  className="form-control"
                                  placeholder="تومان"
                                />
                              </div>
                            </div> */}
                          </div>
                          <div className="flex flex-col justify-between w-full space-y-3 discount-counter md:flex-row md:items-end md:space-y-0">
                            <div className="flex flex-col ">
                              <div className="flex items-center">
                                <input 
                                  type='radio' 
                                  id='discount-howmany' 
                                  onClick={selectTypeDiscountHowmanyClickHandler}
                                  ref={discountHowmany} 
                                  className="mb-3 ml-2 text-xs font-semibold text-slate-500"/>
                                <p className="mb-3 text-xs font-semibold text-slate-500">
                                ۳. تخفیف بر اساس تعداد
                                </p>
                              </div>
                              <div
                                ref={discountHowmanyDiv}
                                disabled={!stateDiscount.discountHowmany}
                                className="grid grid-cols-3 gap-4 space-y-3 md:space-y-0">
                                <div className="flex items-center w-full h-full col-span-3 md:col-span-1">
                                  <p className="text-xs text-slate-600 md:w-12 w-14">
                                    از تعداد
                                  </p>
                                  <div class="all-input-group md:w-36 w-full input-group">
                                    <input
                                      name=''
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
                                      onChange={fillDetailProductDiscountsChangeHandler}
                                      name='qty'
                                      value={productDetailsDiscounts.qty}
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
                                  <div 
                                    className="all-input-group md:w-36 w-full input-group">
                                    <input
                                      onChange={fillDetailProductDiscountsChangeHandler}
                                      name='percent'
                                      value={productDetailsDiscounts.percent}
                                      type="text"
                                      className="form-control"
                                      placeholder="درصد"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* <div className="flex flex-col mt-8">
                              <p className="block mb-3 text-xs font-semibold md:hidden text-slate-500">
                                مبلغ نهایی پس از تخفیف
                              </p>
                              <div
                                ref={discountHowmanyDiv1}
                                class="all-input-group md:md:w-36 w-full input-group">
                                <input
                                  readOnly
                                  value={`${+productDetailsInfo.price}`*`${+productDetailsDiscounts.percent/100}`}
                                  type="text"
                                  className="form-control"
                                  placeholder="تومان"
                                />
                              </div>
                            </div> */}
                          </div>
                          {/* <div className="flex flex-col justify-between w-full space-y-3 discount-counter md:flex-row md:items-end md:space-y-0">
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
                          </div> */}
                        </div>
                        <div className="search-btn flex justify-end my-1">
                          <button className="px-4 py-1 bg-blue-500 hover:bg-blue-400 rounded-md">
                            <span className="text-white text-xs">اعمال</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 max-h-[600px] max-w-100 mb-5" style={{overflowX: 'scroll'}}>

                    <div >
                    <table className="w-full md:text-xs text-center text-gray-500 rounded-md table-bordered">
                      <thead className="md:text-xs text-[9px] text-gray-600 bg-blue-100 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                          <th scope="col" className="py-3 mx-2">
                            <input type='checkbox'
                                  ref={checkedAll}
                                    onChange={()=>{checkedAll.current.checked ? setCheckAll(true) : setCheckAll(false)}}/>
                          </th>
                          <th scope="col" className="py-3 mx-2">
                            ردیف
                          </th>
                          <th scope="col" className="py-3 mx-2">
                            تصویر
                          </th>
                          <th scope="col" className="py-3 mx-2">
                            نام محصول
                          </th>
                          <th scope="col" className="py-3 mx-2">
                            واحد
                          </th>
                          <th scope="col" className="py-3 mx-2">
                            برند
                          </th>
                          <th scope="col" className="py-3 mx-2">
                            قیمت اصلی(تومان)
                          </th>
                          <th scope="col" className="py-3 mx-2">
                            مبلغ تخفیف (تومان)
                          </th>
                          <th scope="col" className="py-3 mx-2">
                            قیمت نهایی محصول (تومان)
                          </th>
                          <th scope="col" className="py-3 mx-2">
                            تعداد موجودی
                          </th>
                          <th scope="col" className="py-3 mx-2">
                            حداقل فروش
                          </th>
                          <th scope="col" className="py-3 mx-2">
                            روش فروش
                          </th>
                          <th scope="col" className="py-3 mx-2">
                            شرایط فروش
                          </th>
                          <th scope="col" className="py-3 mx-2">
                            روش ارسال
                          </th>
                          <th scope="col" className="py-3 mx-2">
                            وضعیت محصول
                          </th>
                          <th scope="col" className="py-3 mx-2">
                            ویرایش
                          </th>
                          <th scope="col" className="py-3 mx-2">
                            آرشیو
                          </th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-500 lg:text-xs text-[9px] border-b ">
                        {
                          !loadMarketingProductList ? <p>داده در حال بارگذاری ...</p> :  
                          loadMarketingProductList.status !== 200 ? 
                            <p className="flex text-center">
                            <i className="bi bi-arrow-clockwise bg-black text-[#982020]">خطا در بارگذاری داده (دوباره تلاش کنید)</i></p> :
                          loadMarketingProductList.data && 
                          loadMarketingProductList.data.data.map((product, index) =>
                          
                            <tr key={index} className="tr-one">
                              <th scope="row" className="py-4 px-6  whitespace-nowrap">
                                <input type='checkbox' 
                                  checked={checkAll || undefined}
                                 />
                              </th>
                              <th scope="row" className="py-4 px-6  whitespace-nowrap">
                                {fixNumbers(index + 1)}
                              </th>
                              <th scope="row" className="py-4 px-6  whitespace-nowrap">
                              {/* <Image src="/public/assets/img/products/1.jpg" className="w-36 h-36 bg-white border border-slate-100 rounded-sm" width="50" height="50"></Image> */}
                              </th>
                              <th title={product.name} scope="row" className="py-4 px-6  whitespace-nowrap">
                                {shorten(product.name)}
                              </th>
                              <th scope="row" className="py-4 px-6  whitespace-nowrap">
                                عدد?
                              </th>
                              <th scope="row" className="py-4 px-6 whitespace-nowrap">
                                هایکو?
                              </th>
                              <th scope="row" className="py-4 px-6  whitespace-nowrap">
                                {fixNumbers(numberWithCommas(product.price))}
                              </th>
                              <th scope="row" className="py-4 px-6  whitespace-nowrap">
                                {product.discount === null ? '۰' : product.discount.price !== null ? fixNumbers(numberWithCommas(product.discount.price)): '۰'}
                              </th>
                              <th scope="row" className="py-4 px-6  whitespace-nowrap">
                              {product.discount !== null ? fixNumbers(numberWithCommas(product.price - product.discount.price)) : fixNumbers(numberWithCommas(product.price))}
                              </th>
                              <th scope="row" className="py-4 px-6  whitespace-nowrap">
                                {fixNumbers(numberWithCommas(product.stock))}
                              </th>
                              <th scope="row" className="py-4 px-6  whitespace-nowrap">
                                {fixNumbers(numberWithCommas(product.minimum_purchase))}
                              </th>
                              <th scope="row" className="py-4 px-6  whitespace-nowrap">
                                {product.wholesale === 'both' ? 'هردو' : product.wholesale === 'single' ? 'تکی' : 'عمده'}
                              </th>
                              <th scope="row" className="py-4 px-6  whitespace-nowrap">
                                {product.sale_terms === 'cash' ? 'نقدی' : product.sale_terms === 'credit' ? 'اقساط' : 'تهاتر'}
                              </th>
                              <th scope="row" className="py-4 px-6  whitespace-nowrap">
                                {product.shipping_method === 'seller' ? 'فروشنده' : 'رایگان'}
                              </th>
                              <th scope="row" className="py-4 px-6  whitespace-nowrap">
                                {product.status === 'scheduling' ? 'درحال آماده سازی' : product.status === 'unavailable' ? 'در دسترس نیست' : 'پیش نمایش'}
                              </th>
                              <th scope="row" className="py-4 px-6  whitespace-nowrap">
                                <Link href="/">
                                  <a>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      strokeWidth={1.5}
                                      stroke="currentColor"
                                      className="w-5 h-5 text-slate-500"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                                      />
                                    </svg>
                                  </a>
                                </Link>
                              </th>
                              <th scope="row" className="py-4 px-6  whitespace-nowrap">
                                <Link href="/">
                                  <a>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      strokeWidth={1.5}
                                      stroke="currentColor"
                                      className="w-5 h-5 text-slate-500"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4.5 12.75l6 6 9-13.5"
                                      />
                                    </svg>
                                  </a>
                                </Link>
                              </th>
                            </tr>
                          ) 
                        }
                      </tbody>
                    </table>
                    </div>
                  </div>
                </div>
              </section>
              <div className="mt-4">
                <Pagination addressPage={addressPageFunc} linksData={loadMarketingProductList && loadMarketingProductList.data} linkPages={linkPagesFunc}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default add;
