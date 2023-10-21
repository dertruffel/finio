// import {Route, Routes} from 'react-router-dom';
import Header from '../components/header/Header';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import CalculatorEarning from "../components/calculators/CalculatorEarning";

function Home() {
    return (
        <>
            {/*<Header />*/}
            <Navbar />
            <CalculatorEarning />
            {/*<Footer />*/}
        </>

    );
}

export default Home;
