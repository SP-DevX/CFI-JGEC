
"use client";

import { socialIcons } from "@/utils/FooterItem";
import { NavItems } from "@/utils/NavItems";
import { Drawer } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

type props = {
    open: boolean;
    closed: () => void;
}

export default function NavDrawer({ open, closed }: props) {
    const pathname = usePathname();
    const path = '/' + pathname.split('/')[1];
    return (
        <>
            <Drawer open={open} onClose={closed} className="z-[99999]">
                <Drawer.Header title="" titleIcon={() => <></>} />
                <Drawer.Items>
                    <div className="flex items-center gap-x-3 border-b pb-2 mb-8">
                        <Image
                            src="/logo_dark.png"
                            width="60"
                            height="60"
                            alt="logo"
                            priority
                        />
                        <h1 className="text-3xl font-bold text-primary">CFI - JGEC</h1>
                    </div>
                    <ul>
                        {
                            NavItems.map((item, i) => (
                                <li key={i} className={`py-2 px-2 text-lg font-semibold  rounded-md ${path === item.link ? "bg-primary text-white" : "text-gray-600"} mb-2`}>
                                    <Link
                                        className="w-full flex items-center gap-x-2"
                                        onClick={closed}
                                        href={item.link}
                                    >
                                        {item.icon}
                                        <span className="text-base">{item.name}</span>
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                    <div className="flex flex-col mt-10 sm:hidden">
                        <h1 className="text-center font-medium text-primary">
                            Follow Us on
                        </h1>
                        <div className="flex justify-center items-center space-x-4 mt-3">
                            {socialIcons.map((icon, index) => {
                                return (
                                    <Link href={icon.link}
                                        className="text-primary opacity-80 hover:opacity-100  text-2xl"
                                        key={index}
                                    >
                                        {icon.Icon}
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </Drawer.Items>
            </Drawer>
        </>
    );
}
