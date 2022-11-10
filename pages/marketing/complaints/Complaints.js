import React, { useState } from 'react'

import style from './Complaints.module.css'
import FollowUp from './components/FollowUp';
import Receipt from './components/Receipt';
import Record from './components/Record';

const Complaints = () => {

  const [showQuestionAndAnswer, setShowQuestionAndAnswer] = useState(true);
  const [showProduct, setShowProduct] = useState(false);
  const [showWorking, setShowWorking] = useState(false);

  return (
    <>
      <div id={style.gh_mainbar}>
        <div className={style.gh_mainbarTitr}>
          <h3>شکایات</h3>
          <h6>در این بخش ثبت شکایات جدید انجام می شود .</h6>
        </div>
        <div className={style.gh_mobile}>
          <div className={style.gh_container}>
            <div className={style.gh_accordions}>
              <div className={style.gh_accordion}>
                <input className={style.gh_inputCardsQuestion} type='checkbox' id='theTitrQAA'/>
                <label className={style.gh_accLabel} htmlFor='theTitrQAA'>پرسش و پاسخ</label>
                <div className={style.gh_accContent}>
                <div>
                  <Record/>
                </div>
                </div>
              </div>
            </div>
          </div>
          <div className={style.gh_container}>
            <div className={style.gh_accordions}>
              <div className={style.gh_accordion}>
                <input className={style.gh_inputCardsQuestion} type='checkbox' id='theTitrProduct'/>
                <label className={style.gh_accLabel} htmlFor='theTitrProduct'>محصولات</label>
                <div className={style.gh_accContent}>
                  <div>
                    <FollowUp/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={style.gh_container}>
            <div className={style.gh_accordions}>
              <div className={style.gh_accordion}>
                <input className={style.gh_inputCardsQuestion} type='checkbox' id='theTitrMarketing'/>
                <label className={style.gh_accLabel} htmlFor='theTitrMarketing'>کسب و کار</label>
                <div className={style.gh_accContent}>
                  <div>
                    <Receipt/>
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
                  <li 
                    style={{backgroundColor: !showQuestionAndAnswer ? '#a0c4f6' : '#d6e6ff', zIndex: !showQuestionAndAnswer ? 0 : 2 }} 
                    className={style.gh_tab}
                    onClick={()=>{setShowProduct(false)
                                    setShowWorking(false)
                                    setShowQuestionAndAnswer(true)
                                  }} 
                    >
                      ثبت شکایات جدید
                  </li>
                  <li 
                    style={{backgroundColor: !showProduct ? '#a0c4f6' : '#d6e6ff', zIndex: !showProduct ? 0 : 2 }} 
                    className={style.gh_tab}
                    onClick={()=>{setShowProduct(true)
                                    setShowWorking(false)
                                    setShowQuestionAndAnswer(false)
                                  }} 
                    >
                      پیگیری شکایات
                  </li>
                  <li 
                    style={{backgroundColor: !showWorking ? '#a0c4f6' : '#d6e6ff' }} 
                    className={style.gh_tab}
                    onClick={()=>{setShowProduct(false)
                                    setShowWorking(true)
                                    setShowQuestionAndAnswer(false)
                                  }} 
                    >
                    شکایات دریافتی
                  </li>
                  
                </ul>
            </nav>
          </div> 
          <div className={style.gh_mainContent}
                          style={{backgroundColor: '#d6e6ff' }}>
            {
              showQuestionAndAnswer ?
                <div>
                  <Record/>
                </div>
                :
              showProduct ?
                <div>
                  <FollowUp/>
                </div> :
              showWorking ?
                <div>
                  <Receipt/>
                </div> : ''
            }
            
          </div>         
        </div>
      </div>
    </>
  )
}

export default Complaints;
