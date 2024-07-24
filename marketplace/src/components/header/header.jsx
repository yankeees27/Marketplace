import React from 'react';
import '../style/css/header.css';
import { UnderHeader } from './under-header/under-header';



export function Header() {
    return (
        <div className='header'>
            <div className="header-free-shipping">
                <p>FREE delivery & 40% Discount Sale</p>
                <button className='shop-now'>Show Now</button>
            </div>
            <div className='header-border-top'></div>
            <div className='header-border-bottom'></div>
            <div className='under-header-lists'>
                    <ul className='under-header-list-one'>
                        <li>FAQ</li>
                        <li>My Account</li>
                        <li>About Us</li>
                        <li>Contact</li>
                    </ul>
                    <ul className='under-header-list-two'>
                        <li>Order Tracking</li>
                        <li>English</li>
                        <li>USD</li>
                    </ul>
            </div>
            <UnderHeader />
        </div>
    )  
};