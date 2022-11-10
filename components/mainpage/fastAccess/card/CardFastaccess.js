import Image from 'next/image'
import React from 'react'

import picProduct from '/public/assets/img/products/cycle.jpg'

const CardFastaccess = () => {
  return (
    <div className='flex justify-start items-center pt-2 bg-[#ffffff] w-[300px] border-b-2 rounded-xl cursor-pointer hover:bg-[#7b86e7] hover:text-[#ffffff]'>
      <div className='p-2 m-1'>
        <Image className='rounded-[50%]' src={picProduct} alt='product' width='60' height='60'/>
      </div>
      <div>
        <div>
          <p className='font-semibold'>کشاورزی</p>
        </div>
        <div className='flex justify-start items-center'>
          <p className='text-center py-1 px-2 ml-3 rounded-xl text-[14px] bg-[#d7d7d7] hover:bg-[#a3abf1]'>۴K کالا</p>
          <p className='text-center py-1 px-2 rounded-xl text-[14px] bg-[#e1e1e1]'>۲۵۷ کسب و کار</p>
        </div>
      </div>
    </div>
  )
}

export default CardFastaccess
