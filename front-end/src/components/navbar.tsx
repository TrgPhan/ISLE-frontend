import React from 'react';

const Navbar = () => {
    return (
        <header className="w-full h-[164px] bg-[#F7F7F7] sticky top-0 z-30">

            <div className="relative w-full h-full max-w-[1440px] mx-auto px-[50px]">
                <div
                    className="absolute left-[80px] top-[52px]"
                    style={{ width: '98px', height: '60px' }}
                >
                    <span className="font-[Monotes] text-[40px] leading-[150%] text-black block"
                        style={{ letterSpacing: '0.2rem' }}>
                        ISLE
                    </span>
                </div>

                <div className="absolute left-[1003px] top-[56px] horizontal-layout"
                    style={{ width: '357px', height: '52px' }}>
                    <nav className="flex items-center gap-[48px]">
                        {/* About Us */}
                        <a href="/about" className="text-gray-700 hover:text-black py-[11px] w-fit">
                            About Us
                        </a>

                        {/* Contact */}
                        <a href="#" className="text-gray-700 hover:text-black py-[11px] w-fit">
                            Contact
                        </a>

                        {/* Login Button */}
                        <button className="bg-black hover:bg-[#1A1A1A] text-white rounded-lg shadow-md px-6 h-[52px] w-fit transition-all">
                            <a href="/login">
                                Log In
                            </a>
                        </button>
                    </nav>
                </div>
            </div>
        </header>
    )
};
export default Navbar;