import React from 'react'
import Image from 'next/image'

import pic1 from '/public/assets/img/logos/b-1.jpg'
import pic2 from '/public/assets/img/logos/4.png'
import pic3 from '/public/assets/img/logos/b-4.jpg'
import pic4 from '/public/assets/img/logos/3.png'
import pic5 from '/public/assets/img/logos/4.png'

const TrustMehrpol = () => {
  return (
    <div>
      <div className='text-center bg-[#f3f4f6] w-[90%] py-10 mt-[40px] mx-auto'>
      <div className='flex justify-center items-center px-[100px] mb-[40px] mt-[40px]'>
        <h4 className='text-[22px] font-semibold'>
          اینها به مهرپل اعتماد دارند
        </h4>
      </div>
      <div className='flex justify-around '>
        <Image src={pic1} alt='logo' width='200' height='200'/>
        <Image src={pic2} alt='logo' width='200' height='200'/>
        <Image src={pic3} alt='logo' width='200' height='200'/>
        <Image src={pic4} alt='logo' width='200' height='200'/>
        <Image src={pic5} alt='logo' width='200' height='200'/>
      </div>
    </div>
    </div>
  )
}

export default TrustMehrpol
