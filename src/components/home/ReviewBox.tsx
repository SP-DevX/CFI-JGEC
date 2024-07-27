
"use client";

import { testimonialList } from "@/utils/testimonial";
import React, { useEffect, useRef } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import {
    StackedCarousel,
    ResponsiveContainer,
} from "react-stacked-center-carousel";
import TestimonialCard from "./TestimonialCard";

const ReviewBox = ({ data }: { data: testimonialType[] }) => {
    const ref = useRef();
    useEffect(() => {
        const interval = setInterval(() => {
            if (ref.current) {
                // @ts-ignore
                ref.current.goNext();
            }
        }, 5000);
        return () => clearInterval(interval);
    }, []);
    
    return (
        <>
            <div id="testi" className="w-full mlg:w-1/2">
                <ResponsiveContainer
                    carouselRef={ref}
                    render={(parentWidth, carouselRef) => { 
                        let currentVisibleSlide = parentWidth <= 370 ? 1 : 3;
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
                                    slideComponent={TestimonialCard}
                                    slideWidth={parentWidth <= 370 ? parentWidth * 0.8 : parentWidth * 2.5}
                                    carouselWidth={parentWidth}
                                    data={data.length > 0 ? data : testimonialList}
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
        </>
    );
};

export default ReviewBox;
