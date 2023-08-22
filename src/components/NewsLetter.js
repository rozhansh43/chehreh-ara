import React from "react";

const NewsLetter = () => {
  return (
    <>
      <h3 className="text-right text-[#ABABAB] text-[15px] mt-[38px]">
        با ثبت ایمیل یا شماره موبایل خود، از اخبار و تخفیف های ویژه ی فروشگاه
        چهره آرا مطلع شوید
      </h3>

      <div className="flex gap-4 pt-[16px]">
        <input
          className="bg-[#30343D] p-3 w-full text-[14px] rounded-[5px] text-right"
          placeholder="لطفا ایمیل یا شماره موبایل خود را وارد فرمایید"
        />

        <button className="bg-[#272A31] py-2 px-[16px] text-[#ABABAB] rounded-[5px]">
          ثبت
        </button>
      </div>
    </>
  );
};

export default NewsLetter;
