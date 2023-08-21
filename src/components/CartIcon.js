import React from 'react';
import cartIconSrc from '../assets/cart.svg';

const CartIcon = () => {
    return (
        <div className="relative">
            <div className="bg-[#272A31] p-[7px] rounded-[5px]">
                <img src={cartIconSrc} alt="Cart Icon" className="" width={24}/>
            </div>
            <div className="absolute text-[12px] px-[5px] bg-[#EB3B3B] rounded-[5px] text-white bottom-0 right-0 flex justify-center items-center">
                5
            </div>
        </div>
    );
}

export default CartIcon;
