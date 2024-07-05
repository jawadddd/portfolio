// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: 'Automated Parking System',
          path: '/ok1.png',
          ref: 'https://github.com/jawadddd/AutomatedParkingSystem-Frontend'
        },
        {
          title: 'TheCryptoHub',
          path: '/ok2.png',
          ref: 'https://www.thecryptohub.com',
        },
        {
          title: 'Encrypted Messaging Web Module',
          path: '/ok3.png',
          ref: 'https://github.com/jawadddd/Chatting-WebsiteModule-EndToEnd-Encrypted',
        },
        {
          title: 'Brain Cancer Detection',
          path: '/ok4.png',
          ref: 'https://github.com/jawadddd/Brain-Cancer-Detection',
        },
      ],
    },
    
  ],
};
 

 
import {Swiper,SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
 
import { Pagination } from 'swiper';
import { BsArrowRight } from 'react-icons/bs';
import Image from 'next/image';


const WorkSlider = () => {
  return (
    <Swiper
    spaceBetween={10}
    pagination={{
      clickable:true
    }}
    modules={{ Pagination}}
    className='h-[280px] sm:h-[480px]'
    >
      {
        workSlides.slides.map((slide,index)=>{
          return(
            <SwiperSlide key={index}>
             <div className='grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer '>
              {slide.images.map((image,index)=>{
                return (
                  <div className='relative rounded-lg overflow-hidden flex items-center 
                  justify-center group 
                  ' key={index}>
                    <div className='flex items-center justify-center relative
                    overflow-hidden group
                    '>
                      {/* Image */}
                      <Image src={image.path} width={500} height={300} alt=''/>
                      {/* overlay gradient */}
                      <div className='absolute inset-0 bg-gradient-to-l 
                      from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 
                      group-hover:opacity-80 transition-all duration-700
                      '></div>
                      {/* title */}
                      <div className='absolute bottom-0 translate-y-full
                      group-hover:-translate-y-10 group-hover:xl:-translate-y-20
                      transition-all duration-300 
                      '>
                        <div className='flex items-center gap-x-2
                        text-[13px] tracking-[0.2em] projectTitle
                        ' >
                          {/* title part1 */}
                          <div className='delay-100' 
                          style={{textTransform:'uppercase'}}
                          ><a href={image.ref}>{image.title}</a>
                          </div>
                          {/* title part2 */}
                          {/* <div className='translate-y-[500%] 
                          group-hover:translate-y-0 transition-all duration-300
                          delay-150
                          '>PROJECT</div> */}
                          {/* icons */}
                          <div className='text-xl translate-y-[500%]
                          group-hover:translate-y-0 transition-all duration-300
                          delay-200
                          '>
                            <BsArrowRight/>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>  
                  );
              })}
             </div>
            </SwiperSlide>
          );
        })}
    </Swiper>
  );
};
export default WorkSlider;