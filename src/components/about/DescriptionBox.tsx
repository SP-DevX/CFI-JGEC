import React from 'react'

type props = {
    header: string,
    description: string,
}

const DescriptionBox: React.FC<props> = ({ header, description }) => {
    return (
        <div className='w-full h-full rounded-lg bg-bg_1 border border-box_1 backdrop-blur-[10px] p-4 xs:p-8'>
            <h1 className='text-info text-2xl xs:text-3xl sm:text-4xl font-bold capitalize py-3'>{header}</h1>
            <p className='text-white xs:text-lg tracking-wide'>{description}</p>
        </div>
    )
}

export default DescriptionBox
