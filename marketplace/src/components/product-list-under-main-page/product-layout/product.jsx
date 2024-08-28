import React, {useContext} from 'react';
import "../../style/css/product.css";
import { CountContext } from '../../../context';

export function Product ({pic, price, title, store})  {
    function visible(e) {
        const buttons = document.querySelectorAll('.button');
        buttons.forEach((button) => {
            if (button !== e.currentTarget.querySelector('.button')) {
                button.style.visibility = 'hidden';
            }
        });
        e.currentTarget.querySelector('.button').style.visibility = 'visible';
    }

    function invisible(e) {
        e.currentTarget.querySelector('.button').style.visibility = 'hidden';
    }

    const { count, setCount } = useContext(CountContext);
    function handleClick() {
        setCount(count + 1);
    }

    return (
        <div onMouseEnter={visible} onMouseLeave={invisible} className='product'>
            <div className='products-in-row'>
                <img className='product-image' src={pic} alt=''></img>
                <h3 className='product-price'>{price}</h3>
                <p className='product-title'>{title}</p>
                <p className='product-store'>{store}</p>
                <div className='button invisible'>
                <button onClick={handleClick} className='add-to-cart'>Add to Cart</button>
                </div>
            </div>
        </div>
  )

};
export default Product;

//fix the add to cart issue