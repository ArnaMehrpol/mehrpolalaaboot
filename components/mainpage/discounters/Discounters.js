import Image from 'next/image'
import React from 'react'
import CardDiscount from './card/CardDiscount'

import bannerPopular from '/public/assets/img/banners/menu01-2-01.png'

const Discounters = () => {
  return (
    <div>
      <div className='text-center bg-[#f3f4f6] w-[90%] px-[90px] py-10 mt-[40px] mx-auto'>
        <div className='flex justify-between items-center mb-[30px] mt-[40px]'>
          <div className='flex justify-start'>
            <div>
              <svg className='text-light me-2' width='50' height='50' viewBox='0 0 37 34' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <circle className='text-[#f5857c]' cx='10' cy='24' r='10' fill='currentColor'></circle>
                  <circle className='text-[#f5857c]' cx='30' cy='13' r='7' fill='currentColor' fill-opacity='0.4'></circle>
                  <circle className='text-[#f5857c]' cx='15' cy='4' r='4' fill='currentColor' fill-opacity='0.7'></circle>
              </svg>
            </div>
            <div className='text-right  mr-3'>
              <h4 className='text-[16px]'>
                تخفیف دارها
              </h4>
              <p className='mt-3 text-[12px]'>
                محصولاتی که بیشترین تخفیف را دارند
              </p>
            </div>
          </div>
          <div className='bg-[#ce2424] text-[#ffffff] rounded-lg hover:bg-[#cc4848] px-2'>
            <button className='py-2 px-2'>مشاهده همه</button>
            <i className="bi bi-chevron-left"></i>
          </div>
        </div>
        <div className='flex justify-center'>
          <div className='flex rounded-md ml-4'>
            <Image className='rounded-tr-[20px] rounded-br-[20px]' src={bannerPopular} alt='banner' width='300' height='500' />
          </div>
          <div className='flex flex-wrap'>
              <CardDiscount/>
              <CardDiscount/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Discounters
