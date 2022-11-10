import Image from 'next/image'
import React from 'react'

import picBanner from '/public/assets/img/banners/banner.jpg'

const MeetProducers = () => {
  return (
    <div>
      <div className='text-center flex justify-center bg-[#f3f4f6] w-[90%] px-[90px] py-10 mt-[40px] mx-auto'>
      
      <div className='flex justify-centert py-[50px]'>
          <Image src={picBanner} alt='' width='1200' height='540'/>
      </div>
    </div>
    </div>
  )
}

export default MeetProducers
