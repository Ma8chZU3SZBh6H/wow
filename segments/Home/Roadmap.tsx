import React from 'react';
import SectionTitleWithCube from "../../components/Home/SectionTitleWithCube";
import VerticleCubeGroup from "../../components/Home/roadmap/VerticleCubeGroup";
import CubeBlock from "../../components/Home/roadmap/CubeBlock";
import CubemarkTitle from "../../components/Home/roadmap/CubemarkTitle";
import HorizontalLine from "../../components/Home/roadmap/HorizontalLine";
import Section from "../../components/Home/Section";
import Fade from "../../components/Fade";

function Roadmap() {
    return (
        <Fade>
            <Section className='relative flex flex-col gap-10'>
                <div id='roadmap' className='absolute top-0 scroll-mt-[150px]'></div>
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
        </Fade>
    );
}

export default Roadmap;