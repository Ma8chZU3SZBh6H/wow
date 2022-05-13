import React from 'react';
import VerticleLine from "./VerticleLine";

function VerticleCubeGroup({
                               children,
                               year,
                               title,
                               progress
                           }: { children: JSX.Element | JSX.Element[], year: string, title: string, progress?: number }) {
    return (
        <div className='flex gap-8'>
            <VerticleLine progress={progress}/>
            <div className='flex flex-col md:pb-8 pb-4 md:gap-4 gap-2 w-full'>
                <div className='text-24px font-bold'>{year}</div>
                <h4 className='font-inter text-16px font-semibold'>{title}</h4>
                {children}
            </div>
        </div>
    );
}

export default VerticleCubeGroup;