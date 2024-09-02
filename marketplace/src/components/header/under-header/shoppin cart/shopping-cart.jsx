import React, { useContext } from 'react';
import '../../../style/css/shopping-cart.css';
import shoppingCart from '/home/yankes/marketplace/marketplace/src/svgs/shopping-cart-svgrepo-com(1).svg';
import { CountContext } from '../../../../context';

export function ShoppingCart() {
    const {count} = useContext(CountContext); //didnt use set count because i didnt do anything with it
    return (
        <div className='shopping-cart'>
            <img src={shoppingCart} alt='' />
            <div className='shopping-cart-counter'>
                <p>{count}</p>
            </div>
        </div>
    )
}