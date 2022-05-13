import React from 'react';

function DustText({children, dark}: { children: string, dark?: boolean }) {
    return (
        <h2 className={`text-18px font-normal font-inter ${dark ? 'text-grey-dust' : 'text-blue-dust'}`}>{children}</h2>
    );
}

export default DustText;