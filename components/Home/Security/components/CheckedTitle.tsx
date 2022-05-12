import React from 'react';

function CheckedTitle({children}: { children: string }) {
    return (
        <div className='flex gap-2 items-center'>
            <img src='/home/security/checkmark.svg' alt=''/>
            <h4 className='text-12px font-bold'>{children}</h4>
        </div>
    );
}

export default CheckedTitle;