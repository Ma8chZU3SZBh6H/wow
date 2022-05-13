import React from 'react';
import SectionTitleWithCube from "../../components/Home/SectionTitleWithCube";
import SectionCentered from "../../components/Home/SectionCentered";
import Fade from "../../components/Fade";

function Finance() {
    return (
        <Fade>
            <SectionCentered>
                <div className='flex flex-col gap-4'>
                    <SectionTitleWithCube cube='INNOVATING DECENTRALIZED FINANCE'
                                          title='We’re taking the best that exists, and making it better.'
                                          center={true}/>
                </div>
            </SectionCentered>
        </Fade>
    );
}

export default Finance;