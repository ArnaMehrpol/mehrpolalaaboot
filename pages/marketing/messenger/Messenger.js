import React from 'react'
import MessengerMobile from './mobile/MessengerMobile'

//کامپوننت ها برای انجام اعمال فراخوانی و ایجاد تغییرات در دیتابیس(Redux)
import { Provider } from 'react-redux'
import store from './redux/store'

const Messenger = () => {
  return (
    <Provider store={store}>
      <div>
        <div >
          <MessengerMobile/>
        </div>
        {/* <div className='hidden sm:block'>
          <MessengerWeb/>
        </div> */}
      </div>
    </Provider>
  )
}

export default Messenger
