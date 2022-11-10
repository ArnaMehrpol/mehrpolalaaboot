import Image from 'next/image'
import React from 'react'
import CardProductPicture from './CardProductPicture'

import pic1 from '/public/assets/img/products/cycle.jpg'

const CardMostPopular = () => {
  return (
    <div className='grid grid-cols-3 grid-rows-2 flex-wrap px-2 py-4 w-[520px] h-[320px] bg-[#ffffff] rounded-md'>
      <CardProductPicture/>
      <CardProductPicture/>
      <CardProductPicture/>
      <CardProductPicture/>
      <CardProductPicture/>
      <CardProductPicture/>
    </div>
  )
}

export default CardMostPopular
