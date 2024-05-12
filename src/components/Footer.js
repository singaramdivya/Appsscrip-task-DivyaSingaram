
import React, { useState, useEffect } from 'react';

import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";

import './style.css'; 

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY || window.pageYOffset || document.body.scrollTop + (document.documentElement && document.documentElement.scrollTop || 0);

      setIsVisible(windowHeight + scrollTop >= documentHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <footer className="footer">
      <div className='footer-section1'>
        <div className="subscribe-section">
            <h2>BE THE FIRST TO KNOW</h2>
            <p>Sign up for updates from mettā muse.</p>
            <div className="subscribe-form">
              <input type="email" placeholder="Enter your email" />
              <button>Subscribe</button>
            </div>
        </div>
        <div className="contact-us">
            <div>
                <h3>Contact Us</h3>
                <p>Email: divvyshopping@gmail.com</p>
                <p>Phone: +1234567890</p>
            </div>
            <div>
                <h3>CURRENCY</h3>
                <div className="country-dropdown">
                  <img className='flag-img' src="https://www.worldometers.info//img/flags/small/tn_us-flag.gif" alt="us-flag"/>
                  <p className='country-name'>US</p>
                </div>
                <p>Transactions will be completed in Euros and a currency reference is available on hover.</p>
            </div>
        </div>   
      </div> 
      <hr/>
      <div className="footer-sections">
        <div className='metta-section'>
          <h3>mettā muse</h3> 
          <div className='details-section'>
            <a href="#">About us</a>
            <a href="#">Stories</a>
            <a href="#">Artisans</a>
            <a href="#">Botiques</a>
            <a href="#">Contact Us</a>
            <a href="#">EU Compliances Docs</a>
          </div>
        </div>
        <div className='links-section'>
          <h3>QUICK LINKS</h3> 
          <div className='payment-details'>
            <a href="#">Orders&Shopping</a>
            <a href="#">Join/Login as a Seller</a>
            <a href="#">Payments&Pricing</a>
            <a href="#">Return&Refunds</a>
            <a href="#">FAQs</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms&Conditions</a>
          </div>
        </div>
        <div className='followus-metta-section'>
        <div className="follow-us">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#"><FaFacebook color='white' size={16}/></a>
            <a hre="#"><FaLinkedin color='white' size={16}/></a>
            <a href="#"><RiInstagramFill color='white' size={16}/></a>
          </div>
        </div>
        <div className="meta-muse">
          <h3>mettā muse Accepts</h3>
          <div className='img-list-container'>
            <a hre="#"><img className='debit-img' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE42w_nZp8hiUuOHNbCrZfWXXFCCTFhn1I9rT0qjFs0g&s' alt='gpay-img'/></a>
            <a href="#"><img className='debit-img' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX8RrqvJIByEVxLleahT8SyJ9CoZdNk42fHA&s' alt='mastercard-img'/></a>
            <a href="#"><img className='debit-img' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFSipIaJ7ApSDTE8UYjLwS1rganOZHBxadQA&s' alt='paypal-img'/></a>
            {/* <a href="#"><img className='amex' src='https://www.svgrepo.com/show/14823/amex.svg' alt='amex-img'/></a> */}
          </div>
        </div>
        </div>
      </div>
      <div className='footer-text'>
        <p>
          Copyright 
          @{new Date().getFullYear()} Divvy. All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;