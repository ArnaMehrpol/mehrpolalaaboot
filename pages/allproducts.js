import React, { useEffect, useState } from 'react'
import CardProduct from '../components/public/product/CardProduct'
import { axiosSetup } from '../components/utils/axiosSetup'

const allproducts = () => {
  
  const [resLoadProducts, setResLoadProducts] = useState([])
  const [catchLoadProducts, setCatchLoadProducts] = useState([])

  useEffect(()=>{
    const address = `/public/shop/products`
    const method = 'get'
    const header = {
    'Accept': "application/json",
  }
    axiosSetup(address, method, header, '', getResult, catchResult)
      function getResult (data){
        setResLoadProducts(data)
      }
      function catchResult (data){
        setCatchLoadProducts(data)
      }
  },[])

  console.log({resLoadProducts})
  console.log({catchLoadProducts})
  return (
    <div className='w-100'>
      <div className='w-[90%] flex justify-between items-center flex-wrap mx-auto'>
       { 
          !resLoadProducts ? <p>در حال بارگذاری محصولات</p> : catchLoadProducts.name === 'AxiosError' ?
          <p>مشکلی در بارگذاری محصولات پیش آمده</p> : resLoadProducts.status !== 200 ? '' :
          resLoadProducts.data.message !== 'success' ? '' : resLoadProducts.data.data.data.map(product =>
          <CardProduct key={product.id} productData={product}/>
          
          )
        }
      </div>
    </div>
  )
}

export default allproducts
