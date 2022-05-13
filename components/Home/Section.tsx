import React from 'react';

function Section({
                     children,
                     className,
                     id
                 }: { children: JSX.Element | JSX.Element[], className?: string, id?: string }) {
    return (
        <section
            id={id}
            className={`lg:px-28 md:px-16 px-6 ${className}`}>
            {children}
        </section>
    );
}

export default Section;