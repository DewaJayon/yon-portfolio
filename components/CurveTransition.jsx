"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const anim = (variants) => {
    return {
        variants,
        initial: "initial",
        animate: "enter",
        exit: "exit",
    };
};

const CurveTransition = ({ children }) => {
    const [dimensions, setDimensions] = useState({
        height: 0,
        width: 0,
    });

    useEffect(() => {
        const resize = () => {
            setDimensions({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        resize(); // Set initial dimensions
        window.addEventListener("resize", resize);

        return () => {
            window.removeEventListener("resize", resize);
        };
    }, []);

    const pathName = usePathname();

    return (
        <div className="h-[calc(100vh_+_600px)] w-full fixed pointer-events-none left-0 top-300">
            <div key={pathName} style={{ opacity: dimensions.height > 0 ? 1 : 0 }}>
                {dimensions.width > 0 && <SVG {...dimensions} />}
                {children}
            </div>
        </div>
    );
};

const SVG = ({ width, height }) => {
    const initialPath = `
        M0 300 
        Q${width / 2} 0 ${width} 300
        L${width} ${height + 300}
        Q${width / 2} ${height + 900} 0 ${height + 300}
        L0 300
    `;

    const targetPath = `
        M0 300
        Q${width / 2} 0 ${width} 300
        L${width} ${height}
        Q${width / 2} ${height} 0 ${height}
        L0 300
    `;

    const curve = {
        initial: {
            d: initialPath,
        },

        enter: {
            d: targetPath,
            transition: {
                duration: 0.75,
                delay: 0.35,
                ease: [0.76, 0, 0.24, 1],
            },
        },
        exit: {
            d: initialPath,
            transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] },
        },
    };

    const slide = {
        initial: {
            top: "-300px",
        },

        enter: {
            top: "-100vh",
            transition: {
                duration: 0.75,
                delay: 0.35,
                ease: [0.76, 0, 0.24, 1],
            },
            transitionEnd: {
                top: "100vh",
            },
        },

        exit: {
            top: "-300px",
            transition: {
                duration: 0.75,
                ease: [0.76, 0, 0.24, 1],
            },
        },
    };

    return (
        <motion.svg {...anim(slide)} className="h-[calc(100vh_+_600px)] w-full fixed pointer-events-none left-0 top-300">
            <motion.path {...anim(curve)}></motion.path>
        </motion.svg>
    );
};

export default CurveTransition;
