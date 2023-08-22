import React from 'react';
import Header from './components/Header'; 
import Title from './components/Title'; 
import Footer from './components/Footer'; 
import ProductsCarousel from './components/ProductsCarousel'; 
import './assets/css/fonts.css';

const App = () => {
    return (
        <div className="bg-dark-theme bg-black">
            <Header />
            <div className='container'>
              <Title />
              <ProductsCarousel />
            </div>
            <Footer />
        </div>
    );
}

export default App;
