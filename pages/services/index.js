// Components
import ParticlesContainer from '../../components/ParticlesContainer';
import CanvasAnimation from '../../components/CanvasAnimation';
import Bulb from '../../components/Bulb';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import Circles from '../../components/Circles';
import ServiceSlider from '../../components/ServiceSlider';
const Services = () => {
  return (
     <div className='w-full h-screen'>
          <div className='h-full justify-start bg-primary/30 py-36 flex items-center'>
               <Circles/>
               <div className='container m-auto'>
                   <div className='flex flex-col lg:flex-row gap-x-8'>
                        {/* text */}
                         <div className='text-center flex l:w-[30vw] flex-col lg:text-left mb-4 lg:mb-0'>
                            <motion.h2
                              variants={fadeIn('up', 0.2)}
                              initial='hidden'
                              animate='show'
                              exit='show'
                              className='h2 lg:mt-8 text-nowrap'>
                                My Services <span className='text-accent'>.</span>
                             </motion.h2>
                             <motion.p
                                variants={fadeIn('up', 0.4)}
                                initial='hidden'
                                animate='show'
                                exit='show'
                                className='mb-4 max-w-[400px] mx-auto lg:mx-0'>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                industry standard dummy text ever since the 1500s.
                             </motion.p>
                         </div>
                        {/* Slider */}
                        <motion.div
                            variants={fadeIn('down', 0.6)}
                            initial='hidden'
                            animate='show'
                            exit='show'
                            className="w-full cursor-pointer relative z-30 h-fit lg:max-w-[65%%]">
                           <ServiceSlider/>
                        </motion.div>
                   </div>
               </div>
               <Bulb/>
               <ParticlesContainer/>
               <CanvasAnimation/>
          </div>
    </div>
  )

};

export default Services;
