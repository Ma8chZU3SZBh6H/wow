import React from 'react';

function BtnWhite({dark = false}: { dark?: boolean }) {
    return (
        <button
            className={`whitespace-nowrap text-12px font-extrabold text-blacky-black border-2   px-6 py-4 rounded flex gap-16 justify-between ${dark ? 'text-white border-white' : 'border-blacky-black bg-blue-sky'}`}>REQUEST
            EARLY
            ACCESS
            <div className='w-4 h-4'>
                {dark ? <img width='16' height='16' src='/home/header/arrowWhite.svg' alt=''/> :
                    <img src='/home/header/arrowBlack.svg' alt=''/>}
            </div>
        </button>
    );
}

export default BtnWhite;