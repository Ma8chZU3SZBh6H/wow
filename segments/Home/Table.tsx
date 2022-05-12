import React from 'react';
import Section from "../../components/Home/Section";

const tableTitles = [
    {
        title: 'See why CoinX is better than others.',
        className: 'bg-blue-sky'
    },
    {
        title: 'CoinX',
        className: ''
    },
    {
        title: 'Metamask',
        className: 'bg-blue-sky border-r-[1px]'
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
        className: '',
    },
    {
        title: '0 User Tracking',
        c: 'true',
        m: 'false',
        t: 'true',
        className: '',
    },
    {
        title: 'Browser Extension Wallet',
        c: 'true',
        m: 'true',
        t: 'false',
        className: '',
    },
    {
        title: 'Web3 ready for all DeFi applications',
        c: 'true',
        m: 'true',
        t: 'false',
        className: '',
    },
    {
        title: 'ERC-20 Support',
        c: 'true',
        m: 'true',
        t: '4',
        className: '',
    },
    {
        title: 'Partial Withdraw',
        c: 'true',
        m: 'true',
        t: 'false',
        className: '',
    },
    {
        title: 'Automatic Deposits',
        c: 'true',
        m: 'false',
        t: 'false',
        className: '',
    },
    {
        title: 'Referral system',
        c: 'true',
        m: 'false',
        t: 'false',
        className: '',
    },
    {
        title: 'Revenue Sharing',
        c: 'true',
        m: 'false',
        t: 'false',
        className: '',
    },
]

function Table() {
    return (
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
                {tableItems.map(({c, t, m, title, className}, index, array) =>
                    <>
                        <div
                            className='lg:p-10 md:px-6 px-3 py-6 lg:text-18px md:text-14px text-12px font-bold bg-blue-sky border-faded-line'
                            key={index + 'etwr'}>{title}</div>
                        <div
                            className='lg:p-10 md:px-6 px-3 py-6 md:text-20px text-12px font-bold grid items-center justify-center border-faded-line'
                            key={index + 'etwr'}>{c === 'true' ?
                            <img className='lg:w-[22.67px] w-[16px]' src='/home/privacy/checkmark.svg'
                                 alt=''/> : (c === 'false' ? '' : c)}</div>
                        <div
                            className='lg:p-10 md:px-6 px-3 py-6 lg:text-24px md:text-20px text-16px font-bold grid items-center justify-center bg-blue-sky border-faded-line border-r-[1px]'
                            key={index + 'etwr'}>{m === 'true' ?
                            <img className='lg:w-[22.67px] w-[16px]' src='/home/privacy/checkmark.svg'
                                 alt=''/> : (m === 'false' ? '' : m)}</div>
                        <div
                            className='lg:p-10 md:px-6 px-3 py-6 md:text-20px text-12px  font-bold grid items-center justify-center bg-blue-sky border-faded-line'
                            key={index + 'etwr'}>{t === 'true' ?
                            <img className='lg:w-[22.67px] w-[16px]' src='/home/privacy/checkmark.svg'
                                 alt=''/> : (t === 'false' ? '' : t)}</div>
                    </>
                )}
            </div>
        </Section>
    );
}

export default Table;