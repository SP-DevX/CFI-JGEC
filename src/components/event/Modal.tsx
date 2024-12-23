import React, { useEffect, useState } from "react";
import "./Modal.css";
import first_badge from "./1st_badge.png";
import silver_badge from "./silver-badge.png";
import bronze_badge from "./bronze-badge.png";
import Image from "next/image";
import axios from "axios";

type props = {
	eventId: string;
};

const Modal: React.FC<props> = ({ eventId }) => {
	const [loading, setLoading] = useState(false);
	const [teams, setTeams] = useState<registerTeamsType[]>([]);

	const registerTeam = async () => {
		setLoading(true);
		try {
			const { data } = await axios.get(
				`${process.env.NEXT_PUBLIC_API_URL}/event/register/teams/${eventId}`
			);
			setTeams(data);
		} catch (error: any) {
			console.log(error);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		registerTeam();
	}, []);

	// Separate the top 3 teams and the rest of the teams
	const top3Teams = teams.slice(0, 3);
	const otherTeams = teams.slice(3);

	return (
		<>
			{/* The button to open modal */}
			<label
				htmlFor="my_modal_7"
				className="btn w-48 xxs:w-60">
				View Results
			</label>

			{/* Put this part before </body> tag */}
			<input
				type="checkbox"
				id="my_modal_7"
				className="modal-toggle"
			/>
			<div
				className="modal"
				role="dialog">
				<div className="xl:w-[60%]  2xl:h-[80vh] modal-box p-0 overflow-hidden  md:h-[75vh]  xs:h-[70vh] xxs:h-[70vh] h-[70vh] lg:h-[70vh] xl:h-[70vh] bg-white">
					<div className="modal-back py-4 flex items-center flex-col lg:gap-8 gap-6 justify-evenly curve h-[95%] w-full">
						<div className="text-xl">
							<div className="flex modal_text">
								<div className="bg-white left-0 h-10 w-10 md:h-12 md:w-12 lg:h-12 lg:w-12 flex items-center rounded-lg justify-center z-50 -rotate-6">
									<div>R</div>
								</div>
								<div className="bg-green-300  h-10 w-10 md:h-12 md:w-12 lg:h-12 lg:w-12 flex items-center rounded-lg justify-center left-8 z-40 rotate-6">
									E
								</div>
								<div className="bg-white  h-10 w-10 md:h-12 md:w-12 lg:h-12 lg:w-12 flex items-center rounded-lg justify-center left-16 z-30 -rotate-6">
									S
								</div>
								<div className="bg-red-500 h-10 w-10 md:h-12 md:w-12 lg:h-12 lg:w-12 flex items-center rounded-lg justify-center left-24 z-20 rotate-6">
									U
								</div>
								<div className="bg-white h-10 w-10 md:h-12 md:w-12 lg:h-12 lg:w-12 flex items-center rounded-lg justify-center left-32 -rotate-6">
									L
								</div>
								<div className="bg-blue-400 h-10 w-10 md:h-12 md:w-12 lg:h-12 lg:w-12 flex items-center rounded-lg justify-center left-32 rotate-6">
									T
								</div>
								<div className="bg-white h-10 w-10 md:h-12 md:w-12 lg:h-12 lg:w-12 flex items-center rounded-lg justify-center left-32 -rotate-6">
									S
								</div>
							</div>
						</div>
						
						{/* Winners */}
						<div className="flex justify-evenly w-full">
							{top3Teams[1] && (
								<div className="flex mt-2 w-1/2 items-center gap-3 flex-col">
									<div className="w-14 h-14 md:h-20 md:w-20 mt-3 -rotate-6 border-[4px] rounded-xl border-[#979595]">
										<img
											src={top3Teams[1]?.teamLogo}
											className="img rounded-lg"
											alt=""
										/>
										<div className="flex justify-center items-center">
											<Image
												src={silver_badge}
												alt="First_Badge"
												className="absolute w-10 md:top-[3em] top-[2em]"
											/>
										</div>
									</div>
									<div className="lg:text-[15px] text-[15px] md:text-[18px] line-clamp-2 pl-2 text-center">
										{top3Teams[1]?.teamName}
									</div>
								</div>
							)}
							{top3Teams[0] && (
								<div className="flex w-1/2 items-center gap-4 flex-col">
									<div className="md:h-24 md:w-24 w-20 h-20 mt-3 rotate-0 border-[4px] rounded-xl border-[#ede103]">
										<img
											src={top3Teams[0]?.teamLogo}
											className="img rounded-lg"
											alt=""
										/>
										<div className="flex justify-center items-center">
											<Image
												src={first_badge}
												alt="First_Badge"
												className="absolute w-14  lg:top-[3em]"
											/>
										</div>
									</div>
									<div className="md:text-xl text-lg line-clamp-2 text-center">
										{top3Teams[0]?.teamName}
									</div>
								</div>
							)}
							{top3Teams[2] && (
								<div className="flex mt-2 w-1/2 items-center gap-5 flex-col">
									<div className="md:w-20 md:h-20 w-14 h-14 md:mt-3 mt-3 rotate-6 border-[4px] rounded-xl border-[#9c6a05]">
										<img
											src={top3Teams[2]?.teamLogo}
											className="img rounded-lg"
											alt=""
										/>
										<div className="flex justify-center items-center">
											<Image
												src={bronze_badge}
												alt="First_Badge"
												className="absolute w-12 md:top-[3em] top-[2em]"
											/>
										</div>
									</div>
									<div className=" lg:text-[15px] md:text-[18px] text-[14px] text-center line-clamp-2 ">
										{top3Teams[2]?.teamName}
									</div>
								</div>
							)}
						</div>

						{/* Other rankers */}
						<div className="flex flex-col w-full overflow-y-auto h-[35%] no-scrollbar lg:px-8 px-4 pb-6 gap-2">
							{otherTeams &&
								otherTeams.map((data, index) => (
									<div
										key={index}
										className="bg-[#ffffff5a] flex items-center justify-between p-2 rounded-full w-full">
										<div className="flex items-center gap-1">
											<div className="w-8 h-8 rounded-full flex items-center justify-center bg-white font-medium">
												{index + 4} {/* Adjust the index to start from 4 */}
											</div>
											<div className="w-8 h-8 rounded-full flex items-center justify-center object-contain overflow-hidden bg-white font-medium">
												<img
													src={data.teamLogo}
													alt=""
													className="rounded-full img"
												/>
											</div>
											<div className="font-medium">{data.teamName}</div>
										</div>
										
									</div>
								))}
						</div>
					</div>
				</div>
				<label
					className="modal-backdrop"
					htmlFor="my_modal_7">
					Close
				</label>
			</div>
		</>
	);
};

export default Modal;
