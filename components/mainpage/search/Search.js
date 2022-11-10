import Image from 'next/image'
import React from 'react'

import svgCategory from '/public/assets/img/anime/Cube-1.4s-197px.svg'

const Search = () => {
  return (
    <div className='text-center bg-[#f3f4f6] w-[90%] py-10 mt-[120px] mx-auto'>
      <h1  className='text-[30px] mb-5'>خرید و فروش خود را با <span className='text-[#f43f5e]'>مهرپل</span> ساده کنید</h1>
      <div className='flex justify-center items-center bg-[#ffffff] w-fit px-3 py-2 border-2 rounded-[30px] mx-auto '>
        <input className='px-2 py-2 border-none outline-none  ml-[30px] max-w-[500px] w-[400px]'  type='text' placeholder='در بیستر از ۱ میلیون کالا و خدمات جستجو کنید ...'/>
        <Image className='border-none p-2 bg-[#f3f4f6] rounded-[50%] flex' src={svgCategory} alt='catSVG' width='35' height='35'/>
        <i class="bi bi-geo-alt border-none py-2 px-2 bg-[#f3f4f6] flex text-[18px] rounded-[50%] mx-2"></i>
        <div className=' flex items-center bg-[#6B7280] px-3 py-2 rounded-[30px] text-[#ffffff]'>
          <button className='ml-1'>جستجو</button>
          <i class="bi bi-arrow-left"></i>
        </div>
      </div>
      <div className='flex justify-center ml-[60px] items-center mt-3 text-[#a0a7b3] text-[12px]'>
        <p className='ml-2'>بیشترین جستجوها: </p>
        <p className='bg-[#e5e7eb] py-1 px-3 ml-4 rounded-2xl'>#کفش-ورزشی</p>
        <p className='bg-[#e5e7eb] py-1 px-3 ml-4 rounded-2xl'>#لنت-مزدا-۳</p>
        <p className='bg-[#e5e7eb] py-1 px-3 ml-4 rounded-2xl'>#نظافت-ساختما</p>
        <p className='bg-[#e5e7eb] py-1 px-3 ml-4 rounded-2xl'>#تابلو-چلنیوم</p>          
      </div>
        <div className='mt-[60px] mb-[120px]'>
          <h4 className='text-[#4b5463]'>ساده ترین راه برای سفارش کالا و خدمات</h4>
          <h6 className='text-[#747a88] mt-[20px]'>با بزرگترین سبد کالا و خدمات، قیمت گذاری شفاف و پشتیبانی دائمی،  کارایی بازار مهرپل را بهبود بخشید</h6>
        </div>
    </div>
  )
}

export default Search
