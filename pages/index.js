import Image from "next/image";
// Components
import ParticlesContainer from '../components/ParticlesContainer';
import ProjectsBtn from '../components/ProjectsBtn';
// import Avatar from '../components/Avatar';
import { motion } from 'framer-motion';
import CanvasAnimation from '../components/CanvasAnimation';
import About from "./about";
// Framer motion
import { fadeIn } from '../variants';
//Counter

const Home = () => {
  return (
    <div className="bg-primary/60 relative h-full w-full">
      {/* Canvas Animation */}
      <CanvasAnimation />
      {/* text */}
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
         {/* <Avatar/> */}
        <div style={{
            backgroundImage: "url('/avatar-02.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
            }}
            className="text-center px-5 flex flex-col justify-center py-10 lg:pt-40 lg:text-left w-full h-full">
            {/* title */}
            <motion.h1
              variants={fadeIn('down', 0.2)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className="h1"
          >
            FRONT END<br />{' '}
            <span className="text-accent">DEVELOPER</span>
          </motion.h1>
          {/* subtitle */}
          <motion.p
            variants={fadeIn('down', 0.3)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 "
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
            the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book.
          </motion.p>
          {/* Btn */}
          <div className="flex justify-center xl:hidden items-center relative">
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn('down', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className="hidden xl:flex"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
       </div>
      {/* Image */}
      <div className="w-full h-full absolute right-0 bottom-0">
          {/* bg image */}
         <div className="bg-none z-10 xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"></div>
         {/* Particle */}
           <ParticlesContainer/>
         {/* avatar img */}
         <motion.div
            variants={fadeIn('up', 0.5)}
            initial='hidden'
            animate='show'
            exit='hidden'
            transition={{duration:1, ease: 'easeInOut'}}
            className="w-full h-full max-w-[737px] max-h-[678px] absolute z-10 -bottom-32 lg:bottom-0 lg:right-[8%]">
         </motion.div>
      </div>
      <About/>
    </div>
  );
}
export default Home;
