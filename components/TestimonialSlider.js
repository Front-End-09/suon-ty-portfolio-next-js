import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';
import avt1 from '../public/t-avt-1.png';
import avt2 from '../public/t-avt-2.png';
import avt3 from '../public/t-avt-3.png';

// icons
import { FaQuoteLeft } from 'react-icons/fa';

import { Navigation, Pagination } from 'swiper';

// testimonial data
const testimonialData = [
  {
    image: avt1,
    name: 'Anne Smith',
    position: 'Customer',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
  },
  {
    image: avt2,
    name: 'Jane Doe',
    position: 'Customer',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
  },
  {
    image: avt3,
    name: 'John Doe',
    position: 'Customer',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
  },
];

const TestimonialSlider = () => {
  return (
    <Swiper
      navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination]}
      className="h-[400px]"
    >
      {testimonialData.map((person, index) => (
        <SwiperSlide key={index}>
          <div className="flex flex-col items-center md:flex-row gap-x-8 h-full px-16">
            <div className="flex flex-col justify-center text-center">
              {/* Avatar */}
              <div className="mb-3 mx-auto">
                <Image src={person.image} width={100} height={100} alt=''/>
              </div>
              {/* Name */}
              <div className="text-lg">{person.name}</div>
              {/* Position */}
              <div className="text-[12px] uppercase font-extralight tracking-widest">{person.position}</div>
            </div>
            {/* Avatar Name Position */}
            <div className="w-full max-w-[600px] flex flex-col lg:justify-center items-center relative mx-auto xl:mx-0">
              {/* quote & message */}
              <div className="flex-1 flex flex-col justify-center before:w-[1px] lg:before:bg-white/20 lg:before:absolute lg:before:left-0 lg:before:h-[200px] relative lg:pl-20">
                {/* Quote Icon */}
                <div className="text-4xl lg:text-6xl text-white/20 mb-5 mx-auto md:mx-0">
                  <FaQuoteLeft />
                </div>
                {/* Message */}
                <div className="lg:text-lg">{person.message}</div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialSlider;
