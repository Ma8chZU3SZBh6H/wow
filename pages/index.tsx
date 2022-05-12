import type {NextPage} from 'next'
import Nav from "../components/Nav";
import Header from "../components/Home/Header";
import Partners from "../components/Home/Partners";
import Why from "../components/Home/Why";
import How from "../components/Home/How";

const Home: NextPage = () => {
    return (
        <main className='font-sans text-blacky-black flex flex-col lg:gap-28 md:gap-16 gap-12 '>
            <header>
                <Nav/>
                <Header/>
            </header>
            <Partners/>
            <Why/>
            <How/>
        </main>
    )
}

export default Home
