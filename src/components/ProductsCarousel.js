import React from "react";
import clockIcon from "../assets/images/clock.svg";
import like from "../assets/images/like.svg";
import firstProduct from "../assets/images/firstProduct.svg";
import secondProduct from "../assets/images/secondProduct.svg";
import thirdProduct from "../assets/images/thirdProduct.svg";
import fourthProduct from "../assets/images/fourthProduct.svg";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const handleDragStart = (e) => e.preventDefault();
const items = [
  <div>
    <div className="carousel-item">
      <img
        src={firstProduct}
        onDragStart={handleDragStart}
        role="presentation"
      />
    </div>
  </div>,
  <div>
    <div className="carousel-item">
      <img
        src={secondProduct}
        onDragStart={handleDragStart}
        role="presentation"
      />
    </div>
  </div>,
  <div>
    <div className="carousel-item">
      <img
        src={thirdProduct}
        onDragStart={handleDragStart}
        role="presentation"
      />
    </div>
  </div>,
];

const ProductsCarousel = () => {
  return (
    <div className="grid grid-cols-4 gap-4">
      <div className="bg-white rounded-[5px] ">
        <div>
          <AliceCarousel
            mouseTracking
            items={items}
            autoPlayControls={false} // Disable auto play controls
          />

          <h3 className="text-[#EB3B3B] text-[13px]">پیشنهاد ویـــــژه</h3>
          <img src={clockIcon} />
          <span>۲۳ : ۱۲ : ۰۵</span>
        </div>

        <div>
          <div>
            <img src={clockIcon} />
          </div>

          <div>
            <img src={like} />
          </div>
        </div>
        <img src={firstProduct} />

        <div>
          <h4>عنوان محصول</h4>

          <div className="flex"></div>
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default ProductsCarousel;
