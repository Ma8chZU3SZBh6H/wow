import React from 'react';
import CubeTitle from "./CubeTitle";
import SectionTitle from "./SectionTitle";

function SectionTitleWithCube({
                                  cube,
                                  title,
                                  noWrap = false,
                                  center = false
                              }: { cube: string, title: string, noWrap?: boolean, center?: boolean }) {
    return (
        <div className={`flex-col flex md:gap-6 gap-3 ${center ? 'lg:items-center' : ''}`}>
            <CubeTitle>{cube}</CubeTitle>
            <SectionTitle className={`${noWrap ? 'md:whitespace-nowrap' : ''}`}>{title}</SectionTitle>
        </div>
    );
}

export default SectionTitleWithCube;