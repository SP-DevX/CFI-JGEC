import { StaticImageData } from "next/image";
import CyberSecurity from "@/assets/clubs/cybersec.jpg"
import Dnc from "@/assets/clubs/dnc.png"
import Edc from "@/assets/clubs/edc.png"
import Gdsc from "@/assets/clubs/gdsc.jpg"
import Joity from "@/assets/clubs/jyoti.jpg"
import Ieee from "@/assets/clubs/IEEE.png"
import Saac from "@/assets/clubs/saac_light.png"
import Renseigner from "@/assets/clubs/quiz.png"

interface ColoabClubListType {
    title: string;
    src: StaticImageData,
    link: string,
}

export const CollabClubList: ColoabClubListType[] = [
    {
        "title": "OWASP Cybersecurity Cell",
        "src": CyberSecurity,
        "link": ""
    },
    {
        "title": "Coder's Club JGEC",
        "src": Dnc,
        "link": ""
    },
    {
        "title": "Entrepreneurship Development Cell",
        "src": Edc,
        "link": ""
    },
    {
        "title": "Google DSC JGEC",
        "src": Gdsc,
        "link": ""
    },
    {
        "title": "IEEE Student Branch JGEC",
        "src": Ieee,
        "link": ""
    },
    {
        "title": "Jyoti - Night School",
        "src": Joity,
        "link": ""
    },
    {
        "title": "Space & Aeronautics Activity Center",
        "src": Saac,
        "link": ""
    },
    {
        "title": "Renseigner - The Quiz Club",
        "src": Renseigner,
        "link": ""
    }
]