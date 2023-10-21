// import {Route, Routes} from 'react-router-dom';
import Header from '../components/header/Header';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import CalculatorVat from "../components/calculators/CalculatorVat";


function Home() {
    return (
        <>
            {/*<Header />*/}
            <Navbar />
            <CalculatorVat />
            {/*<Footer />*/}
        </>

    );
}

export default Home;
