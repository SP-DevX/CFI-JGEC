
import Image from 'next/image'
import React from 'react'
import Logo from "@/assets/logo_light.png"
import Link from 'next/link';
import TypeWrite from './TypeWrite'; 
import NotFound from '../common/NotFound';

const NoticeSection = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/notice`, {
        next: {
            revalidate: 3600,
        },
    });
    const { allNotices } = await res.json();
    if (!allNotices) {
        return (
            <NotFound
                title="No Notice Found"
                path="/"
                btnName="Home"
            />
        )
    }
    const notices = allNotices.reverse();
    return (
        <div>
            <section className='layout lg:h-screen  flex max-lg:flex-col  justify-evenly items-center pt-32'>
                <div className='w-full max-w-xl mx-auto lg:w-1/2 h-60 xs:h-[23rem] flex justify-center relative order-2 lg:order-1'>
                    <Image
                        src={Logo}
                        alt="Logo"
                        title="CFI"
                        height={300}
                        width={300}
                        className=' object-contain max-xs:py-4'
                        priority
                    />
                    <div className='w-full max-w-2xl mx-auto lg:w-4/5 h-full border-primary shadow-shadow_1 bg-primary/70 text-white  rounded-lg absolute top-0 z-40 px-8 py-4 text-lg font-semibold overflow-hidden space-y-2 backdrop-blur-sm  '>
                        <h1 className='text-center mb-2 text-2xl !font-libra'>Notice</h1>
                        <div className='w-full h-[18rem] overflow-hidden font-normal'>
                            <ul className='bottom-top space-y-2 text-sm'>
                                {notices.map((item: noticeType, index: number) => (
                                    <li key={index} className=''>
                                        <Link target='__blank' href={item.link}>
                                            {index + 1}.{" "} {item.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='w-full max-w-[35rem] flex flex-col justify-center text-white order-1 lg:order-2 max-lg:mb-12'>
                    <h1 className='text-5xl xs:text-[4rem] tracking-[3px] leading-tight font-bol d text-center font-bigShoulders'>
                        Centre For <br /> Innovation
                    </h1>
                    <TypeWrite />
                </div>
            </section>
        </div>
    )
}

export default NoticeSection
