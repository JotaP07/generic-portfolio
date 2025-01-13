import React from 'react'
import {CircularText} from "@/components/Icons";
import Link from "next/link";

const HireMe = () => {
    return (
        <div className="fixed left-4 bottom-4 flex items-center justify-center
         overflow-hidden md:hidden">

            <div className="w-48 h-auto flex items-center justify-center relative lg:w-28 ">
                <CircularText className="fill-dark animate-spin-slow dark:fill-light"/>
                <Link href="mailto:example@example.com"
                      className="flex items-center justify-center absolute
                        bg-dark text-light shadow-lg border-2 border-solid
                        border-dark w-20 h-20 font-semibold rounded-full
                         hover:bg-light hover:text-dark
                          dark:hover:border-light dark:border-transparent
                        dark:bg-light dark:text-dark dark:hover:bg-dark dark:hover:text-light
                          transition-all ease duration-300 lg:w-12 lg:h-12 lg:text-[10px] ">
                    Hire me
                </Link>
            </div>
        </div>
    )
}
export default HireMe
