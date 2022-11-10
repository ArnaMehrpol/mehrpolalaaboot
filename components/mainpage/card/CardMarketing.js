import Image from 'next/image'
import React from 'react'

import pic1 from '/public/assets/img/logos/b-1.jpg'

const CardMarketing = () => {
  return (
    <div className='bg-[#ffffff] max-w-[500px] min-w-[430px] rounded-lg'>
      <div className='flex justify-between pt-3 pb-6 px-4 items-center shadow-md'>
        <div className='p-1'>
          <h6>فروشگاه شیک نو</h6>
          <p>کشاورزی-گیاهان دارویی</p>
        </div>
        <div className='flex justify-center p-1 items-center border-2 border-dashed rounded-[50%] w-auto -auto' >
          <Image className='rounded-[50%] ' src={pic1} alt='logo' width='80' height='80'/>
        </div>
      </div>

    </div>
  )
}

export default CardMarketing
