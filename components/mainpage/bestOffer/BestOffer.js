import React from 'react'
import CardProduct from '../card/CardProduct'
import SwiperCore,{Navigation, Pagination, Scrollbar, A11y, Autoplay} from 'swiper';
import {Swiper, SwiperSlide, useSwiper, useSwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import pic1 from '/public/assets/img/products/1.png'
import pic2 from '/public/assets/img/products/10.png'
import pic3 from '/public/assets/img/products/13.jpg'
import pic4 from '/public/assets/img/products/14.jpg'
import pic5 from '/public/assets/img/products/12.png'
import pic6 from '/public/assets/img/products/15.png'

const items = [
  { key: '1', image: pic1.src, name: 'صندلی چوبی', discount: '20', price: '298978689', priceR: '437898989' },
  { key: '2', image: pic2.src, name: 'صندلی چوبی', discount: '20', price: '298978689', priceR: '437898989' },
  { key: '3', image: pic3.src, name: 'صندلی چوبی', discount: '20', price: '298978689', priceR: '437898989' },
  { key: '4', image: pic4.src, name: 'صندلی چوبی', discount: '20', price: '298978689', priceR: '437898989' },
  { key: '5', image: pic5.src, name: 'صندلی چوبی', discount: '20', price: '298978689', priceR: '437898989' },
  { key: '6', image: pic6.src, name: 'صندلی چوبی', discount: '20', price: '298978689', priceR: '437898989' },
  ];

const BestOffer = () => {
  return (
    <div>
      <div className='text-center bg-[#f3f4f6] w-[90%] px-[90px] py-10 mt-[40px] mx-auto'>
      <div className='flex justify-between items-center mb-[30px] mt-[40px]'>
        <div className='flex justify-start'>
          <div>
            <svg className='text-light me-2' width='50' height='50' viewBox='0 0 37 34' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <circle className='text-[#3B82f6]' cx='10' cy='24' r='10' fill='currentColor'></circle>
                <circle className='text-[#3B82f6]' cx='30' cy='13' r='7' fill='currentColor' fill-opacity='0.4'></circle>
                <circle className='text-[#3B82f6]' cx='15' cy='4' r='4' fill='currentColor' fill-opacity='0.7'></circle>
            </svg>
          </div>
          <div className='text-right  mr-3'>
            <h4 className='text-[20px] font-semibold'>
              بهترین پیشنهاد برای شما
            </h4>
            <p className='mt-3 text-[14px]'>
              محصولات پیشنهادی براساس علایق شما
            </p>
          </div>
        </div>
        <div className='bg-[#075a86] text-[#ffffff] rounded-lg hover:bg-[#1d74a3] px-2'>
          <button className='py-2 px-2'>مشاهده همه</button>
          <i className="bi bi-chevron-left"></i>
        </div>
      </div>
      <div className='px-8 '>        
          <div className='py-2 bg-transparent rounded-xl'>
          <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            slidesPerView={6}
            spaceBetween={1}
            touchRatio={1.5}
            effect={"flip"}
            // onSwiper
            onSlideChange
            loop={true}
            dir="rtl"
            navigation={{
              nextEl: '.slider-button-next',
              prevEl: '.slider-button-prev',
            }}
            pagination={{
              el: '.swiper-pagination-custom',
              type: 'bullets',
              clickable: true
            }}
            autoplay={
              {delay: 3000}
            }
            className="mySwiper">
            <div className='pt-1 pb-1  pr-2 pl-3 bg-[#ce2424]  w-fit m-auto rounded-xl'>
              <div className='flex justify-center '>
              {items.map(item => (
              <SwiperSlide
                key={item.id}
              >
                <CardProduct key={item.id} data={item}/>
              </SwiperSlide>
            ))}
                         
                </div>
            </div>
          </Swiper>
          </div>
         
          <div className="custom-swiper-tools d-flex align-items-center justify-content-between mt-3 px-2">
              <div class="custom-navigation d-flex relative ps-1">
                <div class="slider-button-prev mt-0 left-0 relative ">
                  <svg className='text-[#3B82f6]' width="23" height="16" viewBox="0 0 23 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.4" d="M7.12872 6.34863L2.5608 5.94466C1.53567 5.94466 0.704529 6.7839 0.704529 7.81901C0.704529 8.85412 1.53567 9.69336 2.5608 9.69336L7.12872 9.28938C7.93292 9.28938 8.58491 8.63105 8.58491 7.81901C8.58491 7.00561 7.93292 6.34863 7.12872 6.34863" fill="currentColor"></path>
                    <path className='bg-[#3B82f6]' d="M22.4681 6.42292C22.3967 6.35083 22.13 6.04614 21.8795 5.79314C20.4179 4.20852 16.6016 1.61734 14.6053 0.824345C14.3022 0.697847 13.5357 0.428528 13.1248 0.409485C12.7328 0.409485 12.3583 0.500618 12.0014 0.680164C11.5555 0.931801 11.1999 1.32898 11.0032 1.79689C10.8779 2.12061 10.6812 3.09315 10.6812 3.11084C10.4859 4.17315 10.3795 5.9006 10.3795 7.81032C10.3795 9.62754 10.4859 11.2843 10.6462 12.3643C10.6637 12.3833 10.8604 13.5898 11.0746 14.0033C11.4666 14.7596 12.2331 15.2275 13.0534 15.2275H13.1248C13.6596 15.2098 14.7831 14.7405 14.7831 14.7242C16.673 13.9312 20.399 11.4652 21.897 9.82613C21.897 9.82613 22.3199 9.40447 22.5031 9.14195C22.7887 8.76381 22.9315 8.29591 22.9315 7.828C22.9315 7.30568 22.7712 6.82009 22.4681 6.42292" fill="currentColor"></path>
                  </svg>
                </div>
                <div class="slider-button-next right-0 relative">
                  <svg className="text-[#3B82f6]" width="23" height="16" viewBox="0 0 23 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className='bg-[#3B82f6]' opacity="0.4" d="M16.5073 6.34863L21.0752 5.94466C22.1003 5.94466 22.9315 6.7839 22.9315 7.81901C22.9315 8.85412 22.1003 9.69336 21.0752 9.69336L16.5073 9.28938C15.7031 9.28938 15.0511 8.63105 15.0511 7.81901C15.0511 7.00561 15.7031 6.34863 16.5073 6.34863" fill="currentColor"></path>
                    <path className='bg-[#3B82f6]' d="M1.16786 6.42292C1.23926 6.35083 1.50598 6.04614 1.75653 5.79314C3.21811 4.20852 7.03437 1.61734 9.03073 0.824345C9.33382 0.697847 10.1003 0.428528 10.5112 0.409485C10.9032 0.409485 11.2776 0.500618 11.6346 0.680164C12.0805 0.931801 12.4361 1.32898 12.6328 1.79689C12.7581 2.12061 12.9548 3.09315 12.9548 3.11084C13.1501 4.17315 13.2565 5.9006 13.2565 7.81032C13.2565 9.62754 13.1501 11.2843 12.9898 12.3643C12.9723 12.3833 12.7756 13.5898 12.5614 14.0033C12.1694 14.7596 11.4029 15.2275 10.5826 15.2275H10.5112C9.97638 15.2098 8.85292 14.7405 8.85292 14.7242C6.96297 13.9312 3.23697 11.4652 1.73902 9.82613C1.73902 9.82613 1.31604 9.40447 1.13284 9.14195C0.84726 8.76381 0.70447 8.29591 0.70447 7.828C0.70447 7.30568 0.864772 6.82009 1.16786 6.42292" fill="currentColor"></path>
                  </svg>
                </div>
              </div>
              <div class="swiper-pagination-custom d-flex justify-content-end w-100">
                {/* <svg className="w-[10px] bottom-[20px] h-[30px] bg-[#3B82f6]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path className='bg-[#3B82f6]' d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"/>
                </svg> */}
              </div>
            </div>
{/*       
          <CardProduct/>
          <CardProduct/>
          <CardProduct/>
          <CardProduct/>
          <CardProduct/>
          <CardProduct/> */}
        </div>
      {/* <div className='flex justify-center rounded-tl-xl rounded-bl-xl'>
        <CardProduct/>
        <CardProduct/>
        <CardProduct/>
        <CardProduct/>
        <CardProduct/>        
      </div> */}
    </div>
    </div>
  )
}

export default BestOffer
