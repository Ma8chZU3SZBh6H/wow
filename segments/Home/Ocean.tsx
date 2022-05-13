import React from 'react';
import SectionTitle from "../../components/Home/SectionTitle";
import BtnBlue from "../../components/Home/BtnBlue";
import BtnWhite from "../../components/Home/BtnWhite";
import SectionCentered from "../../components/Home/SectionCentered";
import Fade from "../../components/Fade";

function Ocean() {
    return (
        <Fade>
            <SectionCentered
                className='bg-oceanCubesImg bg-optionCubeSize bg-optionCubePos bg-no-repeat bg-blue-water text-white py-28'>
                <SectionTitle>Break free from government & big tech overwatch. CoinX. </SectionTitle>
                <div className='md:flex grid grid-cols-1 gap-6 md:flex-row flex-col items-center w-f'>
                    <BtnBlue dark={true}/>
                    <BtnWhite dark={true}/>
                </div>
            </SectionCentered>
        </Fade>
    );
}

export default Ocean;