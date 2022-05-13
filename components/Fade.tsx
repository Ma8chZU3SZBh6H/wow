import {motion} from 'framer-motion';
import React from 'react';

function Fade({children}: { children: JSX.Element | JSX.Element[] }) {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{once: true}}
            transition={{duration: 0.3}}
            variants={{
                visible: {opacity: 1},
                hidden: {opacity: 0}
            }}
        >{children}</motion.div>
    );
}

export default Fade;