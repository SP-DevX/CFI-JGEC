"use client"

import React from 'react'
import toast from 'react-hot-toast'
import { MdDownload } from 'react-icons/md'

function PostEvent() {
    return (
        <>
            <div className="flex flex-col mt-6 gap-y-2">
                <div className=" sm:mb-3">
                    {/* <Link href={`/winner/icic-2023`}> */}
                    <button
                        className="btn w-48  xxs:w-60"
                        onClick={() => toast.success('Result will be declared soon')}
                    >View Result</button>
                    {/* </Link> */}
                </div>
                <div className=" sm:mb-3">
                    {/* <Link href={`/certificate/${_id}`} > */}
                    <button
                        className="btn w-48  xxs:w-60"
                        onClick={() => toast.success('Certificates will be available soon')}
                    >
                        <MdDownload />
                        Certificates
                    </button>
                    {/* </Link> */}
                </div>
                <div className=" sm:mb-3">
                    {/* <Link href={`/gallery`}> */}
                    <button
                        className="btn w-48 xxs:w-60"
                        onClick={() => toast.success('Gallery will be available soon')}
                    >Event Gallery</button>
                    {/* </Link> */}
                </div>
            </div>
        </>
    )
}

export default PostEvent
