import React from 'react';
import Logo from './Logo'; 
import CartIcon from './CartIcon'; 

const Header = () => {
    return (
        <>
            <header className="fixed top-0 left-0 w-full bg-dark-theme p-[16px] bg-[#15181D]">
                <div className="flex place-content-between">
                    <div className="flex">
                        <div className="flex items-center space-x-4">
                            <CartIcon />
                            <button className="text-[12px] bg-[#272A31] text-[#ABABAB] px-3 py-1 rounded py-[10px]">
                                ثبــــــــــــت نام / ورود
                            </button>
                            <p className="text-[12px] text-[#ABABAB]">سلام مهرناز!</p>
                        </div>
                    </div>

                    <div className="">
                        <Logo />
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;
