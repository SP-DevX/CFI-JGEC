import React from 'react'

const Title: React.FC<{ title: string }> = ({ title }) => {
    return (
        <div className='w-full pt-24 pb-8'>
            <div className='layout'>
                <h1 className="text-3xl xs:text-4xl md:text-5xl font-bold text-white  first-letter:text-4xl xs:first-letter:text-5xl md:first-letter:text-6xl first-letter:text-success relative after:contents-[''] after:absolute after:w-1/5 after:h-1.5 after:bg-success after:rounded-full after:left-0 after:-bottom-2 capitalize">
                    {title}
                </h1>
            </div>
        </div>
    )
}

export default Title
