import React from 'react';
import SectionTitleWithCube from "../../components/Home/SectionTitleWithCube";
import DustText from "../../components/Home/DustText";
import BtnBlue from "../../components/Home/BtnBlue";
import BtnWhite from "../../components/Home/BtnWhite";
import SectionCentered from "../../components/Home/SectionCentered";
import Fade from "../../components/Fade";

function Option() {
    return (
        <Fade>
            <SectionCentered
                className='bg-optionCubeImg bg-optionCubeSize bg-optionCubePos bg-no-repeat bg-lacky-blacky text-white py-28'>
                <div className='flex flex-col gap-4'>
                    <SectionTitleWithCube cube='YOUR OPTION TO GO COINX'
                                          title='If given a choice: do you reveal your identity or remain anonymous?'
                                          center={true}/>
                    <DustText dark={true}>
                        Because privacy shouldn’t be an “opt-in.” With CoinX, it’s something you could occasionally
                        “opt-out” of with Your Free Will.
                    </DustText>
                </div>
                <div className='md:flex grid grid-cols-1 gap-6 md:flex-row flex-col items-center w-f'>
                    <BtnBlue/>
                    <BtnWhite dark={true}/>
                </div>
            </SectionCentered>
        </Fade>
    );
}

export default Option;