import '../styles/globals.css';

import Layout from '../components/Layout'
import Transition from '../components/Transition'
import { useRouter } from 'next/router';
import { AnimatePresence,motion } from 'framer-motion';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    // <div className='overflow-auto contact-con'> 
    <Layout>
      <ToastContainer />
      <AnimatePresence mode='wait'>
        <motion.div key={router.route}  className='h-full'>
          <Transition/>
          <Component {...pageProps}/>
        </motion.div>
      </AnimatePresence>
    </Layout>
    // </div>
  );
}

export default MyApp;
