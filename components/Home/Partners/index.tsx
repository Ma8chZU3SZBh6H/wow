import React from 'react';
import Section from "../components/Section";

const partners = [
    '/home/partners/fast.svg',
    '/home/partners/forbes.svg',
    '/home/partners/insider.svg',
    '/home/partners/tnw.svg',
    '/home/partners/wired.svg',
]

function Index() {
    return (
        <Section className='flex flex-col md:gap-12 gap-10 items-center justify-center text-center'>
            <h5 className='text-blue-dust text-12px font-extrabold'>OUR PARTNERS</h5>
            <div className='flex justify-center items-center  md:gap-16 gap-12 flex-wrap'>
                {partners.map((url, index) => <img className='h-[21.01px] md:h-[23.34px] lg:h-[38.13px]'
                                                   key={index + 'aab'}
                                                   src={url} alt=''/>)}
            </div>
        </Section>
    );
}

export default Index;