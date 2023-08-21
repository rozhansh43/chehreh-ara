import React from "react";
import clockIcon from "../assets/clock.svg";
import like from "../assets/like.svg";
import firstProduct from "../assets/firstProduct.svg";
import secondProduct from "../assets/secondProduct.svg";
import thirdProduct from "../assets/thirdProduct.svg";
import fourthProduct from "../assets/fourthProduct.svg";

const ProductsCarousel = () => {
  return (
    <div className="grid grid-cols-4 gap-4">
      <div className="bg-white rounded-[5px] ">
        <div>
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
            <h4>
                عنوان محصول
            </h4>

            <div className="flex">
                
            </div>
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default ProductsCarousel;
