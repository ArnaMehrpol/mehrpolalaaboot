// import Master from "../layouts/Master";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../styles/globals.css";
import "../styles/style.css";
import "../styles/main.css";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

import LandingPage from "./landingpage";

import Navbar from "../components/mainpage/navbar/Navbar";
import Footer from "../components/mainpage/footer/Footer";
import MainPage from "../components/mainpage/MainPage";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer-component";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MyProvider } from "../context/MyContext";
import ProfileLayout from "../components/profile/layouts/ProfileLayout";
import MarketingLayout from "../components/marketing/layout/MarketingLayout";

//کامپوننت ها برای انجام اعمال فراخوانی و ایجاد تغییرات در دیتابیس(Redux)
import { Provider } from "react-redux";
import store from "../redux/store";

function MyApp({ Component, props }) {
  const [showing, setshowing] = useState(false);
  const [showProfile, setShowProfile] = useState();
  const [showMarketing, setShowMarketing] = useState();

  useEffect(() => {
    setShowProfile(window.location.href.indexOf("/profile") !== 1);
    setShowMarketing(window.location.href.indexOf("/marketing") !== 1);
  }, []);
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.js");
    import("chart.js/dist/chart.js");

    setshowing(true);
  }, []);
  return (
    <div className="bg-[#ffffff]">
      <Provider store={store}>
        <MyProvider>
          <Navbar />
          <div>
            {/* {
              showProfile &&
              <ProfileLayout >
                <Component {...props} />
              </ProfileLayout>
            } */}
          </div>
          <div>
            {/* {
              showMarketing && !showProfile &&
              <MarketingLayout>
                <Component {...props} />
              </MarketingLayout>
            } */}
          </div>
          <div>
            {
              // window.location.href.match('/') !== -1 &&
              <Component {...props} />
            }
          </div>
          <ToastContainer
            position="top-center"
            autoClose={4000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl
            pauseOnFocusLoss
            draggable
            pauseOnHover={true}
            theme="light"
          />

          {/* <MainPage/> */}
          <Footer />
        </MyProvider>
      </Provider>
    </div>
  );
}
export default MyApp;
