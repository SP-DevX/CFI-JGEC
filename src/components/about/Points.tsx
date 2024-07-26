import React from 'react'

const Points: React.FC<{ title: string }> = ({ title }) => {
    return (
        <div className='text-white flex items-center space-x-2 xxs:space-x-6  mb-6'>
            <div className=' min-w-8 w-8 h-8 bg-success rounded-full relative before:contents-[""] before:absolute before:w-2 before:h-2 before:rounded-full before:bg-black  before:left-[50%] before:top-[50%] before:translate-x-[-50%] before:translate-y-[-50%] after:contents-[""] after:absolute after:w-[26px] after:h-[26px] after:rounded-full after:border-[3px] after:border-black after:bg-transparent  after:left-[50%] after:top-[50%] after:translate-x-[-50%] after:translate-y-[-50%] z-50
              '></div>
            <h1 className=' xs:text-xl font-medium first-letter:text-warning first-letter:font-bold  first-letter:text-xl xs:first-letter:text-2xl'>{title}</h1>
        </div>
    )
}

export default Points 
