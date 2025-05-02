"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

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

const Nav = () => {
    const pathname = usePathname();
    const isActive = (path) => {
        return pathname === path ? "text-accent border-b-2 border-accent" : "capitalize hover:text-accent transition-all duration-500 ease-in-out";
    };
    return (
        <nav className="flex gap-8">
            {links.map((link, index) => {
                return (
                    <Link key={index} href={link.path} className={isActive(link.path)}>
                        {link.name}
                    </Link>
                );
            })}
        </nav>
    );
};

export default Nav;
