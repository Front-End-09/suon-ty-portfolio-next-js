import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import Image from "next/image";
import thumb1 from '../public/thumb1.jpg';
import thumb2 from '../public/thumb2.jpg';
import thumb3 from '../public/thumb3.jpg';
import thumb4 from '../public/thumb4.jpg';
// icons
import { BsArrowRight } from 'react-icons/bs';

import { FreeMode, Pagination } from "swiper";

const workSlideData = {
  slides: [
    {
      images: [
        {
          title: "title",
          path: thumb1,
        },
        {
          title: "title",
          path: thumb2,
        },
        {
          title: "title",
          path: thumb3,
        },
        {
          title: "title",
          path: thumb4
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          path: thumb4,
        },
        {
          title: "title",
          path: thumb1,
        },
        {
          title: "title",
          path: thumb2,
        },
        {
          title: "title",
          path: thumb3,
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className="h-[280px] sm:h-[480px]"
    >
      {workSlideData.slides.map((slide, slideIndex) => (
        <SwiperSlide key={slideIndex}>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
            {slide.images.map((image, imageIndex) => (
              <div key={imageIndex} className="relative rounded-lg h-full overflow-hidden group flex items-center justify-center group">
                <div className="flex items-center justify-center relative overflow-hidden group">
                  {/* image */}
                  <Image src={image.path} width={500} height={300} alt="" />
                   {/* overlay gradient */}
                   <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#12f7ff] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                    {/* title */}
                    <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:lg:-translate-y-20 transition-all duration-300">
                       <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                           {/* title part 1 */}
                           <div className="delay-100">LIVE</div>
                            {/* title part 2 */}
                            <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">PROJECT</div>
                            {/* Icon */}
                           <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                                <BsArrowRight/>
                           </div>
                       </div>
                    </div>
                </div>
              </div>
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default WorkSlider;
