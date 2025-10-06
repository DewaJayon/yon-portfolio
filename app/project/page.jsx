"use client";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { FaJs, FaPhp, FaLaravel, FaVuejs } from "react-icons/fa";
import { SiInertia } from "react-icons/si";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import { motion } from "framer-motion";

const projects = [
    {
        title: "SOK ASIK",
        description:
            "SOK ASIK adalah website E-commerce yang menjual hardware komputer dan aksesorisnya.",
        link: "https://sokasik.dewajayon.my.id/",
        techStack: [
            {
                name: "Laravel",
                icon: <FaLaravel />,
            },
            {
                name: "PHP",
                icon: <FaPhp />,
            },
            {
                name: "JavaScript",
                icon: <FaJs />,
            },
        ],
    },
    {
        title: "KawaNime",
        description: "KawaNime adalah website yang menyediakan streaming anime subtitle Indonesia.",
        link: "https://kawanime.dewajayon.my.id/",
        techStack: [
            {
                name: "Laravel",
                icon: <FaLaravel />,
            },
            {
                name: "PHP",
                icon: <FaPhp />,
            },
            {
                name: "Vue JS",
                icon: <FaVuejs />,
            },
            {
                name: "Inertia JS",
                icon: <SiInertia />,
            },
        ],
    },
    {
        title: "DaftarKu",
        description: "DaftarKu adalah website pribadi untuk mencatat project saya.",
        link: "https://daftar-ku.dewajayon.my.id/",
        techStack: [
            {
                name: "Laravel",
                icon: <FaLaravel />,
            },
            {
                name: "PHP",
                icon: <FaPhp />,
            },
            {
                name: "Vue JS",
                icon: <FaVuejs />,
            },
            {
                name: "Inertia JS",
                icon: <SiInertia />,
            },
        ],
    },
    {
        title: "StockEase",
        description:
            "StockEase adalah Aplikasi manajemen stok dan penjualan berbasis Laravel + Inertia.js + Vue untuk mempermudah pengelolaan gudang dan POS.",
        link: "https://stockease.dewajayon.my.id",
        techStack: [
            {
                name: "Laravel",
                icon: <FaLaravel />,
            },
            {
                name: "PHP",
                icon: <FaPhp />,
            },
            {
                name: "Vue JS",
                icon: <FaVuejs />,
            },
            {
                name: "Inertia JS",
                icon: <SiInertia />,
            },
        ],
    },
];

const Project = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 1, duration: 0.4, ease: "easeIn" },
            }}
            className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
        >
            <div className="container mx-auto ">
                <Tabs defaultValue="project" className="flex flex-col xl:flex-row gap-[60px]">
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6 justify-center">
                        <TabsTrigger value="project">Project saya</TabsTrigger>
                    </TabsList>
                    <div className="min-h-[70vh] w-full">
                        <TabsContent value="project" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {projects.map((projects, index) => {
                                            return (
                                                <li
                                                    key={index}
                                                    className="bg-[#232329] h-auto py-6 px-8 flex flex-col justify-between rounded-xl transition-all duration-300 hover:bg-[#2e2e35]"
                                                >
                                                    <div className="flex items-start justify-between w-full mb-2">
                                                        <h3 className="text-xl font-semibold text-accent tracking-wide">
                                                            {projects.title}
                                                        </h3>
                                                        <Link
                                                            href={projects.link}
                                                            target="_blank"
                                                            className="ml-3 bg-[#2f2f35]/80 rounded-full border border-accent p-1 hover:bg-accent/10 transition-all duration-300"
                                                        >
                                                            <GoArrowUpRight className="text-accent text-xl" />
                                                        </Link>
                                                    </div>

                                                    <TooltipProvider delayDuration={100}>
                                                        <Tooltip>
                                                            <TooltipTrigger asChild>
                                                                <p className="text-sm text-white/70 leading-relaxed text-justify mb-3 line-clamp-2">
                                                                    {projects.description}
                                                                </p>
                                                            </TooltipTrigger>
                                                            <TooltipContent className="bg-slate-800">
                                                                <p className="text-accent">
                                                                    {projects.description}
                                                                </p>
                                                            </TooltipContent>
                                                        </Tooltip>
                                                    </TooltipProvider>

                                                    <div className="flex items-center gap-4 pt-2">
                                                        {projects.techStack.map((tech, index) => (
                                                            <TooltipProvider
                                                                delayDuration={100}
                                                                key={index}
                                                            >
                                                                <Tooltip>
                                                                    <TooltipTrigger className="flex items-center justify-center group cursor-pointer transition-all duration-300">
                                                                        <div className="text-2xl text-white/80 group-hover:text-accent transition-all duration-300">
                                                                            {tech.icon}
                                                                        </div>
                                                                    </TooltipTrigger>
                                                                    <TooltipContent>
                                                                        <p className="text-accent">
                                                                            {tech.name}
                                                                        </p>
                                                                    </TooltipContent>
                                                                </Tooltip>
                                                            </TooltipProvider>
                                                        ))}
                                                    </div>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    );
};

export default Project;
