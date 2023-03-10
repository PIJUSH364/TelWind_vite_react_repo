import React from 'react'

const Slide = ({ img, logo, description, name, subtitle }) => {

    return (
        <>
            <div className='flex flex-col lg:flex-row gap-14 items-center' >
                {/* left */}
                <img className='lg:w-1/2' src={img} alt="greenhouse-logo" />
                {/* right */}
                <div>
                    <p className='pb-14  tracking-wide text-xl text-[#000000c7]'>"{description}"</p>
                    <div className='flex flex-row  gap-10 justify-between items-stretch'>
                        <div >
                            <p className='text-xl font-semibold pb-2'>{name}</p>
                            <p className='text-[#000000c7] '>{subtitle}</p>
                        </div>
                        <div className='w-px bg-black'></div>
                        <img className='lg:w-60 w-28' src={logo} alt="greenhouse-logo" />
                    </div>
                </div>
            </div>
        </>

    )
}

export default Slide

