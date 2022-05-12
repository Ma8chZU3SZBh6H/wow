import type {NextPage} from 'next'
import Nav from "../segments/Nav";
import Header from "../segments/Home/Header";
import Partners from "../segments/Home/Partner";
import Why from "../segments/Home/Why";
import What from "../segments/Home/What";
import React from "react";
import How from "../segments/Home/How";
import Privacy from "../segments/Home/Privacy";
import Security from "../segments/Home/Security";
import Option from "../segments/Home/Option";

const Home: NextPage = () => {
    return (
        <main className='font-sans text-blacky-black flex flex-col lg:gap-28 gap-16 '>
            <header>
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

        </main>
    )
}

export default Home
