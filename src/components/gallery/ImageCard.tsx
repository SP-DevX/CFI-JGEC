"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import React, { useState } from "react";
import {
    MdOutlineFileDownload,
    MdOutlineFileDownloadDone,
    MdZoomOutMap,
} from "react-icons/md";
const PreviewModal = dynamic(
    () => import("@/components/gallery/PreviewModal"),
    { ssr: false }
);

const ImageCard: React.FC<{ photo: galleryPhotoType }> = ({ photo }) => {
    const [downloadCom, SetDownloadComp] = useState(false);
    const [zoom, setZoom] = useState(false);

    return (
        <div className="w-full h-auto bg-white rounded-md overflow-hidden">
            <Image
                src={photo.photo}
                alt="gallery"
                width={250}
                height={250}
                loading="lazy"
                unoptimized={true}
                className="w-full h-auto object-cover "
            />
            <div className="w-full text-gray-600 flex items-center">
                <h1 className="w-3/4 px-2 py-1 text-xs xs:text-sm text-gray-800 font-medium line-clamp-1">{photo.title}</h1>
                <div className="w-1/4 flex items-center justify-evenly">
                    {downloadCom ? (
                        <MdOutlineFileDownloadDone
                            size={20}
                            cursor={"pointer"}
                            className="text-green-500"
                        />
                    ) : (
                        <MdOutlineFileDownload
                            size={20}
                            cursor={"pointer"}
                            onClick={() => SetDownloadComp(true)}
                        />
                    )}
                    <MdZoomOutMap
                        size={18}
                        cursor={"pointer"}
                        onClick={() => setZoom(true)}
                    />
                </div>
            </div>
            <PreviewModal open={zoom} closed={() => setZoom(false)} data={photo} />
        </div>
    );
};

export default ImageCard;
