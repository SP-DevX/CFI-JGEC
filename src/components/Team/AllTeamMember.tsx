
import React from "react";
import MemberCard from "../common/MemberCard"; 
import { getMembers } from "@/helpers/FetchMembers";

const AllTeamMember = async () => {
    const teamMembers = await getMembers(); 
    return (
        <>
            <div className="layout grid grid-cols-2 md:grid-cols-3 mlg:grid-cols-4 gap-8 p-8">
                {teamMembers
                    .filter((ele: membersType) => ele.year === String(new Date().getFullYear()))
                    .map((item: membersType) => (
                        <MemberCard data={item} key={item._id} />
                    ))}
            </div>
        </>
    );
};

export default AllTeamMember;
