import React from 'react';
import Section from "./Section";

function SectionWithDoubleText({
                                   text,
                                   text2,
                                   reverse = false
                               }: { text: JSX.Element | JSX.Element[], text2: JSX.Element | JSX.Element[], reverse?: boolean }) {
    return (
        <Section className='flex flex-col grid-cols-2 lg:grid lg:gap-28 md:gap-16 gap-12 '>
            <div className='flex flex-col md:gap-9 gap-6'>
                {text}
            </div>
            <div className='flex flex-col md:gap-9 gap-6 lg:mt-16'>
                {text2}
            </div>
        </Section>
    );
}

export default SectionWithDoubleText;