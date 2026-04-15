import React from 'react';
import Header from './components/shared/Header/Header';
import Footer from './components/shared/Footer/Footer';
import Banner from './components/Banner/Banner';

const Root = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Footer></Footer>
        </div>
    );
};

export default Root;