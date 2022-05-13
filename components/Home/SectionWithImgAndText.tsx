import React from 'react';
import Section from "./Section";

function SectionWithImgAndText({
                                   text,
                                   img,
                                   reverse = false,
                                   id
                               }: { text: JSX.Element | JSX.Element[], img: JSX.Element | JSX.Element[], reverse?: boolean, id?: string }) {
    React.useEffect(() => {
    }, []);
    return (

        <Section
            className=' relative flex flex-col grid-cols-2 lg:grid lg:gap-28 md:gap-16 gap-12 '>
            <div className='absolute top-0 scroll-mt-[15vw]' id={id}></div>
            <div className='flex flex-col md:gap-9 gap-6'>
                {text}
            </div>
            <div className={`flex items-start justify-center  ${reverse ? 'lg:order-first' : ''}`}>
                {img}
            </div>
        </Section>

    );
}

export default SectionWithImgAndText;