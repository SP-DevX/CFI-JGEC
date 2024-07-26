
import Title from '@/components/common/Title' 
import React from 'react'
import { Metadata } from 'next'
import axios from 'axios' 
import MemberCard from '@/components/common/MemberCard'
export const metadata: Metadata = {
  title: "Team Members",
  openGraph: {
    title: "Meet our team members - CFI",
    description: "Here are is wonderful team members of CFI who are working hard to make CFI better. Meet them and know more about them.",
    images: [
      {
        url: "/team.webp",
        width: 1200,
        height: 630,
        alt: "Team Members"
      }
    ],
    url: `/team`,
    type: "website"
  }
}

const Team: React.FC = async () => {
  const year = new Date().getFullYear() + 1;
  const { data: { members } } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/members/${year}`); 

  return (
    <div>
      <Title title='Team' />
      <div className='w-full min-h-screen commonBg'>
        <div className="layout grid min-[425px]:grid-cols-2 md:grid-cols-3 mlg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 p-8">
          {members.map((item: membersType) => (
            <MemberCard data={item} key={item._id} />
          ))} 
        </div>
      </div>
    </div>
  )
}

export default Team
