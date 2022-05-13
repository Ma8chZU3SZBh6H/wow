import React from 'react';
import SectionTitleWithCube from "../../components/Home/SectionTitleWithCube";
import SectionCentered from "../../components/Home/SectionCentered";
import Fade from "../../components/Fade";

const people = [
    {
        icon: '/home/people/one.svg',
        role: 'OPERATIONS LEAD',
        name: 'Alfonso Carder'
    },
    {
        icon: '/home/people/two.svg',
        role: 'TECHNICAL LEAD',
        name: 'Jaxson Rhiel Madsen'
    },
    {
        icon: '/home/people/three.svg',
        role: 'CRYPTOGRAPHY',
        name: 'Ryan Baptista'
    },
    {
        icon: '/home/people/four.svg',
        role: 'DEVELOPMENT',
        name: 'Brandon Westervelt'
    },
    {
        icon: '/home/people/five.svg',
        role: 'DEVELOPMENT',
        name: 'Nolan Vaccaro'
    },
    {
        icon: '/home/people/siz.svg',
        role: 'DEVELOPMENT',
        name: 'Jaydon Korsgaard'
    },
    {
        icon: '/home/people/seven.svg',
        role: 'CRYPTOGRAPHY',
        name: 'Ruben Aminoff'
    },
    {
        icon: '/home/people/eight.svg',
        role: 'COMMUNICATIONS',
        name: 'James Press'
    },
]

function People() {
    return (
        <Fade>
            <SectionCentered className='bg-faded-cube bg-peopleCubesImg bg-peopleCubesPos bg-no-repeat bg-100  py-28'>
                <div className='flex flex-col gap-16'>
                    <SectionTitleWithCube cube='TEAM'
                                          title='We choose to reveal our identities so you can maintain anonymity.'
                                          center={true}/>

                    <div
                        className='w-full grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-10'>
                        {people.map(({name, role, icon}, index, array) => <div key={index + 'gsddfs'}
                                                                               className='flex flex-col text-left gap-8'>
                            <img src={icon} alt=''/>
                            <div className='flex flex-col gap-4'>
                                <h5 className='text-blue-water text-10px font-bold'>{role}</h5>
                                <div className='flex gap-2 items-center'>
                                    <h4 className='text-18px font-bold'>{name}</h4>
                                    <img src='/home/people/linkedin.svg' alt=''/>
                                </div>
                            </div>
                        </div>)}

                    </div>


                </div>
            </SectionCentered>
        </Fade>
    );
}

export default People;