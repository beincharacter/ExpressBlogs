import React, { useState } from 'react';
import "./header.scss";
import logo from "../../assets/blog_logo.png";
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();

    const [dropdown, setDropdown] = useState(false);
    return (
        <div className='header__container'>
            <section className='header_'>
                <div className="header__logo" onClick={() => navigate("/")}>
                    <img src={logo} alt="" />
                </div>
                <div className="header__navigation">
                    <span onClick={() => navigate("/")}>HOME</span>
                    <span>CREATE BLOG</span>
                    <span>About Us</span>
                    <span>PROFILE</span>
                    <div className='header__account_info'>
                        <div className={`account_dropdown ${dropdown ? "visible" : ""}`}>
                            <ul>
                                <li>Sign in</li>
                                <li>Register</li>
                            </ul>
                        </div>
                        <img src="https://img.icons8.com/bubbles/100/null/user.png"
                                onMouseEnter={() => setDropdown(!dropdown)}
                                onMouseLeave={() => setDropdown(!dropdown)} />
                    </div>
                    
                </div>
            </section>
        </div>
    )
}

export default Header;