import React from 'react';

function CubemarkTitle({children, done = false}: { children: string, done?: boolean }) {
    return (
        <div className='flex gap-4 '>
            {done ? <img className='w-[11.33px] ml-2' src='/home/privacy/checkmark.svg'
                         alt=''/> :
                <div className={`w-[9px] h-[9px] m-2 shrink-0  ${done ? 'bg-blue-water' : 'bg-lacky-blacky'}`}></div>}

            <p className={`${done ? 'text-blue-water' : ''}`}>{children}</p>
        </div>
    );
}

export default CubemarkTitle;