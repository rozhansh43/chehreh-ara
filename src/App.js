import React from 'react';
import Header from './components/Header'; 
import Title from './components/Title'; 
import Footer from './components/Footer'; 
import ProductsCarousel from './components/ProductsCarousel'; 

const App = () => {
    return (
        <div className="bg-dark-theme bg-black">
            <Header />
            <div className='md:container md:mx-auto px-[64px]'>
              <Title />
              <ProductsCarousel />
            </div>
            <Footer />
        </div>
    );
}

export default App;
