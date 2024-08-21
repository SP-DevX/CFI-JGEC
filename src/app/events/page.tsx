import NotFound from "@/components/common/NotFound";
import Title from "@/components/common/Title";
import EventsCard from "@/components/event/EventsCard"; 
import { Badge } from "flowbite-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Events",
  openGraph: {
    title: " Events - CFI, JGEC",
    description:
      "Stay updated with the latest events and workshops organized by the Centre for Innovation, JGEC. Register now and be a part of the innovation.",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Events - CFI, JGEC",
      },
    ],
    url: "/events",
    type: "website",
  },
};

const Events: React.FC = async () => { 
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/event`, { next: { revalidate: 3600 } });
  const { events } = await res.json();  

  if (!events) {
    return <NotFound title="No Event Found" />;
  }

  const checkEvent = (status: boolean) => {
    const ele = events.filter((e: eventCardType) => e.isCompleted === status);
   
    if (ele.length === 0) return false;
    return true;
  };

  return (
    <div className="w-full min-h-screen">
      <Title title="Events" />
      <div className="w-full min-h-screen commonBg">
        <div className="layout">
          {checkEvent(false) && (
            <div className="w-full min-h-[25rem] my-8 bg-primary/20 backdrop-blur-sm rounded-lg p-4 xs:p-6">
              <h1 className=" text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-white first-letter:text-3xl xxs:first-letter:text-4xl xs:first-letter:text-5xl sm:first-letter:text-6xl first-letter:text-warning relative after:contents-[''] after:absolute after:w-40  xs:after:w-80 after:h-1.5 after:bg-warning after:rounded-full after:left-0 after:-bottom-4 capitalize mb-12">
                Upcoming
              </h1>
              {events
                .filter((e: eventCardType) => e.isCompleted === false)
                .map((event: eventCardType) => {
                  const {
                    _id,
                    photo,
                    shortName,
                    fullName,
                    description,
                    date,
                    event_start_time,
                    event_end_time,
                    isCompleted,
                  } = event;
                  return (
                    <div
                      className="flex flex-col lg:flex-row justify-between mb-12"
                      key={_id}
                    >
                      <div className="lg:w-[45%] max-lg:mb-6">
                        <Image
                          src={photo}
                          alt="event"
                          width={500}
                          height={500}
                          priority
                          loading="eager"
                          className="rounded-lg w-full h-auto object-cover"
                        />
                      </div>
                      <div className="lg:w-1/2">
                        <h1 className="xxs:text-lg xs:text-xl sm:text-2xl md:text-3xl text-white font-semibold uppercase mb-1">
                          {shortName}
                        </h1>
                        <p className=" xs:text-lg text-white opacity-75 mb-4">
                          {fullName}
                        </p>
                        <div
                          className="max-xs:!text-sm customeHtml text-white opacity-85 mb-4 line-clamp-4"
                          dangerouslySetInnerHTML={{ __html: description }}
                        />
                        <p className="text-sm xs:text-lg text-white mb-2">
                          Event Date & Time: {date}, {event_start_time} -{" "}
                          {event_end_time}
                        </p>
                        <p className="max-xs:!text-sm font-medium text-white mb-4">
                          Registration:{" "}
                          {isCompleted ? (
                            <Badge
                              color="failure"
                              className="inline rounded-full"
                            >
                              Closed
                            </Badge>
                          ) : (
                            <Badge
                              color="success"
                              className="inline  rounded-full"
                            >
                              Open
                            </Badge>
                          )}
                        </p>
                        <Link href={`/events/${_id}`}>
                          <button className="w-40 bg-primary font-medium rounded-md text-white py-3 ">
                            View More
                          </button>
                        </Link>
                      </div>
                    </div>
                  );
                })}
            </div>
          )}
          {checkEvent(true) && (
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-warning my-8">
                Completed Events
              </h1>
              <div className="w-full min-h-[26rem] grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {events
                  .filter((e: eventCardType) => e.isCompleted === true)
                  .map((event: eventCardType) => (
                    <EventsCard key={event._id} {...event} />
                  ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Events;
