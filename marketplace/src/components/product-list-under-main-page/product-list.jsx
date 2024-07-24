import React from 'react';
import '../style/css/product-list-under-main-page.css';
import Product from './product-layout/product';

export function ProductListTwo({pic, price, title, store,  ammount}) {
    return (
        <div className='product-list-two'>
            {ammount.map((ammountOne) => (
                <Product
                pic={ammountOne.pic}
                price={ammountOne.price}
                title={ammountOne.title}
                store={ammountOne.store}
                />
            ))}
        </div>
    )
}