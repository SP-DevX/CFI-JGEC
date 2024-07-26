"use client"

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavItems } from "@/utils/NavItems";
import Image from "next/image";
import Logo from "@/assets/logo_light.png"
import { MdMenu } from "react-icons/md";
import NavbarDrawer from "./NavDrawer";

const Navbar: React.FC = () => {
    const pathname = usePathname();
    const path = '/' + pathname.split('/')[1];
    const [isShadow, setIsShadow] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        document.addEventListener("scroll", () => {
            const scrollVal = window.scrollY;
            if (scrollVal > 30) {
                setIsShadow(true);
            } else setIsShadow(false);
        });
    }, [isShadow])


    return (
        <>
            <div className={`fixed top-0  ${isShadow ? 'bg-primary shadow-lg' : 'bg-transparent'} w-full h-20 z-[99] `}>
                <div className="max-w-[1148px] px-8 xl:px-0 h-full mx-auto flex items-center justify-between" >
                    <div>
                        <Link href="/">
                            <Image
                                src={Logo}
                                width="60"
                                height="60"
                                alt="logo"
                            />
                        </Link>
                    </div>
                    <div className="text-white font-semibold space-x-2 hidden min-[1148px]:flex">
                        {
                            NavItems.map((item, i) => (
                                <Link href={item.link} key={i} className={`px-4 py-2  ${path == item.link && "bg-white text-primary"}  rounded-md text-[15px] uppercase`}> {item.name}</Link>
                            ))
                        }
                    </div>
                    <button
                        onClick={() => setIsMenuOpen(true)}
                        className="text-4xl text-white min-[1148px]:hidden"
                    >
                        <MdMenu />
                    </button>
                </div>
            </div >
            <NavbarDrawer open={isMenuOpen} closed={()=>setIsMenuOpen(false)} />
        </>
    );
};
export default Navbar;