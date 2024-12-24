"use client";

import Loader from "@/app/loading";
import axios from "axios";
import { Table } from "flowbite-react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { use, useEffect, useState } from "react";
import toast from "react-hot-toast";
import TeamDetailsModal from "./TeamDetailsModal";
const RegistrationModal = dynamic(() => import("./RegistrationModal"), {
	ssr: false,
});

type props = {
	isCompleted: boolean;
	eventId: string;
	eventName: string;
};

const RegisterTable: React.FC<props> = ({
	isCompleted,
	eventId,
	eventName,
}) => {
	const [openModal, setOpenModal] = useState(false);
    const [individualTeam, setIndividualTeam] = useState();
	const [teamDetailsModal, setteamDetailsModal] = useState(false);
	const [loading, setLoading] = useState(false);
	const [teams, setTeams] = useState<registerTeamsType[]>([]);
	const fields = {
		eventId,
		eventName,
		teamName: "",
		teamLogo: "",
		projectName: "",
		projectDescription: "",
		leaderName: "",
		leaderBranch: "",
		leaderYear: "",
		phone: "",
		email: "",
		members: [],
	};

	const registerTeam = async () => {
		setLoading(true);
		try {
			const { data } = await axios.get(
				`${process.env.NEXT_PUBLIC_API_URL}/event/register/teams/${eventId}`
			);
			setTeams(data);
		} catch (error: any) {
			console.log(error);
			toast.error(error.response.data.message || "Something went wrong");
		} finally {
			setLoading(false);
		}
	};
	useEffect(() => {
		registerTeam();
	}, [openModal]);

	const handleTeamDetails = (team: any) => {
		setteamDetailsModal(true);	
        setIndividualTeam(team);	
	};
    

	if (loading) return <Loader />;

	return (
		<>
			<RegistrationModal
				closed={() => setOpenModal(false)}
				open={openModal}
				fields={fields}
			/>
			<TeamDetailsModal
				closed={() => setteamDetailsModal(false)}
				open={teamDetailsModal}
				fields={fields}
                data = {individualTeam}
			/>
			<div className=" flex items-center my-4 gap-4 ">
				{!isCompleted && (
					<button
						onClick={() => setOpenModal(true)}
						className="btn">
						Register Now
					</button>
				)}
			</div>

			{teams.length > 0 && (
				<div className="w-full min-h-40 my-8">
					<h1 className='text-2xl font-medium border-b-2 relative after:absolute after:contents-[""] after:-bottom-[2px] after:left-0 after:w-[166px] after:h-[2px] after:bg-blue-500 text-primary'>
						Register Teams
					</h1>

					<div className="overflow-x-auto my-4">
						<Table>
							<Table.Head>
								<Table.HeadCell className="max-xs:p-2 max-xs:text-xs">
									SRL. No.
								</Table.HeadCell>
								<Table.HeadCell className="max-xs:p-2 max-xs:text-xs  text-nowrap">
									Team name
								</Table.HeadCell>
								<Table.HeadCell className="max-xs:p-2 max-xs:text-xs text-nowrap">
									Project name
								</Table.HeadCell>
								<Table.HeadCell className="max-xs:p-2 max-xs:text-xs  text-nowrap">
									Leader Name
								</Table.HeadCell>
								<Table.HeadCell className="max-xs:p-2 max-xs:text-xs">
									Contact No
								</Table.HeadCell>
								<Table.HeadCell className="max-xs:p-2 max-xs:text-xs">
									No of Members
								</Table.HeadCell>
							</Table.Head>
							<Table.Body className="divide-y">
								{teams.map((team, index) => (
									<Table.Row
										key={team._id}
										className="capitalize hover:bg-[#bdbdbd61] cursor-pointer duration-200"
										onClick={() => handleTeamDetails(team)}>
										<Table.Cell className="max-xs:p-2 max-xs:text-xs">
											{index + 1}.
										</Table.Cell>
										<Table.Cell className="font-semibold text-gray-700 max-xs:p-2 max-xs:text-xs  ">
											<div className="flex items-center gap-x-2  break-words ">
												<Image
													src={team.teamLogo}
													alt="team logo"
													width={32}
													height={32}
													loading="lazy"
													className="rounded-full min-w-6 w-6 h-6 xs:min-w-8 xs:w-8 xs:h-8 object-cover"
												/>
												{team.teamName}
											</div>
										</Table.Cell>
										<Table.Cell className="max-xs:p-2 max-xs:text-xs">
											{team.projectName}
										</Table.Cell>
										<Table.Cell className="text-nowrap max-xs:text-xs max-xs:p-2 ">
											{team.leaderName}
										</Table.Cell>
										<Table.Cell className="max-xs:p-2 max-xs:text-xs">
											{team.phone}
										</Table.Cell>
										<Table.Cell className="max-xs:p-2 max-xs:text-xs">
											{team.members.length + 1}
										</Table.Cell>
									</Table.Row>
								))}
							</Table.Body>
						</Table>
					</div>
				</div>
			)}
		</>
	);
};

export default RegisterTable;
