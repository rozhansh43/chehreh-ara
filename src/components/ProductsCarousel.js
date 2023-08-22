import React from "react";
import clockIcon from "../assets/images/clock.svg";
import like from "../assets/images/like.svg";
import cartIconSrc from "../assets/images/cart.svg";

import firstProduct from "../assets/images/firstProduct.svg";
import secondProduct from "../assets/images/secondProduct.svg";
import thirdProduct from "../assets/images/thirdProduct.svg";
import fourthProduct from "../assets/images/fourthProduct.svg";
import colorPalette from "../assets/images/Product Color palette.svg";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const responsive = {
  0: { items: 1 },
  568: { items: 4 },
  1024: { items: 4 },
};

const handleDragStart = (e) => e.preventDefault();

const itemsData = [
  { image: firstProduct, title: "عنوان محصول 1", price: "قیمت محصول 1" },
  { image: secondProduct, title: "عنوان محصول 2", price: "قیمت محصول 2" },
  { image: thirdProduct, title: "عنوان محصول 3", price: "قیمت محصول 3" },
  { image: fourthProduct, title: "عنوان محصول 4", price: "قیمت محصول 4" },
  { image: fourthProduct, title: "عنوان محصول 4", price: "قیمت محصول 4" },
  { image: thirdProduct, title: "عنوان محصول 3", price: "قیمت محصول 3" },
];

const ProductsCarouselItem = ({ image, title, price }) => {
  return (
    <div className="px-2">
      <div className="carousel-item bg-white rounded-[5px] ">
        <div className="flex place-content-between p-3">
          <div className="flex align-center h-full">
            <div className="border-[#ABABAB] border rounded-[8px] p-2">
              <img src={like} alt="" width={28} />
            </div>

            <div className="border-[#ABABAB] border rounded-[8px] mx-[8px] p-2">
              <img src={cartIconSrc} alt="" width={28} />
            </div>
          </div>

          <div className="">
            <h3 className="text-[#EB3B3B] text-[15px] text-right">پیشنهاد ویـــــژه</h3>
            <div className="flex">
              <span className="text-[#EB3B3B] text-[15px]">۲۳ : ۱۲ : ۰۵</span>
              <img src={clockIcon} className="ml-2" alt="" width={18} />
            </div>
          </div>
        </div>
        <img
          src={image}
          className="m-auto"
          onDragStart={handleDragStart}
          role="presentation"
        />

        <img src={colorPalette} alt="" className="m-auto py-4" />

        <div className="p-3">
          <h4 className="text-right text-[16px] text-[#585858] pb-4">{title}</h4>

          <div className="flex place-content-between h-full text-[15px] text-[#585858]">
            <h3>{price}</h3>

            <div className="bg-[#EB3B3B] rounded-[5px] text-white flex align-center place-content-center h-full text-[13px] p-1 ">
              50%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductsCarousel = () => {
  return (
    <div className="mt-3">
      <AliceCarousel
        mouseTracking
        items={itemsData.map((item) => (
          <ProductsCarouselItem
            key={item.title} // Use a unique key
            image={item.image}
            title={item.title}
            price={item.price}
          />
        ))}
        responsive={responsive}
        autoPlayControls={false} // Disable auto play controls
      />
    </div>
  );
};

export default ProductsCarousel;
