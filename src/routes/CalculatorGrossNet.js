// import {Route, Routes} from 'react-router-dom';
import Header from '../components/header/Header';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import CalculatorEarning from "../components/calculators/CalculatorEarning";
import FooterAbsolute from "../components/footer/Footer-Absolute";
import FooterBigMargin from "../components/footer/Footer-Big-Margin";

function Home() {
    return (
        <>
            {/*<Header />*/}
            <Navbar />
            <CalculatorEarning />
            <Footer />
        </>

    );
}

export default Home;
