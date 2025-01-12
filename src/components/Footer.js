import React from 'react'
import Layout from "@/components/Layout";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="w-full border-t-2 border-solid border-dark
        font-medium
        text-lg">
            <Layout className="py-8 flex items-center justify-between">
                <span>
                    {new Date().getFullYear()} &copy; All Rights Reserved.
                </span>
                <div
                    className="flex items-center">{/* HEART IF U WANT <span className="text-primary text-2xl px-1">&#9825;</span>*/}
                    Build by&nbsp;
                    <Link href="https://github.com/JotaP07"
                          target="_blank"
                          className="underline underline-offset-4">
                        João Canhete
                    </Link>
                </div>
                <Link href="https://github.com/JotaP07"  className="underline underline-offset-2">Say hello</Link>
            </Layout>
        </footer>
    )
}
export default Footer
