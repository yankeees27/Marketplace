import React from 'react'; 
import '../../style/css/product-list.css';
import electronicSVG from '../../../svgs/electronics.svg';
import grocerySVG from '../../../svgs/grocery.svg';
import furnitureSVG from '../../../svgs/furniture.svg';
import fashionSVG from '../../../svgs/clothe.svg';
import beautySVG from '../../../svgs/beauty.svg';
import petsSVG from '../../../svgs/pets.svg';
import kidsSVG from '../../../svgs/kids.svg';
import toysSVG from '../../../svgs/toys.svg';
import healthSVG from '../../../svgs/svg.png';
import householdSVG from '../../../svgs/household.svg';
import gardenSVG from '../../../svgs/housegarden.svg';
import sportSVG from '../../../svgs/sport.svg';

export function ProductList() {
    return (
        <div className='product-list'>
            <ul>
                <li className='electronics'><img src={electronicSVG} alt=''></img>Electronics</li>
                <li><img src={grocerySVG} alt=''></img>Grocery & Fruits</li>
                <li><img src={furnitureSVG} alt=''></img>Home & Furniture</li>
                <li><img src={fashionSVG} alt=''></img>Fashion & Accessories</li>
                <li><img src={beautySVG} alt=''></img>Beauty & Personal Care</li>
                <li><img src={petsSVG} alt=''></img>Pets</li>
                <li><img src={kidsSVG} alt=''></img>Baby & Kids</li>
                <li><img src={toysSVG} alt=''></img>Toys & Video Games</li>
                <li><img src={healthSVG} alt=''></img>Health & Wellness</li>
                <li><img src={householdSVG} alt=''></img>Household & Essentials</li>
                <li><img src={gardenSVG} alt=''></img>Patio & Garden</li>
                <li className='sport'><img src={sportSVG} alt=''></img>Sport & Outdoor</li>
            </ul>
        </div>
    )
};