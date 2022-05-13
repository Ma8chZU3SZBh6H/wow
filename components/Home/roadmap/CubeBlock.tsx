import React from 'react';

function CubeBlock({children}: { children: JSX.Element | JSX.Element[] }) {
    return (
        <div
            className='bg-blue-sky p-6 flex flex-col gap-6 lg:w-auto w-full bg-roadmapCubeImg bg-roadmapCubePos bg-no-repeat'>{children}</div>
    );
}

export default CubeBlock;