"use client";

import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import banner1 from "../../../public/banner/pexels-anna-shvets-3845126.jpg";
import banner2 from "../../../public/banner/pexels-karolina-grabowska-4021775.jpg";

const Banner = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image className="h-[93vh] object-cover" src={banner1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <Image className="h-[93vh] object-cover" src={banner2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <Image className="h-[93vh] object-cover" src={banner1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <Image className="h-[93vh] object-cover" src={banner1} alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
