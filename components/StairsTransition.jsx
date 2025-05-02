"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const StairsTransition = ({ children }) => {
    const pathname = usePathname();

    return (
        <div>
            <AnimatePresence>
                <div key={pathname}>
                    <motion.div
                        initial={{ opacity: 1 }}
                        animate={{
                            opacity: 0,
                            transition: { delay: 1, duration: 0.4, ease: "easeInOut" },
                        }}
                        className="h-screen w-screen bg-primary fixed top-8 pointer-events-none"
                    />
                </div>
                {children}
            </AnimatePresence>
        </div>
    );
};

export default StairsTransition;
