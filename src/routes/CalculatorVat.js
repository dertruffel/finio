// import {Route, Routes} from 'react-router-dom';
import Header from '../components/header/Header';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import CalculatorVat from "../components/calculators/CalculatorVat";
import FooterAbsolute from "../components/footer/Footer-Absolute";


function Home() {
    return (
        <>
            {/*<Header />*/}
            <Navbar />
            <CalculatorVat />
            <FooterAbsolute />
        </>

    );
}

export default Home;
