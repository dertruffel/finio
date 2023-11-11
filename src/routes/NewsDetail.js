// import {Route, Routes} from 'react-router-dom';
import Header from '../components/header/Header';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import NewsDetail from "../components/news/NewsDetail";
import FooterAbsolute from "../components/footer/Footer-Absolute";

function Home() {
    return (
        <>
            {/*<Header />*/}
            <Navbar />
            <NewsDetail />
            <FooterAbsolute />
        </>

    );
}

export default Home;
