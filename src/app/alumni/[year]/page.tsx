import MemberCard from "@/components/common/MemberCard";
import Title from "@/components/common/Title";
import axios from "axios"; 

export async function generateMetadata({ params }: { params: { year: string } }) {
    const { year } = params;
    return {
        title: `${year} Batch`,
        openGraph: {
            title: `${year} Batch Alumni - CFI`,
            description: `Meet our ${year} batch alumni who are working hard to make CFI better. Meet them and know more about them.`,
            url: `/alumni/${year}`,
            type: "website",
        }
    };
}

const AlumniBatch = async ({ params }: { params: { year: string } }) => {
    const { year } = params; 
    const {
        data: { members },
    } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/members/${year}`);
   
    return (
        <div>
            <Title title={`${year} Batch`} />
            <div className="w-full min-h-screen commonBg">
                <div className="layout grid min-[425px]:grid-cols-2 md:grid-cols-3 mlg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 p-8">
                    {members.map((item: membersType) => (
                        <MemberCard data={item} key={item._id} />
                    ))} 
                </div>
            </div>
        </div>
    );
};

export default AlumniBatch;
