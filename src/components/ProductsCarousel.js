import React from "react";
import clockIcon from "../assets/images/clock.svg";
import like from "../assets/images/like.svg";
import cartIconSrc from '../assets/images/cart.svg';

import firstProduct from "../assets/images/firstProduct.svg";
import secondProduct from "../assets/images/secondProduct.svg";
import thirdProduct from "../assets/images/thirdProduct.svg";
import fourthProduct from "../assets/images/fourthProduct.svg";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const responsive = {
  0: { items: 1 },
  568: { items: 4 },
  1024: { items: 4 },
};

const handleDragStart = (e) => e.preventDefault();
const items = [
  <div className="px-2">
    <div className="carousel-item bg-white rounded-[5px] ">
      <div className="flex place-content-between p-3">
        <div className="flex align-center h-full">
          <div className="border-[#ABABAB] border-2 rounded-[8px] p-2">
            <img src={like} alt="" width={32}/>
          </div>

          <div className="border-[#ABABAB] border-2 rounded-[8px] mx-[8px] p-2">
            <img src={cartIconSrc} alt="" width={32}/>
          </div>
        </div>

        <div className="">
          <h3 className="text-[#EB3B3B] text-[15px]">پیشنهاد ویـــــژه</h3>
          <div className="flex">
            <span className="text-[#EB3B3B] text-[15px]">۲۳ : ۱۲ : ۰۵</span>
            <img src={clockIcon} alt="" width={18}/>
          </div>
        </div>
      </div>
      <img
        src={firstProduct}
        className="m-auto"
        onDragStart={handleDragStart}
        role="presentation"
      />

      <div className="p-3">
        <h4  className="text-right">
        عنوان محصول
        </h4>

        <div className="flex place-content-between h-full">
          <h3>
          قیمت محصول
          </h3>

          <div className="bg-[#EB3B3B] rounded-[5px] text-white flex align-center place-content-center h-full text-[13px] p-1 ">
            50%
          </div>
        </div>
      </div>
    </div>
  </div>,
    <div className="px-2">
    <div className="carousel-item bg-white rounded-[5px] ">
      <div className="flex place-content-between p-3">
        <div className="flex align-center h-full">
          <div className="border-[#ABABAB] border-2 rounded-[8px] p-2">
            <img src={like} alt="" width={32}/>
          </div>

          <div className="border-[#ABABAB] border-2 rounded-[8px] mx-[8px] p-2">
            <img src={cartIconSrc} alt="" width={32}/>
          </div>
        </div>

        <div className="">
          <h3 className="text-[#EB3B3B] text-[15px]">پیشنهاد ویـــــژه</h3>
          <div className="flex">
            <span className="text-[#EB3B3B] text-[15px]">۲۳ : ۱۲ : ۰۵</span>
            <img src={clockIcon} alt="" width={18}/>
          </div>
        </div>
      </div>
      <img
        src={firstProduct}
        className="m-auto"
        onDragStart={handleDragStart}
        role="presentation"
      />

      <div className="p-3">
        <h4  className="text-right">
        عنوان محصول
        </h4>

        <div className="flex place-content-between h-full">
          <h3>
          قیمت محصول
          </h3>

          <div className="bg-[#EB3B3B] rounded-[5px] text-white flex align-center place-content-center h-full text-[13px] p-1 ">
            50%
          </div>
        </div>
      </div>
    </div>
  </div>,
    <div className="px-2">
    <div className="carousel-item bg-white rounded-[5px] ">
      <div className="flex place-content-between p-3">
        <div className="flex align-center h-full">
          <div className="border-[#ABABAB] border-2 rounded-[8px] p-2">
            <img src={like} alt="" width={32}/>
          </div>

          <div className="border-[#ABABAB] border-2 rounded-[8px] mx-[8px] p-2">
            <img src={cartIconSrc} alt="" width={32}/>
          </div>
        </div>

        <div className="">
          <h3 className="text-[#EB3B3B] text-[15px]">پیشنهاد ویـــــژه</h3>
          <div className="flex">
            <span className="text-[#EB3B3B] text-[15px]">۲۳ : ۱۲ : ۰۵</span>
            <img src={clockIcon} alt="" width={18}/>
          </div>
        </div>
      </div>
      <img
        src={firstProduct}
        className="m-auto"
        onDragStart={handleDragStart}
        role="presentation"
      />

      <div className="p-3">
        <h4  className="text-right">
        عنوان محصول
        </h4>

        <div className="flex place-content-between h-full">
          <h3>
          قیمت محصول
          </h3>

          <div className="bg-[#EB3B3B] rounded-[5px] text-white flex align-center place-content-center h-full text-[13px] p-1 ">
            50%
          </div>
        </div>
      </div>
    </div>
  </div>,
    <div className="px-2">
    <div className="carousel-item bg-white rounded-[5px] ">
      <div className="flex place-content-between p-3">
        <div className="flex align-center h-full">
          <div className="border-[#ABABAB] border-2 rounded-[8px] p-2">
            <img src={like} alt="" width={32}/>
          </div>

          <div className="border-[#ABABAB] border-2 rounded-[8px] mx-[8px] p-2">
            <img src={cartIconSrc} alt="" width={32}/>
          </div>
        </div>

        <div className="">
          <h3 className="text-[#EB3B3B] text-[15px]">پیشنهاد ویـــــژه</h3>
          <div className="flex">
            <span className="text-[#EB3B3B] text-[15px]">۲۳ : ۱۲ : ۰۵</span>
            <img src={clockIcon} alt="" width={18}/>
          </div>
        </div>
      </div>
      <img
        src={firstProduct}
        className="m-auto"
        onDragStart={handleDragStart}
        role="presentation"
      />

      <div className="p-3">
        <h4  className="text-right">
        عنوان محصول
        </h4>

        <div className="flex place-content-between h-full">
          <h3>
          قیمت محصول
          </h3>

          <div className="bg-[#EB3B3B] rounded-[5px] text-white flex align-center place-content-center h-full text-[13px] p-1 ">
            50%
          </div>
        </div>
      </div>
    </div>
  </div>,
];

const ProductsCarousel = () => {
  return (
        <div className="mt-3">
          <AliceCarousel
            mouseTracking
            items={items}
            responsive={responsive}
            autoPlayControls={false} // Disable auto play controls
          />
        </div>
  );
};

export default ProductsCarousel;
