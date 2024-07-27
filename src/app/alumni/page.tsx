
import Card from "@/components/Alumni/Card";
import Title from "@/components/common/Title";
import axios from "axios";
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
  const {
    data: { members },
  } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/members/alumni`); 
  
  return (
    <div>
      <Title title="Alumni" />
      <div className="w-full min-h-screen commonBg">
        <div className="layout grid min-[550px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 py-8">
          {members.map((item: alumniCardType) => (
            <Card year={item.year} key={item._id} />
          ))} 
        </div>
      </div>
    </div>
  );
};

export default Alumni;
