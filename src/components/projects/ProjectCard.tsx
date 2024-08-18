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
                    className='w-full h-[10rem] object-cover'
                    alt='project'
                    loading='lazy'
                />
            }
            <div className='p-4 text-secondary '>
                <h1 className='text-center text-xl font-semibold capitalize mb-3 text-primary'>{projectName}</h1>
                <h1 className='opacity-80  text-sm mb-1'>Made / Presented by</h1>
                <p className='font-medium leading-4'>
                    {studentName}, {year} year, {branch} dept.
                </p>
            </div>
            <Link href={`/projects/${_id}`}  >
                <button className='w-full py-3.5 bg-primary text-white'>View More</button>
            </Link>
        </div>
    )
}

export default ProjectCard
