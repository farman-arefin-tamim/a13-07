import Header from './components/shared/Header/Header';
import Footer from './components/shared/Footer/Footer';
import Banner from './components/Banner/Banner';
import Cards from './components/Cards/Cards';
import Timeline from './components/Timeline/Timeline';

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