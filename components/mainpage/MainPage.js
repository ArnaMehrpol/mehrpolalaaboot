import React from 'react'
import BestOffer from './bestOffer/BestOffer'
import BestSellers from './bestSellers/BestSellers'
import Discounters from './discounters/Discounters'
import FastAccess from './fastAccess/FastAccess'
import MeetProducers from './meetProducers/MeetProducers'
import MostPoular from './mostPopular/MostPoular'
import Newest from './newest/Newest'
import Search from './search/Search'
import TrustMehrpol from './whoTrustMehrpol/TrustMehrpol'

//کامپوننت ها برای انجام اعمال فراخوانی و ایجاد تغییرات در دیتابیس(Redux)
import { Provider } from 'react-redux'
import store from './redux/store'

const MainPage = () => {
  return (
    <Provider store={store}>
      <div className='w-full max-w-[2000px] mx-auto '>
        {/* <Navbar/> */}
        <Search/>
        <FastAccess/>
        <BestSellers/>
        <Newest/>
        <Discounters/>
        <MostPoular/>
        <BestOffer/>
        <MeetProducers/>
        <TrustMehrpol/>
        {/* <Footer/> */}
      </div>
    </Provider>
  )
}

export default MainPage
