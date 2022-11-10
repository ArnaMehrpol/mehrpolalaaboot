import React, { useState } from 'react'

import CardProduct from './cards/products/CardProduct'
import CardMarketing from './cards/marketing/CardMarketing'

import styleFavorites from './Favorites.module.css'

// import productPNG1 from '../../public/assets/img/products/15.png'

const initProductDetail=[
  {
    id:1,
    name: 'ادوات کشاورزی ',
    productVeiw: '۲۴',
    productLike: '۱۵',
    price:'۲۵۴۴۰۱۲ تومان',
    productOff: '۳۵۶۸۱۴۵ تومان',
    imgUrt: '/public/assets/img/products/15.png'
  },
  {
    id:2,
    name: 'ادوات کشاورزی گاوآهن',
    productVeiw: '۴۷',
    productLike: '۴۰',
    price:'۱۲۸۵۰۳۴۲ تومان',
    productOff: '۱۳۵۵۰۳۴۲ تومان',
    imgUrt:'/public/assets/img/products/15.png'
  },
  {
    id:3,
    name: 'چمن زن کولی',
    productVeiw: '۱۹',
    productLike: '۱۴',
    price:'۵۴۳۴۵۰۰ تومان',
    productOff: '۶۴۳۴۵۰۰ تومان',
    imgUrt:'/public/assets/img/products/15.png'
  },
  {
    id:4,
    name: 'مخزن سم پاش چرخ دار',
    productVeiw: '۶۵',
    productLike: '۵۰',
    price:'۸۵۴۰۵۰۰ تومان',
    productOff: '۹۳۴۰۵۰۰ تومان',
    imgUrt:'/public/assets/img/products/15.png'
  },
  {
    id:5,
    name: 'مخزن سم پاش بدون چرخ',
    productVeiw: '۲۵',
    productLike: '۲۳',
    price:'۷۴۴۷۳۴۵ تومان',
    productOff: '۹۵۴۰۵۰۰ تومان',
    imgUrt:'/public/assets/img/products/15.png'
  },
  {
    id:6,
    name: 'سم پاش کولی',
    productVeiw: '۲۴',
    productLike: '۱۰',
    price:'۶۵۴۴۳۹۵ تومان',
    productOff: '۷۰۴۴۳۹۵ تومان',
    imgUrt:'/public/assets/img/products/15.png'
  },
  {
    id:7,
    name: 'موتور سم پاش',
    productVeiw: '۳۹',
    productLike: '۲۵',
    price:'۱۴۵۴۴۵۱۸ تومان',
    productOff: '۱۵۲۴۴۵۱۸ تومان',
    imgUrt:'/public/assets/img/products/15.png'
  },
]

const Favorites = () => {

  const [products, setProducts] = useState(initProductDetail);
  const [showProduct, setShowProduct] = useState(true);
  const [showWorking, setShowWorking] = useState(false);


  console.log({products})

  return (
    <>
      <div id={styleFavorites.gh_mainbar}>
        <div className={styleFavorites.gh_mainbarTitr}>
          <h3>علاقه مندی ها</h3>
          <h6>محصولات و کسب و کارهای مورد علاقه در این قسمت نمایش داده می شود</h6>
        </div>
        <div className={styleFavorites.gh_mobile}>
          <div className={styleFavorites.gh_container}>
            <div className={styleFavorites.gh_accordions}>
              <div className={styleFavorites.gh_accordion}>
                <input className={styleFavorites.gh_inputCardsQuestion} type='checkbox' id='theTitrQAA'/>
                <label className={styleFavorites.gh_accLabel} htmlFor='theTitrQAA'>پرسش و پاسخ</label>
                <div className={styleFavorites.gh_accContent}>
                <div>
                {
                  showProduct ? products.map(product =>
                    <CardProduct key={product.id} product={product} />
                  ) :
                  showWorking ?
                  <CardMarketing/> : ''
                  
                }
                </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styleFavorites.gh_container}>
            <div className={styleFavorites.gh_accordions}>
              <div className={styleFavorites.gh_accordion}>
                <input className={styleFavorites.gh_inputCardsQuestion} type='checkbox' id='theTitrProduct'/>
                <label className={styleFavorites.gh_accLabel} htmlFor='theTitrProduct'>محصولات</label>
                <div className={styleFavorites.gh_accContent}>
                  <div>
                    <CardMarketing/>
                    <CardMarketing/>
                    <CardMarketing/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styleFavorites.gh_Computer}>
          <div>
            <nav id={styleFavorites.gh_tabs}>
                <ul className={styleFavorites.gh_tabs}>
                  <li style={{backgroundColor: !showProduct ? '#a0c4f6' : '#d6e6ff', zIndex: !showProduct ? 0 : 2,
                   }} onClick={()=>{setShowProduct(true)
                                    setShowWorking(false)}} className={styleFavorites.tab}>محصولات</li>
                  <li style={{backgroundColor: !showWorking ? '#a0c4f6' : '#d6e6ff' }} 
                      onClick={()=>{setShowProduct(false)
                      setShowWorking(true)}} className={styleFavorites.tab}>کسب و کار</li>
                </ul>
            </nav>
          </div> 
          <div className={styleFavorites.gh_mainContent}
                          style={{backgroundColor: '#d6e6ff' }}>
            {
              showProduct ? products.map(product =>
                <CardProduct key={product.id} product={product} />
              ) :
              showWorking ?
              <div className='flex'>
                <CardMarketing/>
                <CardMarketing/>
                <CardMarketing/> 
              </div>: ''
            }
          </div> 
        </div>
      </div>
    </>
  )
}

export default Favorites


