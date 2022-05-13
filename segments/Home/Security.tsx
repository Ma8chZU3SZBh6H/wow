import React from 'react';
import SectionTitleWithCube from "../../components/Home/SectionTitleWithCube";
import DustText from "../../components/Home/DustText";
import CheckedTitle from "../../components/Home/CheckedTitle";
import SectionWithImgAndText from "../../components/Home/SectionWithImgAndText";
import Fade from "../../components/Fade";

function Security() {
    return (
        <Fade>
            <SectionWithImgAndText reverse={true} text={<>
                <div id='security' className='absolute top-0 scroll-mt-[150px]'></div>
                <SectionTitleWithCube cube='100% SECURE'
                                      title='Protected by smart contracts that only you have the access to.'/>
                <DustText>
                    Independent auditors audit CoinX’s smart contracts before every release. Once the code is live, it
                    remains fixed. No intruder can manipulate it, change it, nor twist it anyhow. We put our money where
                    our mouths are, so we will provide initial liquidity in CoinX smart contracts to provide privacy
                    coverage for your transfers.
                </DustText>
                <div className='flex flex-col gap-4'>
                    <CheckedTitle>Hierarchical Deterministic Seed Key</CheckedTitle>
                    <CheckedTitle>Open Source</CheckedTitle>
                    <CheckedTitle>Secured with audits and bug bounties</CheckedTitle>
                </div>
            </>} img={<>
                <img className='max-h-[613px]' src='/home/security/app.png' alt=''/>
            </>}/>
        </Fade>
    );
}

export default Security;