import Link from 'next/link'
import React from 'react'
import { FaLightbulb } from 'react-icons/fa'

const Card = ({ year }: { year: string }) => {
    return (
        <>
            <div className='w-full max-w-[20rem] mx-auto min-h-[19rem] rounded-2xl bg-white overflow-hidden '>
                <div className='p-1.5 w-full h-auto'>
                    <div className='w-full  h-[14rem] bg-[#03205e] rounded-t-xl rounded-bl-md  rounded-custom grid place-items-center'>
                        <div className='w-20 h-20 bg-white rounded-full flex justify-center items-center shadow-lg'>
                            <FaLightbulb size={50} className='text-[#121289]' />
                        </div>
                    </div>
                    <div className='py-4 space-y-2'>
                        <h1 className='text-xl font-semibold text-center text-[#121289]'>{year} Batch</h1> 
                    </div>
                </div>
                <Link href={`/alumni/${year}`} >
                    <div className='text-lg font-medium text-white bg-primary py-3 text-center cursor-pointer'>View List</div>
                </Link>
            </div>
        </>
    )
}

export default Card
