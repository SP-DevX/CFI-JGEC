
import React from 'react'
import { GiCheckMark } from 'react-icons/gi'

type InitiativesType = {
  header: string,
  details: string
}

const Initiatives: React.FC<InitiativesType> = ({ header, details }) => {
  return (
    <div className='flex space-x-4 min-[510px]:space-x-8 mb-6'>
      <div className="w-10 min-w-10 h-10 rounded-full bg-black border-[3px] border-orange-500 z-50 flex items-center justify-center text-orange-500"><GiCheckMark size={18} /></div>
      <div>
        <h1 className='font-bold text-warning text-xl sm:text-2xl '>{header}</h1>
        <p className='text-white max-xxs:text-sm sm:text-lg leading-6'>{details}</p>
      </div>
    </div>
  )
}

export default Initiatives 
