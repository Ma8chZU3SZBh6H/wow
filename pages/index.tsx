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
import Section from "../components/Home/Section";
import SectionTitleWithCube from "../components/Home/SectionTitleWithCube";
import HorizontalLine from "../components/Home/roadmap/HorizontalLine";
import CubemarkTitle from "../components/Home/roadmap/CubemarkTitle";
import CubeBlock from "../components/Home/roadmap/CubeBlock";
import VerticleCubeGroup from "../components/Home/roadmap/VerticleCubeGroup";


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
            <Section className='flex flex-col gap-10'>
                <SectionTitleWithCube cube='ROADMAP'
                                      title='A roadmap that delivers instant functionality, with more to come.'/>

                <div className=' grid-1fr lg:hidden grid'>
                    <div className='flex flex-col  gap-x-8 '>
                        <VerticleCubeGroup year='2021 Q1' title='Coinx V2' progress={30}>
                            <CubeBlock>
                                <CubemarkTitle done={true}>Web extension as Tornado.Cash relayer</CubemarkTitle>
                                <CubemarkTitle>Proof-of-funds compliance key </CubemarkTitle>
                            </CubeBlock>
                            <CubeBlock>
                                <CubemarkTitle>Public Security Audit</CubemarkTitle>
                            </CubeBlock>
                        </VerticleCubeGroup>
                        <VerticleCubeGroup year='2021 Q2' title='CoinX V1'>
                            <CubeBlock>
                                <CubemarkTitle>ERC-20 Support</CubemarkTitle>
                                <CubemarkTitle>Automatic deposits</CubemarkTitle>
                                <CubemarkTitle>One time address</CubemarkTitle>
                                <CubemarkTitle>Referral system</CubemarkTitle>
                            </CubeBlock>
                        </VerticleCubeGroup>
                        <VerticleCubeGroup year='2021 Q3' title=''>
                            <CubeBlock>
                                <CubemarkTitle>CoinX functionality integration with Metamask snaps
                                    PlugIn. </CubemarkTitle>
                                <CubemarkTitle>Tor integration</CubemarkTitle>
                            </CubeBlock>
                        </VerticleCubeGroup>
                        <VerticleCubeGroup year='2021 Q4' title='CoinX V3'>
                            <CubeBlock>
                                <CubemarkTitle>Partial withdrawal </CubemarkTitle>
                                <CubemarkTitle>Unique pooling reward system</CubemarkTitle>
                            </CubeBlock>
                        </VerticleCubeGroup>
                    </div>
                </div>

                <div className='lg:grid hidden grid-cols-4 gap-y-6'>
                    <div className='text-24px font-bold'>2021 Q1</div>
                    <div className='text-24px font-bold'>2021 Q2</div>
                    <div className='text-24px font-bold'>2021 Q3</div>
                    <div className='text-24px font-bold'>2021 Q4</div>
                    <HorizontalLine progress={30} first={true}/>
                    <HorizontalLine/>
                    <HorizontalLine/>
                    <HorizontalLine/>
                    <div className='col-span-4 grid grid-cols-4 gap-4'>
                        <div className='flex flex-col gap-4'>
                            <h4 className='font-inter text-16px font-semibold'>CoinX V1 </h4>
                            <CubeBlock>
                                <CubemarkTitle done={true}>Web extension as Tornado.Cash relayer</CubemarkTitle>
                                <CubemarkTitle>Proof-of-funds compliance key </CubemarkTitle>
                            </CubeBlock>
                            <CubeBlock>
                                <CubemarkTitle>Public Security Audit</CubemarkTitle>
                            </CubeBlock>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <h4 className='font-inter text-16px font-semibold'>Coinx V2</h4>
                            <CubeBlock>
                                <CubemarkTitle>ERC-20 Support</CubemarkTitle>
                                <CubemarkTitle>Automatic deposits</CubemarkTitle>
                                <CubemarkTitle>One time address</CubemarkTitle>
                                <CubemarkTitle>Referral system</CubemarkTitle>
                            </CubeBlock>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <h4 className='font-inter text-16px font-semibold min-h-[24px]'></h4>
                            <CubeBlock>
                                <CubemarkTitle>CoinX functionality integration with Metamask snaps
                                    PlugIn. </CubemarkTitle>
                                <CubemarkTitle>Tor integration</CubemarkTitle>
                            </CubeBlock>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <h4 className='font-inter text-16px font-semibold'>CoinX V3</h4>
                            <CubeBlock>
                                <CubemarkTitle>Partial withdrawal </CubemarkTitle>
                                <CubemarkTitle>Unique pooling reward system</CubemarkTitle>
                            </CubeBlock>
                        </div>
                    </div>
                </div>
            </Section>
        </main>
    )
}

export default Home
