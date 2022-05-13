import React from 'react';
import DustText from "../../components/Home/DustText";
import Section from "../../components/Home/Section";
import Fade from "../../components/Fade";

function Footer() {
    return (
        <Fade>
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
        </Fade>
    );
}

export default Footer;