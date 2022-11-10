import Link from "next/link";
import React, { useEffect, useState } from "react";
import Landingpage2 from "../components/Landingpage2";
import Landingpage3 from "../components/Landingpage3";
import L4Newest from "../components/L4Newest";
import L5BestOffer from "../components/L5BestOffer";
import L6Offers from "../components/L6Offers";
import Landingpage1 from "../components/Landingpage1";
import Favorits from "../components/Favorits";

const LandingPage = () => {
  const [landingpage1, setlandingpage1] = useState("");
  const [landingpage2, setlandingpage2] = useState("");
  const [landingpage3, setlandingpage3] = useState("");
  const [l4Newest, setl4Newest] = useState("");
  const [l6Offers, setl6Offers] = useState("");
  const [l5BestOffer, setl5BestOffer] = useState("");
  const [favorit, setfavorit] = useState("");

  useEffect(() => {
    setlandingpage1(<Landingpage1 />);
    setlandingpage2(<Landingpage2 />);
    setlandingpage3(<Landingpage3 />);
    setl4Newest(<L4Newest />);
    setl6Offers(<L6Offers />);
    setl5BestOffer(<L5BestOffer />);
    setfavorit(<Favorits />);
  }, []);

  return (
    <div className="container LandingPageContainer ">
      <div className="row justify-content-center mt-96 ">
        <div className="col-md-8 ">{landingpage1}</div>
      </div>
      {landingpage2}
      {/* {landingpage3} */}
      {/* {l4Newest} */}
      {/* {favorit} */}
      {/* {l6Offers} */}
      {/* {l5BestOffer} */}
    </div>
  );
};

export default LandingPage;
