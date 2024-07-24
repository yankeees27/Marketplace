import React from 'react'; 
import '../../style/css/product-list.css';
import electronicSVG from '/home/yankes/marketplace/marketplace/src/svgs/electronics.svg';
import grocerySVG from '/home/yankes/marketplace/marketplace/src/svgs/grocery.svg';
import furnitureSVG from '/home/yankes/marketplace/marketplace/src/svgs/furniture.svg';
import fashionSVG from '/home/yankes/marketplace/marketplace/src/svgs/clothe.svg';
import beautySVG from '/home/yankes/marketplace/marketplace/src/svgs/beauty.svg';
import petsSVG from '/home/yankes/marketplace/marketplace/src/svgs/pets.svg';
import kidsSVG from '/home/yankes/marketplace/marketplace/src/svgs/kids.svg';
import toysSVG from '/home/yankes/marketplace/marketplace/src/svgs/toys.svg';
import healthSVG from '/home/yankes/marketplace/marketplace/src/svgs/svg.png';
import householdSVG from '/home/yankes/marketplace/marketplace/src/svgs/household.svg';
import gardenSVG from '/home/yankes/marketplace/marketplace/src/svgs/housegarden.svg';
import sportSVG from '/home/yankes/marketplace/marketplace/src/svgs/sport.svg';

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