import React from 'react';

function TableCheckboxItem({
                               value,
                               index,
                               array,
                               border = false,
                               bg = false,
                               tCube = false,
                           }: { value: string, index: number, array: object[], border?: boolean, bg?: boolean, tCube?: boolean }) {
    return (
        <div
            className={` ${index === 8 && tCube ? 'bg-tableTCubeImg bg-tableTCubePos bg-no-repeat' : ''} ${index === (array.length - 1) ? '' : 'border-b-[1px]'} ${border ? 'border-r-[1px]' : ''} ${bg ? 'bg-blue-sky' : ''} border-faded-line  font-inter lg:p-10 md:px-6 px-3 py-6 md:text-20px text-12px font-bold grid items-center justify-center border-faded-line `}
            key={index + 'etwr'}>{value === 'true' ?
            <img className='lg:w-[22.67px] w-[16px]'
                 src={bg ? '/home/table/checkmark.svg' : '/home/privacy/checkmark.svg'}
                 alt=''/> : (value === 'false' ? '' : value)}</div>
    );
}

export default TableCheckboxItem;