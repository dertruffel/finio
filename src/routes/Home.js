// import {Route, Routes} from 'react-router-dom';
import Header from '../components/header/Header';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import FooterAbsolute from "../components/footer/Footer-Absolute";
import HomeObject from "../components/home/HomeComponent";

function Home() {
    return (
        <>
            <Navbar />
            <HomeObject />
            <FooterAbsolute />
        </>

    );
}

export default Home;
