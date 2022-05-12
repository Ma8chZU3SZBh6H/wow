import React from 'react';
import SectionTitleWithCube from "../../components/Home/SectionTitleWithCube";
import DustText from "../../components/Home/DustText";
import SectionWithImgAndText from "../../components/Home/SectionWithImgAndText";

function How() {
    return (
        <SectionWithImgAndText reverse={true} text={<>
            <SectionTitleWithCube cube='HOW DOES IT WORK?'
                                  title='The first-ever Chrome extension that gives you an untraceable identity.'/>
            <DustText>
                Create a wallet, receive a backup seed key, deposit your crypto $$$ and let automation do the rest -
                we'll mix your funds with the pool of coins in Blank to hide their origin.
            </DustText>
            <DustText>
                Each time you want to make a withdrawal, Blank will create a new wallet address for you with the
                amount of crypto $$$ that you requested.
            </DustText>
        </>} img={<>
            <img className='md:block hidden max-h-[562px]' src='/home/wallet/tablesLG.svg' alt=''/>
            <img className='md:hidden block' src='/home/wallet/tablesSM.svg' alt=''/>
        </>}/>
    );
}

export default How;