"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiMenuFries } from "react-icons/ci";

const links = [
    {
        name: "Home",
        path: "/",
    },
    {
        name: "Resume",
        path: "/resume",
    },
    {
        name: "Project",
        path: "/project",
    },
    {
        name: "Contact",
        path: "/contact",
    },
];

const MobileNav = () => {
    const pathname = usePathname();
    const isActive = (path) => {
        return pathname === path ? "text-accent border-b-2 border-accent" : "capitalize hover:text-accent transition-all duration-500 ease-in-out";
    };

    return (
        <Sheet>
            <SheetTrigger className="flex justify-center items-center">
                <CiMenuFries className="text-[32px] text-accent" />
            </SheetTrigger>
            <SheetContent className="border-none bg-primary flex flex-col">
                <div className="mt-32 mb-40 text-center text-2xl">
                    <Link href="/">
                        <h1 className="text-4xl font-semibold">
                            Dewa <span className="text-accent">Jayon</span>
                        </h1>
                    </Link>
                </div>
                <nav className="flex flex-col gap-8 text-center">
                    {links.map((link, index) => {
                        return (
                            <Link href={link.path} key={index} className={isActive(link.path)}>
                                {link.name}
                            </Link>
                        );
                    })}
                </nav>
            </SheetContent>
        </Sheet>
    );
};

export default MobileNav;
