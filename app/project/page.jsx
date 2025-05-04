"use client";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { FaJs, FaPhp, FaLaravel } from "react-icons/fa";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import { motion } from "framer-motion";

const projects = [
    {
        title: "SOK ASIK",
        description: "SOK ASIK adalah website E-commerce yang menjual hardware komputer dan aksesorisnya.",
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
                name: "JavaScript",
                icon: <FaJs />,
            },
        ],
    },
];

const Project = () => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 1, duration: 0.4, ease: "easeIn" } }} className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0">
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
                                                <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 flex rounded-xl flex-col items-center lg:items-start gap-1">
                                                    <div className="flex justify-between w-full">
                                                        <h3 className="text-xl text-center lg:text-left text-accent">{projects.title}</h3>
                                                        <Link
                                                            href={projects.link}
                                                            target="_blank"
                                                            className=" pb-0 ml-auto bg-[#232329]/80 rounded-full border border-accent p-0 hover:bg-accent/10 transition-all duration-300"
                                                        >
                                                            <GoArrowUpRight className="text-accent text-2xl" />
                                                        </Link>
                                                    </div>
                                                    <span className="text-white/60 text-sm">{projects.description}</span>
                                                    <div className="flex items-center gap-3 pt-3">
                                                        {projects.techStack.map((tech, index) => {
                                                            return (
                                                                <TooltipProvider delayDuration={100} key={index}>
                                                                    <Tooltip>
                                                                        <TooltipTrigger className="flex items-center justify-center group cursor-pointer transition-all duration-300">
                                                                            <div className="text-2xl group-hover:text-accent transition-all duration-300">{tech.icon}</div>
                                                                        </TooltipTrigger>
                                                                        <TooltipContent>
                                                                            <p className="text-accent">{tech.name}</p>
                                                                        </TooltipContent>
                                                                    </Tooltip>
                                                                </TooltipProvider>
                                                            );
                                                        })}
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
