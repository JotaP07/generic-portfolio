import React, {useEffect} from 'react'
import Head from "next/head";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Image from "next/image";
import placeholder from "../../public/images/svgs/placeholder.svg"

const FramerImage = motion(Image);


import {motion, useInView, useMotionValue, useSpring} from "framer-motion";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import TransitionEffect from "@/components/TransitionEffect";

const AnimatedNumbers = ({value}) => {
    const ref = React.useRef(null);
    const motionValue = useMotionValue(0)
    const springValue = useSpring(motionValue, {duration: 3000})
    const isInView = useInView(ref, {once: true})

    useEffect(() => {
        if (isInView) {
            motionValue.set(value)
        }
    }, [isInView, value, motionValue]);

    useEffect(() => {
        springValue.on("change", (latestValue) => {
            if (ref.current && latestValue.toFixed(0) <= value) {
                ref.current.textContent = latestValue.toFixed(0)
            }
        })
    }, [springValue, value]);

    return <span ref={ref}></span>
}

const About = () => {
    return (
        <>
            <Head>
                <title>Your Name | About</title>
                <meta name="description" content="About Page"/>
            </Head>
            <TransitionEffect/>
            <main className="flex w-full flex-col items-center justify-center dark:text-light ">
                <Layout className="pt-16">
                    <AnimatedText text="Passion Fuels purpose!"
                                  className="mb-16 lg:!text-6xl md:!text-6xl sm:!text-5xl xs:!text-4xl sm:mb-8"/>
                    <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
                        <div
                            className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 xmd:order-2 xmd:col-span-8">
                            <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">Biography</h2>
                            <p className="font-medium">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                            <p className="my-4 font-medium">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                            </p>
                            <p className="font-medium">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div>
                        <div
                            className="col-span-3 relative h-max rounded-2xl border-2 border-solid
                             border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4
                              md:order-1 xmd:col-span-8 xmd:w-[80%] xmd:mx-auto sm:w-[90%] xs:w-full xs:p-5">
                            <div
                                className="absolute top-0 -right-2 -z-10 w-[102%] h-[102%] rounded-3xl bg-dark dark:bg-light "/>
                            <FramerImage
                                src={placeholder}
                                alt="Your Name"
                                className="w-full h-[500px] lg:h-[450px] sm:h-[400px] xs:h-[350px] object-cover rounded-2xl"
                                whileHover={{scale: 1.02}}
                                transition={{duration: 0.2}}
                                priority
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </div>
                        <div className="col-span-2 flex flex-col items-end justify-between
                        xl:col-span-8 xl:flex-row xl:items-center xmd:order-3 gap-3">
                            <div className="flex flex-col items-end justify-center xl:items-center">
                                <span className="inline-block text-7xl font-bold xmd:text-6xl sm:text-5xl xs:text-4xl">
                                    <AnimatedNumbers value={50}/>+
                                </span>
                                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75
                                 xl:text-center xmd:text-lg sm:text-base xs:text-sm">satisfied clients</h2>
                            </div>
                            <div className="flex flex-col items-end justify-center xl:items-center">
                                <span className="inline-block text-7xl font-bold xmd:text-6xl sm:text-5xl xs:text-4xl">
                                    <AnimatedNumbers value={50}/>+
                                </span>
                                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75
                                xl:text-center xmd:text-lg sm:text-base xs:text-sm">projects completed</h2>
                            </div>
                            <div className="flex flex-col items-end justify-center xl:items-center ">
                                <span className="inline-block text-7xl font-bold xmd:text-6xl sm:text-5xl xs:text-4xl">
                                    <AnimatedNumbers value={4}/>+
                                </span>
                                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75
                                xl:text-center xmd:text-lg sm:text-sm  xs:text-sm">years of experience</h2>
                            </div>

                        </div>
                    </div>
                    <Skills/>
                    <Experience/>
                    <Education/>
                </Layout>
            </main>
        </>
    )
}
export default About
