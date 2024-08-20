import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProjectCard: React.FC<projectType> = ({ _id, files, projectName, studentName, year, branch }) => {
    return (
        <div className='w-full max-w-[20rem] mx-auto min-h-60 rounded-md  bg-white overflow-hidden'>
            {files &&
                <Image
                    src={files[0]}
                    width={250}
                    height={150}
                    className='w-full h-[12rem] object-cover'
                    alt='project'
                    priority
                    loading='eager'
                />
            }
            <div className='p-4 text-secondary h-[7.5rem] '>
                <h1 className='text-center text-base font-semibold capitalize mb-2 text-primary line-clamp-2'>{projectName}</h1>
                <h1 className='opacity-85  text-xs mb-1'>Made/Presented by:</h1>
                <p className='font-medium leading-4 text-sm'>
                    {studentName}, {year} year, {branch} dept.
                </p>
            </div>
            <div className='mt-auto'>
                <Link href={`/projects/${_id}`}  >
                    <button className='w-full py-3.5 bg-primary text-white'>View More</button>
                </Link>
            </div>
        </div>
    )
}

export default ProjectCard
