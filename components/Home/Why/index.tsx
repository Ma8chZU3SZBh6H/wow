import React from 'react';
import CubeTitle from "../components/CubeTitle";
import SectionTitle from "../components/SectionTitle";
import DustText from "../components/DustText";
import Section from "../components/Section";

function Index() {
    return (
        <Section className='flex flex-col grid-cols-2 lg:grid lg:gap-28 md:gap-16 gap-12'>
            <div className='flex flex-col gap-9'>
                <CubeTitle>WHY GO COINX?</CubeTitle>
                <SectionTitle>You’re not anonymous, even on blockchain.</SectionTitle>
                <DustText>
                    Even before you connect your wallet, your IP is exposed. Once you connect, your wallet address
                    is exposed. If anyone wants to trace you, they can see the decentralized apps you used, the
                    transfers you made, and the amount of crypto $$$ you hold in your account.
                </DustText>
            </div>
            <div className='flex justify-center'>
                <img className='md:block hidden' src='/home/why/tablesLG.svg' alt=''/>
                <img className='md:hidden block' src='/home/why/tablesSM.svg' alt=''/>
            </div>
        </Section>
    );
}

export default Index;