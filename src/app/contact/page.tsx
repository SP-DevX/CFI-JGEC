
import Title from '@/components/common/Title'
import ContactForm from '@/components/contact/ContactForm'
import { Metadata } from 'next'
import React from 'react'
import { FaLocationDot } from 'react-icons/fa6'
import { MdCall, MdEmail } from 'react-icons/md'

export const metadata: Metadata = {
    title: "Contact",
    openGraph: {
        title: "Contact us - CFI",
        description: "You can contact us through our contact details or you can directly visit our college. We are always ready to help you.",
        images: [
            {
                url: "/og.jpg",
                width: 1200,
                height: 630,
                alt: "Contact",
            },
        ],
        url: "/contact",
        type: "website",
    },
}

const Contact: React.FC = () => {
    return (
        <div className='w-full min-h-screen'>
            <Title title='contact' />
            <div className='w-full min-h-screen commonBg' >
                <div className='layout grid mlg:grid-cols-2 gap-x-12 xl:gap-x-0 place-items-center my-8'>
                    <div className='xl:w-4/5 mx-auto mlg:h-[27rem]  rounded-lg mlg:px-8 space-y-3'>
                        <div className='text-white flex space-x-3 xs:text-lg'>
                            <FaLocationDot   className='text-red-600 w-6 min-w-6 text-2xl xs:text-3xl' />
                            <span>
                                Jalpaiguri Government Engineering College,
                                P.O. - Denguajhar,
                                Dist. - Jalpaiguri,
                                West Bengal - 735102, India
                            </span>
                        </div>
                        <a href='tel:+918436558945' className='text-white flex space-x-3 xs:text-lg'>
                            <MdCall  className='text-blue-600 w-6 text-2xl xs:text-3xl' />
                            <span> 8436558945</span>
                        </a>
                        <a href='mailto:cfi.help@jgec.ac.in' className='text-white flex space-x-3 xs:text-lg'>
                            <MdEmail className='text-blue-600 w-6 text-2xl xs:text-3xl' />
                            <span> cfi.help@jgec.ac.in</span>
                        </a>
                        <div className='w-full h-auto rounded-lg overflow-hidden'>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3569.1553253187813!2d88.69891387620368!3d26.547277576866936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e47ba31ab53699%3A0x7fc0a752ab7572c3!2sCentre%20For%20Innovation%2C%20JGEC!5e0!3m2!1sen!2sin!4v1689749559913!5m2!1sen!2sin"
                                height="240"
                                style={{ border: 0, width:"100%" }}
                                allowFullScreen
                                loading="eager"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </div>
                    <div className='xl:w-4/5 mx-auto mlg:h-[27rem] backdrop-blur-md rounded-lg border border-gray-700 p-4 sm:p-8  max-mlg:mt-8'>
                        <ContactForm/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
