import Circles from '/components/Circles'

import { BsArrowRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import { useState } from 'react';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_q106hdj', 
         'template_yft9thk', 
         form.current, 
         'x2LExYrO3aE4xiJdW')
      .then((result) => {
          console.log(result.text);
          toast.success('Email sent successfully!', {
            position: 'top-center',
            autoClose: 3000, // Duration in milliseconds
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
      }, (error) => {
          console.log(error.text);
          toast.error('Failure! An Error Occured.', {
            position: 'top-center',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
      });
  };

  return (
      <div className='h-full bg-primary/30'>
          <div className='container mx-auto py-32 text-center xl:text-left flex
          items-center justify-center h-full'>
            <div className='flex flex-col w-full max-w-[700px] 
            '  >
            <div className='overflow-auto contact-con'> 
            {/* text */}
            <motion.h2
            variants={fadeIn('up',0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='h2 text-center mb-1'
            style={{marginTop:'10vh'}}
            >
                Let's <span className='text-accent'>Connect</span>
            </motion.h2>
            {/* form */}
                <motion.form 
                variants={fadeIn('up',0.4)}
                initial='hidden'
                animate='show'
                exit='hidden'
                action="" 
                className='flex-1 flex flex-col gap-6 w-full mx-auto'
                onSubmit={sendEmail}
                ref={form}
                >
                  

                  <div className='flex gap-x-6 w-full'>
                    <input required type="text" name='user_name' placeholder='Name' className='input' />
                    <input required type="email" name='user_email' placeholder='Email'   className='input' />
                  </div>
                  <input required type="text" name="subject"  placeholder='Subject' className='input' id="" />
                  <textarea required placeholder='message' name='message'className='textarea' cols="30" rows="10"></textarea>
                  <button className='btn rounded-full border border-white/50 max-w-[170px] px-9
                  transition-all duration-300 flex items-center justify-center overflow-hidden
                  hover:border-accent group
                  '> 
                  <span className='group-hover:-translate-y-[100%] group-hover:opacity-0
                  transition-all duration-500 
                  '>Submit</span>
                  <BsArrowRight className='-translate-y-[120%] opacity-0 group-hover:flex
                  group-hover:-translate-y-0 group-hover:opacity-100 transition-all 
                  duration-300 absolute text-[22px]
                  '/>
                  </button>
                </motion.form>
            </div>
            </div>
          </div>
      </div>
  );
};

export default Contact;
