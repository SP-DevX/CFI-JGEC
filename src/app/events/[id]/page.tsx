import Title from "@/components/common/Title";
import Image from "next/image";
import React from "react";
import RegisterTable from "@/components/event/RegisterTable";
import Link from "next/link";
import axios from "axios";
import { MdDownload } from "react-icons/md";
import NotFound from "@/components/common/NotFound";
import PostEvent from "@/components/event/PostEvent";

export async function generateMetadata({ params }: { params: { id: string } }) {
    const { id } = params;
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/event/${id}`, {
        next: {
            revalidate: 3600,
        },
    });
    const { event } = await res.json();

    const {
        fullName,
        photo,
        _id,
        description,
    } = event;
    return {
        title: fullName,
        description: description
            ? description.replace("<p>", "").replace("</p>", "").slice(0, 140)
            : "Event description",
        twitter: {
            title: fullName + " event - CFI",
            description: description
                ? description.replace("<p>", "").replace("</p>", "").slice(0, 140)
                : "Event description",
            card: "summary_large_image",
            images: [
                {
                    url: photo,
                    width: 1200,
                    height: 630,
                },
            ],
        },
        openGraph: {
            title: fullName + " event - CFI",
            description: description
                ? description.replace("<p>", "").replace("</p>", "").slice(0, 140)
                : "Event description",
            images: [
                {
                    url: photo,
                    width: 1200,
                    height: 630,
                    alt: "Event details",
                },
            ],
            url: `/events/${_id}`,
            type: "website",
        },
    };
}

const ParticularEvent: React.FC<{ params: { id: string } }> = async ({
    params,
}) => {
    const { id } = params;
    const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/event/${id}`
    );

    if (!data.event) {
        return <NotFound title="Something went wrong, Try again later" path="/events" btnName="Events" />;
    }

    const {
        fullName,
        photo,
        shortName,
        isCompleted,
        _id,
        description,
        organizer,
        prizes,
        reg_date_start,
        reg_date_end,
        rules,
        venue,
        event_start_time,
        event_end_time,
        date
    } = data.event;

    return (
        <>
            <Title title={`${shortName}`} />
            <div className="w-full min-h-screen commonBg">
                <div className="layout bg-white  min-[1148px]:rounded-lg p-4 xs:p-8 min-[1148px]:my-8">
                    <Image
                        src={photo}
                        width={700}
                        height={500}
                        priority
                        loading="eager"
                        alt="header image"
                        className="w-full h-auto object-cover rounded-md"
                    />
                    <h1 className="text-2xl xs:text-3xl font-semibold my-6 text-center text-primary">
                        {fullName}
                    </h1>
                    <div className="w-full min-h-40 grid grid-cols-12">
                        <div className=" col-span-12 sm:col-span-6 mlg:col-span-4 sm:pe-4">
                            <h1 className='text-2xl xs:text-2xl font-medium border-b-2 relative after:absolute after:contents-[""] after:-bottom-[2px] after:left-0 after:w-36 after:h-[2px] after:bg-blue-500 text-primary'>
                                Import Details
                            </h1>
                            <div className="p-5 ps-0 text-primary">
                                <h1 className=" max-xxs:text-sm xs:text-lg font-semibold mb-3">
                                    Registration:
                                    <span className="ms-2 font-medium text-[15px] opacity-85">
                                        {reg_date_start} to {reg_date_end}
                                    </span>
                                </h1>
                                <h1 className=" max-xxs:text-sm xs:text-lg font-semibold  mb-3">
                                    Organizers:
                                    <span className="ms-2 font-medium text-base opacity-85">
                                        {organizer}
                                    </span>
                                </h1>
                                <h1 className=" max-xxs:text-sm xs:text-lg font-semibold  mb-3">
                                    Venu:
                                    <span className="ms-2 font-medium text-base opacity-85">
                                        {venue}
                                    </span>
                                </h1>
                                <h1 className=" max-xxs:text-sm xs:text-lg font-semibold  mb-3">
                                    Date:
                                    <span className="ms-2 font-medium text-base opacity-85">
                                        {date}
                                    </span>
                                </h1>
                                <h1 className=" max-xxs:text-sm xs:text-lg font-semibold  mb-3">
                                    Time:
                                    <span className="ms-2 font-medium text-base opacity-85">
                                        {event_start_time}pm. - {event_end_time}pm.
                                    </span>
                                </h1>
                                <div className="max-xxs:text-sm xs:text-lg font-semibold mb-3 text-primary">
                                    Prize: <span className="ms-2 font-medium text-base opacity-85" >Here is the prize pool of the event</span>
                                    <span
                                        className=" font-medium text-base customeHtml  "
                                        dangerouslySetInnerHTML={{ __html: prizes }}
                                    />
                                </div>
                                {
                                    isCompleted &&
                                    <PostEvent eventId={_id}/>
                                }
                            </div>
                        </div>
                        <div className="sm:ps-4 col-span-12  sm:col-span-6 mlg:col-span-8">
                            <h1 className='text-xl xs:text-2xl font-medium border-b-2 relative after:absolute after:contents-[""] after:-bottom-[2px] after:left-0 after:w-[120px] after:h-[2px] after:bg-blue-500 text-primary'>
                                Description
                            </h1>
                            <div className="p-5 px-0   ">
                                <p
                                    className="mb-3 customeHtml !text-secondary"
                                    dangerouslySetInnerHTML={{ __html: description }}
                                />
                            </div>
                            <h1 className='text-xl xs:text-2xl font-medium border-b-2 relative after:absolute after:contents-[""] after:-bottom-[2px] after:left-0 after:w-[62px] after:h-[2px] after:bg-blue-500 text-primary'>
                                Rules
                            </h1>
                            <div className="p-5 px-0">
                                <div
                                    className="mb-3 customeHtml  !text-secondary"
                                    dangerouslySetInnerHTML={{ __html: rules }}
                                />
                            </div>
                        </div>
                    </div>

                    <RegisterTable
                        isCompleted={isCompleted}
                        eventId={_id}
                        eventName={shortName}
                    />
                </div>
            </div>
        </>
    );
};

export default ParticularEvent;
