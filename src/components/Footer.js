import React from "react";
import FooterLinks from "./FooterLinks";
import FooterSocialMedia from "./FooterSocialMedia";
import NewsLetter from "./NewsLetter";

import etehadiye from "../assets/images/Etehadiye.svg";
import samandehi from "../assets/images/Samandehi.svg";
import enamad from "../assets/images/eNAMAD.svg";

const Footer = () => {
  return (
    <footer className="bg-[#15181D] p-[32px] pt-[45px]">
      <FooterLinks />

      <div className="grid grid-cols-6 gap-4 pt-[8px]">
        <div className="col-span-4 flex flex-col place-content-center align-center text-right pl-[64px]">
          <h3 className="text-[15px] text-[#ABABAB]">
            تجربه ای متفاوت در فروشگاه اینترنتی چهره آرا
          </h3>

          <p className="text-[14px] text-[#7F7F7F]">
            فروشگاه اینترنتی چهره آرا با بیش از 5 سال سابقه در ارائه محصولات با
            کيفيت ، مرغوب و با اصالت از برندهای معتبر جهانی مشغول به فعاليت است.
            هم اکنون فروشگاه اینترنتی چهره آرا در ادامه اين رسالت و سابقه
            درخشان، به دنبال ارائه محصولات با کيفيت و اورجينال از برندهای معتبر
            خارجی و ايرانی در محيط آنلاين است. مشتريان می توانند از ميان هزاران
            محصول با کيفيت خارجی و داخلی آرایشی، بهداشتی و عطر محصول مورد نظر
            خود را جستجو ، بررسی و انتخاب نمايند. در فروشگاه اینترنتی چهره آرا
            مشتريان عزیز می توانيد به راحتی، خرید اینترنتی لذت بخش، مطمئن و آسان
            را تجربه کنند و کالای مورد نظر خود را به سرعت در سراسر ایران دریافت
            نمایند.
          </p>
        </div>

        <div className="col-span-2">
          <FooterSocialMedia />

          <NewsLetter />

          <h3 className="text-right text-[#ABABAB] text-[15px] pt-[38px]">
            مجوزها
          </h3>

          <div className="flex gap-5 pb-[38px]">
            <div className="bg-white px-[32px] py-[24px] rounded-[5px]">
              <img alt="" src={enamad} />
            </div>

            <div className="bg-white px-[32px] py-[24px] rounded-[5px]">
              <img  alt="" src={samandehi} />
            </div>

            <div className="bg-white px-[32px] py-[24px] rounded-[5px]">
              <img alt="" src={etehadiye} />
            </div>
          </div>
        </div>
      </div>

      <hr />

      <div className="pt-[24px]">
        <h4 className="text-center text-[#7F7F7F] text-[13px] mb-0 mt-2">
          کلیه حقوق این سایت محفوظ و متعلق به شرکت چهره آرا است و استفاده از
          مطالب سایت، برای اهداف غیرتجاری و با ذکر منبع مانعی ندارد.
        </h4>
      </div>
    </footer>
  );
};

export default Footer;
