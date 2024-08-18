
import Card from "@/components/Alumni/Card";
import NotFound from "@/components/common/NotFound";
import Title from "@/components/common/Title"; 
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Alumni ",
  openGraph: {
    title: "Our Alumni - CFI",
    description: "Meet our most talented and wonderful Alumni who are working hard to make CFI better. Meet them and know more about them.",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Alumni",
      },
    ],
    url: "/alumni",
    type: "website",
  },
};

const Alumni: React.FC = async () => { 

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/members/alumni`, {
    next: {
      revalidate: 3600
    }
  });
  const { members } = await res.json();

  if (!members) {
    return <NotFound title="No alumni details Found" />;
  } 
  const years: string[] = members.map((item: alumniCardType) => item.year);
  const uniqueYears = [...new Set(years)]; 

  return (
    <div>
      <Title title="Alumni" />
      <div className="w-full min-h-screen commonBg">
        <div className="layout grid min-[550px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 py-8">
          {uniqueYears.map((year: string) => (
            <Card year={year} key={year} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Alumni;
