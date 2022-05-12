import React, {useState} from 'react';
import Link from "next/link";
import BtnNotification from "./items/BtnNotification";

const menus = [
    {
        title: 'Why Blank',
        href: '/'
    },
    {
        title: 'How It Works',
        href: '/'
    },
    {
        title: 'Metamask',
        href: '/'
    },
    {
        title: 'Security',
        href: '/'
    },
    {
        title: 'Roadmap',
        href: '/'
    },
]

const socials = [
    '/nav/m.svg',
    '/nav/github.svg',
    '/nav/twitter.svg',
    '/nav/plane.svg',
    '/nav/linkedin.svg'
]

function Nav() {

    const [open, setOpen] = useState(false);
    const openHandler = () => {
        setOpen(!open);
    }

    return (
        <>
            <nav className='flex justify-between py-9 px-10 bg-blue-sky items-center'>
                <h2 className='text-blacky-black font-extrabold text-24px'>COINX</h2>
                <div className='flex gap-8 text-blue-dust font-extrabold text-12px items-center'>
                    <div className='gap-8 lg:flex hidden'>
                        {menus.map(({href, title}, index) => <Link key={index} href={href}>{title}</Link>)}
                    </div>
                    <div className='flex gap-8'>
                        <BtnNotification/>
                        <button onClick={openHandler}>
                            <img className='lg:hidden visible' src='/nav/menu.svg' alt=''/>
                        </button>
                    </div>
                </div>
            </nav>
            {open && <div className='absolute lg:hidden top-0 left-0 min-h-screen w-screen grid grid-rows-[auto_1fr]'>
                <div
                    className=' bg-white w-screen p-7 pb-20 flex flex-col gap-14 bg-menuImg bg-menuPos bg-menuSize bg-no-repeat '>
                    <div className='flex justify-between  '>
                        <h2 className='text-blacky-black font-extrabold text-24px '>COINX</h2>
                        <button onClick={openHandler}>
                            <img src='/nav/x.svg' alt=''/>
                        </button>
                    </div>
                    <div
                        className='flex flex-col gap-10 text-center text-16px md:text-32px font-extrabold text-blue-dust p-7 md:px-36'>
                        {menus.map(({href, title}, index) => <Link key={index} href={href}>{title}</Link>)}
                    </div>
                    <BtnNotification/>
                    <div className='flex justify-between mx-7 md:mx-36 flex-wrap gap-2 items-center justify-center'>
                        {socials.map((value, index) => <img key={index + 'aa'} src={value} alt=''/>)}
                    </div>
                </div>
                <div className='bg-black/30'></div>
            </div>}
        </>
    );
}

export default Nav