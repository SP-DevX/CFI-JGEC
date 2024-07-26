import { Modal } from "flowbite-react";
import Image from "next/image";
import React, { FC } from "react";

type props = {
    open: boolean;
    closed: () => void;
    data: galleryPhotoType;
};

const PreviewModal: FC<props> = ({ open, closed, data }) => {
    return (
        <>
            <Modal show={open} size={"lg"} onClose={closed} className="z-[9999]">
                <Modal.Header>
                    <h1 className="w-full px-2 py-1 line-clamp-1">{data.title}</h1>
                </Modal.Header>
                <Modal.Body>
                    <Image
                        src={data.photo}
                        alt="gallery"
                        width={250}
                        height={250}
                        loading="lazy"
                        unoptimized={true}
                        className="w-full h-auto object-cover"
                    />
                </Modal.Body>
            </Modal>
        </>
    );
};

export default PreviewModal;
