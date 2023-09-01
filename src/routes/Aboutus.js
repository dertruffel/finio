// import {Route, Routes} from 'react-router-dom';
import Header from '../components/header/Header';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import AboutUsObject from "../components/aboutus/AboutUs";

function Home() {
    return (
        <>
            {/*<Header />*/}
            <Navbar />
            <AboutUsObject />
            {/*<Footer />*/}
        </>

    );
}

export default Home;
