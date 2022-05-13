import React from 'react';

function TableTextItem({
                           title,
                           className,
                           index,
                           array,
                       }: { title: string, className?: string, index: number, array: object[] }) {
    return (
        <div
            className={`${index === 8 ? 'bg-tableTitleCubeImg bg-tableTitleCubePos bg-no-repeat' : ''} ${index === (array.length - 1) ? '' : 'border-b-[1px] border-faded-line'} lg:p-10 md:px-6 px-3 py-6 lg:text-18px md:text-14px text-12px font-bold bg-blue-sky border-faded-line`}
            key={index + 'etwr'}>{title}</div>
    );
}

export default TableTextItem;