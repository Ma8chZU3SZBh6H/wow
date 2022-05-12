import React from 'react';
import DustText from "../components/DustText";
import SectionWithImgAndText from "../components/SectionWithImgAndText";
import SectionTitleWithCube from "../components/SectionTitleWithCube";

function Why() {
    return (
        <SectionWithImgAndText text={<>
            <SectionTitleWithCube cube='WHY GO COINX?' title='You’re not anonymous, even on blockchain.'/>
            <DustText>
                Even before you connect your wallet, your IP is exposed. Once you connect, your wallet address
                is exposed. If anyone wants to trace you, they can see the decentralized apps you used, the
                transfers you made, and the amount of crypto $$$ you hold in your account.
            </DustText></>} img={<>
            <img className='md:block hidden' src='/home/why/tablesLG.svg' alt=''/>
            <img className='md:hidden block' src='/home/why/tablesSM.svg' alt=''/>
        </>}/>
    );
}

export default Why;