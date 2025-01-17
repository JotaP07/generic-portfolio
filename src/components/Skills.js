import React from 'react';
import gridImage from "@/assets/images/grid-image1.png";
import gridImage2 from "@/assets/images/grid-image2.png";

const Skills = () => {
    return (

        <section className="c-space w-full pt-36 mt-32">
            <div className="relative">
            <h2 className="font-bold text-7xl mb-10 text-start md:text-6xl">Skills</h2>
            <span className={`h-[3px] w-72 inline-block
         bg-dark absolute left-[20%] bottom-8 group-hover:w-full
          dark:bg-purple-500`}>&nbsp;</span>

            </div>
            <div
                className="grid grid-cols-3 sm:grid-cols-2 xl:grid-cols-4 relative rounded-2xl py-16"
                style={{
                    backgroundImage: `url(${gridImage.src})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    position: 'relative',
                }}
            >
                {/* Sobreposição de opacidade */}
                <div className="absolute inset-0 z-1" style={{
                    background: 'linear-gradient(0deg, rgba(27, 27, 27, 1) 0%, rgba(27,27,27,0.85) 5%, rgba(27,27,27,0.7) 8.6%, rgba(27,27,27,0) 15%, rgba(27, 27, 27, 0) 50%, rgba(27,27,27,0) 88%, rgba(27,27,27,0.8) 91%, rgba(27,27,27,0.9) 94%,  rgba(27, 27, 27, 2) 99%)',
                    zIndex: 1
                }}/>


                {/* Skill Section 1 */}
                <div className="col-span-2 xl:col-span-2 relative ">
                    <div
                        className="relative flex flex-col items-center text-center
                         p-4 border-b-5xl  border-mid-5xl  border-dark   h-[276px] w-full"
                    >
                        <div className="absolute  inset-0 bg-black/40 md:opacity-50"/>
                        <div className="relative z-10 self-end w-1/2 text-end md:w-full md:text-center ">
                            <p className="text-white text-lg font-bold md:text-base">Frontend Skills</p>
                            <p className="text-white text-base font-medium md:text-sm">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Skill Section 2 */}
                <div className="col-span-1 row-span-2 xl:col-span-2 xl:row-span-1 relative">
                    <div
                        className="relative flex items-start text-start p-4   bg-transparent  border-dark  h-full w-full"
                    >
                        <div className="absolute inset-0  bg-black/40 md:opacity-50"></div>
                        <div className="relative z-10 w-full px-4 pb-4">
                            <p className="text-white text-xl font-bold md:text-base">Backend Skills</p>
                            <p className="text-white text-base font-medium md:text-sm">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Skill Section 3 */}
                <div className="col-span-1 xl:col-span-2 relative ">
                    <div
                        className="relative flex items-end text-start p-4 border-mid-5xl   h-[276px] w-full"
                    >
                        <div className="absolute inset-0 bg-black/40 md:opacity-50"></div>
                        <div className="relative z-10 w-full px-4 pb-4">
                            <p className="text-white text-xl font-bold md:text-base">Soft Skills</p>
                            <p className="text-white text-base font-medium md:text-sm w-4/6">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Contact Section */}
                <div className="col-span-1 xl:col-span-2 relative">
                    <div
                        className="relative flex items-end text-start p-4 border-mid-5xl  border-dark  h-[276px] w-full"
                    >
                        <div className="absolute inset-0 bg-black/40 md:opacity-50"></div>
                        <div className="relative z-10 w-full px-4 pb-4">
                            <p className="text-white text-xl font-bold md:text-base">Contact</p>
                            <p className="text-white text-base font-medium md:text-sm w-4/6">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
