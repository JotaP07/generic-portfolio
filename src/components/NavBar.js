import React, {useState} from 'react'
import Link from "next/link";
import Logo from "@/components/Logo";
import {useRouter} from "next/router";
import{
    CatComponent,
    TwitterIcon,
    DribbbleIcon,
    GithubIcon,
    LinkedInIcon,
    PinterestIcon,
    SunIcon,
    MoonIcon
} from "@/components/Icons";
import {AnimatePresence, motion} from "framer-motion";
import useThemeSwitcher from "@/components/hooks/useThemeSwitcher";
import TransitionEffect from "@/components/TransitionEffect";
import TransitionMode from "@/components/TransitionMode";

const CustomLink = ({href, title, className = ""}) => {
    const router = useRouter();
    return (
        <Link href={href} className={`${className} relative group`}>
            {title}
            <span className={`h-[1px] inline-block
         bg-dark absolute left-0 -bottom-0.5 group-hover:w-full
          transition-[width] ease duration-300 ${router.asPath === href ? "w-full" : "w-0"} dark:bg-light`}>&nbsp;</span>
        </Link>
    )
}
const CustomMobileLink = ({href, title, className = "", toggle}) => {
    const router = useRouter();

    const handleClick = () => {
        toggle()
        router.push(href)
    }

    return (
        <button href={href} className={`${className} relative group text-light dark:text-dark my-2`}
                onClick={handleClick}>
            {title}
            <span className={`h-[1px] inline-block
         bg-light absolute left-0 -bottom-0.5 group-hover:w-full
          transition-[width] ease duration-300 ${router.asPath === href ? "w-full" : "w-0"} dark:bg-dark`}>&nbsp;</span>
        </button>
    )
}

const NavBar = () => {

    const [mode, setMode] = useThemeSwitcher()
    const [isOpen, setIsOpen] = useState(false)
    const [showTransition, setShowTransition] = useState(false); // Estado para controlar a transição

    const handleThemeChange = () => {
        setShowTransition(true); // Exibe a transição
        setMode(mode === "light" ? "dark" : "light");
        setTimeout(() => setShowTransition(false), 800); // Oculta a transição após a duração
    };

    const handleClick = () => {
        setIsOpen(!isOpen)
    }
    return (
        <header
            className="w-full px-32 py-8 font-medium flex items-center justify-between
            dark:text-light relative z-10 lg:px-16 md:px-12 sm:px-8">
            {showTransition && <TransitionMode/>}
            <button className="flex-col justify-center items-center p-2 hidden lg:flex" onClick={handleClick}>
                <span
                    className={`bg-dark dark:bg-light block h-[2px] w-6 rounded-sm transition-all duration-300 ease-in-out ${
                        isOpen ? "rotate-45 translate-y-[4px]" : "-translate-y-[4px]"
                    }`}
                />
                <span
                    className={`bg-dark dark:bg-light block h-[2px] w-6 rounded-sm transition-all duration-300 ease-in-out my-[2px] ${
                        isOpen ? "opacity-0" : "opacity-100"
                    }`}
                />
                <span
                    className={`bg-dark dark:bg-light block h-[2px] w-6 rounded-sm transition-all duration-300 ease-in-out ${
                        isOpen ? "-rotate-45 -translate-y-[4px]" : "translate-y-[4px]"
                    }`}
                />
            </button>
            <div className="w-full flex justify-between items-center lg:hidden">
                <nav>
                    <CustomLink href="/" title="Home" className="mr-4"/>
                    <CustomLink href="/about" title="About" className="mx-4"/>
                    <CustomLink href="/projects" title="Projects" className="mx-4"/>
                    <CustomLink href="/articles" title="Articles" className="ml-4"/>
                </nav>
                <nav className="flex items-center justify-center flex-wrap">
                    <motion.a href="https://twitter.com"
                              target="_blank"
                              whileHover={{y: -2}}
                              whileTap={{scale: 0.9}}
                              className="w-6 mr-3">
                        <TwitterIcon/>
                    </motion.a>
                    <motion.a href="https://github.com"
                              target="_blank"
                              whileHover={{y: -2}}
                              whileTap={{scale: 0.9}}
                              className="w-6 mr-3">
                        <GithubIcon/>
                    </motion.a>
                    <motion.a href="https://linkedin.com"
                              target="_blank"
                              whileHover={{y: -2}}
                              whileTap={{scale: 0.9}}
                              className="w-6 mr-3">
                        <LinkedInIcon/>
                    </motion.a>
                    <motion.a href="https://pinterest.com"
                              target="_blank"
                              whileHover={{y: -2}}
                              whileTap={{scale: 0.9}}
                              className="w-6 mr-3 dark:bg-light rounded-full dark:p-[0.10rem]">
                        <PinterestIcon/>
                    </motion.a>
                    <motion.a href="https://dribbble.com"
                              target="_blank"
                              whileHover={{y: -2}}
                              whileTap={{scale: 0.9}}
                              className="w-6 mr-3">
                        <DribbbleIcon/>
                    </motion.a>

                    <button onClick={handleThemeChange}
                            className={`ml-3 flex items-center justify-center rounded-full p-1 ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}>
                        {mode === "dark" ? <SunIcon className={"fill-dark"}/> : <MoonIcon className={"fill-dark"}/>}
                    </button>
                </nav>

            </div>


            {isOpen ? (
                <motion.div
                    className="min-w-[70vw] xs:min-w-[85vw] flex flex-col justify-between z-30 items-center fixed top-1/2 left-1/2
                    -translate-x-1/2 -translate-y-1/2
                    bg-dark/90 dark:bg-light/75 transition-colors duration-500 ease-in-out rounded-lg backdrop-blur-lg py-32"
                    initial={{scale: 0, opacity: 0, x: "-50%", y: "-50%"}}
                    animate={{scale: 1, opacity: 1}}
                    transition={{duration: 0.3, ease: "easeInOut"}}
                >
                    <nav className="flex items-center flex-col justify-center xs:gap-2">
                        <CustomMobileLink href="/" title="Home" className="" toggle={handleClick}/>
                        <CustomMobileLink href="/about" title="About" className="" toggle={handleClick}/>
                        <CustomMobileLink href="/projects" title="Projects" className="" toggle={handleClick}/>
                        <CustomMobileLink href="/articles" title="Articles" className="" toggle={handleClick}/>
                    </nav>
                    <nav className="flex items-center justify-center flex-wrap mt-10">
                        <motion.a href="https://twitter.com"
                                  target="_blank"
                                  whileHover={{y: -2}}
                                  whileTap={{scale: 0.9}}
                                  className="w-6 mr-3 sm:mx-1">
                            <TwitterIcon/>
                        </motion.a>
                        <motion.a href="https://github.com"
                                  target="_blank"
                                  whileHover={{y: -2}}
                                  whileTap={{scale: 0.9}}
                                  className="w-6 mx-3 text-light dark:text-dark sm:mx-1">
                            <GithubIcon/>
                        </motion.a>
                        <motion.a href="https://linkedin.com"
                                  target="_blank"
                                  whileHover={{y: -2}}
                                  whileTap={{scale: 0.9}}
                                  className="w-6 mx-3 sm:mx-1">
                            <LinkedInIcon/>
                        </motion.a>
                        <motion.a href="https://pinterest.com"
                                  target="_blank"
                                  whileHover={{y: -2}}
                                  whileTap={{scale: 0.9}}
                                  className="w-6 mx-3 bg-light rounded-full p-[0.10rem] dark:rounded-none dark:p-0 dark:bg-transparent sm:mx-1">
                            <PinterestIcon/>
                        </motion.a>
                        <motion.a href="https://dribbble.com"
                                  target="_blank"
                                  whileHover={{y: -2}}
                                  whileTap={{scale: 0.9}}
                                  className="w-6 mx-3 sm:mx-1">
                            <DribbbleIcon/>
                        </motion.a>

                        <button onClick={handleThemeChange}
                                className={`ml-3 flex items-center justify-center rounded-full p-1
                ${mode === "light" ? "bg-light text-dark    " : "bg-dark text-light"}`}>
                            {mode === "dark" ? (
                                <SunIcon className={"fill-dark"}/>
                            ) : (
                                <MoonIcon className={"fill-dark"}/>
                            )}
                        </button>
                    </nav>

                </motion.div>
            ) : null}


            <div className="absolute left-[50%] top-2 translate-x-[-50%]">
                <Logo/>
            </div>

            <div
                className="hidden z-20 lg:inline-block absolute top-3.5 sm:-right-4 xs:-right-5 lg:right-0 bottom-0 w-24 h-auto sm:top-5">
                <CatComponent className="fill-dark dark:fill-light text-6xl sm:text-5xl"/>
            </div>
        </header>
    )
}
export default NavBar
