import React from 'react';

import { Link } from "react-router-dom";


import { IoMdSearch } from "react-icons/io";
import { MdFavoriteBorder } from "react-icons/md";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { CgProfile } from "react-icons/cg";
import { AiOutlineWindows } from "react-icons/ai";


import './style.css'; 

const Header = () => {
  return (
    <div className='main-header-section'>
        <div className='dark-nav'>
            <div className='top-text'>
                <AiOutlineWindows color='red' size={14}/>
                <p>Lorem Ipsum</p>
            </div>
            <div className='top-text'>
                <AiOutlineWindows color='red' size={14}/>
                <p>Lorem Ipsum</p>
            </div>
            <div className='top-text'>
                <AiOutlineWindows color='red' size={14}/>
                <p>Lorem Ipsum</p>
            </div>
        </div>
        <div className="header">
            <div className="logo">
                <img src="./divvy_logo4.png" alt="Logo" className="logo-image" />
            </div>
            <div className="search">
                <img src="./divvy_text.png" alt="title" className='logo-text'/>
                
            </div>
            <div className="icons">
                <div className="icon cart">
                    <IoMdSearch size={25}/>
                </div> 
                <div className="icon favorite">
                <MdFavoriteBorder size={25}/>
                </div>
                <div className="icon cart">
                <LiaShoppingBagSolid size={25}/>
                </div>
                <div className="icon profile">
                <CgProfile size={25}/>
                </div>
                <div className="icon language">
                <select>
                    <option value="eng">eng</option>
                </select>
                </div>
            </div>
        </div>
        <nav className="navigation">
            <ul>
                <li>
                <Link className="nav-link" to="/shop">Shop</Link>
                </li>
                <li>
                <Link className="nav-link" to="/skills">Skills</Link>
                </li>
                <li>
                <Link className="nav-link" to="/about">Stories</Link>
                </li>
                <li>
                <Link className="nav-link" to="/about">About</Link>
                </li>
                <li>
                <Link className="nav-link" to="/about">Contact Us</Link>
                </li>
            </ul>
        </nav>

    </div>
  );
};

export default Header;