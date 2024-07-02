import '../styles/globals.css';
//Component
import Layout from '../components/Layout';
import Transition from '../components/Transition';
//Router
import { useRouter } from 'next/router';
//Framer motion
import { AnimatePresence, motion } from 'framer-motion';
function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <div>
      <Layout>
        <AnimatePresence mode='wait'>
          <motion.div key={router.route} className='w-full'>
            <Transition/>
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </Layout>
   </div>
  )
}

export default MyApp;
