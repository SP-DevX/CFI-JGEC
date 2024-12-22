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
				<div className="lg:w-1/4 modal-box p-0 overflow-hidden md:h-[30vh] h-[80vh] lg:h-[80vh] bg-white">
					<div className="modal-back flex items-center flex-col lg:gap-8 gap-6 justify-center curve h-[95%] w-full">
						<div className="text-xl">
							<div className="flex modal_text">
								<div className="bg-white left-0  h-12 w-12 flex items-center rounded-lg justify-center z-50 -rotate-6">
									<div>R</div>
								</div>
								<div className="bg-green-300 h-12 w-12 flex items-center rounded-lg justify-center left-8 z-40 rotate-6">
									A
								</div>
								<div className="bg-white h-12 w-12 flex items-center rounded-lg justify-center left-16 z-30 -rotate-6">
									N
								</div>
								<div className="bg-red-500 h-12 w-12 flex items-center rounded-lg justify-center left-24 z-20 rotate-6">
									K
								</div>
								<div className="bg-white h-12 w-12 flex items-center rounded-lg justify-center left-32 -rotate-6">
									S
								</div>
							</div>
						</div>
						<div className="text-2xl font-bold">Leaderboard</div>
						{/* Winners */}
						<div className="flex justify-evenly w-full">
							{top3Teams[1] && (
								<div className="flex mt-2 w-1/2 items-center gap-4 flex-col">
									<div className="w-14 h-14 mt-3 -rotate-6 border-[4px] rounded-xl border-[#979595]">
										<img
											src={top3Teams[1]?.teamLogo}
											className="img rounded-lg"
											alt=""
										/>
										<div className="flex justify-center items-center">
											<Image
												src={silver_badge}
												alt="First_Badge"
												className="absolute w-10 top-[2em]"
											/>
										</div>
									</div>
									<div className="lg:text-lg  line-clamp-2 text-center">
										{top3Teams[1]?.teamName}
									</div>
								</div>
							)}
							{top3Teams[0] && (
								<div className="flex w-1/2 items-center gap-4 flex-col">
									<div className="w-[5rem] h-[5rem] mt-3 rotate-0 border-[4px] rounded-xl border-[#ede103]">
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
									<div className="text-lg line-clamp-2 text-center">
										{top3Teams[0]?.teamName}
									</div>
								</div>
							)}
							{top3Teams[2] && (
								<div className="flex mt-2 w-1/2 items-center gap-4 flex-col">
									<div className="w-14 h-14 mt-3 rotate-6 border-[4px] rounded-xl border-[#9c6a05]">
										<img
											src={top3Teams[2]?.teamLogo}
											className="img rounded-lg"
											alt=""
										/>
										<div className="flex justify-center items-center">
											<Image
												src={bronze_badge}
												alt="First_Badge"
												className="absolute w-12 top-[2em]"
											/>
										</div>
									</div>
									<div className=" lg:text-lg text-center line-clamp-2 ">
										{top3Teams[2]?.teamName}
									</div>
								</div>
							)}
						</div>

						{/* Other rankers */}
						<div className="flex flex-col w-full overflow-y-auto h-[35%] no-scrollbar px-8 pb-6 gap-2">
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
										<div className="pr-3 font-medium">
											{data.members.length}
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
