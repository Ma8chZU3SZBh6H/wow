import React from 'react';
import SectionTitleWithCube from "../../components/Home/SectionTitleWithCube";
import SectionCentered from "../../components/Home/SectionCentered";

function Finance() {
    return (
        <SectionCentered>
            <div className='flex flex-col gap-4'>
                <SectionTitleWithCube cube='INNOVATING DECENTRALIZED FINANCE'
                                      title='We’re taking the best that exists, and making it better.'
                                      center={true}/>
            </div>
        </SectionCentered>
    );
}

export default Finance;