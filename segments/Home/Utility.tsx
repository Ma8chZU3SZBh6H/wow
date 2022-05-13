import React from 'react';
import SectionTitleWithCube from "../../components/Home/SectionTitleWithCube";
import SectionWithDoubleText from "../../components/Home/SectionWithDoubleText";
import Fade from "../../components/Fade";

const utilities = [
    {
        icon: '/home/utility/free.svg',
        text: 'Fee reduction for token holders'
    },
    {
        icon: '/home/utility/fee.svg',
        text: 'Token burn from 1/3rd of the fees'
    },
    {
        icon: '/home/utility/reward.svg',
        text: 'Referral and reward systems use only BLNK tokens'
    },
    {
        icon: '/home/utility/earn.svg',
        text: 'ETH/BLNK Liquidity Providers earn 1/3rd of the fees'
    },
    {
        icon: '/home/utility/features.svg',
        text: 'Exclusive features and "access-first" functionality to token holders'
    },
]

function Utility() {
    return (
        <Fade>
            <SectionWithDoubleText text={<>
                <SectionTitleWithCube cube='COINX TOKEN' title='COINX Token Utility starts on Day 1.'/>
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

export default Utility;