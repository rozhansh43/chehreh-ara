import React from 'react';

const imagePaths = {
  linkedin: require('../assets/images/linkedin.svg'),
  whatsapp: require('../assets/images/whatsapp.svg'),
  telegram: require('../assets/images/telegram.svg'),
  twitter: require('../assets/images/twitter.svg'),
  instagram: require('../assets/images/instagram.svg'),
  facebook: require('../assets/images/facebook.svg'),
};

const FooterSocialMedia = () => {
  return (
    <>    
        <h3 className="text-right text-[#ABABAB] text-[15px]">
        چهره آرا در شبکه های اجتماعی ...
        </h3>

        <div className='flex gap-4 pt-3'>
        {Object.keys(imagePaths).map((key) => (
            <img key={key} src={imagePaths[key].default} alt={key} width={45}/>
        ))}
        </div>
    </>
  );
};

export default FooterSocialMedia;