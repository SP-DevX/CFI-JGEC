import React from 'react' 
import Image from 'next/image'
import { CollabClubList } from '@/utils/CollabClubList'

const CollaborateClub: React.FC = () => {
    return (
        <div>
            <section className='w-full h-auto bg-white py-14 xs:py-20'>
                <div className='layout'>
                    <h1 className='text-2xl xxs:text-3xl xs:text-4xl font-bold text-primary mb-5'>Our Collaborators</h1>
                    <div className='grid xxs:grid-cols-2 xs:grid-cols-3 md:grid-cols-4 gap-5 mlg:gap-8'>
                        {CollabClubList.map((collab, index) => (
                            <div className='w-full mlg:w-4/5 mx-auto h-36 rounded-lg border shadow-lg p-4 tooltip  tooltip-warning' data-tip={collab.title} key={index}>
                                <Image
                                    src={collab.src}
                                    alt={`Collaborator ${index + 1}`}
                                    loading="eager"
                                    width={200}
                                    height={200}
                                    className='w-full h-full object-contain'
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default CollaborateClub
