import React from 'react';
import Section from "../../components/Home/Section";
import TableTextItem from "../../components/Home/table/TableTextItem";
import TableCheckboxItem from "../../components/Home/table/TableCheckboxItem";
import Fade from "../../components/Fade";

const tableTitles = [
    {
        title: 'See why CoinX is better than others.',
        className: 'bg-blue-sky bg-tableTitleCubeTwoImg bg-tableTitleCubeTwoPos bg-no-repeat'
    },
    {
        title: 'CoinX',
        className: ''
    },
    {
        title: 'Metamask',
        className: 'bg-blue-sky border-r-[1px] bg-tableMCubeImg bg-tableMCubePos bg-no-repeat',
    },
    {
        title: 'Tornado.Cash',
        className: 'bg-blue-sky'
    },
]

const tableItems = [
    {
        title: 'Hidden History',
        c: 'true',
        m: 'false',
        t: 'true',
    },
    {
        title: '0 User Tracking',
        c: 'true',
        m: 'false',
        t: 'true',
    },
    {
        title: 'Browser Extension Wallet',
        c: 'true',
        m: 'true',
        t: 'false',
    },
    {
        title: 'Web3 ready for all DeFi applications',
        c: 'true',
        m: 'true',
        t: 'false',
    },
    {
        title: 'ERC-20 Support',
        c: 'true',
        m: 'true',
        t: '4',
    },
    {
        title: 'Partial Withdraw',
        c: 'true',
        m: 'true',
        t: 'false',
    },
    {
        title: 'Automatic Deposits',
        c: 'true',
        m: 'false',
        t: 'false',
    },
    {
        title: 'Referral system',
        c: 'true',
        m: 'false',
        t: 'false',
    },
    {
        title: 'Revenue Sharing',
        c: 'true',
        m: 'false',
        t: 'false',
    },
]

function Table() {
    return (
        <Fade>
            <Section className='grid grid-cols-1'>
                <div className='grid grid-cols-[1fr_1fr_1fr_1fr]'>
                    {tableTitles.map(({title, className}, index, array) =>
                        <div
                            className={` lg:p-10 md:px-10 px-3 py-6 font-extrabold lg:text-36px md:text-24px text-16px grid items-center justify-center border-b-[1px] border-faded-line ${className}`}
                            key={index + 'fes'}>
                            <div
                                className={`${index > 0 ? 'md:transform-none md:w-auto transform -rotate-[90deg] translate-y-[200%] sm:-rotate-[60deg] w-[1px]' : ''}`}>
                                {title}
                            </div>
                        </div>
                    )}
                    {tableItems.map(({c, t, m, title}, index, array) =>
                        <>
                            <TableTextItem array={array} index={index} title={title}/>
                            <TableCheckboxItem array={array} index={index} value={c}/>
                            <TableCheckboxItem array={array} index={index} value={m} border={true} bg={true}/>
                            <TableCheckboxItem array={array} index={index} value={t} bg={true} tCube={true}/>
                        </>
                    )}
                </div>
            </Section>
        </Fade>
    );
}

export default Table;