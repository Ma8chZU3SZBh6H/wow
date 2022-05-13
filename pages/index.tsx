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
import Utility from "../segments/Home/Utility";
import Finance from "../segments/Home/Finance";
import Table from "../segments/Home/Table";
import Market from "../segments/Home/market";
import Roadmap from "../segments/Home/Roadmap";
import People from "../segments/Home/People";
import Ocean from "../segments/Home/Ocean";
import Section from "../components/Home/Section";
import DustText from "../components/Home/DustText";


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
            <Utility/>
            <Finance/>
            <Table/>
            <Market/>
            <Roadmap/>
            <People/>
            <Partners/>
            <div>
                <Ocean/>
                <Section
                    className='bg-lacky-blacky text-white py-28 flex flex-col gap-16 bg-footerCubesImg bg-footerCubesPos bg-100 bg-no-repeat bg-footerCubesSize'>
                    <div className='md:grid flex flex-col grid-cols-[2fr_1fr_1fr_1fr] gap-16'>
                        <div className='flex flex-col gap-8 lg:col-span-1 md:col-span-4'>
                            <h2 className=' font-extrabold text-24px'>COINX</h2>
                            <DustText color='text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod
                                tempor
                                incididunt ut labore et dolore magna aliqua.</DustText>
                        </div>
                        <div className='flex flex-col gap-8'>
                            <h2 className=' font-extrabold text-12px text-grey-foot'>COINX</h2>
                            <DustText color='text-white'>Privacy Policy</DustText>
                            <DustText color='text-white'>Terms & Conditions</DustText>
                        </div>
                        <div className='flex flex-col gap-8'>
                            <h2 className=' font-extrabold text-12px text-grey-foot'>SOCIALS</h2>
                            <DustText color='text-white'>Medium</DustText>
                            <DustText color='text-white'>Github</DustText>
                            <DustText color='text-white'>Privacy Policy</DustText>
                            <DustText color='text-white'>Twitter</DustText>
                            <DustText color='text-white'>Telegram</DustText>
                            <DustText color='text-white'>LinkedIn</DustText>
                        </div>
                        <div className='flex flex-col gap-8'>
                            <h2 className=' font-extrabold text-12px text-grey-foot'>COINX</h2>
                            <DustText color='text-white'>hello@coinx.com</DustText>
                        </div>
                    </div>
                    <div className='col-span-4'>
                        <DustText color='text-white'>Copyright © CoinX 2020. All rights reserved.</DustText>
                    </div>
                </Section>
            </div>
        </main>
    )
}

export default Home
