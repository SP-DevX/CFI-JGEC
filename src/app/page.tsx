import Carousel from '@/components/home/Carousel'
import CollaborateClub from '@/components/home/CollaborateClub'
import NoticeSection from '@/components/home/NoticeSection'
import Testimonials from '@/components/home/Testimonials'
import React from 'react'

const Home: React.FC = () => {
  return (
    <div className='w-full '>
      <NoticeSection />
      <Carousel />
      <CollaborateClub />
      <Testimonials/> 
    </div>
  )
}

export default Home
