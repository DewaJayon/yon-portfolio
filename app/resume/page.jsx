"use client";

import { FaHtml5, FaCss3, FaJs, FaPhp, FaLaravel } from "react-icons/fa";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const about = {
    title: "Tentang saya",
    description:
        "Saya adalah seorang pengembang web yang berpengalaman dalam membangun aplikasi web yang responsif dan interaktif. Saya memiliki keahlian dalam HTML, CSS, JavaScript, PHP, dan Laravel. Saya juga memiliki pengalaman dalam menggunakan berbagai alat dan teknologi modern untuk meningkatkan efisiensi pengembangan.",
    info: [
        {
            fieldName: "Nama",
            fieldValue: "Dewa Jayon",
        },
        {
            fieldName: "Email",
            fieldValue: "dewajayon3@gmail.com",
        },
        {
            fieldName: "Pengalaman",
            fieldValue: "2 Tahun",
        },
        {
            fieldName: "Bahasa",
            fieldValue: "Indonesia, Inggris, Bali",
        },
    ],
};

const experience = {
    icon: "/bagde.svg",
    title: "Web Developer",
    description: "Membangun aplikasi web yang responsif dan interaktif menggunakan HTML, CSS, JavaScript, PHP, dan Laravel.",
    items: [
        {
            company: "Freelance",
            position: "Web Developer",
            duration: "2023 - Sekarang",
        },
    ],
};

const education = {
    icon: "/cap.svg",
    title: "Pendidikan",
    description: "Ringkasan pendidikan saya",
    items: [
        {
            institution: "Universitas Hindu Indonesia",
            major: "Sistem Informasi",
            duration: "2022 - Sekarang",
        },
        {
            institution: "SMA Negeri 2 Semarapura",
            major: "Ilmu Pengetahuan Alam",
            duration: "2019 - 2022",
        },
    ],
};

const skills = {
    title: "Keahlian",
    description: "Keahlian saya dalam pengembangan web",
    skills: [
        {
            icon: <FaHtml5 />,
            name: "HTML",
        },
        {
            icon: <FaCss3 />,
            name: "CSS",
        },
        {
            icon: <FaJs />,
            name: "JavaScript",
        },
        {
            icon: <FaPhp />,
            name: "PHP",
        },
        {
            icon: <FaLaravel />,
            name: "Laravel",
        },
    ],
};

const Resume = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 1.5, duration: 0.4, ease: "easeIn" } }}
            className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
        >
            <div className="container mx-auto">
                <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                        <TabsTrigger value="experience">Pengalaman</TabsTrigger>
                        <TabsTrigger value="education">Pendidikan</TabsTrigger>
                        <TabsTrigger value="skills">Skill</TabsTrigger>
                        <TabsTrigger value="about">Tantang saya</TabsTrigger>
                    </TabsList>
                    <div className="min-h-[70vh] w-full">
                        <TabsContent value="experience" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold text-accent">{experience.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {experience.items.map((item, index) => {
                                            return (
                                                <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 flex rounded-xl flex-col items-center lg:items-start gap-1">
                                                    <span className="text-accent">{item.duration}</span>
                                                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                                                    <div className="flex items-center gap-3">
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                        <p className="text-white/60">{item.company}</p>
                                                    </div>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        <TabsContent value="education" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold text-accent">{education.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {education.items.map((item, index) => {
                                            return (
                                                <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 flex rounded-xl flex-col items-center lg:items-start gap-1">
                                                    <span className="text-accent">{item.duration}</span>
                                                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.major}</h3>
                                                    <div className="flex items-center gap-3">
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                        <p className="text-white/60">{item.institution}</p>
                                                    </div>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        <TabsContent value="skills" className="w-full h-full">
                            <div className="flex flex-col gap-[30px]">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <h3 className="text-4xl font-bold text-accent">{skills.title}</h3>
                                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                                </div>
                                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4">
                                    {skills.skills.map((skill, index) => {
                                        return (
                                            <li key={index}>
                                                <TooltipProvider delayDuration={100}>
                                                    <Tooltip>
                                                        <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex items-center justify-center group cursor-pointer transition-all duration-300 hover:bg-accent/10">
                                                            <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                                                        </TooltipTrigger>
                                                        <TooltipContent>
                                                            <p className="text-accent">{skill.name}</p>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </TabsContent>

                        <TabsContent value="about" className="w-full text-center xl:text-left">
                            <div className="flex flex-col gap-[30px]">
                                <h3 className="text-4xl font-bold text-accent">{about.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                                    {about.info.map((item, index) => {
                                        return (
                                            <li key={index} className="flex items-center justify-center xl:justify-start gap-2 text-white/60">
                                                <span className="text-accent">{item.fieldName}:</span>
                                                <p>{item.fieldValue}</p>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    );
};

export default Resume;
