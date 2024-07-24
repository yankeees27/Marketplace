import React from 'react';
import '../../../style/css/search-barNEW.css';
import SVG from '/home/yankes/marketplace/marketplace/src/svgs/search-button-svgrepo-com.svg';

export function SearchBar() {
    return (
        <div class="search-container">
            <div class="wrap">
                <div class="search">
                    <input type="text" class="searchTerm" placeholder="What are you looking for?"></input>
                    <button type="submit" class="searchButton">
                        <img src={SVG} alt='' />
                    </button>
                </div>
            </div>
            
        </div>
    )
};