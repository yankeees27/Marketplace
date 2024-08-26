import React from 'react';
import '../style/css/footer.css';

//images
import telephone from '../../../public/images/telephone.png';
import email from '../../../public/images/email.png';
import headphones from '../../../public/images/headphones.png';
import telegram from '../../../public/images/telegram.png';
import viber from '../../../public/images/viber.png';
import whatsapp from '../../../public/images/whatsapp.png';
import googlePlay from '../../../public/images/googlePlay.png';
import appleStore from '../../../public/images/appleStore.svg';

export function Footer() {
  return (
    <div className='footer'>
        <div className='group-one'>
        <div className='first-column'>
            <h4>Let Us Help You</h4>
            <p>Your Orders</p>
            <p>Returns & Replacements</p>
            <p>Shipping Rates & Policies</p>
            <p>Customer Service</p>
            <p>Refund and Returns Policy</p>
            <p>Terms and Conditions</p>
            <p>Cookies</p>
            <p>Help Center</p>
        </div>

        <div className='second-column'>
            <h4>Make Money With Us</h4>
            <p>Sell on our Site</p>
            <p>Sell Your Services</p>
            <p>Sell on our Business Site</p>
            <p>Sell Your Apps</p>
            <p>Become an Affiliate</p>
            <p>Advertise Your Products</p>
            <p>Sell-Publish with us</p>
            <p>Become our vendor</p>
        </div>

        <div className='third-column'>
            <h4>Get to Know Us</h4>
            <p>Career</p>
            <p>About our marketplace</p>
            <p>Devices</p>
            <p>Customer Reviews</p>
            <p>Social Responsibility</p>
            <p>Store Locations</p>
        </div>

        <div className='fourth-column'>
            <h4>For Buyers</h4> 
            <p>FAQ</p>
            <p>My Account</p>
            <p>About Us</p>
            <p>Contact</p>
        </div>
        
        <div className="fifth-column">
            <img src={googlePlay} alt='' />
            <img src={appleStore} alt='' />
        </div>

        </div>

        <div className="contact-row">
            <img src={telephone} alt="" />
            <p>+23 439 12312</p>
            <img src={email} alt="" />
            <p>Send Email</p>
            <img src={headphones} alt="" />
            <p>Contact Us</p>
            <img src={telegram} alt="" />
            <p>Telegram</p>
            <img src={viber} alt="" />
            <p>Viber</p>
            <img src={whatsapp} alt="" />
            <p>Whatsapp</p>
        </div>

        <div className="copyright">
            <p>Copyright 2024 © Marketplace Commerce. All rights reserved. Powered by yankes.</p>
        </div>
    </div>
  );
}