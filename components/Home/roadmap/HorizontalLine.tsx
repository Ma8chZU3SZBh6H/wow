import React from 'react';

function HorizontalLine({first = false, progress = 0}: { first?: boolean, progress?: number }) {
    return (
        <div className='flex items-center'>
            <div className={`w-[10px] h-[10px] ${progress > 0 ? 'bg-blue-water' : 'bg-faded-cube'}`}></div>
            {progress > 0 ? <>
                <div className='h-[2px] bg-blue-water' style={{width: `${progress}%`}}></div>
                <div className='h-[2px] bg-faded-cube' style={{width: `${100 - progress}%`}}></div>
            </> : <div className='h-[2px] w-full bg-faded-cube'></div>}
        </div>
    );
}

export default HorizontalLine;