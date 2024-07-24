import React from 'react';
import '../../../style/css/shopping-cart.css';
import shoppingCart from '/home/yankes/marketplace/marketplace/src/svgs/shopping-cart-svgrepo-com(1).svg';

export function ShoppingCart() {
    return (
        <div className='shopping-cart'>
            <img src={shoppingCart} alt='' />
            <div className='shopping-cart-counter'>
                <p>0</p>
            </div>
        </div>
    )
}