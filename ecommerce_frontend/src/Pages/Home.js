import React from 'react'
import Navbar from '../Comps/Navbar';
import ItemSlider from '../Comps/ItemSlider';
import Categories from '../Comps/Categories';
import Products from '../Comps/Products';
import Footer from '../Comps/Footer';
import Login from './Login';

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Categories />
            <ItemSlider />
            <Products/>
            <Footer />
        </div>
    )
}

export default Home;
