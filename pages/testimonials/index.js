// Components
import ParticlesContainer from '../../components/ParticlesContainer';
import CanvasAnimation from '../../components/CanvasAnimation';
import TestimonialSlider from '../../components/TestimonialSlider';
const Testimonials = () => {
    return (
        <div className='w-full h-screen bg-primary/30 py-32 text-center'>
             <div className='container mx-auto h-full flex flex-col justify-center'>
                 {/* Title */}
                 <h2 className='h2 mb-8 lg:mb-0'>What clients <span className=' text-accent'>say.</span></h2>
                 {/* Slide */}
                 <div className='cursor-pointer relative z-40'>
                      <TestimonialSlider/>
                 </div>
             </div>
             <ParticlesContainer/>
             <CanvasAnimation/>
       </div>
     )
};

export default Testimonials;
