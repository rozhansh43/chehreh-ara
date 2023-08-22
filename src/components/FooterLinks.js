import React from "react";

const footerSections = [
  {
    title: "همراه با چهره آرا",
    colspan: 1,
    items: [
      "اتاق خبر چهره آرا",
      "گزارش تخلف در چهره آرا",
      "تماس با چهره آرا",
      "درباره چهره آرا",
    ],
  },
  {
    title: "خدمات مشتریان",
    colspan: 1,
    items: [
      "پاسخ به پرسش‌های متداول",
      "رویه‌های بازگرداندن کالا",
      "شرایط استفاده",
      "حریم خصوصی",
    ],
  },

  {
    title: "راهنمای خرید از چهره آرا",
    colspan: 1,
    items: ["نحوه ثبت سفارش", "رویه ارسال سفارش", "شیوه‌های پرداخت"],
  },
  {
    title: "ارتباط با چهره آرا",
    colspan: 'col-span-2',
    items: [
      "تلفن: ۳۲۶۵۹۸۵۴ - ۰۵۱",
      "آدرس: خـراسان رضوی، مشهد، فرامرز عباسی، مجتمع نور، واحد ۵۵",
    ],
  },
];

const FooterLinks = () => {
  return (
    <div className="grid md:grid-cols-5 md:p-[24px] text-[#ABABAB] text-right">
      {footerSections.map((section, index) => (
        <div key={index} className={section.colspan}>
          <h4 className="text-[#ABABAB] text-[14px]">{section.title}</h4>
          {section.items.map((item, itemIndex) => (
            <p key={itemIndex} className="text-[14px] text-[#7F7F7F]">
              {item}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
};

export default FooterLinks;
