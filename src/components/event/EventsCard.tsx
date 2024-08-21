
import Link from 'next/link'
import React from 'react'
import { FaLightbulb } from 'react-icons/fa'

const EventsCard: React.FC<eventCardType> = ({ shortName, description, _id, eventId }) => {
    return (
        <div className='w-full max-w-sm mx-auto h-[26rem] rounded-2xl bg-white overflow-hidden relative'>
            <div className='p-1.5 w-full h-auto'>
                <div className='w-full  h-[14rem] bg-[#03205e] rounded-t-xl rounded-bl-md  rounded-custom grid place-items-center'>
                    <div className='w-20 h-20 bg-white rounded-full flex justify-center items-center shadow-lg'>
                        <FaLightbulb size={50} className='text-[#121289]' />
                    </div>
                </div>
                <div className='py-4 space-y-2'>
                    <h1 className='text-xl font-semibold text-center text-[#121289]'>{shortName}</h1>
                    <div className='text-gray-800 line-clamp-3' dangerouslySetInnerHTML={{ __html: description }} />
                </div>
            </div>
            <div className='absolute bottom-0 w-full'>
                <Link href={`/events/${_id}`} >
                    <div className='text-lg font-medium text-white bg-primary py-3 text-center cursor-pointer'>View More</div>
                </Link>
            </div>
        </div>
    )
}

export default EventsCard 
