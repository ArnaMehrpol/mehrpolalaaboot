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

import Navbar from "../components/navbar/Navbar";
import Footer from "../components/mainpage/footer/Footer";
import MainPage from "../components/mainpage/MainPage";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer-component";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MyProvider } from "../context/MyContext";
import ProfileLayout from "../components/profile/layouts/ProfileLayout";
import MarketingLayout from "../components/marketing/layout/MarketingLayout";
import { useRouter } from "next/router";

//کامپوننت ها برای انجام اعمال فراخوانی و ایجاد تغییرات در دیتابیس(Redux)
import { Provider } from "react-redux";
import store from "../redux/store";

function MyApp({ Component, props }) {
  const [showing, setshowing] = useState(false);
  const [showProfile, setShowProfile] = useState();
  const [showMarketing, setShowMarketing] = useState();
  const [showNavbar, setShowNavbar] = useState(false);
  const [showFooter, setShowFooter] = useState(false);
  const router = useRouter();
  useEffect(() => {
    if (window.location.href.indexOf("/register") !== -1) {
      setShowNavbar(true);
      setShowFooter(true);
    }
    if (window.location.href.indexOf("/login") !== -1) {
      setShowNavbar(true);
      setShowFooter(true);
    }
  });
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
    <div hidden={!showing} className="bg-[#ffffff]">
      <Provider store={store}>
        <MyProvider>
          <ToastContainer position="top-center" />
          <div hidden={showNavbar}>
            <Navbar />
          </div>

          <div>{<Component {...props} />}</div>

          {/* <MainPage/> */}
          <div hidden={showFooter}>
            <Footer />
          </div>
        </MyProvider>
      </Provider>
    </div>
  );
}
export default MyApp;
