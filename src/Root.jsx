import Header from './components/shared/Header/Header';
import Footer from './components/shared/Footer/Footer';
import Banner from './components/Banner/Banner';
import Cards from './components/Cards/Cards';
import Timeline from './components/Timeline/Timeline';
import { Outlet } from 'react-router';
import Home from './components/Home/Home';

const Root = () => {
    return (
        <div>
            <Header></Header>
            <Outlet>
                <Home></Home>
            </Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;