import Image from 'next/image'
import React from 'react'

import pic1 from '/public/assets/img/products/cycle.jpg'

const CardProductPicture = () => {
  return (
    <div className='rounded-md shadow-md mx-3 my-2 w-[110px] h-[110px] cursor-pointer'>
      <div className='bg-[#ffffff] rounded-xl'>
        <Image className='p-3' src={pic1} alt='picProduct' width='100' height='100'/>
      </div>
    </div>
  )
}

export default CardProductPicture
