import type {NextPage} from 'next'
import Nav from "../components/Nav";
import Socials from "../components/Socials";


const Home: NextPage = () => {
    return (
        <main className='font-sans text-blacky-black'>
            <Nav/>
            <section
                className='lg:grid grid-cols-[auto_1fr_1fr] flex flex-col  py-8 px-6 lg:gap-16 md:gap-24 gap-12 bg-blue-sky lg:pb-32 relative'>
                <div className='mt-20 flex-col gap-7 lg:flex hidden'>
                    <Socials/>
                </div>
                <div className='flex flex-col md:gap-12 gap-6 text-12px font-extrabold '>
                    <div className='flex flex-col gap-8'>
                        <div className='flex gap-2 items-center'>
                            <div className='w-[9px] h-[9px] bg-blue-water mb-[1px]'></div>
                            <h4>THE MOST PRIVATE, NON-CUSTODIAL ETHEREUM WALLET</h4>
                        </div>
                        <h1 className='md:text-72px text-38px font-extrabold'>Reclaim privacy on your Ethereum
                            transfers</h1>
                    </div>
                    <h2 className='text-18px text-blue-dust font-normal '>CoinX hides your financial data by mixing
                        transfers with
                        the pool of funds
                        within Blank,
                        ensuring that outward transfers remain anonymous. Your privacy level only goes up with each
                        additional transfer inside.</h2>
                    <div className='flex gap-6 md:flex-row flex-col'>
                        <button
                            className='text-12px font-extrabold text-white bg-blue-water px-6 py-4 rounded flex gap-16 justify-between'>REQUEST
                            EARLY
                            ACCESS
                            <img src='/home/header/arrowWhite.svg' alt=''/>
                        </button>
                        <button
                            className='text-12px font-extrabold text-blacky-black border-2 border-blacky-black bg-blue-sky px-6 py-4 rounded flex gap-16 justify-between'>REQUEST
                            EARLY
                            ACCESS
                            <img src='/home/header/arrowBlack.svg' alt=''/>
                        </button>
                    </div>
                </div>
                <div className='self-center justify-center flex relative md:min-h-[580px] min-h-[386px] w-full '>
                    <img
                        className='md:max-h-[632px] max-h-[321px] z-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
                        src='/home/header/moon.svg' alt=''/>
                    <img
                        className='md:max-h-[624px] max-h-[386px] z-30 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
                        src='/home/header/app.png' alt=''/>
                </div>
                <img className='z-20 absolute bottom-0 right-0 md:w-auto w-1/2' src='/home/header/cubes.svg' alt=''/>
            </section>
        </main>
    )
}

export default Home
