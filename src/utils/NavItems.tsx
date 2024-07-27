
import { BiHome } from "react-icons/bi";
import {  BsInfoCircle } from "react-icons/bs";
import { FaTools } from "react-icons/fa";
import { FcGallery } from "react-icons/fc";
import { GiHelp } from "react-icons/gi";
import { GoProject } from "react-icons/go";
import { GrGallery } from "react-icons/gr";
import { MdDiversity1, MdDiversity2, MdEvent } from "react-icons/md";
import { SiTeamspeak } from "react-icons/si";

export const NavItems: NavListType[] = [
    {
        name: "Home",
        link: "/",
        icon: <BiHome />,
    },
    {
        name: "About",
        link: "/about",
        icon: <BsInfoCircle />,
    },
    {
        name: "Events",
        link: "/events",
        icon: <MdEvent/>,
    },
    {
        name: "Team",
        link: "/team",
        icon: <MdDiversity1/>,
    },
    {
        name: "Our Alumni",
        link: "/alumni",
        icon: <MdDiversity2 />,
    },
    {
        name: "gallery",
        link: "/gallery",
        icon: <GrGallery/>,
    },
    {
        name: "Projects",
        link: "/projects",
        icon: <GoProject />,
    },
    {
        name: "Tools",
        link: "/stock",
        icon: <FaTools />,
    },
    {
        name: "Contact Us",
        link: "/contact",
        icon: <GiHelp />,
    },
];