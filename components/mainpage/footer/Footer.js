import Image from 'next/image'
import React from 'react'

import picEtemad from '/public/assets/img/certificates/2.png'
import picResaneh from '/public/assets/img/certificates/3.png'
import picSenf from '/public/assets/img/certificates/4.png'

const Footer = () => {
  return (
    <div className='bg-[#f3f4f6] w-full px-[80px] py-14 mt-[20px] mx-auto'>
      <div className='mt-[40px] h-[250px] translate-y-5 flex flex-col justify-center items-center bg-[#4c5564]'>
        <div className='relative w-[90%] flex justify-evenly bg-[#202938] -top-[60px] rounded-md pb-3 pt-4'>
                    
          <div className=''>
            <span className='flex justify-start'>
              <svg className='text-light me-2' width='20' height='20' viewBox='0 0 37 34' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <circle cx='10' cy='24' r='10' fill='currentColor'></circle>
                  <circle cx='30' cy='13' r='7' fill='currentColor' fill-opacity='0.4'></circle>
                  <circle cx='15' cy='4' r='4' fill='currentColor' fill-opacity='0.7'></circle>
              </svg>
              <p className='text-[#ffffff] mr-2 top-2' >با مهرپل</p>
            </span>
            <div>
              <ul className='text-[#6c727e] text-[14px] mr-12'>
                <li className='list-disc'>درباره ما</li>
                <li className='list-disc'>تماس با ما</li>
                <li className='list-disc'>قوانین و مقررارت</li>
              </ul>
            </div>
          </div>
          <div className=''>
            <div className='flex'>
              <svg className='text-light me-2' width='20' height='20' viewBox='0 0 37 34' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <circle cx='10' cy='24' r='10' fill='currentColor'></circle>
                  <circle cx='30' cy='13' r='7' fill='currentColor' fill-opacity='0.4'></circle>
                  <circle cx='15' cy='4' r='4' fill='currentColor' fill-opacity='0.7'></circle>
              </svg>
              <p className='text-[#ffffff] mr-2 top-2' >خدمات مشتریان</p>
            </div>
            <div>
              <ul className='text-[#6c727e] text-[14px] mr-12'>
                <li className='list-disc'>پرسش های متداول</li>
                <li className='list-disc'>راهنمای استفاده از سایت</li>
                <li className='list-disc'>حریم خصوصی</li>
                <li className='list-disc'>رزرو تبلیغات</li>
                <li className='list-disc'>پشتیبانی</li>
              </ul>
            </div>
          </div>
          <div className=''>
            <div className='flex'>
              <svg className='text-light me-2' width='20' height='20' viewBox='0 0 37 34' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <circle cx='10' cy='24' r='10' fill='currentColor'></circle>
                  <circle cx='30' cy='13' r='7' fill='currentColor' fill-opacity='0.4'></circle>
                  <circle cx='15' cy='4' r='4' fill='currentColor' fill-opacity='0.7'></circle>
              </svg>
              <p className='text-[#ffffff] mr-2 top-2' >عضویت در مهرپل</p>
            </div>
            <div>
              <ul className='text-[#6c727e] text-[14px] mr-12'>
                <li className='list-disc'>کسب و کارها</li>
                <li className='list-disc'>نیروهای متخصص</li>
                <li className='list-disc'>دپارتمان های خدماتی</li>
                <li className='list-disc'>خریدار</li>
              </ul>
            </div>
          </div>
          <div className=''>
            <div className='flex'>
              <svg className='text-light me-2' width='20' height='20' viewBox='0 0 37 34' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <circle cx='10' cy='24' r='10' fill='currentColor'></circle>
                  <circle cx='30' cy='13' r='7' fill='currentColor' fill-opacity='0.4'></circle>
                  <circle cx='15' cy='4' r='4' fill='currentColor' fill-opacity='0.7'></circle>
              </svg>
              <p className='text-[#ffffff] mr-2 top-2' >اهنمای خرید</p>
            </div>
            <div>
              <ul className='text-[#6c727e] text-[14px] mr-12'>
              <li className='list-disc'>نحوه ثبت سفارش</li>
              <li className='list-disc'>رویه ارسال سفارش</li>
              <li className='list-disc'>شیوه های پرداخت</li>
              </ul>
            </div>
          </div>
          <div className=''>
            <div className='flex'>
              <svg className='text-light me-2' width='20' height='20' viewBox='0 0 37 34' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <circle cx='10' cy='24' r='10' fill='currentColor'></circle>
                  <circle cx='30' cy='13' r='7' fill='currentColor' fill-opacity='0.4'></circle>
                  <circle cx='15' cy='4' r='4' fill='currentColor' fill-opacity='0.7'></circle>
              </svg>
              <p className='text-[#ffffff] mr-2 top-2' >همراه ما باشید</p>
            </div>
            <div>
              <p className='text-[#6c727e] max-w-[320px] text-[14px]'>کاربر محترم جهت عضویت در خبرنامه الکترونیک سایت، ایمیل خود را وارد نمائید.</p>
              <div className='flex items-center bg-[#ffffff] max-w-[320] px-2 py-1 rounded-md'>
                <i className="bi bi-envelope text-[#cfcfd0] text-[30px] top-2 ml-3"></i>
                <input className='text-[14px]' type='text' placeholder='آدرس پست الکترونیک'/>
                <div className='bg-[#3b82f6]  text-[#ffffff] rounded-lg hover:bg-[#6892d6] px-2'>
                  <button className='py-2 px-2'>عضویت</button>
                  <i className="bi bi-chevron-left"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='flex justify-between items-center w-[90%]'>
          <div className='flex flex-col justify-between items-center -translate-y-6'>
            <div className='flex justify-between items-end mb-2' >
              <i className="bi bi-telegram p-2 text-[26px] ml-2 rounded-[50%] flex items-center justify-center bg-[#ffffff]"></i>
              <i className="bi bi-instagram p-2 text-[26px] ml-2 rounded-[50%] flex items-center justify-center bg-[#ffffff]"></i>
              <i className="bi bi-linkedin p-2 text-[26px] ml-2 rounded-[50%] flex items-center justify-center bg-[#ffffff]"></i>
              <i className="bi bi-whatsapp p-2 text-[26px] ml-2 rounded-[50%] flex items-center justify-center bg-[#ffffff]"></i>
            </div>
            <div>
              <p className='text-[#c9c9c9] text-[12px]'>کلیه حقوق این سایت متعلق به مهرپل می باشد</p>
            </div>
          </div>
          <div className='flex -translate-y-10'>
            <div className='bg-[#ffffff] ml-2 rounded-md'>
              <Image src={picSenf} alt='certi' width='80px' height='80px'/>
            </div>
            <div className='bg-[#ffffff] ml-2 rounded-md'>
              <Image src={picResaneh} alt='certi' width='80px' height='80px'/>
            </div>
            <div className='bg-[#ffffff] rounded-md'>
              <Image src={picEtemad} alt='certi' width='80px' height='80px'/>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Footer
