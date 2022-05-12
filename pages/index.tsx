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
import Section from "../components/Home/Section";
import SectionTitleWithCube from "../components/Home/SectionTitleWithCube";
import DustText from "../components/Home/DustText";
import BtnBlue from "../components/Home/BtnBlue";
import BtnWhite from "../components/Home/BtnWhite";

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
            <Section
                className='bg-optionCubeImg bg-optionCubeSize bg-optionCubePos bg-no-repeat bg-lacky-blacky text-white lg:text-center py-28 flex flex-col gap-10 lg:items-center'>
                <div className='flex flex-col gap-4'>
                    <SectionTitleWithCube cube='YOUR OPTION TO GO COINX'
                                          title='If given a choice: do you reveal your identity or remain anonymous?'
                                          center={true}/>
                    <DustText dark={true}>
                        Because privacy shouldn’t be an “opt-in.” With CoinX, it’s something you could occasionally
                        “opt-out” of with Your Free Will.
                    </DustText>
                </div>
                <div className='md:flex grid grid-cols-1 gap-6 md:flex-row flex-col items-center w-f'>
                    <BtnBlue/>
                    <BtnWhite dark={true}/>
                </div>
            </Section>
        </main>
    )
}

export default Home
