import Image from 'next/image'
import React from 'react'

import pic1 from '/public/assets/img/products/cycle.jpg'
import shape from '/public/assets/img/banners/Asset.svg'
import { shorten } from '../../tools/functionsHelpers'
import { fixNumbers } from '../../tools/ChangeLanguage'
import { numberWithCommas } from '../../tools/thousandsSeparator'

const CardProduct = ({data}) => {
  const {discount, name, price, priceR} = data
  let priceStr =  numberWithCommas(price)+''
  return (
    <div className='mr-4 w-[200px] bg-[#ffffff] rounded-[20px] pb-[10px] cursor-pointer mt-2 mb-2 shadow-slate-500 hover:shadow-md'>
      <div className='flex relative mb-4'>
      {
        discount?.percent ?
        <>
        <Image className=' reative rounded-tr-[20px]'src={shape} alt='shape' width='50' height='50'/>
        <p className='relative text-[#ffffff] left-[40px] top-[10px]'>٪{fixNumbers(discount?.percent+"")}</p>
        {/* <span className='flex justify-center items-center rounded-[50%] reative w-[50px] h-[50px] p-5 bg-[#f43f5e] text-[#ffffff]' >۲۰٪</span> */}
        </>
        : <div className=' reative rounded-tr-[20px] w-[50px] h-[50px]'></div>
      }
      </div>
      <div>
        <Image src={pic1} alt={'pic1'} width='100' height='100'/>
      </div>
      <div className='px-4'>
        <p className='text-[#4d4d4d] mt-2 text-[12px]'>{shorten(name)}</p>
        {
          discount?.price ?
          <p className='line-through text-[#979797] text-[14px]'>{`${fixNumbers(priceStr)} تومان`}</p>:
          <div className='h-[20px]'></div>
        }
        <p className=''>{`${fixNumbers(numberWithCommas(discount?.price ? price - discount.price : price)+'')} تومان`}</p>
      </div>
    </div>
  )
}

export default CardProduct
