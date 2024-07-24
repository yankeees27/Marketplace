import React from "react"; 
import { ProductList } from "./product list/product-list";
import '../style/css/main-page.css';
import { MainPageBoxes } from "./main-page-boxes/main-page-boxes";

export function MainPage() {
    return (
        <div className="main-page">
            <ProductList />
            <MainPageBoxes />
            <div className="header-border-bottom"></div>
        </div>
    )
};