import React from 'react';

function VerticleLine({first = false, progress = 0}: { first?: boolean, progress?: number }) {
    return (
        <div className='flex flex-col items-center'>
            <div className={`h-[10px] w-[10px] ${progress > 0 ? 'bg-blue-water' : 'bg-faded-cube'}`}></div>
            {progress > 0 ? <>
                <div className='w-[2px] bg-blue-water' style={{height: `${progress}%`}}></div>
                <div className='w-[2px] bg-faded-cube' style={{height: `${100 - progress}%`}}></div>
            </> : <div className='w-[2px] h-full bg-faded-cube'></div>}
        </div>
    );
}

export default VerticleLine;