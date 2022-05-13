import type {NextPage} from 'next'
import Header from "../segments/Home/Header";
import Partners from "../segments/Home/Partner";
import Why from "../segments/Home/Why";
import What from "../segments/Home/What";
import React from "react";
import How from "../segments/Home/How";
import Privacy from "../segments/Home/Privacy";
import Security from "../segments/Home/Security";
import Option from "../segments/Home/Option";
import Utility from "../segments/Home/Utility";
import Finance from "../segments/Home/Finance";
import Table from "../segments/Home/Table";
import Market from "../segments/Home/market";
import Roadmap from "../segments/Home/Roadmap";
import People from "../segments/Home/People";
import Ocean from "../segments/Home/Ocean";
import Footer from "../segments/Home/Footer";
import Nav from "../segments/Nav";


const Home: NextPage = () => {
    return (
        <main className='font-sans text-blacky-black flex flex-col lg:gap-28 gap-16 '>
            <header className='md:pt-28 md:pt-26 pt-28 bg-blue-sky'>
                <Nav/>
                <Header/>
            </header>
            <Partners/>
            <Why/>
            <What/>
            <How/>
            <Privacy/>
            <Security/>
            <Option/>
            <Utility/>
            <Finance/>
            <Table/>
            <Market/>
            <Roadmap/>
            <People/>
            <Partners/>
            <footer>
                <Ocean/>
                <Footer/>
            </footer>
        </main>
    )
}

export default Home
