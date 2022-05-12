import React from 'react';

const partners = [
    '/home/partners/fast.svg',
    '/home/partners/forbes.svg',
    '/home/partners/insider.svg',
    '/home/partners/tnw.svg',
    '/home/partners/wired.svg',
]

function Index() {
    return (
        <section className='grid grid-rows-2 items-center justify-center lg:py-20 md:py-16 p-6 text-center gap-6'>
            <h5 className='text-blue-dust text-12px font-extrabold'>OUR PARTNERS</h5>
            <div className='flex justify-center items-center gap-16 flex-wrap'>
                {partners.map((url, index) => <img className='h-[21.01px] md:h-[23.34px] lg:h-[38.13px]'
                                                   key={index + 'aab'}
                                                   src={url} alt=''/>)}
            </div>
        </section>
    );
}

export default Index;