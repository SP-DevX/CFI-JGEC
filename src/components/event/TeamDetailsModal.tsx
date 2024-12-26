import React, { useEffect, useState } from "react";
import "./Modal.css";
import first_badge from "./1st_badge.png";
import silver_badge from "./silver-badge.png";
import bronze_badge from "./bronze-badge.png";
import Image from "next/image";
import axios from "axios";
import { Modal, Table } from "flowbite-react";

type props = {
	open: boolean;
	closed: () => void;
	fields: eventRegistrationType;
	data: any;
};

const TeamDetailsModal: React.FC<props> = ({ open, closed, fields, data }) => {
	// console.log(data);

	const [loading, setLoading] = useState(false);
	const [teams, setTeams] = useState<registerTeamsType[]>([]);

	return (
		<>
			<Modal
				show={open}
				onClose={closed}
				size={"2xl"}
				className="z-[999]">
				<Modal.Header>Team Details</Modal.Header>
				<Modal.Body className="max-xs:!px-2">
					{/* Details of the team */}
					<div className="flex flex-col gap-6 text-black">
						<div className="flex justify-between items-center">
							<div className="lg:w-2/3 text-[12px] lg:text-[16px]">
								<div>
									<span className="font-semibold">Team Name : </span>
									{data?.teamName}
								</div>
								<div>
									<span className="font-semibold">Team Leader : </span>
									{data?.leaderName}
								</div>
								<div>
									<span className="font-semibold">Project Name : </span>
									{data?.projectName}
								</div>
							</div>

							<Image
								src={data?.teamLogo}
								alt=""
								className="rounded-md"
								width={80}
								height={80}
							/>
						</div>
						<div className="font-semibold lg:text-[16px] text-[12px]">Memebers :</div>
						<Table>
							<Table.Head>
								<Table.HeadCell className="max-xs:p-2 max-xs:text-xs">
									SRL. No.
								</Table.HeadCell>
								<Table.HeadCell className="max-xs:p-2 max-xs:text-xs  text-nowrap">
									Name
								</Table.HeadCell>
								<Table.HeadCell className="max-xs:p-2 max-xs:text-xs text-nowrap text-center">
									Department
								</Table.HeadCell>
								
							</Table.Head>
							<Table.Body className="divide-y">
								{data?.members.map((team:any, index:any) => (
									<Table.Row
										key={index}
										className="capitalize hover:bg-[#bdbdbd61] cursor-pointer duration-200"
										>
										<Table.Cell className="max-xs:p-2 max-xs:text-xs">
											{index + 2}.
										</Table.Cell>
										
										<Table.Cell className="max-xs:p-2 max-xs:text-xs">
											{team.name}
										</Table.Cell>
										<Table.Cell className="text-nowrap text-center max-xs:text-xs max-xs:p-2 ">
											{team.branch}
										</Table.Cell>
										
									</Table.Row>
								))}
							</Table.Body>
						</Table>
					</div>
				</Modal.Body>
			</Modal>
		</>
	);
};

export default TeamDetailsModal;
