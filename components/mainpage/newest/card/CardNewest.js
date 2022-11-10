import React from 'react'
import CardMarketing from '../../card/CardMarketing'
import CardProduct from '../../card/CardProduct'

const CardNewest = () => {
  return (
    <div>
      <div className='flex ml-3 mb-8 flex-col justify-center items-center bg-[#ffffff] max-w-[500px] min-w-[360px] shadow-md rounded-lg'>
        <div className='mb-3'>
          <CardMarketing/>
        </div>
        <div className='flex justify-center items-center'>
          <CardProduct/>
          <div className='border-l-[2px] h-[300px]'></div>
          <CardProduct/>
        </div>
      </div>
    </div>
  )
}

export default CardNewest
