import React from 'react';

function SectionTitle({children, className}: { children: string, className?: string }) {
    return (
        <h2 className={`font-extrabold lg:text-58px text-32px ${className}`}>{children}</h2>
    );
}

export default SectionTitle;