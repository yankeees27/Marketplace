import React, { useState } from 'react';
import './App.css';
import { Header } from './components/header/header';
import { MainPage } from './components/main-page/main-page';
import { ProductListTwo } from './components/product-list-under-main-page/product-list';
import { Qualities } from './components/Qualities/qualities';
import { Cashback } from './components/cashback/cashback';
import { Footer } from './components/footer/footer'; 
import { LoginPage } from './components/react practice -> login page/login-page';

//images
import tvIMG from '../public/images/tv.png';
import laptopIMG from '../public/images/laptop.jpg';
import iphoneIMG from '../public/images/iphone.jpg';
import cameraIMG from '../public/images/camera.jpg';
import appleWatchIMG from '../public/images/appleWatch.jpg';
import airpodsIMG from '../public/images/airpods.jpg';


//fonts
import "../src/fonts/Teko/Teko-VariableFont_wght.ttf";
import "../src/fonts/Teko/static/Teko-Bold.ttf";
const products = [
  {
    pic: tvIMG,
    price: "$900.99",
    title:"Samsung 75_Class QN58C NEO QLED 4k Smart TV",
    store: "Store: Amazon",
  },
  {
    pic: laptopIMG,
    price: "$215.98",
    title:"Lenovo Ideapad 15, i5-1253U, 8GB RAM",
    store: "Store: Saturn",
  },
  {
    pic: iphoneIMG,
    price: "$499.99",
    title:"iPhone 14 Pro Max 256GB, BRAND NEW",
    store: "Store: Apple",
  },
  {
    pic: cameraIMG,
    price: "$299.99",
    title:"Canon EOS R5 Mirrorless Camera",
    store: "Store: Canon",
  },
  {
    pic: appleWatchIMG,
    price: "$199.99",
    title:"Apple Watch Series 8 GPS, Aluminum Case",
    store: "Store: Media Markt",
  },
  {
    pic: airpodsIMG,
    price: "$99.99",
    title:"AirPods Max 2nd Generation, Pink red",
    store: "Store: Apple",
  }
]
import { CountContext } from './context';

function App() {
    const [count, setCount ] = useState(0);
    return (
      <div className="App">
        <CountContext.Provider value={{count, setCount}}>
        <Header />
        <MainPage />
        <ProductListTwo 
        ammount={products}
        />
        </CountContext.Provider>

        <Qualities />
        <Cashback />
        <Footer />
        <LoginPage />
      </div>
    )
  }


export default App;