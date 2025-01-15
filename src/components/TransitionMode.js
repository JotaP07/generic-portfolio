import React from 'react';
import { motion } from "framer-motion";

const TransitionMode = () => {
    return (
        <>
            <motion.div
                className="fixed top-0 bottom-0 left-0 right-0 z-50 bg-primary dark:bg-primaryDark"
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                exit={{ opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
            />
            <motion.div
                className="fixed top-0 bottom-0 left-0 right-0 z-40 bg-light dark:bg-dark"
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                exit={{ opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
            />
            <motion.div
                className="fixed top-0 bottom-0 left-0 right-0 z-30 bg-dark dark:bg-light"
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                exit={{ opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeInOut", delay: 0.4 }}
            />
        </>
    );
}

export default TransitionMode;
