import React from 'react';

function BtnBlue({dark = false}: { dark?: boolean }) {
    return (
        <button
            className={`whitespace-nowrap text-12px font-extrabold text-white  rounded ${dark ? 'bg-lacky-blacky' : 'bg-blue-water'}`}>
            <div className='flex gap-16 px-6 py-4 justify-between'>
                <div>REQUEST EARLY ACCESS</div>
                <div className='w-4 h-4'>
                    <img width='16' height='16' src='/home/header/arrowWhite.svg' alt=''/>
                </div>
            </div>
        </button>
    );
}

export default BtnBlue;