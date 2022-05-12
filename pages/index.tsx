import type {NextPage} from 'next'
import Nav from "../components/Nav";
import Header from "../components/Home/Header";
import Partners from "../components/Home/Partners";
import CubeTitle from "../components/Home/components/CubeTitle";
import SectionTitle from "../components/Home/components/SectionTitle";
import DustText from "../components/Home/components/DustText";
import Section from "../components/Home/components/Section";


const Home: NextPage = () => {
    return (
        <main className='font-sans text-blacky-black flex flex-col lg:gap-28 md:gap-16 gap-12 '>
            <header>
                <Nav/>
                <Header/>
            </header>
            <Partners/>
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
        </main>
    )
}

export default Home
