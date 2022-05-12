import React from 'react';
import Section from "./Section";

function SectionCentered({children, className}: { children: JSX.Element | JSX.Element[], className?: string }) {
    return (
        <Section
            className={`  lg:text-center  flex flex-col gap-10 lg:items-center ${className}`}>
            {children}
        </Section>
    );
}

export default SectionCentered;