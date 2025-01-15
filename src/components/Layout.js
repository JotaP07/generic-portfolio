import React from 'react'

const Layout = ({ children, className=""}) => {
    return (
        <div className={` w-full inline-block z-0 bg-light p-32 dark:bg-dark xl:p-24 lg:p-16 md:p-12 sm:p-8 ${className}
        transition-all duration-500 ease-in-out`}>
            {children}
        </div>
    )
}
export default Layout
