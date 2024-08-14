import React,{useState} from 'react';
import {
  FaHtml5 ,
  FaCss3 ,
  FaJs ,
  FaReact , 
  FaWordpress,
  FaFigma,
  FaNodeJs,
  FaPython,
  FaJava,
  
} from 'react-icons/fa'
import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop
} from 'react-icons/si'
// //  data
const aboutData = [
  {
    title: 'Education',
    info: [
      
      {
        title: 'Software Eng. - FAST-NUCES, LHR, PK',
        stage: '2024',
      },
      {
        title: 'Intermediate - Punjab College, LHR, PK',
        stage: '2020',
      },
       
    ],
  },
  {
    title: 'Skills',
    info: [
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 key="html" />,
        <FaCss3 key="css" />,
        <FaJs key="js" />,
        <FaReact key="react" />,
        <SiNextdotjs key="nextjs" />, 
        <FaNodeJs key="nodejs" />,
        <FaPython key="Python" />,
        ],
      },
      {
        title: 'UI/UX Design',
        icons: [<FaFigma key="figma" />, <SiAdobexd key="adobe" />, <SiAdobephotoshop key="photoshop" />],
      },
      {
        title: 'Desktop Development',
        icons: [<FaPython key="Python" />,<FaJava key="Java" />],
      }
    ],
  },
  {
    title: 'Awards',
    info: [
      {
        title: '3rd Position - ACM Coding Competetion @ FAST',
        stage: '2023',
      },
      {
        title: 'Deans List - Fast University',
        stage: '2022',
      },
    ],
  },
  {
    title: 'Experience',
    info: [
      {
        title: 'ASE - Programmers Force',
        stage: '2024 - Ongoing',
      },
      {
        title: 'Parttime MERN Developer - TheCryptoHub',
        stage: '2023 - Ongoing',
      },
      {
        title: 'Web Developer - Imbersoft',
        stage: '2022 - 2023',
      }
      
    ],
  },
];
import Avatar  from '../../components/Avatar';
import Circles  from '../../components/Circles';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import CountUp from 'react-countup';

const About = () => {
  const [index, setIndex]= useState(0);
  return(

    <div className='h-full bg-primary/30 py-32 text-center xl:text-left'>
    <Circles/>
    {/*Avatar img  */}
    <motion.div 
    variants={fadeIn('right',0.2)}
    initial='hidden'
    animate='show'
    exit='hidden'
    className='hidden xl:flex absolute bottom-0 -left-[270px] '>
      {/* <Avatar/> */}
    </motion.div>
      <div className='container mx-auto h-full flex flex-col items-center xl:flex-row
      gap-x-6
      '>
        <div className='mx-3 flex-1 flex flex-col justify-center'>
          <motion.h2 
          variants={fadeIn('right',0.2)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='h2 aboutText'
          >
            Captivating <span className='text-accent'>Stories </span>
            birth magnificent products.
          </motion.h2>  
          <motion.p 
          variants={fadeIn('right',0.4)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0'>
              "It is possible to fly without motors, but not without skils."
          </motion.p>
          {/* Counters */}
          <motion.div 
          variants={fadeIn('right',0.6)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8'> 
            <div className='flex flex-1 xl:gap-x-6'>
                {/* experience */}
                <div className='relative flex-1 after:w-[1px] after:h-full
                after:bg-white/10 after:absolute after:top-0 after:right-0
                '>
                  <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2 '>
                    <CountUp start={0} end={1} duration={5}/>+
                  </div>
                  <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] '>
                    Years of Experience
                  </div>
                </div>
                {/* clients */}
                <div className='relative flex-1 after:w-[1px] after:h-full
                after:bg-white/10 after:absolute after:top-0 after:right-0
                '>
                  <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2 '>
                    <CountUp start={0} end={4} duration={5}/>+
                  </div>
                  <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] '>
                    Satisfied clients
                  </div>
                </div>
                {/* projects */}
                <div className='relative flex-1 after:w-[1px] after:h-full
                after:bg-white/10 after:absolute after:top-0 after:right-0
                '>
                  <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2 '>
                    <CountUp start={0} end={10} duration={5}/>+
                  </div>
                  <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] '>
                    Finished Projects
                  </div>
                </div>
                {/* Awards */}
                <div className='relative flex-1 
                '>
                  <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2 '>
                    <CountUp start={0} end={2} duration={5}/>+
                  </div>
                  <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] '>
                    Winnig Awards
                  </div>
                </div>
            </div>
          </motion.div>
        </div>

        {/*  info */}
        <motion.div 
        variants={fadeIn('left',0.4)}
        initial='hidden'
        animate='show'
        exit='hidden'
        className='flex flex-col w-full xl:max-w-[48%] h-[380px] '>
          <div className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4'>
              {
                aboutData.map((item,itemIndex)=>{
                  return(
                      <div 
                      key={itemIndex}
                      className={`${
                        index === itemIndex && 
                        'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300 '
                      } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0 `}
                      onClick={() => setIndex(itemIndex)}
                      >
                          {item.title}
                      </div>
                  );
                })}
          </div>

          <div className='  py-2 xl:py-6 flex flex-col gap-y-2
          xl:gap-y-4 items-center xl:items-start
          '>
            {
              aboutData[index].info.map((item,itemIndex)=>{
                return(
                  <div key={itemIndex}
                    className='flex-1 flex flex-col md:flex-row max-w-max  gap-x-2 
                    items-center text-white/60'  
                  >
                      {/* title */}
                      <div className='font-light mb-2 md:mb-0 '>{item.title}</div>
                      <div className='hidden md:flex'>-</div>
                      <div>{item.stage}</div>
                      <div className='flex gap-x-4'>
                        {/* icons */}
                        {item.icons?.map((icon,itemIndex)=>{
                          return <div key={itemIndex} className='text-2xl text-white '>{icon}</div>
                        })}
                      </div>
                  </div>
                );
              })
            }
          </div>
        </motion.div>
      </div>
  </div>
  );
};

export default About;
