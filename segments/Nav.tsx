import React, {useState} from 'react';
import Link from "next/link";
import BtnNotification from "../components/Nav/BtnNotification";
import Socials from "../components/Socials";

const menus = [
    {
        title: 'WHY BLANK',
        href: '#blank'
    },
    {
        title: 'HOW IT WORKS',
        href: '#how'
    },
    {
        title: 'METAMASK',
        href: '#mask'
    },
    {
        title: 'SECURITY',
        href: '#security'
    },
    {
        title: 'ROADMAP',
        href: '#roadmap'
    },
]


function Nav() {

    const [open, setOpen] = useState(false);
    const openHandler = () => {
        setOpen(!open);
    }

    return (
        <>
            <nav className='left-0 fixed w-full top-0 flex z-50 justify-between py-9 px-10 bg-blue-sky items-center'>
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
            <div
                className={`fixed z-50 lg:hidden top-0 left-0 min-h-screen w-screen grid grid-rows-[auto_1fr] transition duration-150 ${open ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                <div
                    className=' bg-white w-screen p-7 pb-20 flex flex-col gap-14 bg-menuImg bg-menuPos bg-menuSize bg-no-repeat '>
                    <div className='flex justify-between  '>
                        <h2 className='text-blacky-black font-extrabold text-24px '>COINX</h2>
                        <button onClick={openHandler}>
                            <img src='/nav/x.svg' alt=''/>
                        </button>
                    </div>
                    <button onClick={openHandler}
                            className=' flex flex-col gap-10 text-center text-16px md:text-32px font-extrabold text-blue-dust p-7 md:px-36'>
                        {menus.map(({href, title}, index) => <Link key={index}
                                                                   href={href}>
                            <div className=' w-full'>
                                {title}
                            </div>
                        </Link>)}
                    </button>
                    <BtnNotification/>
                    <div
                        className='flex justify-between mx-7 md:mx-36 flex-wrap gap-2 items-center justify-center'>
                        <Socials/>
                    </div>
                </div>
                <div className='bg-black/30'></div>
            </div>
        </>
    );
}

export default Nav