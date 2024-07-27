"use client"

import React from 'react'

const RedirectBtn = ({ link, text }: { link: string, text: string }) => {
    return (
        <div>
            <button
                onClick={() => window.location.replace(link)}
                className="text-primary font-semibold mb-3 "
            >
                {text}
            </button>
        </div>
    )
}

export default RedirectBtn
