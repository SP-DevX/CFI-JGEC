

import axios from "axios";
import Image from "next/image";
import React from "react";

const ToolCard: React.FC = async () => {
    const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/stock`);
    const tools = data.components;
    
    return (
        <>
            <div className="layout grid grid-cols-4 gap-8 py-8">
                {tools.map((tool: toolType) => (
                    <div className="w-full h-auto rounded-md bg-white p-4" key={tool._id}>
                        <div>
                            <Image
                                src={tool.photo}
                                width={200}
                                height={100}
                                className="w-full object-cover rounded-sm"
                                alt="tools"
                            />
                        </div>
                        <div className="capitalize text-start pt-3">
                            <h1 className="text-base font-semibold line-clamp-2">{tool.name}</h1>
                            {tool.modelNo && (
                                <h1 className="text-sm font-medium">Model: {tool.modelNo}</h1>
                            )}
                            <p className="text-sm font-medium">
                                Qty - <span>{tool.qty}</span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default ToolCard;
