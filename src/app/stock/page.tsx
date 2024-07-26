
import Title from '@/components/common/Title'
import React from 'react'
import { Metadata } from 'next'
import axios from 'axios'
import Image from 'next/image'
export const metadata: Metadata = {
  title: "Stocks",
  openGraph: {
    title: "Our tools and components - CFI",
    description: "We have a lot of tools in our stock. If you need any tools, you can contact us.  Check them out!",
    images: [
      {
        url: "/stock.webp",
        width: 1200,
        height: 630,
        alt: "Stocks",
      },
    ],
    url: "/stock",
    type: "website",
  }
}

const Stock: React.FC = async () => {
  const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/stock`);
  const tools = data.components;
  return (
    <div>
      <Title title={`Tools`} />
      <div className='w-full min-h-screen commonBg'>
        <div className="layout grid xxs:grid-cols-2 sm:grid-cols-3 mlg:grid-cols-4 gap-4 lg:gap-8 py-6 sm:py-8">
          {tools.map((tool: toolType, i: number) => (
            <div className="w-full h-auto rounded-md bg-white p-2 md:p-4" key={i}>
              <div>
                <Image
                  src={tool.photo}
                  width={200}
                  height={100}
                  className="w-full object-cover rounded-sm"
                  alt="tools"
                  loading='lazy'
                />
              </div>
              <div className="capitalize text-start pt-3">
                <h1 className="text-base font-semibold line-clamp-2">{tool.name}</h1>
                {tool.modelNo && (
                  <h1 className="text-sm font-medium">Model: {tool.modelNo}</h1>
                )}
                <p className="text-sm font-medium">
                  Qty - <span>{tool.qty}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Stock
