import React, { memo, useContext, useEffect, useState } from "react";
import Link from "next/link";
import MyContext from "../../context/MyContext";
import { useRouter } from "next/router";
// import { Cookies } from "next/dist/server/web/spec-extension/cookies";
import Cookies from "universal-cookie";
import { axiosSetup } from "../utils/axiosSetup";
import { notify } from "../tools/toastify";
import { useSelector } from "react-redux";
import { fixNumbers } from "../tools/ChangeLanguage";

const Navbar = () => {
  const cookies = new Cookies();
  const router = useRouter();
  const { user, logout } = useContext(MyContext);
  const [resData, setResData] = useState([])
  const [catchData, setCatchData] = useState([])
  const userData = cookies.get('dataUser');
  const [isLogout, setIsLogout] = useState(false)
  const tokenId = cookies.get('token');
  const [userName, setUserName] = useState('')
  useEffect(()=>{
    setUserName( userData && `${userData.name} ${userData.last_name}`)
  },[userData])
  
  useEffect(()=>{
    if(resData.length === 0 && catchData.length !== 0){
      notify('مشکلی پیش آمده برای خروج دوباره تلاش کنید', 'error')

    }else if(resData.status === 200){
      notify(' شما از پنل کاربری خود خارج شدید', 'success')
      
      setIsLogout(true)
    }
  },[resData, catchData])

  useEffect(()=>{
    if(isLogout === true){
      cookies.remove('dataUser')
      cookies.remove('token')
      cookies.remove('b-Id')
      router.push('/')
      setIsLogout(false)
    }
  },[isLogout])

  const exitClickHandler = () =>{
    const address = '/user/auth/logout'
    const method = 'post'
    const header = {
      'Accept': "application/json",
      'Authorization':"Bearer " + tokenId,
    }
    axiosSetup(address, method, header, '', getResult, getCatch)
    function getResult (data){
      setResData(data)      
     }
    function getCatch(data){
      setCatchData(data)
    }
  }
  const state = useSelector(state => state.cartState);
  return (
    <div className="mb-3">
      <div className='sm:hidden'>
      </div>
      <div className='hidden lg:block w-[90%] max-w-[2000px] mt-3 mx-auto'>
        <div className='flex lg:justify-between items-start text-[12px] xl:text-[16px] xl:font-semibold'>
          <ul className='flex 2xl:justify-between items-center w-[45%] xl:w-[50%]'>
            <li className="flex items-center text-[#1b1b1b] sm:px-1 lg:px-2 xl:px-3 rounded-xl cursor-pointer hover:bg-[#f43f5e] hover:text-[#ffffff] ">
            <Link href="/">
              <a className="nav-link flex items-center" aria-current="page">
                <i className="bi bi-house ml-2 xl:text-[18px]"></i>
                <p className=''>خانه</p>
              </a>
            </Link>
            </li>
            <li className="flex items-center text-[#1b1b1b] sm:px-1 lg:px-2 xl:px-3 rounded-xl cursor-pointer hover:bg-[#f43f5e] hover:text-[#ffffff]">
              <Link href="/allproducts">
                <a className="nav-link flex items-center" aria-current="page">
                  <i className="bi bi-archive ml-2 xl:text-[18px]"></i>
                  <p className=''>محصولات</p>
                </a>
              </Link>
            </li>
            <li className="flex items-center text-[#1b1b1b] sm:px-1 lg:px-2 xl:px-3 rounded-xl cursor-pointer hover:bg-[#f43f5e] hover:text-[#ffffff]" style={{cursor:'pointer'}}>
              <i className="bi bi-coin ml-2 xl:text-[18px]"></i>
              <p className=''>کسب و کارها</p>
            </li>
            <li className="flex items-center text-[#1b1b1b] sm:px-1 lg:px-2 xl:px-3 rounded-xl cursor-pointer hover:bg-[#f43f5e] hover:text-[#ffffff]" style={{cursor:'pointer'}}>
              <i className="bi bi-book ml-2 xl:text-[18px]"></i>
              <p className=''>مجله</p>
            </li>
            <li className="flex items-center text-[#1b1b1b] sm:px-1 lg:px-2 xl:px-3 rounded-xl cursor-pointer hover:bg-[#f43f5e] hover:text-[#ffffff]" style={{cursor:'pointer'}}>
              <i className="bi bi-question-diamond ml-2 xl:text-[18px]"></i>
              <p className=''>راهنما</p>
            </li>
          </ul>
          <ul>
            <li className="flex items-center text-[#1b1b1b] sm:px-1 xl:px-3 rounded-xl cursor-pointer hover:bg-[#f43f5e] hover:text-[#ffffff]" style={{cursor:'pointer'}}>
              <i className="bi bi-shop ml-2 xl:text-[18px]"></i>
              <p className=''>کسب و کار خود را رایگان کنید</p>
            </li>
          </ul>
          <ul className='flex justify-end items-center'>
            <li className="flex items-center text-[#1b1b1b] sm:px-1 xl:px-3 rounded-xl cursor-pointer hover:bg-[#f43f5e] hover:text-[#ffffff]" style={{cursor:'pointer'}}>
              <Link href="/profile/cart">
                <a className="nav-link flex items-center" aria-current="page">
                 { state.itemsCounter ?
                    <span  className="badge text-bg-danger my-badge animate-bounce">
                      {fixNumbers(state.itemsCounter + '')}
                    </span> : ''
                  }
                  <i className="bi bi-cart3 ml-2 xl:text-[18px]"></i>
                  <p className=''>سبد سفارش</p>
                </a>
              </Link>
            </li>
            {

              userName ? (
                <>
                  <li className="nav-item">
                    <Link href="/profile/dashboard">
                      <a className="nav-link startTab " aria-current="page">
                        <i className="bi bi-person-circle ml-1"></i>
                        {userName.includes('null') ? 'کاربر' : userName}
                        {/* علیرضا بهرام زادگان خوش آمدید */}
                      </a>
                    </Link>
                  </li>
                  <li className="nav-item mr-3">
                    <button
                      onClick={exitClickHandler}
                      className="nav-link startTab "
                      aria-current="page"
                    >
                      <i className="bi bi-door-open-fill"></i> خروج
                    </button>
                  </li>
                </>
              ) :

               (
                  <>
                    <li className="flex items-center text-[#1b1b1b] sm:px-1 xl:px-3 rounded-xl cursor-pointer hover:bg-[#f43f5e] hover:text-[#ffffff]" style={{cursor:'pointer'}}>
                      <Link href="/login">
                        <a className="nav-link startTab flex items-center" aria-current="page">
                          <i className="bi bi-box-arrow-in-left ml-2 xl:text-[18px]"></i>
                          <p className=''>ورود</p>
                        </a>
                      </Link>
                    </li>
                    <li className="flex items-center text-[#1b1b1b] sm:px-1 xl:px-3 rounded-xl cursor-pointer hover:bg-[#f43f5e] hover:text-[#ffffff]" style={{cursor:'pointer'}}>
                      <Link href="/register">
                        <a className="nav-link startTab flex items-center" aria-current="page">
                          <i className="bi bi-person-plus ml-2 xl:text-[18px]"></i>
                          <p className=''>ثبت نام</p>
                        </a>
                      </Link>
                    </li>
                  </>
                )
            }
          </ul>
        </div>
        <div>
 
        </div>
        <div>

        </div>
      </div>
    </div>
  )
}

export default Navbar

