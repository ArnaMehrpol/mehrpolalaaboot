import Image from 'next/image'
import React from 'react'

import pic1 from '/public/assets/img/products/cycle.jpg'
import shape from '/public/assets/img/banners/Asset.svg'

const CardProduct = (data) => {
  const {discount, name, price, priceR} = data
  console.log({data})
  console.log({discount})
  return (
    <div className='mr-4 w-[200px] bg-[#ffffff] rounded-[20px] pb-[10px] cursor-pointer mt-2 mb-2 shadow-slate-500 hover:shadow-md'>
      <div className='flex relative mb-4'>
        <Image className=' reative rounded-tr-[20px]'src={shape} alt='shape' width='50' height='50'/>
        <p className='relative text-[#ffffff] left-[40px] top-[10px]'>{discount}٪</p>
        {/* <span className='flex justify-center items-center rounded-[50%] reative w-[50px] h-[50px] p-5 bg-[#f43f5e] text-[#ffffff]' >۲۰٪</span> */}
      </div>
      <div>
        <Image src={pic1} alt={'pic1'} width='100' height='100'/>
      </div>
      <div className='px-4'>
        <p className='text-[#4d4d4d] mt-2 text-[12px]'>دوچرخه ثابت مخصوص استیل مدل ۴۷۵</p>
        <p className='line-through text-[#979797] text-[14px]'>{`${'۳۲۴۵۶۵۴'} تومان`}</p>
        <p className=''>{`${'۳۲۴۵۶۵۴'} تومان`}</p>
      </div>
    </div>
  )
}

export default CardProduct
