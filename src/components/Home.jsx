import React, { useEffect } from 'react'
import ButtonCommon from './common/ButtonCommon'

const Home = () => {
    const textInOut = document.querySelector(".textInOut")


    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("scale-150");
                    entry.target.classList.add("opacity-80");

                    setTimeout(() => {
                        entry.target.classList.remove("opacity-80");
                        entry.target.classList.remove("scale-150");
                    }, 700);
                }
            });

        }, {
            threshold: 0.5
        });
        setTimeout(() => {
            observer.observe(textInOut);
        }, 10000);
    }, [textInOut])

    return (
        <div className='background-home text-white  text-center md:p-24 p-5 pt-32 box-border overflow-x-hidden'>
            <div className='duration-700 textInOut '>
                <h1 className='text-6xl font-semibold pb-2 '>Your recruitment stack </h1>
                <h1 className='text-6xl font-semibold pb-8 '>needs a raise</h1>
            </div>

            <p className='text-lg font-normal pb-8'>Kula is a recruitment automation platform that lets you proactively reach out and engage with the top talent everywhere. With Kula, you have complete control, visibility, and predictability on your entire talent pipeline.</p>
            <div className='md:flex justify-center'>
                <div className='flex flex-col md:flex-row gap-3 pb-1 md:w-2/4 '>
                    <input type="text" placeholder='Enter your work email' className=' flex-1 text-black p-2 rounded-md outline-none' />
                    <ButtonCommon>Book a demo</ButtonCommon>
                </div>
            </div>


            <div>
                {/* video add */}
                <iframe frameborder="0">
                    <video src="https://i.vimeocdn.com/video/1523939837-409fd28fc27eada34b75912d18481f4bb5c9a04a477de2c4d419bae2a07ba076-d?mw=1100&mh=619" >
                    </video>
                </iframe>
            </div>

        </div>
    )
}

export default Home