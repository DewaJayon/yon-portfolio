"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaEnvelope, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 1, duration: 0.4, ease: "easeIn" } }} className="py-6">
            <div className="container mx-auto ">
                <div className="flex flex-col xl:flex-row gap-[30px]">
                    <div className="xl:h-[54%] order-2 xl:order-none xl:w-[50%]">
                        <form action="" className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
                            <h1 className="text-2xl font-bold text-center text-accent">Hubungi saya</h1>
                            <div className="flex flex-col gap-4">
                                <Input type="text" placeholder="Nama" className="p-2 transition-all duration-300 ease-in-out" />
                            </div>
                            <div className="flex flex-col gap-4 ">
                                <Input type="email" placeholder="Email" className="p-2 transition-all duration-300 ease-in-out" />
                            </div>
                            <div className="flex flex-col gap-4">
                                <label className="text-sm font-semibold">Pesan</label>
                                <Textarea
                                    className="bg-primary outline-none border-none focus:border-accent focus-visible:ring-accent transition-all duration-300 ease-in-out"
                                    placeholder="Masukkan pesan anda disini"
                                ></Textarea>
                            </div>
                            <Button
                                type="submit"
                                className="bg-green-900 text-white py-2 px-4 rounded-md flex items-center justify-center gap-2 hover:bg-accent/50 transition-all duration-300 ease-in-out"
                            >
                                <FaEnvelope /> Kirim Pesan
                            </Button>
                        </form>
                    </div>

                    <div className="flex-1 flex items-center xl:justify-end order-1 mb-8 xl:mb-0 xl:order-none">
                        <ul className="flex flex-col gap-10">
                            <li className="flex items-center gap-6">
                                <Link href="https://wa.me/6282146121643" target="_blank" rel="noopener noreferrer">
                                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center transition-all duration-300 ease-in-out hover:bg-accent/50">
                                        <div>
                                            <FaWhatsapp />
                                        </div>
                                    </div>
                                </Link>
                                <div>
                                    <h1 className="text-2xl font-bold text-accent">WhatsApp</h1>
                                    <p className="text-sm">Hubungi saya melalui whatsapp</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Contact;
