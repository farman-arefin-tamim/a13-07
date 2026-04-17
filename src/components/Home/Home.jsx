import React, { Suspense } from 'react';
import Banner from '../Banner/Banner';
import Cards from '../Cards/Cards';
import Stats from '../Stats/Stats';

const Home = () => {
    return (
        <div>
             <Banner></Banner>
             <Suspense fallback = {<div className="flex justify-center items-center h-screen">
                    <span className="loading loading-spinner loading-lg text-green-700"></span></div>}>
                <Cards></Cards>
             </Suspense>
        </div>
    );
};

export default Home;