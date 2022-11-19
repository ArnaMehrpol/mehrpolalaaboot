import React from "react";
import BestOffer from "./bestOffer/BestOffer";
import BestSellers from "./bestSellers/BestSellers";
import Discounters from "./discounters/Discounters";
import FastAccess from "./fastAccess/FastAccess";
import Footer from "./footer/Footer";
import MeetProducers from "./meetProducers/MeetProducers";
import MostPoular from "./mostPopular/MostPoular";
import Newest from "./newest/Newest";
import Search from "./search/Search";
import TrustMehrpol from "./whoTrustMehrpol/TrustMehrpol";

const MainPage = () => {
  return (
    <div className="w-full max-w-[2000px] mx-auto ">
      {/* <Navbar/> */}
      <Search />
      <FastAccess />
      <BestSellers />
      <Newest />
      <Discounters />
      <MostPoular />
      <BestOffer />
      <MeetProducers />
      <TrustMehrpol />
      {/* <Footer/> */}
    </div>
  );
};

export default MainPage;
