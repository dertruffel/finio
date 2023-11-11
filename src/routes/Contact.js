// import {Route, Routes} from 'react-router-dom';
import Header from '../components/header/Header';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import LoginObject from "../components/login/Login";
import ContactObject from "../components/contact/Contact";
import FooterAbsolute from "../components/footer/Footer-Absolute";

function Home() {
    return (
        <>
            {/*<Header />*/}
            <Navbar />
            <ContactObject />
            <FooterAbsolute />
        </>

    );
}

export default Home;
