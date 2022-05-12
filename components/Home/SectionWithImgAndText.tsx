import React from 'react';
import Section from "./Section";

function SectionWithImgAndText({
                                   text,
                                   img,
                                   reverse = false
                               }: { text: JSX.Element | JSX.Element[], img: JSX.Element | JSX.Element[], reverse?: boolean }) {
    return (
        <Section className='flex flex-col grid-cols-2 lg:grid lg:gap-28 md:gap-16 gap-12'>
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