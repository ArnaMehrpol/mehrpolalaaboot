import React from "react";

const NewestCard = () => {
  return (
    <div className="L4-card-parent mr-2">
      <div className="card">
        <div className="card-header">
          <div className="headBlock">
            <div className="logoKadr">
              <img src="../assets/img/logos/b-1.jpg" alt="" />
            </div>
            <div className="storeName">
              <h6>فروشگاه شیکتو</h6>
              <p>کشاورزی ، گیاهان دارویی</p>
            </div>
          </div>
        </div>

        <div className="description">
          <p>
            فروشگاه بزرگ شیک نو در سال 1390 با هدف تامین نیازهای اولیه یک منزل
            در استان بوشهر بنا نهاده شد...
          </p>
        </div>

        <div id="twocard" className="twocard">
          <div className="card-body">
            <div className="card cardJadidtarin">
              <div className="bg-danger discountTheBest text-white ">20%</div>
              <img
                src="../assets/img/products/1.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body ">
                <div>
                  <h5 className="card-text card-fontJadidtarin">
                    ماشین چمن زنی مدل ایستاده
                  </h5>
                </div>
                <div className="cardPriceJadidtarin">
                  <h6 className="cardPriceJadidtarin">323/000</h6>
                  <h6 className="me-1 cardPriceJadidtarin">تومان</h6>
                </div>
              </div>
              {/* ****************************** */}
            </div>
          </div>

          <div className="card-body">
            <div className="card cardJadidtarin">
              <div className="bg-danger discountTheBest text-white ">20%</div>
              <img
                src="../assets/img/products/1.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <div>
                  <h5 className="card-text card-fontJadidtarin">
                    ماشین چمن زنی مدل ایستاده
                  </h5>
                </div>
                <div className="cardPriceJadidtarin">
                  <h6 className="cardPriceJadidtarin">598/000</h6>
                  <h6 className="me-1 cardPriceJadidtarin">تومان</h6>
                </div>
              </div>
            </div>
          </div>

          {/* end card body */}
        </div>
      </div>
    </div>
    //   End The Newest Card
  );
};

export default NewestCard;
