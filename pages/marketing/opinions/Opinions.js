import React, { useState } from 'react'
import CardMarketing from './cards/cardMarketing/CardMarketing';
import CardProduct from './cards/cardProduct/CardProduct';
import MarketingComments from './cards/marketing/MarketingComments';
import ProductComments from './cards/products/ProductComments';
import Answer from './cards/questionAndAnswer/Answer';
import Question from './cards/questionAndAnswer/Question';

import styleOpinions from './Opinions.module.css'

const Opinions = () => {
  const [showQuestionAndAnswer, setShowQuestionAndAnswer] = useState(true);
  const [showProduct, setShowProduct] = useState(false);
  const [showWorking, setShowWorking] = useState(false);

  return (
    <>
      <div id={styleOpinions.gh_mainbar}>
        <div className={styleOpinions.gh_mainbarTitr}>
          <h3>نظرات</h3>
          <h6>نظرات و پرسش های من درباره محصولات و کسب و کارهای دیگرنمایش داده می شود</h6>
        </div>
        <div className={styleOpinions.gh_mobile}>
          <div className='bg-[#d6e6ff] rounded-xl'>
          <div className={styleOpinions.gh_container}>
            <div className={styleOpinions.gh_accordions}>
              <div className={styleOpinions.gh_accordion}>
                <input className={styleOpinions.gh_inputCardsQuestion} type='checkbox' id='theTitrQAA'/>
                <label className={styleOpinions.gh_accLabel} htmlFor='theTitrQAA'>
                  <CardProduct/>
                </label>
                <div className={styleOpinions.gh_accContent}>
                <div>
                  <Question />
                  <Answer />
                  <Question/>
                  <Answer />
                </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styleOpinions.gh_container}>
            <div className={styleOpinions.gh_accordions}>
              <div className={styleOpinions.gh_accordion}>
                <input className={styleOpinions.gh_inputCardsQuestion} type='checkbox' id='theTitrProduct'/>
                <label className={styleOpinions.gh_accLabel} htmlFor='theTitrProduct'>
                  <CardProduct/>
                </label>
                <div className={styleOpinions.gh_accContent}>
                  <div>                    
                    <ProductComments/>
                    <ProductComments/>
                    <ProductComments/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styleOpinions.gh_container}>
            <div className={styleOpinions.gh_accordions}>
              <div className={styleOpinions.gh_accordion}>
                <input className={styleOpinions.gh_inputCardsQuestion} type='checkbox' id='theTitrMarketing'/>
                <label className={styleOpinions.gh_accLabel} htmlFor='theTitrMarketing'>
                  <CardMarketing/>
                  </label>
                <div className={styleOpinions.gh_accContent}>
                  <div>
                    <MarketingComments/>
                    <MarketingComments/>
                    <MarketingComments/>
                    <MarketingComments/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        <div className={styleOpinions.gh_Computer}>
          <div>
            
            <nav id={styleOpinions.gh_tabs}>
                <ul className={styleOpinions.gh_tabs}>
                  <li 
                    style={{backgroundColor: !showQuestionAndAnswer ? '#a0c4f6' : '#d6e6ff', zIndex: !showQuestionAndAnswer ? 0 : 2 }} 
                    className={styleOpinions.gh_tab}
                    onClick={()=>{setShowProduct(false)
                                    setShowWorking(false)
                                    setShowQuestionAndAnswer(true)
                                  }} 
                    >
                      پرسش و پاسخ
                  </li>
                  <li 
                    style={{backgroundColor: !showProduct ? '#a0c4f6' : '#d6e6ff', zIndex: !showProduct ? 0 : 2 }} 
                    className={styleOpinions.gh_tab}
                    onClick={()=>{setShowProduct(true)
                                    setShowWorking(false)
                                    setShowQuestionAndAnswer(false)
                                  }} 
                    >
                      محصولات
                  </li>
                  <li 
                    style={{backgroundColor: !showWorking ? '#a0c4f6' : '#d6e6ff' }} 
                    className={styleOpinions.gh_tab}
                    onClick={()=>{setShowProduct(false)
                                    setShowWorking(true)
                                    setShowQuestionAndAnswer(false)
                                  }} 
                    >
                      کسب و کار
                  </li>
                  
                </ul>
            </nav>
          </div> 
          <div className={styleOpinions.gh_mainContent}
                          style={{backgroundColor: '#d6e6ff' }}>
            {
              showQuestionAndAnswer ?
                <div>
                  <div className={styleOpinions.gh_container}>
                    <div className={styleOpinions.gh_accordions}>
                      <div className={styleOpinions.gh_accordion}>
                        <input className={styleOpinions.gh_inputCardsQuestion} type='checkbox' id='theTitrQAA1'/>
                        <label className={styleOpinions.gh_accLabel} htmlFor='theTitrQAA1'>
                          <CardProduct/>
                          </label>
                        <div className={styleOpinions.gh_accContent}>
                        <div>
                          <Question />
                          <Answer />
                          <Question/>
                          <Answer />
                        </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styleOpinions.gh_container}>
                    <div className={styleOpinions.gh_accordions}>
                      <div className={styleOpinions.gh_accordion}>
                        <input className={styleOpinions.gh_inputCardsQuestion} type='checkbox' id='theTitrQAA23'/>
                        <label className={styleOpinions.gh_accLabel} htmlFor='theTitrQAA23'>
                          <CardProduct/>
                          </label>
                        <div className={styleOpinions.gh_accContent}>
                        <div>
                          <Question />
                          <Answer />
                          <Question/>
                          <Answer />
                        </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                :
              showProduct ?
                <div>
                  <div className={styleOpinions.gh_container}>
                    <div className={styleOpinions.gh_accordions}>
                      <div className={styleOpinions.gh_accordion}>
                        <input className={styleOpinions.gh_inputCardsQuestion} type='checkbox' id='theTitrQAA1'/>
                        <label className={styleOpinions.gh_accLabel} htmlFor='theTitrQAA1'>
                          <CardProduct/>
                          </label>
                        <div className={styleOpinions.gh_accContent}>
                          <div>
                            <ProductComments/>
                            <ProductComments/>
                            <ProductComments/>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styleOpinions.gh_container}>
                    <div className={styleOpinions.gh_accordions}>
                      <div className={styleOpinions.gh_accordion}>
                        <input className={styleOpinions.gh_inputCardsQuestion} type='checkbox' id='theTitrQAA2'/>
                        <label className={styleOpinions.gh_accLabel} htmlFor='theTitrQAA2'>
                          <CardProduct/>
                          </label>
                        <div className={styleOpinions.gh_accContent}>
                          <div>
                            <ProductComments/>
                            <ProductComments/>
                            <ProductComments/>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  
                </div> :
              showWorking ?
                <div>
                  <CardMarketing/>
                  <CardMarketing/>
                </div> : ''
            }
            
          </div>         
        </div>
      </div>
      <div id={styleOpinions.gh_mainbar}>
        <div className={styleOpinions.gh_mainbarTitr}>
          <h3>بازخوردها</h3>
          <h6>نظرات و پرسش های دیگران درباره محصولات و کسب و کار من نمایش داده می شود</h6>
        </div>
        <div className={styleOpinions.gh_mobile}>
          <div className='bg-[#d6e6ff] rounded-xl'>
          <div className={styleOpinions.gh_container}>
            <div className={styleOpinions.gh_accordions}>
              <div className={styleOpinions.gh_accordion}>
                <input className={styleOpinions.gh_inputCardsQuestion} type='checkbox' id='theTitrQAA'/>
                <label className={styleOpinions.gh_accLabel} htmlFor='theTitrQAA'>
                  <CardProduct/>
                </label>
                <div className={styleOpinions.gh_accContent}>
                <div>
                  <Question />
                  <Answer />
                  <Question/>
                  <Answer />
                </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styleOpinions.gh_container}>
            <div className={styleOpinions.gh_accordions}>
              <div className={styleOpinions.gh_accordion}>
                <input className={styleOpinions.gh_inputCardsQuestion} type='checkbox' id='theTitrProduct11'/>
                <label className={styleOpinions.gh_accLabel} htmlFor='theTitrProduct11'>
                  <CardProduct/>
                </label>
                <div className={styleOpinions.gh_accContent}>
                  <div>                    
                    <ProductComments/>
                    <ProductComments/>
                    <ProductComments/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styleOpinions.gh_container}>
            <div className={styleOpinions.gh_accordions}>
              <div className={styleOpinions.gh_accordion}>
                <input className={styleOpinions.gh_inputCardsQuestion} type='checkbox' id='theTitrMarketing11'/>
                <label className={styleOpinions.gh_accLabel} htmlFor='theTitrMarketing11'>
                  </label>
                <div className={styleOpinions.gh_accContent}>
                  <div>
                    <CardMarketing/>
                    <CardMarketing/>
                                        
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        <div className={styleOpinions.gh_Computer}>
          <div>
            
            <nav id={styleOpinions.gh_tabs}>
                <ul className={styleOpinions.gh_tabs}>
                  <li 
                    style={{backgroundColor: !showQuestionAndAnswer ? '#a0c4f6' : '#d6e6ff', zIndex: !showQuestionAndAnswer ? 0 : 2 }} 
                    className={styleOpinions.gh_tab}
                    onClick={()=>{setShowProduct(false)
                                    setShowWorking(false)
                                    setShowQuestionAndAnswer(true)
                                  }} 
                    >
                      پرسش و پاسخ
                  </li>
                  <li 
                    style={{backgroundColor: !showProduct ? '#a0c4f6' : '#d6e6ff', zIndex: !showProduct ? 0 : 2 }} 
                    className={styleOpinions.gh_tab}
                    onClick={()=>{setShowProduct(true)
                                    setShowWorking(false)
                                    setShowQuestionAndAnswer(false)
                                  }} 
                    >
                      محصولات
                  </li>
                  <li 
                    style={{backgroundColor: !showWorking ? '#a0c4f6' : '#d6e6ff' }} 
                    className={styleOpinions.gh_tab}
                    onClick={()=>{setShowProduct(false)
                                    setShowWorking(true)
                                    setShowQuestionAndAnswer(false)
                                  }} 
                    >
                      کسب و کار
                  </li>
                  
                </ul>
            </nav>
          </div> 
          <div className={styleOpinions.gh_mainContent}
                          style={{backgroundColor: '#d6e6ff' }}>
            {
              showQuestionAndAnswer ?
                <div>
                  <div className={styleOpinions.gh_container}>
                    <div className={styleOpinions.gh_accordions}>
                      <div className={styleOpinions.gh_accordion}>
                        <input className={styleOpinions.gh_inputCardsQuestion} type='checkbox' id='theTitrQAA123'/>
                        <label className={styleOpinions.gh_accLabel} htmlFor='theTitrQAA1323'>
                          <CardProduct/>
                          </label>
                        <div className={styleOpinions.gh_accContent}>
                        <div>
                          <Question />
                          <Answer />
                          <Question/>
                          <Answer />
                        </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styleOpinions.gh_container}>
                    <div className={styleOpinions.gh_accordions}>
                      <div className={styleOpinions.gh_accordion}>
                        <input className={styleOpinions.gh_inputCardsQuestion} type='checkbox' id='theTitrQAA231'/>
                        <label className={styleOpinions.gh_accLabel} htmlFor='theTitrQAA231'>
                          <CardProduct/>
                          </label>
                        <div className={styleOpinions.gh_accContent}>
                        <div>
                          <Question />
                          <Answer />
                          <Question/>
                          <Answer />
                        </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                :
              showProduct ?
                <div>
                  <div className={styleOpinions.gh_container}>
                    <div className={styleOpinions.gh_accordions}>
                      <div className={styleOpinions.gh_accordion}>
                        <input className={styleOpinions.gh_inputCardsQuestion} type='checkbox' id='theTitrQAA1'/>
                        <label className={styleOpinions.gh_accLabel} htmlFor='theTitrQAA1'>
                          <CardProduct/>
                          </label>
                        <div className={styleOpinions.gh_accContent}>
                          <div>
                            <ProductComments/>
                            <ProductComments/>
                            <ProductComments/>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styleOpinions.gh_container}>
                    <div className={styleOpinions.gh_accordions}>
                      <div className={styleOpinions.gh_accordion}>
                        <input className={styleOpinions.gh_inputCardsQuestion} type='checkbox' id='theTitrQAA2'/>
                        <label className={styleOpinions.gh_accLabel} htmlFor='theTitrQAA2'>
                          <CardProduct/>
                          </label>
                        <div className={styleOpinions.gh_accContent}>
                          <div>
                            <ProductComments/>
                            <ProductComments/>
                            <ProductComments/>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  
                </div> :
              showWorking ?
                <div>
                  <MarketingComments/>
                  <MarketingComments/>
                  <MarketingComments/>
                   <MarketingComments/>
                </div> : ''
            }
            
          </div>         
        </div>
      </div>
    </>
  )
}

export default Opinions
