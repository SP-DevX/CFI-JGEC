"use client";

import React, { useState } from "react";
import toast from "react-hot-toast";
import { MdDownload } from "react-icons/md";
import Modal from "./Modal";
import Link from "next/link";

type props = {
	eventId: string;
};

const PostEvent: React.FC<props> = ({eventId}) => {
	const [show, setshow] = useState(false);
	return (
		<>
			<div className="flex flex-col mt-6 gap-y-2">
				<div className=" sm:mb-3">
					{/* Results */}
					<Modal eventId={eventId}/>
					
				</div>
				{/* <div className=" sm:mb-3">
					<Link href={`/certificate/${_id}`} >
					<button
						className="btn w-48  xxs:w-60"
						onClick={() =>
							toast.success("Certificates will be available soon")
						}>
						Certificates
					</button> 
					</Link>
				</div> */}
				<div className=" sm:mb-3">
					<Link href={`/gallery`}>
					<button
						className="btn w-48 xxs:w-60">
						Event Gallery
					</button>
					</Link>
				</div>
			</div>
		</>
	);
};

export default PostEvent;
