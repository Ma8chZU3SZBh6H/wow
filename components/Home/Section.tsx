import React from 'react';

function Section({children, className}: { children: JSX.Element | JSX.Element[], className?: string }) {
    return (
        <section
            className={`lg:px-28 md:px-16 px-6  ${className}`}>
            {children}
        </section>
    );
}

export default Section;