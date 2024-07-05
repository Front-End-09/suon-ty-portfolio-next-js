import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { FreeMode, Pagination } from "swiper";
import Image from "next/image"; // Assuming Image is imported correctly

const workSlideData = {
  slides: [
    {
      images: [
        {
          title: "title",
          path: "../public/thumb1.jpg",
        },
        {
          title: "title",
          path: "../public/thumb2.jpg",
        },
        {
          title: "title",
          path: "../public/thumb3.jpg",
        },
        {
          title: "title",
          path: "../public/thumb4.jpg",
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          path: "../public/thumb4.jpg",
        },
        {
          title: "title",
          path: "../public/thumb1.jpg",
        },
        {
          title: "title",
          path: "../public/thumb2.jpg",
        },
        {
          title: "title",
          path: "../public/thumb3.jpg",
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
