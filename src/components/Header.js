import React from 'react';
import Logo from './Logo'; 
import CartIcon from './CartIcon'; 

const Header = () => {
    return (
        <>
            <header className="py-[32px]">
                <div className="flex place-content-between bg-dark-theme p-[16px] bg-[#15181D] fixed top-0 left-0 w-full z-10">
                    <div className="mx-4">
                        <Logo />
                    </div>

                    <div className="flex">
                        <div className="flex items-center space-x-4">
                            <p className="text-[12px] text-[#ABABAB] px-3">سلام مهرناز!</p>
                            <button className="text-[12px] bg-[#272A31] text-[#ABABAB] px-3 py-1 rounded py-[10px]">
                                ثبــــــــــــت نام / ورود
                            </button>
                            <CartIcon />
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;
