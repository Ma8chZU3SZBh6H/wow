import type {NextPage} from 'next'
import Nav from "../components/Nav";
import Header from "../components/Home/Header";
import Partners from "../components/Home/Partners";


const Home: NextPage = () => {
    return (
        <main className='font-sans text-blacky-black'>
            <Nav/>
            <Header/>
            <Partners/>
        </main>
    )
}

export default Home
