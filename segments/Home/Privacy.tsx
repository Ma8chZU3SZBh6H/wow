import React from 'react';
import SectionTitleWithCube from "../../components/Home/SectionTitleWithCube";
import DustText from "../../components/Home/DustText";
import CheckedTitle from "../../components/Home/CheckedTitle";
import SectionWithImgAndText from "../../components/Home/SectionWithImgAndText";
import Fade from "../../components/Fade";

function Privacy() {
    return (
        <Fade>
            <SectionWithImgAndText text={<>
                <div id='mask' className='absolute top-0 scroll-mt-[150px]'></div>
                <SectionTitleWithCube cube='PRIVACY BY DESIGN'
                                      title='Metamask x Tornado Cash'/>
                <DustText>
                    Your funds go into the smart contract as yours but they exit named CoinX. We use cryptographic
                    proofs to guarantee that no one can link your withdrawals to deposits, unless you want them to. In
                    technical language, we use the zkSnark technology to do it. Only the user gets the secret to a given
                    deposit, which allows to withdraw the correlating funds from CoinX under a new address.
                </DustText>
                <div className='flex flex-col gap-4'>
                    <CheckedTitle>ETH, WBTC and all ERC-20 support</CheckedTitle>
                    <CheckedTitle>Automatic Deposits</CheckedTitle>
                    <CheckedTitle>Partial Withdraw</CheckedTitle>
                </div>
            </>} img={<>
                <img className='max-h-[613px]' src='/home/privacy/app.png' alt=''/>
            </>}/>
        </Fade>
    );
}

export default Privacy;