// Components
import ParticlesContainer from '../../components/ParticlesContainer';
import CanvasAnimation from '../../components/CanvasAnimation';
import serviceSlider from '../../components/ServiceSlider';
import Bulb from '../../components/Bulb';
import Circle from '../../components/Circles';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import Circles from '../../components/Circles';
import ServiceSlider from '../../components/ServiceSlider';
const Services = () => {
  return (
     <div className='w-full h-full'>
          <div className='h-full bg-primary/30 py-36 flex items-center'>
               <Circles/>
               <div className='container m-auto'>
                   <div className='flex flex-col lg:flex-row gap-x-8'>
                        {/* text */}
                         <div className='text-center flex lg:w-[30vw] flex-col lg:text-left mb-4 lg:mb-0'>
                             <h2 className='h2 lg:mt-8'>
                                 My Services <span className='text-accent'>.</span>
                             </h2>
                             <p className='mb-4 max-w-[400px] mx-auto lg:mx-0'>
                               Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                               industry standard dummy text ever since the 1500s.
                             </p>
                         </div>
                        {/* Slider */}
                        <div className="w-full cursor-pointer relative z-30 h-fit lg:max-w-[65%%]">
                           <ServiceSlider/>
                        </div>
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
