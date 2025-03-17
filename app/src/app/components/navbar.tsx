import React from 'react';

const Navbar: React.FC = () => {
    return (
        <nav>
            <div className="logo">ISLE</div>
            <div className="nav-links">
                <a href="#about">About Us</a>
                <a href="#home">Homepage</a>
            </div>
        </nav>
    );
};

export default Navbar;