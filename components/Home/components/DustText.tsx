import React from 'react';

function DustText({children}: { children: string }) {
    return (
        <h2 className='text-18px text-blue-dust font-normal '>{children}</h2>
    );
}

export default DustText;