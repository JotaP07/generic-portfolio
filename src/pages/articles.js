import React, {useRef} from 'react'
import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import Image from "next/image";
import placeholder from "../../public/images/svgs/placeholder.svg"
import {motion, useMotionValue} from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const MovingImage = ({title, img, link}) => {

    const x = useMotionValue(0)
    const y = useMotionValue(0)
    const imageRef = useRef(null);

    function handleMouse(event) {
        imageRef.current.style.display = "inline-block"
        x.set(event.pageX + 10)
        y.set(-105)
    }

    function handleMouseLeave(event) {
        imageRef.current.style.display = "none"
        x.set(0)
        y.set(0)
    }

    return (<Link href={link} target="_blank" onMouseMove={handleMouse} onMouseLeave={handleMouseLeave}>
            <h2 className="capitalize text-xl font-semibold hover:underline">{title}</h2>
            <FramerImage
                style={{x: x, y: y}}
                initial={{opacity: 0}}
                whileInView={{opacity: 1, transition: {duration: 0.2}}}
                ref={imageRef} src={img} alt={title} className="z-10 w-96 h-auto hidden absolute rounded-lg md:!hidden"/>
        </Link>
    )

}

const Article = ({img, title, date, link}) => {
    return (
        <motion.li
            initial={{y: 200}}
            whileInView={{y: 0, transition: {duration: 0.5, ease: "easeInOut"}}}
            viewport={{once: true}}
            className="relative w-full p-4 py-6 my-4 pb-5 rounded-xl flex items-center
         justify-between bg-light text-dark first:mt-0 border border-solid border-dark
         border-r-4 border-b-4 dark:border-light dark:bg-dark dark:text-light
         sm:flex-col">
            <MovingImage title={title} img={img} link={link}/>
            <span className="text-primary font-semibold pl-4 dark:text-primaryDark sm:self-start sm:pl-0 xs:text-sm" >{date}</span>
        </motion.li>
    )
}

const FeaturedArticle = ({img, title, time, summary, link}) => {
    return (
        <li className="col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl relative dark:bg-dark dark:border-light">
            <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl"/>

            <Link href={link} target="_blank" className="inline-block w-full cursor-pointer overflow-hidden rounded-lg">
                <FramerImage
                    src={img} alt={title} className="w-full h-auto"
                    whileHover={{scale: 1.05}}
                    transition={{duration: 0.2}}
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                />
            </Link>
            <Link href={link} target="_blank">
                <h2 className="capitalize text-2xl font-bold my-2 mt-4 hover:underline xs:text-lg">{title}</h2>
            </Link>
            <p className="text-sm mb-2  dark:text-light/75">{summary}</p>
            <span className="text-primary font-semibold dark:text-primaryDark">{time}</span>
        </li>
    )
}

const Articles = () => {
    return (
        <>
            <Head>
                <title>Your Name | Articles</title>
                <meta name="description" content="About Page"/>
            </Head>
            <TransitionEffect/>
            {/*mb-16*/}
            <main className="w-full pb-6 mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light">
                <Layout className="pt-16">
                    <AnimatedText
                        text="Words Can Change The World!"
                        className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-6"
                    />
                    <ul className="grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16">
                        <FeaturedArticle
                            title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                            summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                 Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                            time="6 min read"
                            link="/"
                            img={placeholder}
                        /> <FeaturedArticle
                        title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                        summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                 Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        time="9 min read"
                        link="/"
                        img={placeholder}
                    />
                    </ul>
                    <h2 className="font-bold text-4xl w-full text-center my-16 mt-32">
                        All Articles
                    </h2>
                    <ul>
                        <Article
                            title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                            date="March 5, 2023"
                            link="/"
                            img={placeholder}
                        />
                        <Article
                            title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                            date="March 5, 2023"
                            link="/"
                            img={placeholder}
                        />
                        <Article
                            title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                            date="March 5, 2023"
                            link="/"
                            img={placeholder}
                        />
                        <Article
                            title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                            date="March 5, 2023"
                            link="/"
                            img={placeholder}
                        />
                        <Article
                            title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                            date="March 5, 2023"
                            link="/"
                            img={placeholder}
                        />
                        <Article
                            title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                            date="March 5, 2023"
                            link="/"
                            img={placeholder}
                        />
                        <Article
                            title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                            date="March 5, 2023"
                            link="/"
                            img={placeholder}
                        />
                    </ul>
                </Layout>
            </main>
        </>
    )
}
export default Articles
