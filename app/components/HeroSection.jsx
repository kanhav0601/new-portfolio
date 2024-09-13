"use client";
import React from 'react'
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';


const HeroSection = () => {
    return (
        <section className='lg:py-16'>
            <div className='grid grid-cols-1 sm:grid-cols-12'>
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }} className='col-span-7 place-self-center text-center sm:text-left'>
                    <h1 className="text-white mb-4 mt-[25px] text-4xl sm:text-8xl font-extrabold"><span className='text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-blue-500'>Augmenting operations through</span></h1>
                    <h1 className='mx-2'>
                        <Image
                            src="/images/rm_passco_img.png"
                            alt='avatar image'
                            width={400}
                            height={400}
                        />
                    </h1>
                    <p className='text-gray-300 sm:text-lg mb-6 mt-6 lg:text-xl font-bold'>
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                'Simplified Computing',
                                1000, // wait 1s before replacing "Mice" with "Hamsters"
                                'Hardware Fixing',
                                1000,
                                'Targeting Growth',
                                1000,
                                'Make your computing easier',
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            style={{ fontSize: '2em', display: 'inline-block' }}
                            repeat={Infinity}
                        />
                    </p>
                    <div>
                        <button
                            className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-700 via-purple-700 to-pink-700 text-white transform transition-transform duration-300 hover:scale-105'
                            onClick={() => window.open('https://gem.gov.in/', '_blank')}
                        >
                            GeM
                        </button>
                        <button
                            className='px-6 py-3 w-full sm:w-fit rounded-full bg-gradient-to-br from-black via-blue-600 to-black hover:bg-slate-800 border border-white mt-3 transform transition-transform duration-300 hover:scale-105'
                            onClick={() => window.open('mailto:passco.mail@gmail.com', '_blank')}
                        >
                            Mr. Praveen Jain
                        </button>
                    </div>


                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="col-span-4 place-self-center mt-4 lg:mt-0">
                    <div className='rounded-full bg-gradient-to-br  from-black via-pink-900 to-blue-900 w-[250px] h-[250px] lg:w-[500px] lg:h-[500px] relative'>
                        <Image
                            src="/images/hero.png"
                            alt='avatar image'
                            className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                            width={500}
                            height={500}
                        />
                    </div>
                </motion.div>
            </div>

        </section >
    )
}

export default HeroSection
