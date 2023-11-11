// import {Route, Routes} from 'react-router-dom';
import Header from '../components/header/Header';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import CalculatorEarning from "../components/calculators/CalculatorEarning";
import FooterAbsolute from "../components/footer/Footer-Absolute";

function Home() {
    return (
        <>
            {/*<Header />*/}
            <Navbar />
            <CalculatorEarning />
            <FooterAbsolute />
        </>

    );
}

export default Home;
