import React from 'react';
import SectionTitleWithCube from "../../components/Home/SectionTitleWithCube";
import DustText from "../../components/Home/DustText";
import SectionWithDoubleText from "../../components/Home/SectionWithDoubleText";
import Fade from "../../components/Fade";

const utilities = [
    {
        icon: '/home/market/business.svg',
        text: 'Proven Business Model'
    },
    {
        icon: '/home/market/marketing.svg',
        text: 'Influencer Marketing'
    },
    {
        icon: '/home/market/reward.svg',
        text: 'Reward system allowing anyone to offer incentives for storing liquidity'
    },
    {
        icon: '/home/market/integration.svg',
        text: 'DeFi integrations & Metamask integration with snaps PlugIn'
    },
    {
        icon: '/home/market/system.svg',
        text: 'Referral system'
    },
]

function Market() {
    return (
        <Fade>
            <SectionWithDoubleText text={<>
                <SectionTitleWithCube cube='MARKET'
                                      title='We’ve eliminated friction to guarantee successful market entrance.'/>
                <DustText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.
                </DustText>
            </>} text2={<>
                <div className='grid grid-cols-2 md:gap-x-16 md:gap-y-10 gap-6'>
                    {utilities.map(({text, icon}, index) => <div key={index + 'sef'}
                                                                 className='flex flex-col gap-2 items-start'>
                        <img className='h-[28px]' src={icon} alt=''/>
                        <div className='font-bold text-16px font-inter'>{text}</div>
                    </div>)}

                </div>
            </>}/>
        </Fade>
    );
}

export default Market;