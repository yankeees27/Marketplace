import React from 'react';
import '../../style/css/search-bar.css';
import { SearchBar } from '../under-header/search-bar/search-bar';
import wishlist from '../../../svgs/heart-svgrepo-com.svg';
import profile from '../../../svgs/profile-svgrepo-com.svg';
import { ShoppingCart  } from '../under-header/shoppin cart/shopping-cart';

export function UnderHeader() {
    return (
        <div className='under-header'>
            <h1>Marketplace</h1>
            <SearchBar/>
            <div className='under-header-icons'>
                <div className='wishlist'>
                    <img src={wishlist} alt='' />
                    <p>Wishlist</p>
                </div>
                <div className='profile'>
                    <img src={profile} alt='' />
                    <p>Sign in</p>
                </div>
            <ShoppingCart />
            </div>
        </div>
    )
};