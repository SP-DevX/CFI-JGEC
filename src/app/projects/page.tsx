import Title from '@/components/common/Title'
import ProjectCard from '@/components/projects/ProjectCard'
import React from 'react'
import { Metadata } from 'next'
import Link from 'next/link' 
import NotFound from '@/components/common/NotFound'
export const metadata: Metadata = {
  title: "Projects",
  openGraph: {
    title: "Projects - CFI",
    description: "We have a lot of projects that our members have developed and are currently working on. Check them out!",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Projects",
      },
    ],
    url:"/projects",
    type: "website",
  }
}

const Projects: React.FC = async () => { 
  
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/projects`, {
    next: {
      revalidate: 3600,
    },
  });
  const data = await res.json();

  if (!data) {
    return (
      <NotFound
        title="No projects found"
      />
    )
  }
  return (
    <div>
      <Title title={`Projects`} />
      <div className='w-full min-h-screen commonBg'>
        <div className='layout py-6'>
          <div className='flex justify-end'>
            <Link href='/projects/add-project' className='  text-white '>
              Want to add a project?
            </Link>
          </div>
          <div className='w-full grid md:grid-cols-2 lg:grid-cols-3 gap-8 my-4'>
            {
              data.filter((e: projectType) => e.isApproved === true).map((project: projectType) => (
                <ProjectCard key={project._id} {...project} />
              ))
            } 
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
