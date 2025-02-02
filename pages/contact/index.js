// Components
import ParticlesContainer from '../../components/ParticlesContainer';
import CanvasAnimation from '../../components/CanvasAnimation';
import Circle from '../../components/Circles';
import { BsArrowRight } from 'react-icons/bs';

// Framer Motion
import { motion } from 'framer-motion';
// Variants
import { fadeIn } from '../../variants';

const Contact = () => {
    return (
        <div className='w-full h-screen bg-primary/30'>
            <div className='container mx-auto py-32 text-center lg:text-left flex items-center justify-center h-full'>
                <div className='flex flex-col w-full max-w-[700px]'>
                    {/* Text */}
                    <motion.h2
                        variants={fadeIn('up', 0.2)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className='h2 text-center mb-12'>
                        Let <span className='text-accent'>Connect</span>
                    </motion.h2>
                    {/* Form */}
                    <motion.form
                        variants={fadeIn('up', 0.2)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className='flex-1 flex flex-col gap-6 w-full mx-auto relative z-40 cursor-pointer'>
                        {/* Input group */}
                        <div className='flex gap-x-6 w-full'>
                            <input type='text' placeholder='Name' className='input' />
                            <input type='text' placeholder='Email' className='input' />
                        </div>
                        <input type='text' placeholder='Subject' className='input' />
                        <textarea placeholder='Message' className='textarea'></textarea>
                        <button className='btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group'>
                            <span className='group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500'>Let is Talk</span>
                            <BsArrowRight className='-translate-y-[120%] opacity-0 group-hover:opacity-100 group-hover:flex group-hover:-translate-y-0 transition-all duration-300 absolute text-[12px]' />
                        </button>
                    </motion.form>
                </div>
            </div>
            <ParticlesContainer />
            <CanvasAnimation />
        </div>
    );
};

export default Contact;
