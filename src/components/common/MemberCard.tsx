
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";

const MemberCard: React.FC<{ data: membersType }> = ({ data }) => {
    const {
        name,
        position,
        phone,
        photo,
        email,
        socialLinks: { facebook, instagram, linkedin },
    } = data;
    return (
        <>
            <div key={email}>
                <div className="w-full max-w-[17rem] min-[425px]:max-w-xs mx-auto h-[270px] md:h-[250px] rounded-sm bg-white/60 backdrop-blur-md flex group transition-all ease-in-out duration-500">
                    <div className="w-full p-6 px-3 flex items-center justify-start flex-col ease-in-out duration-500">
                        <Image
                            src={photo}
                            alt="hero image"
                            width={100}
                            height={100}
                            loading="lazy"
                            className="w-28 h-28 rounded-full object-cover"
                        />
                        <div className="py-4 space-y-2 text-center">
                            <h1 className="text-primary font-semibold uppercase text-sm ">{name}</h1>
                                <p className="text-[#456789] line-clamp-2 font-medium text-sm ">{position.join(', ')}</p>
                        </div>
                    </div>
                    <div className="group-hover:min-w-[50px] group-hover:w-[50px] w-0 h-full bg-primary transition-all duration-500 ease-in-out group-hover:flex flex-col items-center justify-around text-white text-xl hidden">
                        <a href={"mailto:" + email}>
                            <MdEmail />
                        </a>
                        <a href={"tel:" + phone}>
                            <MdPhone />
                        </a>
                        {linkedin && (
                            <Link href={linkedin} target="_blank">
                                <FaLinkedin />
                            </Link>
                        )}
                        {facebook && (
                            <Link href={facebook} target="_blank">
                                <FaFacebook />
                            </Link>
                        )}
                        {instagram && (
                            <Link href={instagram} target="_blank">
                                <FaInstagram />
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default MemberCard;
