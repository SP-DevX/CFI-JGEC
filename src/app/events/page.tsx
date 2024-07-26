import Title from "@/components/common/Title";
import EventsCard from "@/components/event/EventsCard";
import axios from "axios";
import { Badge } from "flowbite-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";
export const metadata: Metadata = {
  title: "Events",
  openGraph: {
    title: " Events - CFI, JGEC",
    description: "Stay updated with the latest events and workshops organized by the Centre for Innovation, JGEC. Register now and be a part of the innovation.",
    url: "/events",
    type: "website",
  }
};

const Events: React.FC = async () => {
  const {
    data: { events },
  } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/event`);
  return (
    <div className="w-full min-h-screen">
      <Title title="Events" />
      <div className="w-full min-h-screen commonBg">
        <div className="layout">
          <div className="w-full min-h-[25rem] my-8 bg-primary/20 backdrop-blur-sm rounded-lg p-4 xs:p-6">
            <h1 className="text-4xl sm:text-5xl font-bold text-white first-letter:text-5xl sm:first-letter:text-6xl first-letter:text-warning relative after:contents-[''] after:absolute after:w-64  xs:after:w-80 after:h-1.5 after:bg-warning after:rounded-full after:left-0 after:-bottom-4 capitalize mb-12">
              Upcomming
            </h1>
            {events
              .filter((e: eventCardType) => e.isCompleted === false)
              .map((event: eventCardType) => (
                <div className="flex flex-col lg:flex-row justify-between" key={event._id} >
                  <div className="lg:w-[45%] max-lg:mb-6">
                    <Image
                      src={event.photo}
                      alt="event"
                      width={500}
                      height={500}
                      className="rounded-lg w-full h-auto object-cover"
                    />
                  </div>
                  <div className="lg:w-1/2">
                    <h1 className="text-2xl xxs:text-3xl text-white font-semibold uppercase mb-1">
                      {event.shortName}
                    </h1>
                    <p className="text-lg text-white opacity-75 mb-4">
                      {event.fullName}
                    </p>
                    <div
                      className=" customeHtml text-white opacity-85 mb-4 line-clamp-4"
                      dangerouslySetInnerHTML={{ __html: event.description }}
                    />  
                    <p className="text-lg text-white mb-2">
                      Event Date & Time: {event.date}, {event.event_start_time} - {event.event_end_time}
                    </p>
                    <p className="font-medium text-white mb-4">
                      Registration: {
                        event.isCompleted ?
                          <Badge color="failure" className="inline rounded-full">Closed</Badge>
                          : <Badge color="success" className="inline  rounded-full">Open</Badge>
                      }
                    </p>
                    <Link href={`/events/${event._id}`} >
                      <button className="w-40 bg-primary font-medium rounded-md text-white py-3 ">
                        View More
                      </button>
                    </Link>
                  </div>

                </div>
              ))}
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-warning my-8">
            Completed Events
          </h1>
          <div className="w-full min-h-[26rem] grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {events.filter((e: eventCardType) => e.isCompleted === true).map((event: eventCardType) => (
              <EventsCard key={event._id} {...event} />
            ))} 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
