import React from 'react';

function SectionTitle({children}: { children: string }) {
    return (
        <h2 className='font-extrabold lg:text-58px text-32px'>{children}</h2>
    );
}

export default SectionTitle;