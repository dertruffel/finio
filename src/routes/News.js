// import {Route, Routes} from 'react-router-dom';
import Header from '../components/header/Header';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import NewsObject from "../components/news/News";

function Home() {
    return (
        <>
            {/*<Header />*/}
            <Navbar />
            <NewsObject />
            <Footer />
        </>

    );
}

export default Home;
