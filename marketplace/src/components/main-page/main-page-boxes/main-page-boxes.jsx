import React from 'react';
import '../../style/css/main-page-boxes.css';

export function MainPageBoxes() {
    const countDownDate = new Date ("Jul 30, 2024, 20:00:00").getTime();
    const x = setInterval(function() {
        const now = new Date().getTime();
        const distance = countDownDate - now;
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        document.getElementById("days").innerHTML = days + "d ";
        document.getElementById("hours").innerHTML = hours + "h ";
        document.getElementById("minutes").innerHTML = minutes + "m ";
        document.getElementById("seconds").innerHTML = seconds + "s ";
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("countdown").innerHTML = "EXPIRED";
        }
    }, 1000);
    return (
        <div className="main-page-boxes">
            <h1 className='main-page-boxes-h1'>New Products Everyday</h1>
           <img src='https://spectrum-brand.com/cdn/shop/articles/Cover_Photo.jpg?v=1617060405&width=2048' alt='' ></img>
           <div className='main-page-boxes-row'>
                <div className='main-page-boxes-box-one'>
                    <h3>Visit us for best Prices</h3>
                    <p>We have the best Prices on the market making us the most trustworthy marketplace</p>
                    <button className='view-more'>View More</button>
                </div>
                <div className='main-page-boxes-box-two'>
                    <div className='countdown'>
                    <p id='days'></p>
                    <p id='hours'></p>
                    <p id='minutes'></p>
                    <p id='double-dot'>:</p>
                    <p id='seconds'></p>
                    </div>
                    <p className='main-page-boxes-box-two-p'>Make sure to claim the best offers until 30th of July 8pm</p>
                    <button className='view-more'>View More</button>
                </div>
           </div>
        </div>
    )

};