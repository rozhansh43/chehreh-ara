import React from "react";
import linkedin from '../assets/linkedin.svg';
import whatsapp from '../assets/whatsapp.svg';
import instagram from '../assets/instagram.svg';
import twitter from '../assets/twitter.svg';
import telegram from '../assets/telegram.svg';
import facebook from '../assets/facebook.svg';
import etehadiye from '../assets/Etehadiye.svg';
import samandehi from '../assets/Samandehi.svg';
import enamad from '../assets/eNAMAD.svg';

const Footer = () => {
  return (
    <footer className="bg-[#15181D] p-[32px]">
      <div className="grid grid-cols-4 gap-4 text-[#ABABAB] text-right">
        <div className="">
          <h4 className="text-[#ABABAB] text-[14px]">ارتباط با چهره آرا</h4>
          <p className="text-[#7F7F7F] text-[14px]">تلفن: ۳۲۶۵۹۸۵۴ - ۰۵۱</p>
          <p className="text-[14px] text-[#7F7F7F]">
            آدرس: خـراسان رضوی، مشهد، فرامرز عباسی، مجتمع نور، واحد ۵۵
          </p>
        </div>
        <div className="">
          <h4 className="text-[#ABABAB] text-[14px]">راهنمای خرید از چهره آرا</h4>
          <p className="text-[#7F7F7F] text-[14px]">نحوه ثبت سفارش</p>
          <p className="text-[14px] text-[#7F7F7F]">رویه ارسال سفارش</p>
          <p className="text-[14px] text-[#7F7F7F]">شیوه‌های پرداخت</p>
        </div>
        <div className="">
          <h4 className="text-[#ABABAB] text-[14px]">خدمات مشتریان</h4>
          <p className="text-[#7F7F7F] text-[14px]">پاسخ به پرسش‌های متداول</p>
          <p className="text-[14px] text-[#7F7F7F]">رویه‌های بازگرداندن کالا</p>
          <p className="text-[14px] text-[#7F7F7F]">شرایط استفاده</p>
          <p className="text-[14px] text-[#7F7F7F]">حریم خصوصی</p>
        </div>
        <div className="">
          <h4 className="text-[#ABABAB] text-[14px]">همراه با چهره آرا</h4>
          <p className="text-[#7F7F7F] text-[14px]">اتاق خبر چهره آرا</p>
          <p className="text-[14px] text-[#7F7F7F]"> گزارش تخلف در چهره آرا</p>
          <p className="text-[14px] text-[#7F7F7F]">تماس با چهره آرا</p>
          <p className="text-[14px] text-[#7F7F7F]">درباره چهره آرا</p>
        </div>
      </div>

      <div className="grid grid-cols-5 gap-4 pt-[32px]">
        <div className="col-span-2">
          <h3 className="text-right text-[#ABABAB] text-[15px]">چهره آرا در شبکه های اجتماعی...</h3>

          <div className="flex gap-4">
            <img src={instagram}/>
            <img src={twitter}/>
            <img src={telegram}/>
            <img src={whatsapp}/>
            <img src={facebook}/>
            <img src={linkedin}/>
          </div>

          <h3 className="text-right text-[#ABABAB] text-[15px]">
            با ثبت ایمیل یا شماره موبایل خود، از اخبار و تخفیف های ویژه ی
            فروشگاه چهره آرا مطلع شوید.
          </h3>

          <div className="flex">
            <button className="bg-[#272A31]">ثبت</button>

            <input className="bg-[#30343D]" placeholder="لطفا ایمیل یا شماره موبایل خود را وارد فرمایید..." />
          </div>

          <h3 className="text-right text-[#ABABAB] text-[15px]">مجوزها</h3>

          <div className="flex gap-3">
            <div className="bg-white p-4 rounded-[5px]">
                <img src={enamad} />
            </div>

            <div className="bg-white p-4 rounded-[5px]">
                <img src={samandehi} />
            </div>

            <div className="bg-white p-4 rounded-[5px]">
                <img src={etehadiye} />
            </div>
          </div>
        </div>
        <div className="col-span-3 flex flex-col place-centent-center align-items-center text-right">
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
      </div>
      <div>
        <h4 className="text-center text-[#ABABAB] text-[15px]">
          کلیه حقوق این سایت محفوظ و متعلق به شرکت چهره آرا است و استفاده از
          مطالب سایت، برای اهداف غیرتجاری و با ذکر منبع مانعی ندارد.
        </h4>
      </div>
    </footer>
  );
};

export default Footer;
