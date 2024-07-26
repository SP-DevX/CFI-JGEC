import DescriptionBox from '@/components/about/DescriptionBox'
import Initiatives from '@/components/about/Initiatives'
import Points from '@/components/about/Points'
import Title from '@/components/common/Title'
import { InitiativeList } from '@/utils/About'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: "About",
  description: "Our mission is to create a transformation learning experience for students, bridging the gap between theory and practice. By providing a dynamic platform for innovation and problem-solving, we empower students to apply their academic knowledge to real-world scenarios, making a positive impact on society. Nurturing their visionary projects from conception to reality, we offer comprehensive support, including mentoring, team formation, funding, and publicity.",
  openGraph: {
    title: "About - Centre For Innovation, JGEC",
    description: "Our mission is to create a transformation learning experience for students, bridging the gap between theory and practice. By providing a dynamic platform for innovation and problem-solving, we empower students to apply their academic knowledge to real-world scenarios, making a positive impact on society. Nurturing their visionary projects from conception to reality, we offer comprehensive support, including mentoring, team formation, funding, and publicity.",
  }
}

const About: React.FC = () => {
  return (
    <div className='w-full min-h-screen'>
      <Title title='About' />
      <div className='w-full h-full commonBg' >
        <div className='layout'>
          <div className='w-full h-auto min-h-[25rem]  grid mlg:grid-cols-2 gap-8 xl:gap-x-16 py-4 xs:py-8'>
            <DescriptionBox header='our mission' description='Our mission is to create a transformation learning experience for students, bridging the gap between theory and practice. By providing a dynamic platform for innovation and problem-solving, we empower students to apply their academic knowledge to real-world scenarios, making a positive impact on society. Nurturing their visionary projects from conception to reality, we offer comprehensive support, including mentoring, team formation, funding, and publicity.' />
            <DescriptionBox header='Our Vision' description="We aim to cultivate a community of critical thinkers who are equipped with the skills and confidence to tackle real-world challenges. We believe that the ability to think critically is essential for success in today's fast-paced world. As a community of driven individuals united by creativity and a passion for making a difference, we cultivate critical thinking skills and confidence, preparing our students to succeed in a fast-paced world and become responsible and impactful leaders of the future." />
          </div>
          <div className='w-full min-h-[30rem] py-4 sm:py-8 rounded-lg bg-bg_1 border border-box_1 backdrop-blur-[10px] px-4 xs:px-8 lg:px-20'>
            <h1 className='text-info text-2xl xs:text-3xl sm:text-4xl font-bold capitalize py-5'>objective</h1>
            <div className='relative'>
              <div className='w-1.5 h-[33rem] xxs:h-[32rem] xs:h-[35rem] min-[640px]:h-[27.5rem] min-[700px]:h-[25rem] min-[1140px]:h-[18rem] bg-info absolute left-[13px] top-1 z-20 '></div>
              <Points title='Contribute to society and industry using technology' />
              <Points title='Promote technical hobby hands-on activities in the institute' />
              <Points title='Launch a knowledge sharing platform on college, national, and international platforms' />
              <Points title='Encourage bringing out products, not just working models, from projects and club events' />
              <Points title='Cultivate a community of critical thinkers equipped to tackle real-world challenges' />
              <Points title="Develop students' critical thinking skills and confidence for success in today's fast-paced world" />
            </div>
          </div>
          <div className='w-full min-h-[32rem] my-8 py-4 sm:py-8 rounded-lg bg-bg_1 border border-box_1 backdrop-blur-[10px]  px-4 xs:px-8 lg:px-20'>
            <h1 className='text-info text-2xl xs:text-3xl sm:text-4xl font-bold capitalize py-5'>Initiatives</h1>
            <div className='relative'>
              <div className='w-1.5 h-[30rem]  min-[505px]:h-[24rem] min-[1048px]:h-[18rem] bg-info absolute left-[16px] top-1 -z-20 '></div>
              {
                InitiativeList.map((item, i) => <Initiatives {...item} key={i} />)
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
