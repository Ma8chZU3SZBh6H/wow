import React from 'react';
import Section from "../../components/Home/Section";
import SectionTitleWithCube from "../../components/Home/SectionTitleWithCube";
import Fade from "../../components/Fade";

const adventages = [
    {
        title: 'Conceal your wealth',
        text: 'Only you can see, access, and manage your funds. We group your wealth with other individuals’ under a smart contract, so no one can track capital ownership but you.',
        icon: '/home/what/safe.svg',
        bg: 'bg-howCubeOneImg bg-howCubeOnePos'
    },
    {
        title: 'Hide origins of your wealth',
        text: 'Information about how you acquired your wealth should stay with you. We give you the option to hide or show your wealth origins.',
        icon: '/home/what/folder.svg',
        bg: 'bg-howCubeTwoImg bg-howCubeTwoPos'
    },
    {
        title: 'Cover your trading activity',
        text: 'No KYC. Maximum privacy. Each time you make a withdrawal or a new trade, you start on a blank piece of paper -- a new wallet with no previous activity history.',
        icon: '/home/what/paper.svg',
        bg: 'bg-howCubeThreeImg bg-howCubeThreePos'
    }
]

function What({}: {}) {
    return (
        <Fade>
            <Section className='flex flex-col md:gap-12 gap-6'>
                <div className='grid grid-cols-[minmax(208.5px,1fr)_auto_1fr] gap-8 items-end'>
                    <img className='pb-2 lg:block hidden ' src='/home/what/arrow.svg' alt=''/>
                    <SectionTitleWithCube cube='WHAT BLANK DOES' title='Hide it all. Go CoinX.' noWrap={true}
                                          center={true}/>
                    <div></div>
                </div>
                <div className='grid lg:grid-cols-3 grid-cols-1 lg:gap-6 md:gap-5 gap-4  '>
                    {adventages.map(({text, bg, icon, title}, index) => <div
                        key={index + 'efrgdfg'}
                        className={`${bg} bg-blue-sky bg-no-repeat md:px-10 md:py-16 p-5 flex md:justify-center items-start  flex flex-col md:items-center gap-5 md:gap-9 md:text-center`}>
                        <img className='max-h-[81px]' src={icon} alt=''/>
                        <div className='flex flex-col gap-6'>
                            <h6 className='text-20px font-bold'>{title}</h6>
                            <p>{text}</p>
                        </div>
                    </div>)}
                </div>
            </Section>
        </Fade>
    );
}

export default What;