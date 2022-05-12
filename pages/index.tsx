import type {NextPage} from 'next'
import Nav from "../components/Nav";
import Header from "../components/Home/Header";
import Partners from "../components/Home/Partners";
import Why from "../components/Home/Why";
import How from "../components/Home/How";
import SectionWithImgAndText from "../components/Home/components/SectionWithImgAndText";
import DustText from "../components/Home/components/DustText";
import React from "react";
import SectionTitleWithCube from "../components/Home/components/SectionTitleWithCube";

const Home: NextPage = () => {
    return (
        <main className='font-sans text-blacky-black flex flex-col lg:gap-28 gap-16 '>
            <header>
                <Nav/>
                <Header/>
            </header>
            <Partners/>
            <Why/>
            <How/>
            <SectionWithImgAndText reverse={true} text={<>
                <SectionTitleWithCube cube='HOW DOES IT WORK?'
                                      title='The first-ever Chrome extension that gives you an untraceable identity.'/>
                <DustText>
                    Create a wallet, receive a backup seed key, deposit your crypto $$$ and let automation do the rest -
                    we'll mix your funds with the pool of coins in Blank to hide their origin.
                </DustText>
                <DustText>
                    Each time you want to make a withdrawal, Blank will create a new wallet address for you with the
                    amount of crypto $$$ that you requested.
                </DustText>
            </>} img={<>
                <img className='md:block hidden' src='/home/wallet/tablesLG.svg' alt=''/>
                <img className='md:hidden block' src='/home/wallet/tablesSM.svg' alt=''/>
            </>}/>
        </main>
    )
}

export default Home
