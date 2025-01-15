import React from 'react'
import { motion, useScroll } from "framer-motion"

const LiIcon = ({ reference }) => {
    const { scrollYProgress } = useScroll({
        target: reference,
        offset: ["center end", "center center"]
    });

    const radius = 20; // Raio do círculo
    const circumference = 2 * Math.PI * radius; // Comprimento do círculo

    return (
        <figure className="absolute left-0 stroke-dark dark:stroke-light">
            <svg className="-rotate-90 md:w-[60px] md:h-[60px]  xs:hidden" width="75" height="75" viewBox="0 0 100 100">
                <circle cx="75" cy="50" r={radius} className="stroke-primary dark:stroke-primaryDark stroke-2 fill-none" />
                <motion.circle
                    cx="75"
                    cy="50"
                    r={radius}
                    className="stroke-[5px] fill-light dark:fill-dark stroke-primary dark:stroke-light"
                    style={{
                        pathLength: scrollYProgress,
                        transition: "pathLength 0.3s ease-in-out" // Adiciona transição ao pathLength
                    }}
                />
                <circle cx="75" cy="50" r="10" className="animate-pulse stroke-1 fill-primary dark:fill-primaryDark" />
            </svg>
        </figure>
    )
}

export default LiIcon;
