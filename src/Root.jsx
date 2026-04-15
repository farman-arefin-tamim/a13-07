import React from 'react';
import Header from './components/shared/Header/Header';
import Footer from './components/shared/Footer/Footer';
import Banner from './components/Banner/Banner';
import Cards from './components/Cards/Cards';

const Root = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Cards></Cards>
            <Footer></Footer>
        </div>
    );
};

export default Root;