"use client"

import React from 'react'
import Typewriter from "typewriter-effect";

const TypeWrite = () => {
    return (
        <div>
            <div className='min-h-[200px] mx-auto max-w-3/4 font-normal sm:w-[400px] p-8 text-xl xs:text-2xl rounded-md backdrop-blur-md shadow-shadow_1 mt-4 leading-9'>
                <Typewriter
                    options={{
                        autoStart: true,
                        skipAddStyles: true,
                        delay: 50,
                    }}
                    onInit={(typewriter) => {
                        typewriter
                            .typeString(
                                "Innovation leads to evolution, so why not stand hand in hand with it!"
                            )
                            .start();
                    }}
                />
            </div>
        </div>
    )
}

export default TypeWrite
