import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Cookies from "universal-cookie";
import { fixNumbers, fixNumbersEnglish } from "../../components/tools/ChangeLanguage";
import { axiosSetup } from "../../components/utils/axiosSetup";
import { useSelector, useDispatch } from 'react-redux';
import { fetchState } from "../../redux/loadState/LoadStateAction";
import { fetchCities } from "../../redux/loadCities/LoadCitiesAction";
import { isNationalIdValid } from "../../components/tools/validationNationalId";
import DtPicker, {convertToFa, convertToEn} from 'react-calendar-datetime-picker'
import "react-calendar-datetime-picker/dist/index.css";
import ShowpathProfile from '../../components/profile/components/showPathProfile/ShowpathProfile'
import ProfileLayout from '../../components/profile/layouts/ProfileLayout'
import { stringify } from "postcss";
import axios from "axios";
import config from "../../components/utils/config";
import { toast } from "react-toastify";
import SiteCalender from "../../components/tools/SiteCalender";

const infoUser={
  first_name : '',
  last_name: '',
  mobile: '',
  birthday_place_id: '',
  birthday: '',
  gender: '',
  refund_type: '',
  typeReturnMoney: {
    shaba: '',
    numHesab: '',
    numCard: ''
  },
  picture: '',
  addresses:[]
}
const info = () => {
  const cookies = new Cookies();
  const [isLoadInfo, setIsLoadInfo] = useState(false)
  const [getInfoUserFromDB, setGetInfoUserFromDB] = useState()
  const [loadStates, setLoadStates] = useState({})
  const [loadCities, setLoadCities] = useState([])
  const [isValidationNationalId, setIsValidationNationalId] = useState(true);
  const [choosenState, setChoosenState] = useState(false)
  const [resUpdateInfoUser, setResUpdateInfoUser] = useState([])
  const [catchUpdateInfoUser, setCatchUpdateInfoUser] = useState([])
  const [reloadStateList, setReloadStateList] = useState(false)
  const [loadingSpinner, setLoadingSpinner] = useState(false)
  const userData = cookies.get('dataUser');
  const tokenId = cookies.get('token')
  const [userAddress, setUserAddress] = useState({
    postalCode: '',
    address: '',
    city: ''
  })
  const dataState  =  useSelector( state => state.loadState);
  const dispatch = useDispatch();
  const method = 'get'
  const address = '/public/place?type=state'
  const header = {
    'Accept': "application/json",
    'Authorization': 'Bearer ' + cookies.get('token')
  }
  const [date, setDate] = useState(null)
  const [changeInfoUser, setChangeInfoUser] = useState({
    first_name: '',
    last_name: '',
    mobile: '',
    birthday_place_id: '',
    gender: '',
    refund_type: '',
    typeReturnMoney: {
      sheba_number: '',
      account_number: '',
      card_number: ''   
    },
    picture: '',
    _method: 'put'
  })

  const [resSaveInfoUser, setResSaveInfoUser] = useState([])
  const [catchSaveInfoUser, setCatchSaveInfoUser] = useState([])

  const [birthDaygetFromDB, setBirthDaygetFromDB] = useState({
    year: userData &&  userData.birthday && userData.birthday.slice(0,4),
    month: userData && userData.birthday && userData.birthday.slice(6,2),
    day: userData && userData.birthday && userData.birthday.slice(9,2)
  })
  
 
  useEffect(()=>{
    axiosSetup(address, method, header, '', getResult)
    function getResult (data){
    console.log({data})
    setLoadStates(data)
   }
 },[])

 useEffect(()=>{
  if(reloadStateList === true){
    axiosSetup(address, method, header, '', getResult)
    function getResult (data){
      setLoadStates(data)
    }
    setReloadStateList(false)
  }
   //dispatch(fetchState(address, method, header, ''));  
   //axiosSetup(method, address, header, '')
  },[reloadStateList])
  
  useEffect(()=>{
  const loadInfo = async () =>{
    let address = '/user';
    header = {
      'Accept': "application/json",
      'Authorization':"Bearer " + tokenId
    }
    await axiosSetup(address, method, header, '', getResult)
    function getResult (data){
      console.log('داده های کاربر',data)
      setGetInfoUserFromDB(data.data.user)
      setIsLoadInfo(true)
    }
  }
  loadInfo()
},[])

useEffect(()=>{
  if(isLoadInfo === true){
    getInfoUserFromDB &&
    setChangeInfoUser({
      first_name: getInfoUserFromDB.name,
      last_name: getInfoUserFromDB.last_name,
      mobile: getInfoUserFromDB.mobile,
      national_code: getInfoUserFromDB.national_code,
      birthday_place_id: getInfoUserFromDB.birthday_place_id,
      birthday: setDate(convertToFa(birthDaygetFromDB)),
      gender: getInfoUserFromDB.gender,
      refund_type: getInfoUserFromDB.refund_type, 
      typeReturnMoney: {
        sheba_number: getInfoUserFromDB.sheba_number,
        account_number: getInfoUserFromDB.account_number,
        card_number: getInfoUserFromDB.card_number
      },
      picture: getInfoUserFromDB.picture_file,
      link_picture: getInfoUserFromDB.picture_link,
      _method: 'put'
    })
    setIsLoadInfo(false)
  }
},[isLoadInfo])

console.log({changeInfoUser})

useEffect(()=>{
  //setLoadStates(dataState.data.place)
},[choosenState])

const getDateFromCalenderFun = (val) =>{
  console.log({val})
}


console.log({getInfoUserFromDB})
const selectStateChangeHandler = (e) =>{
    const stateId = e.target.value;
    console.log(stateId)
    if(stateId === 'reload'){
      setReloadStateList(true)
    }
    if(stateId !== 'choosed' && stateId !== 'reload'){
      const address = `/public/place?type=city&parent_id=${stateId}`
      axiosSetup(address, method, header, '', getResult)
      function getResult (data){
        setLoadCities(data)
        setChoosenState(true)
      }
    }
    // dispatch(fetchCities(address, method, header, ''));
    // cities  =  useSelector( state => state.loadCities);
  }
  
  const changeHandler = (e) =>{
    console.log(e.target.info)
    setChangeInfoUser({...changeInfoUser, [e.target.name]: e.target.value})
  }

  const checkValidationNationalId = (e) => {
    setIsValidationNationalId(isNationalIdValid(fixNumbersEnglish(e.target.value)))
  }
  
  const saveInfoUser = () =>{
    let address = `/user`
    let method = 'post'
    
    console.log(convertToEn(date))
    console.log(fixNumbersEnglish(changeInfoUser.national_code))

    axios.post(config.api_url + '/user/3',
    {
      _method: 'put',
      name: changeInfoUser.first_name,
      last_name: changeInfoUser.last_name,
      national_code: fixNumbersEnglish(changeInfoUser.national_code),
      mobile: changeInfoUser.mobile,
      birthday_place: userAddress.city.length ? userAddress.city : null,
      refund_type: changeInfoUser.refund_type,
      gender: changeInfoUser.gender,
      birthday_place_id: changeInfoUser.birthday_place_id,
      birthday: convertToEn(date),
      picture: changeInfoUser.picture
    },
    {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization':"Bearer " + tokenId,
      },
    }).then(res => setResUpdateInfoUser(res))
    .catch(err => setCatchUpdateInfoUser(err))
    
    
    // const header = {
    //   'Content-Type': 'multipart/form-data',
    //   'Authorization':"Bearer " + tokenId,
    // }
    // axiosSetup(address, method, header, changeInfoUser, resResult, catchResult)
    // function resResult (data){
    //   setResSaveInfoUser(data)
    // }
    // function catchResult (data){
    //   setCatchSaveInfoUser(data)
    // }
  }

  useEffect(()=>{

    if(resUpdateInfoUser.status === 200){
      toast.success('اطلاعات بروزرسانی شد')
      setLoadingSpinner(false)
    }else if(catchUpdateInfoUser.name === "AxiosError"){
      if(catchUpdateInfoUser.code === "ERR_NETWORK"){
        toast.error('اتصال به اینترنت را بررسی کنید')
        setLoadingSpinner(false)
      }else{
        toast.error('بروز رسانی با مشکل مواجه شده است، لطفا دوباره تلاش کنید')
        setLoadingSpinner(false)
      }
    }

  },[resUpdateInfoUser, catchUpdateInfoUser])

  console.log({resUpdateInfoUser})
  console.log({catchUpdateInfoUser})

  const ChangeHnadlerAddress = (e) =>{
    setUserAddress({...userAddress, [e.target.name]: e.target.value})
  }

  const saveAddresses = () =>{

    const address = '/user/addresses'
    const method = 'post'
    const header = {
      'Accept': "application/json",
      'Authorization':"Bearer " + tokenId,
    }
    const sendData = {
      name: "hgfhg",
      postal_code: userAddress.postalCode,
      mobile: getInfoUserFromDB.mobile,
      description: userAddress.address,
      place_id: userAddress.city,
    
    }
    axiosSetup(address, method, header, sendData, getResult)
    function getResult (data){
      console.log(data)
     }
  }
  console.log({changeInfoUser})
  console.log({userAddress})
  console.log({date})
  return (
    <div className=' max-w-screen-2xl bg-light md:px-12 pt-3 mx-auto'
      dir="rtl">
      <div>
        <ShowpathProfile/>
      </div>
      <div className='flex flex-row'>
        <div className=''>
          <ProfileLayout/>
        </div>
        <div className="mainbar-content w-[1100px] md:col-span-9 col-span-12 md:pb-20 md:mr-3 md:px-0 px-2">
        <div className="mainTitle mb-4 md:mt-0 mt-4">
          <h6 className="text-muted fw-bold border-b-2 border-blue-500 pb-1.5 w-36">
            اطلاعات حساب کاربری
          </h6>
        </div>
        <div className="profile-info-box">
          <div className="profile-info col-span-3 md:col-span-1">
            <label className="text-sm">نام</label>
            <input
              type="text"
              name='first_name'
              value={changeInfoUser.first_name}
              placeholder='نام را وارد کنید'
              onChange={changeHandler}
              className="border border-slate-100 focus:outline-none focus:border-slate-400 focus:ring-1 focus:ring-sky-500 overflow-hidden rounded-sm py-2 px-2 text-sm"
            ></input>
          </div>
          <div className="profile-info col-span-3 md:col-span-1">
            <label className="">نام خانوادگی</label>
            <input
              name='last_name'
              type="text"
              value={changeInfoUser.last_name}
              placeholder='نام خانوادگی را وارد کنید'
              onChange={changeHandler}
              className="border border-slate-100 focus:outline-none focus:border-slate-400 focus:ring-1 focus:ring-sky-500 overflow-hidden rounded-sm py-2 px-2 text-sm"
            ></input>
          </div>
          <div className="profile-info col-span-3 md:col-span-1">
            <label> موبایل</label>
            <input
              readOnly
              type="text"
              value={fixNumbers(changeInfoUser.mobile)}
              placeholder="موبایل خود را وارد کنید"
              className="border border-slate-100 focus:outline-none focus:border-slate-400 focus:ring-1 focus:ring-sky-500 overflow-hidden rounded-sm py-2 px-2 text-sm"
            ></input>
          </div>
          <div className="profile-info col-span-3 md:col-span-1">
            <div className="flex justify-start items-end">
              <lable className="text-sm">کدملی</lable>
              <p hidden={isValidationNationalId} className="text-[#9a1515] text-[12px] mr-[30px]">کد ملی را صحیح وارد کنید</p>
            </div>
            <input
              name='national_code'
              type="text"
              value={fixNumbers(changeInfoUser.national_code)}
              placeholder="کد ملی خود را وارد کنید"
              onBlur={checkValidationNationalId}
              onChange={changeHandler}
              className={`border border-slate-100 focus:outline-none focus:border-slate-400 focus:ring-1 focus:ring-sky-500 overflow-hidden rounded-sm py-2 px-2 text-sm' + ${isValidationNationalId === false ? 'border-2 border-[#9a1515] ' : ''}`}
            ></input>
          </div>
          <div className="profile-info col-span-3 md:col-span-1">
            <lable className="text-sm">تاریخ تولد</lable>
            {/* <input
              name='birthday'
              type="text"
              value={fixNumbers(changeInfoUser.birthday)}
              placeholder="۱۳۷۳-۰۳-۲۵"
              /> */}
              {/* <DtPicker
                className="border text-center IranSanse border-slate-100 focus:outline-none focus:border-slate-400 focus:ring-1 focus:ring-sky-500 overflow-hidden rounded-sm py-2 px-2 text-sm"
                onChange={setDate}
                local="fa"
                /> */}
              <SiteCalender getBirthdate={true} valueDate={getDateFromCalenderFun}/>
           
          </div>
          
          <div className="profile-info col-span-3 md:col-span-1">
            <lable htmlFor='male'  className="text-sm">جنسیت</lable>
            <div className="radio-box">
              <input
                id='male'
                defaultChecked ={
                  changeInfoUser.gender === 'male' ? true : false
                }
                className="py-1 px-2"
                type="radio"
                name="sex"
                value="male"
                label="مرد"
                onClick={(e) => setChangeInfoUser({...changeInfoUser, gender: e.target.value})}
              ></input>
              <label htmlFor="male" className="pr-2 text-slate-400">
                مرد
              </label>
              <input
                defaultChecked ={
                  changeInfoUser.gender === 'female' ? true : false
                }
                id='female' 
                type="radio" 
                name="sex" 
                value="female" 
                onClick={(e) => setChangeInfoUser({...changeInfoUser, gender: e.target.value})}
                label="زن"></input>
              <label htmlFor="female" className="text-slate-400">
                زن
              </label>
            </div>
          </div>
          <div className="profile-info col-span-3 md:col-span-2 mt-2">
            <lable className="text-xs font-semibold mb-1">
              روش بازگرداندن پول
            </lable>
            <div className="input-group">
              <select
                id="refundType"
                className="bg-white border border-slate-100 focus:outline-none focus:border-slate-400 focus:ring-1 focus:ring-sky-500 overflow-hidden rounded-sm py-2 px-2 text-sm text-slate-400"
                onChange={changeHandler}
                value={changeInfoUser.refund_type}
                name='refund_type'
              >
                <option selected> انتخاب کنید</option>
                <option
                  value="sheba_number">شبا</option>
                <option 
                  value="account_number">حساب </option>
                <option 
                  value="card_number">کارت</option>
              </select>
              <input
                type="text"
                name='typeReturnMoney'
                value={changeInfoUser.refund_type === "sheba_number" ? changeInfoUser.typeReturnMoney.sheba_number: 
                        changeInfoUser.refund_type === "account_number" ? changeInfoUser.typeReturnMoney.account_number :
                        changeInfoUser.refund_type === "card_number" ? changeInfoUser.typeReturnMoney.card_number : ''}
                className="form-control  rounded-sm border border-slate-100"
                aria-label="Text input with dropdown button"
                onChange={changeHandler}
              />
            </div>
          </div>
          <div className="profile-info col-span-3 md:col-span-1 mt-[8px]">
            <lable className="text-sm">افزودن عکس پروفایل</lable>
            <div className="w-full border border-slate-100 focus:outline-none focus:border-slate-400 focus:ring-1 focus:ring-sky-500 overflow-hidden rounded-sm py-[12px] px-2 text-sm text-black">
            
            <label
            className="text-slate-400 flex items-center justify-center cursor-pointer hover:text-slate-400 text-xs"
                    htmlFor="upload-pic-main"
                  >
                  افزودن عکس پروفایل
                  
                  </label><input hidden 
                      onChange={(event)=>{
                        if (event.target.files && event.target.files[0]) {
                          setChangeInfoUser({...changeInfoUser, picture: event.target.files[0]})
                        
                          console.log(event.target.files)

                          // var formData = new FormData();
                          // formData.append("image", event.target.files[0]);


                          // axiosSetup("asd", "post", formData, {
                          //   'Content-Type': 'multipart/form-data'
                          // })

                        }
                      }}
                      id="upload-pic-main" type="file" multiple/>                
              {/* <Link href="/">
                <a className="text-slate-400 flex items-center justify-center hover:text-slate-400 text-xs">
                  
                </a>
              </Link> */}
            </div>
          </div>
          <div className="profile-info col-span-3 mt-2">
            <lable className="text-xs font-semibold">آدرس</lable>
          </div>
          <div className="profile-info col-span-3 md:col-span-1">
            <lable className="text-sm">استان</lable>
            <select
              id=""
              onChange={selectStateChangeHandler} 
              className="bg-white border border-slate-100 focus:outline-none focus:border-slate-400 focus:ring-1 focus:ring-sky-500 overflow-hidden rounded-sm py-1.5 px-2 text-sm text-slate-400"
            >
              <option selected value="choosed">انتخاب کنید</option>
              {
                !loadStates ? <option value="reloading">داده در حال بارگذاری ...</option> :  
                loadStates.status !== 200 ? 
                  <option className="flex text-center" value="reload">
                    <i className="bi bi-arrow-clockwise bg-black text-[#982020]">خطا در بارگذاری داده (دوباره تلاش کنید)</i></option> :
                loadStates.data && 
                loadStates.data.place.map(state =>
                  <option 
                  key={state.id}
                  value={state.id}
                    >{state.name}</option>
                )
              }
              
            </select>
          </div>
          <div className="profile-info col-span-3 md:col-span-1">
            <lable className="text-sm">شهر</lable>
            <select
              id=""
              onChange={(e)=> {setUserAddress({...userAddress, city: +e.target.value})
                                setChangeInfoUser({...changeInfoUser, birthday_place_id: +e.target.value })}}
              className="bg-white border border-slate-100 focus:outline-none focus:border-slate-400 focus:ring-1 focus:ring-sky-500 overflow-hidden rounded-sm py-1.5 px-2 text-sm text-slate-400"
            >
              {
                loadCities.data &&
                <option selected value="shomareShabe">انتخاب کنید</option>}
              {
                !choosenState ? <option value="reloading">استان را انتخاب کنید</option> :
                !loadCities ? <option value="reloading">داده در حال بارگذاری ...</option> :  
                loadCities.status !== 200 ? 
                  <option className="flex text-center" value="reload">
                    <i className="bi bi-arrow-clockwise bg-black text-[#982020]">خطا در بارگذاری داده (دوباره تلاش کنید)</i></option> :
                loadCities.data && 
                loadCities.data.place.map(city =>
                  <option 
                  key={city.id}
                  value={city.id}
                    >{city.name}</option>
                ) 
              }
            </select>
          </div>
          <div className="profile-info col-span-3 md:col-span-1">
            <lable className="text-sm">کدپستی</lable>
            <input
              onChange={ChangeHnadlerAddress}
              name= 'postalCode'
              type="text"
              placeholder="۱۳۶۱۶۱۳۲۴۵"
              className="border border-slate-100 focus:outline-none focus:border-slate-400 focus:ring-1 focus:ring-sky-500 overflow-hidden rounded-sm py-2 px-2 text-sm text-black"
            ></input>
          </div>
          <div className="profile-info col-span-3 md:col-span-2">
            <input
              onChange={ChangeHnadlerAddress}
              type="text"
              name="address"
              placeholder="آدرس"
              className="border border-slate-100 focus:outline-none focus:border-slate-400 focus:ring-1 focus:ring-sky-500 overflow-hidden rounded-sm py-2 px-2 text-sm text-black"
            ></input>
          </div>
          <button onClick={saveAddresses}>
            ثبت آدرس
          </button>
          <div className="profile-info col-span-3 md:col-span-1 border border-slate-500 overflow-hidden rounded-md">
            
              {/* <button
                className="h-full panel-address-link  flex items-center justify-center"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                <span className="text-xs text-slate-400">افزودن آدرس</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-slate-400 mx-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </button> */}
           
            <div
              className="modal fade"
              id="staticBackdrop"
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              tabIndex="-1"
              aria-labelledby="staticBackdropLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5
                      className="modal-title text-base font-semibold"
                      id="staticBackdropLabel"
                    >
                      آدرس ها{" "}
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <div className="panel-addresses bg-white p-4 border-b border-slate-200">
                      <div className="panel-address border-b border-slate-200 pb-5">
                        <div className="address-title w-full h-full flex justify-between items-center my-4">
                          <div>
                            <h5 className="text-base font-semibold">کارخانه</h5>
                          </div>
                          <div className="btn-group dropend">
                            <a
                              type="button"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <i className="bi bi-three-dots"></i>
                            </a>
                            <ul className="w-full dropdown-menu divide-y divide-slate-200 p-2">
                              <li className="flex items-center pb-2 ">
                                <i className="bi bi-pencil-fill text-sm ml-2"></i>
                                <span className="text-sm">ویرایش آدرس</span>
                              </li>
                              <li className="flex items-center pt-2">
                                <i className="bi bi-trash3-fill text-sm ml-2"></i>
                                <span className="text-sm">حذف</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="flex flex-col">
                            <div className="location w-full h-full  flex items-center">
                              <span className="px-1 py-1 bg-blue-500 rounded-full">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-4 w-4 text-white text-semibold"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                  />
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                  />
                                </svg>
                              </span>
                              <p className="text-sm text-black mr-2">
                                تهران ، خیابان مطهری ، خیابان مفتح ، پلاک ۸{" "}
                              </p>
                            </div>
                            <div className="email w-full h-full  flex items-center mt-2">
                              <span className="px-1 py-1 bg-blue-500 rounded-full">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-4 w-4 text-white text-semibold"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76"
                                  />
                                </svg>
                              </span>
                              <p className="text-sm text-black mr-2">
                                {" "}
                                myy@my.com
                              </p>
                            </div>
                            <div className="tel w-full h-full  flex items-center mt-2">
                              <span className="px-1 py-1 bg-blue-500 rounded-full">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-4 w-4 text-white text-semibold"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                  />
                                </svg>
                              </span>
                              <p className="text-sm text-black mr-2">۶۶۵۲۴۸۷۶</p>
                            </div>
                          </div>
                          <div className="bg-slate-100 w-36 h-32 "></div>
                        </div>
                      </div>
                      <div className="panel-address">
                        <div className="address-title w-full h-full flex justify-between items-center my-4">
                          <div>
                            <h5 className="text-base font-semibold">فروشگاه</h5>
                          </div>
                          <div className="btn-group dropend">
                            <a
                              type="button"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <i className="bi bi-three-dots"></i>
                            </a>
                            <ul className="w-full dropdown-menu divide-y divide-slate-200 p-2">
                              <li className="flex items-center pb-2 ">
                                <i className="bi bi-pencil-fill text-sm ml-2"></i>
                                <span className="text-sm">ویرایش آدرس</span>
                              </li>
                              <li className="flex items-center pt-2">
                                <i className="bi bi-trash3-fill text-sm ml-2"></i>
                                <span className="text-sm">حذف</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="flex flex-col">
                            <div className="location w-full h-full  flex items-center">
                              <span className="px-1 py-1 bg-blue-500 rounded-full">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-4 w-4 text-white text-semibold"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                  />
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                  />
                                </svg>
                              </span>
                              <p className="text-sm text-black mr-2">
                                تهران ، خیابان مطهری ، خیابان مفتح ، پلاک ۸{" "}
                              </p>
                            </div>
                            <div className="email w-full h-full  flex items-center mt-2">
                              <span className="px-1 py-1 bg-blue-500 rounded-full">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-4 w-4 text-white text-semibold"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76"
                                  />
                                </svg>
                              </span>
                              <p className="text-sm text-black mr-2">
                                {" "}
                                myy@my.com
                              </p>
                            </div>
                            <div className="tel w-full h-full  flex items-center mt-2">
                              <span className="px-1 py-1 bg-blue-500 rounded-full">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-4 w-4 text-white text-semibold"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                  />
                                </svg>
                              </span>
                              <p className="text-sm text-black mr-2">۶۶۵۲۴۸۷۶</p>
                            </div>
                          </div>
                          <div className="bg-slate-100 w-36 h-32 "></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button
                      className="btn btn-danger px-4 py-2 text-xs"
                      data-bs-dismiss="modal"
                    >
                      بستن
                    </button>
                    <button 
                      
                      className="btn btn-primary px-4 py-2 text-xs">
                      ثبت
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="profile-info col-span-3 md:col-span-3">
            <div className="w-full h-48 border border-slate-100 rounded-sm"></div>
          </div>
          <div className="w-full col-span-3 flex justify-end space-x-2 rtl:space-x-reverse">
            <div className="profile-seen-btn col-span-3 md:col-span-3 flex justify-end items-end mt-2">
                <button className="px-4 py-2 bg-blue-500 hover:bg-blue-400 rounded-md">
                  <span className="text-white text-xs">نمایش آدر س ها</span>
                </button>
            </div>
            <div className="profile-save-btn col-span-3 md:col-span-3 flex justify-end items-end mt-2">
              
                <button 
                  onClick={(e)=>{saveInfoUser(e)
                                 setLoadingSpinner(true) }}
                  className="px-4 py-2 bg-blue-500 hover:bg-blue-400 rounded-md">
                  {
                    loadingSpinner === true ? 
                      <div
                        className="spinner-border text-xs px-2 py-1 text-white"
                        role="status"
                      ><span className="sr-only">Loading...</span></div>
                    :
                      <span className="text-white text-xs">ثبت</span>
                  }
                </button>
              
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};
export default info;
