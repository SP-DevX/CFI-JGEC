"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

type NotFoundProps = {
    title?: string,
    path?: string
    btnName?: string
}

function NotFound({ title = "No data found", path = '/', btnName = "Home" }: NotFoundProps) {
    const router = useRouter()
    return (
        <>
            <div className="w-full py-16 sm:py-24 flex flex-col gap-6 items-center justify-center">
                <h1 className="text-2xl xs:text-3xl md:text-4xl text-white">{title}</h1>
                <button
                    className="btn shadow-md shadow-gray-400"
                    onClick={() => router.replace(path)}
                >{btnName}</button>
            </div >
        </>
    )
}

export default NotFound
