import Image from 'next/image';
import React from 'react'

const TestimonialCard = ({ data, dataIndex }: { data: testimonialType[], dataIndex: number }) => {
    const { name, message, profession } = data[dataIndex];
    return (
        <div className="w-[280px] mx-auto h-[350px] bg-white rounded-[10px] p-3 xs:p-[20px] flex flex-col shadow-sm  items-start gap-[10px]">
            <Image src={'/openquote.svg'} width={50} height={50} alt="Quote" className='w-8' />
            <p className='text-xs xxs:text-sm p-[0_4px]  h-[80%] overflow-hidden hover:overflow-auto' >
                {message}
            </p>
            <hr />
            <div  >
                <h3 className='max-xxs:text-sm text-gray-800 font-semibold capitalize mb-0.5'>{name}</h3>
                <h5 className='text-xs xxs:text-sm font-medium text-gray-600'>{profession}</h5>
            </div>
        </div>
    );
}

export default TestimonialCard
