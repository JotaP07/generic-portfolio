import React from 'react'
import {motion} from "framer-motion";


const Skill = ({name, x, y}) => {
    return (
        <motion.div
            className="flex items-center justify-center rounded-full font-semibold
    bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute dark:bg-light dark:text-dark"
            initial={{x: 0, y: 0}}
            whileInView={{x: x, y: y}}
            transition={{duration: 1.3}} // Transição padrão para whileInView
            whileHover={{scale: 1.05, transition: {duration: 0.3}}} // Transição de hover
            viewport={{once: true}}
        >
            {name}
        </motion.div>
    )
}
const Skills = () => {
    return (
        <>
            <h2 className="font-bold text-7xl mt-64 mb-8 w-full text-center">Skills</h2>
            <div
                className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark">
                <motion.div className="flex items-center justify-center rounded-full font-semibold
                 bg-dark text-light p-8 shadow-dark cursor-pointer dark:bg-light dark:text-dark"
                            whileHover={{scale: 1.05}}
                            transition={{duration: 0.3}}
                            >
                    Web
                </motion.div>


                    <Skill name="HTML" x="-25vw" y="-2vw"/>
                    <Skill name="CSS" x="-5vw" y="-10vw"/>
                    <Skill name="JavaScript" x="20vw" y="3vw"/>
                    <Skill name="React" x="0vw" y="11vw"/>
                    <Skill name="Next.js" x="-20vw" y="-15vw"/>
                    <Skill name="Node.js" x="15vw" y="-12vw"/>
                    <Skill name="Web Design" x="0vw" y="-21vw"/>
                    <Skill name="Angular" x="-25vw" y="12vw"/>
                    <Skill name="Tailwind CSS" x="18vw" y="15vw"/>

            </div>
        </>
    )
}
export default Skills
