"use client";

import { FC, useRef } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import {
    StackedCarousel,
    ResponsiveContainer,
} from "react-stacked-center-carousel";
import Image from "next/image";
import Quote from "@/assets/openquote.svg"; 

const ReviewBox: FC<{ data: any[] }> = ({ data }) => {
    const ref = useRef();
    return (
        <div>
            <div id="testi" className="w-1/2">
                <ResponsiveContainer
                    carouselRef={ref}
                    render={(parentWidth, carouselRef) => {
                        let currentVisibleSlide = 3;
                        return (
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                                <button
                                    className="text-white"
                                    // @ts-ignore
                                    onClick={() => ref.current?.goBack()}
                                >
                                    <MdKeyboardArrowLeft style={{ fontSize: 30 }} />
                                </button>
                                <StackedCarousel
                                    ref={carouselRef}
                                    slideComponent={Testimonial}
                                    slideWidth={parentWidth * 2.5}
                                    carouselWidth={parentWidth}
                                    data={data}
                                    currentVisibleSlide={currentVisibleSlide}
                                    maxVisibleSlide={5}
                                    useGrabCursor
                                />
                                <button
                                    className="text-white"
                                    // @ts-ignore
                                    onClick={() => ref.current?.goNext()}
                                >
                                    <MdKeyboardArrowRight style={{ fontSize: 30 }} />
                                </button>
                            </div>
                        );
                    }}
                />
            </div>
        </div>
    );
};



const Testimonial = ({
    data,
    dataIndex,
}: {
    data: any[];
    dataIndex: number;
}) => { 
    const { name, message, profession } = data[dataIndex];
    console.log(name, message, profession); 
    return (
        <div className="w-[280px] mx-auto h-[350px] bg-white rounded-[10px] p-[20px] flex flex-col shadow-sm  items-start gap-[10px]">
            <Image src={Quote} width={50} height={50} alt="Quote" className="w-8" />
            <p className="text-sm p-[0_4px] max-h-[80%] overflow-hidden hover:overflow-auto">
                {message}
            </p>
            <hr />
            <div>
                <div>{name}</div>
                <div>{profession}</div>
            </div>
        </div>
    );
};

export default ReviewBox;