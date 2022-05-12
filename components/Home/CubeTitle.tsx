import React from 'react';

function CubeTitle({children}: { children: string }) {
    return (
        <div className='flex gap-2 items-center'>
            <div className='w-[9px]  h-[9px] bg-blue-water mb-[1px]'></div>
            <h4 className='text-12px font-bold'>{children}</h4>
        </div>
    );
}

export default CubeTitle;