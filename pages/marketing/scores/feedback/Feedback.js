import React, { useState } from 'react'
import CardMarketing from './cardMarketing/CardMarketing';
import CardProduct from './cardProduct/card/CardProduct';
import PanelProduct from './cardProduct/PanelProduct';

import style from './Feedback.module.css'

const Feedback = () => {

  const [showProduct, setShowProduct] = useState(true);
  const [showMarketing, setShowMarketing] = useState(false);

  return (
    <div id={style.gh_mainbar}>
        <div className={style.gh_mainbarTitr}>
          <h3>امتیازها</h3>
          <h6>در این بخش امتیاز محصولات و کسب و کار شما نمایش داده می شود</h6>
        </div>
        <div className={style.gh_mobile}>
          <div className={style.gh_container}>
            <div className={style.gh_accordions}
                  onClick={()=>{setShowProduct(true)
                    setShowMarketing(false)}}>
              <div className={style.gh_accordion}>
                <input className={style.gh_inputCardsQuestion} type='checkbox' id='theTitrQAA'/>
                  <label className={style.gh_accLabel} htmlFor='theTitrQAA'>محصولات</label>
                  <div className={style.gh_accContent}>
                    <div>
                      <PanelProduct/>
                    </div>
                  </div>
              </div>
            </div>
          </div>
          <div className={style.gh_container}>
            <div className={style.gh_accordions}
                  onClick={()=>{setShowProduct(false)
                    setShowMarketing(true)}}>
              <div className={style.gh_accordion}>
                <input className={style.gh_inputCardsQuestion} type='checkbox' id='theTitrProduct'/>
                <label className={style.gh_accLabel} htmlFor='theTitrProduct'>کسب و کار</label>
                <div className={style.gh_accContent}>
                  <div>
                    <CardMarketing/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={style.gh_Computer}>
          <div>
            <nav id={style.gh_tabs}>
                <ul className={style.gh_tabs}>
                  <li style={{backgroundColor: !showProduct ? '#a0c4f6' : '#d6e6ff', zIndex: !showProduct ? 0 : 2,
                   }} onClick={()=>{setShowProduct(true)
                                    setShowMarketing(false)}} className={style.gh_tab}>محصولات</li>
                  <li style={{backgroundColor: !showMarketing ? '#a0c4f6' : '#d6e6ff' }} 
                      onClick={()=>{setShowProduct(false)
                          setShowMarketing(true)}} className={style.gh_tab}>کسب و کار</li>
                </ul>
            </nav>
          </div> 
          <div className={style.gh_mainContent}
                          style={{backgroundColor: '#d6e6ff' }}>
            {
              showProduct ?
                <PanelProduct/>
               :
               showMarketing ?
                <CardMarketing/> : ''
            }
          </div> 
        </div>
        <div className='flex justify-between mr-10 mt-10 w-9/12 text-[13px]'>
          <p>روش امتیازدهی:</p>
          <div className='text-center'>
            <p className='text-red-600'>{`امتیاز ${'۰'} تا ${'۵۰'} ضعیف`}</p>
            <div hidden={!showMarketing} className='mt-1'>
              <i className="bi bi-star-fill text-gray-300" ></i>
              <i className="bi bi-star-fill text-gray-300" ></i>
              <i className="bi bi-star-fill text-gray-300" ></i>
              <i className="bi bi-star-fill text-yellow-400"></i>
              <i className="bi bi-star-fill text-yellow-400"></i>
          </div>
          </div>
          <div  className='text-center'>
            <p className='text-[#111111]'>{`امتیاز ${'۵۱'} تا ${'۸۰'} ضعیف`}</p>
            <div hidden={!showMarketing} className='mt-1'>
              <i className="bi bi-star-fill text-gray-300" ></i>
              <i className="bi bi-star-fill text-gray-300" ></i>
              <i className="bi bi-star-fill text-yellow-400" ></i>
              <i className="bi bi-star-fill text-yellow-400"></i>
              <i className="bi bi-star-fill text-yellow-400"></i>
          </div>
          </div>
          <div className='text-center'>
            <p className='text-blue-600'>{`امتیاز ${'۸۱'} تا ${'۹۰'} ضعیف`}</p>
            <div hidden={!showMarketing} className='mt-1'>
              <i className="bi bi-star-fill text-gray-300" ></i>
              <i className="bi bi-star-fill text-yellow-400" ></i>
              <i className="bi bi-star-fill text-yellow-400" ></i>
              <i className="bi bi-star-fill text-yellow-400"></i>
              <i className="bi bi-star-fill text-yellow-400"></i>
          </div>
          </div>
          <div className='text-center'>
            <p className='text-green-800'>{`امتیاز ${'۹۱'} تا ${'۱۰۰'} ضعیف`}</p>
            <div hidden={!showMarketing} className='mt-1'>
              <i className="bi bi-star-fill text-yellow-400" ></i>
              <i className="bi bi-star-fill text-yellow-400" ></i>
              <i className="bi bi-star-fill text-yellow-400" ></i>
              <i className="bi bi-star-fill text-yellow-400"></i>
              <i className="bi bi-star-fill text-yellow-400"></i>
          </div>
          </div>
        </div>
      </div>
  )
}

export default Feedback
