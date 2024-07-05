import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import Image from "next/image";
import thumb1 from '../public/thumb1.jpg';
import thumb2 from '../public/thumb2.jpg';
import thumb3 from '../public/thumb3.jpg';
import thumb4 from '../public/thumb4.jpg';


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
          <div className="grid grid-cols-2 grid-rows-2 gap-4">
            {slide.images.map((image, imageIndex) => (
              <div key={imageIndex}>
                <div>
                  {/* image */}
                  <Image src={image.path} width={500} height={300} alt="" />
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
