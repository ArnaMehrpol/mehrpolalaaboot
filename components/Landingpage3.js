import React from "react";
import Card from "./Card";

import Image from "next/image";

const Landingpage3 = () => {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="Landing3-header">
            <div className="porforoshtarinha">
              <h4>پرفروش ترین ها</h4>
              <p>محصولاتی که بیشترین خرید و فروش را داشته اند</p>
            </div>
            <div>
              <button type="button" className="btn  btn-danger red1 mt-4">
                مشاهده همه<i class="bi bi-chevron-left"></i>
              </button>
            </div>
          </div>
          {/* End header */}

          {/* Carousel */}
          <div
            id="carouselExampleControls"
            className="carousel slide carouselContainer self-center red1 "
            data-bs-ride="carousel"
          >
            <div className="carousel-inner relative">
              <div className="carousel-item active">
                <div className="d-flex justify-content-center">
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                </div>
              </div>
              <div className="carousel-item">
                <div className="d-flex justify-content-center">
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                </div>
              </div>
              <div className="carousel-item">
                <div className="d-flex justify-content-center">
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                </div>
              </div>
            </div>
          </div>
          {/* Carousel */}
        </div>
        <div className="myButonAnfIndicator">
          <div id="myCarouselButton">
            <button
              // className="carousel-control-prev bg-danger"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <Image
                src="/../public/assets/img/aIcons/arrowRight.png"
                width={35}
                height={35}
              />
            </button>
            <button
              // className="carousel-control-next bg-danger"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <Image
                src="/../public/assets/img/aIcons/arrowLeft.png"
                width={35}
                height={35}
              />
            </button>
          </div>
          <div className="myIndicators">
            <button
              className="myIndicatorButton focus:bg-red1 "
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide-to="0"
              aria-current="true"
              aria-label="Slide 1"
            ></button>

            <button
              className="myIndicatorButton focus:bg-red1"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>

            <button
              className="myIndicatorButton focus:bg-red1"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
        </div>
        {/* End Of MY Indicators & Buttons */}
      </div>
    </section>
  );
};

export default Landingpage3;
