import type {NextPage} from 'next'
import Nav from "../components/Nav";
import Header from "../components/Home/Header";
import Partners from "../components/Home/Partners";
import Why from "../components/Home/Why";
import How from "../components/Home/How";
import SectionWithImgAndText from "../components/Home/components/SectionWithImgAndText";
import DustText from "../components/Home/components/DustText";
import React from "react";
import SectionTitleWithCube from "../components/Home/components/SectionTitleWithCube";
import CheckedTitle from "../components/Home/Security/components/CheckedTitle";

const Home: NextPage = () => {
    return (
        <main className='font-sans text-blacky-black flex flex-col lg:gap-28 gap-16 '>
            <header>
                <Nav/>
                <Header/>
            </header>
            <Partners/>
            <Why/>
            <How/>
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

            <SectionWithImgAndText text={<>
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
                <img className='max-h-[613px]' src='/home/security/app.png' alt=''/>
            </>}/>
        </main>
    )
}

export default Home
