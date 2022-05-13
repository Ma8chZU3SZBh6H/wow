import React from 'react';

function DustText({children, dark, color}: { children: string, dark?: boolean, color?: string }) {
    return (
        <h2 className={`md:text-18px text-16px font-normal font-inter ${color ? color : (dark ? 'text-grey-dust' : 'text-blue-dust')}`}>{children}</h2>
    );
}

export default DustText;