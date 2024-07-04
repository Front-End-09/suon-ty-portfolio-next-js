import React, { useState } from 'react';
import { FaHtml5,FaGraduationCap , FaCss3, FaJs, FaReact, FaWordpress, FaFigma } from "react-icons/fa";
import { SiNextdotjs, SiFramer, SiAdobexd, SiAdobephotoshop } from "react-icons/si";
import Avatar from '../../components/Avatar';
import Circles from '../../components/Circles';
import CanvasAnimation from '../../components/CanvasAnimation';
import ParticlesContainer from '../../components/ParticlesContainer';
import CountUp from "react-countup"; // Import CountUp component
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

const About = () => {
    const [index, setIndex] = useState(0);

    const aboutData = [
        {
            title: 'skills',
            info: [
                {
                    title: 'Web Development',
                    icons: [
                        <FaHtml5 key="html5" />,
                        <FaCss3 key="css3" />,
                        <FaJs key="js" />,
                        <FaReact key="react" />,
                        <SiNextdotjs key="nextjs" />,
                        <SiFramer key="framer" />,
                        <FaWordpress key="wordpress" />,
                    ],
                },
                {
                    title: 'UI/UX Design',
                    icons: [
                        <FaFigma key="figma" />,
                        <SiAdobexd key="xd" />,
                        <SiAdobephotoshop key="photoshop" />,
                    ],
                },
            ],
        },
        {
            title: 'Education',
            info: [
                {
                    title: 'Web Development',
                    icons: [
                        <FaGraduationCap key="graduation" />,
                        <FaCss3 key="css3" />,
                        <FaJs key="js" />,
                        <FaReact key="react" />,
                        <SiNextdotjs key="nextjs" />,
                        <SiFramer key="framer" />,
                        <FaWordpress key="wordpress" />,
                    ],
                },
                {
                    title: 'UI/UX Design',
                    icons: [
                        <FaFigma key="figma" />,
                        <SiAdobexd key="xd" />,
                        <SiAdobephotoshop key="photoshop" />,
                    ],
                },
            ],
        },
        // other sections omitted for brevity
    ];

    return (
        <div className='h-full w-full bg-red-500 py-32 text-center lg:text-left'>
            <CanvasAnimation />
            {/* Particle */}
                <ParticlesContainer />
            {/* avatar img */}
            <motion.div
                variants={fadeIn('right', 0.2)}
                initial='hidden'
                animate='show'
                exit='hidden'
                className='hidden lg:flex absolute bottom-0 z-40 -left-[240px]'>
                <Avatar />
            </motion.div>
            <Circles />
            <div className='flex justify-center items-center w-full h-full'>
                <div className='container mx-auto h-full flex flex-col items-center lg:flex-row'>
                    {/* text */}
                    <div className='flex-1 flex flex-col justify-center'>
                        <motion.h2
                            variants={fadeIn('right', 0.2)}
                            initial='hidden'
                            animate='show'
                            exit='hidden'
                            className='h2'>FRONT END <span className='text-accent'>DEVELOPER</span></motion.h2>
                        <motion.p
                            variants={fadeIn('right', 0.2)}
                            initial='hidden'
                            animate='show'
                            exit='hidden'
                            >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                            industry standard dummy text ever since the 1500s.
                        </motion.p>
                          {/* Counter */}
                        <motion.div
                            variants={fadeIn('right', 0.6)}
                            initial='hidden'
                            animate='show'
                            exit='hidden'
                            className='hidden md:flex md:max-w-xl lg:max-w-none mx-auto xl:mx-0 mb-0'>
                            <div className='flex  flex-1 lg:gap-x-6 w-full mt-4'>
                                {/* Experience */}
                                <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                                   <div className='text-2xl lg:text-3xl font-semibold text-accent mb-2'>
                                       <CountUp start={0} end={10} duration={5} /> +
                                   </div>
                                   <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>Years of experience</div>
                                </div>
                                {/* Client */}
                                <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                                   <div className='text-2xl lg:text-3xl font-semibold text-accent mb-2'>
                                       <CountUp start={0} end={250} duration={5} /> +
                                   </div>
                                   <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>Client</div>
                                </div>
                                {/* Saatifies Client */}
                                <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                                   <div className='text-2xl lg:text-3xl font-semibold text-accent mb-2'>
                                       <CountUp start={0} end={10} duration={5} /> +
                                   </div>
                                   <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>Satifies Client</div>
                                </div>
                                {/* Finished Project */}
                                <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                                   <div className='text-2xl lg:text-3xl font-semibold text-accent mb-2'>
                                       <CountUp start={0} end={650} duration={5} /> +
                                   </div>
                                   <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>Finished Project</div>
                                </div>
                                {/* Winning Award */}
                                <div className='relative flex-1'>
                                   <div className='text-2xl lg:text-3xl font-semibold text-accent mb-2'>
                                       <CountUp start={0} end={8} duration={5} /> +
                                   </div>
                                   <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>Winning Award</div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                    {/* info */}
                    <motion.div
                        variants={fadeIn('right', 0.4)}
                        initial='hidden'
                        animate='show'
                        exit='hidden'
                        className='flex flex-col w-full lg:max-w-[48%] h-[400px]'>
                        <div className='flex gap-x-4 z-40 relative lg:gap-x-8 mx-auto lg:mx-0 mb-4'>
                            {aboutData.map((item, itemIndex) => (
                                <div
                                    key={itemIndex}
                                    className={`${index === itemIndex && 'text-accent after:w-full after:bg-accent after:transition-all after:duration-300'}cursor-pointer lg:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                                    onClick={() => setIndex(itemIndex)}
                                >
                                    {item.title}
                                </div>
                            ))}
                        </div>
                        <div className='py-2 lg:py-6 flex flex-col gap-y-2 lg:gap-y-4 items-center lg:items-start'>
                            {aboutData[index].info.map((item, itemIndex) => (
                                <div key={itemIndex} className='flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60'>
                                    {/* title  */}
                                    <div className='font-light mb-2 md:mb-0'>{item.title}</div>
                                    <div className='hidden md:flex'>-</div>
                                    <div>{item.stage}</div>
                                    <div className='flex gap-x-4'>
                                        {/* icons */}
                                        {item.icons?.map((icon, iconIndex) => (
                                            <div key={iconIndex} className='text-2xl text-white'>{icon}</div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default About;
