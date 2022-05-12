import React from 'react';
import Socials from "../../Socials";
import DustText from "../components/DustText";
import Section from "../components/Section";
import SectionTitleWithCube from "../components/SectionTitleWithCube";

function Header() {
    return (
        <Section
            className='lg:grid grid-cols-2 flex flex-col py-8 px-6 lg:gap-16 md:gap-24 gap-12 bg-blue-sky lg:pb-32 relative'>
            <div className=' flex-col gap-7 lg:flex hidden absolute top-28 left-8'>
                <Socials/>
            </div>
            <div className='flex flex-col md:gap-12 gap-6  '>
                <SectionTitleWithCube cube='THE MOST PRIVATE, NON-CUSTODIAL ETHEREUM WALLET'
                                      title='Reclaim privacy on your Ethereum transfers'/>
                <DustText>
                    CoinX hides your financial data by mixing
                    transfers with
                    the pool of funds
                    within Blank,
                    ensuring that outward transfers remain anonymous. Your privacy level only goes up with each
                    additional transfer inside.
                </DustText>
                <div className='flex gap-6 md:flex-row flex-col'>
                    <button
                        className='whitespace-nowrap text-12px font-extrabold text-white bg-blue-water px-6 py-4 rounded flex gap-16 justify-between'>REQUEST
                        EARLY
                        ACCESS
                        <img src='/home/header/arrowWhite.svg' alt=''/>
                    </button>
                    <button
                        className='whitespace-nowrap text-12px font-extrabold text-blacky-black border-2 border-blacky-black bg-blue-sky px-6 py-4 rounded flex gap-16 justify-between'>REQUEST
                        EARLY
                        ACCESS
                        <img src='/home/header/arrowBlack.svg' alt=''/>
                    </button>
                </div>
            </div>
            <div className='self-center justify-center flex relative md:min-h-[580px] min-h-[386px] w-full '>
                <img
                    className='md:max-h-[632px] max-h-[321px] z-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
                    src='/home/header/moon.svg' alt=''/>
                <img
                    className='md:max-h-[624px] max-h-[386px] z-30 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
                    src='/home/header/app.png' alt=''/>
            </div>
            <img className='z-20 absolute bottom-0 right-0 md:w-auto w-1/2' src='/home/header/cubes.svg' alt=''/>
        </Section>
    );
}

export default Header;