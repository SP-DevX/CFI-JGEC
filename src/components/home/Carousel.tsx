"use client"

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from 'next/image'; 

const sources: string[] = [
    "https://lh3.googleusercontent.com/u/0/drive-viewer/AITFw-xEx79sgVFMRD_gCD0sU8Ab-_BNt_mE3OkY1zAhM0aTEvw9nqcxssW9Ebsx2uDndgNJHJEOV_lpbeFSjgjUCLatKTNdow=w1920-h883",
    "https://images.yourstory.com/cs/2/96eabe90392211eb93f18319e8c07a74/finale-1687365194651.png?w=1152&fm=auto&ar=2:1&mode=crop&crop=faces",
    "https://www.electronicshub.org/wp-content/uploads/2017/03/Arduino-Line-Follower-Robot-Image-7-760x440.jpg",
    "https://lh3.googleusercontent.com/u/0/drive-viewer/AITFw-w9TtPy_05n4miOztfovo3Ydz-wr7KRBQmnFGvjBuzSGerZjCd5QOcLqMDZzmuK97LWRWCKEwVHNk5VNAKn2cT8jtQ8=w1920-h883",
];

const slides: string[] = [
    '/carousel/3d-printing.webp',
    '/carousel/arduino.webp',
    '/carousel/electronics.webp',
];

const Carousel: React.FC = () => {
    return (
        <section className='layout h-auto my-12 xs:my-20 flex  justify-evenly items-center'>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {
                    slides.map((item, i) => (
                        <SwiperSlide key={i}>
                            <div className='max-w-3xl mx-auto h-[15rem] xxs:h-[20rem] sm:h-[25rem]  md:h-[30rem] mlg:h-[35rem]' >
                                <Image
                                    src={item}
                                    alt='@cfi'
                                    width={1200}
                                    height={800}
                                    className='w-full h-full object-cover'
                                />
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </section>
    )
}

export default Carousel
