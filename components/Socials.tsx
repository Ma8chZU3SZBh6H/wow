import React from 'react';
import {socials} from "../constants/socials";

function Socials() {
    return <>
        {socials.map((value, index) => <img key={index + 'aa'} src={value} alt=''/>)}
    </>
}

export default Socials;