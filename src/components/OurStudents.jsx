import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

const OurStudents = () => {
  return (
    <div className="main-out-students text-center mt-16">
      <h1 data-aos="zoom-in" className="font-bold md:text-6xl mb-4 md:mt-20 sm:text-4xl text-5xl">
        Bizning o’quvchilarimiz
      </h1>
      <p data-aos="zoom-in" className="font-medium text-4xl opacity-100 mb-28">
        Bizning o’quvchilarimiz quyidagi yutuqlarga erishgan
      </p>
      <Swiper
        data-aos="zoom-in"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        centeredSlides={true}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide
          style={{ width: "500px", height: "400px" }}
          className="bg-white text-black flex items-center justify-center dark:bg-[#262449] dark:text-white"
        >
          <h1 className="text-6xl">TEZ KUNDA !</h1>
        </SwiperSlide>
        <SwiperSlide
          style={{ width: "500px", height: "400px" }}
          className="bg-white text-black flex items-center justify-center dark:bg-[#262449] dark:text-white"
        >
          <h1 className="text-6xl">TEZ KUNDA !</h1>
        </SwiperSlide>
        <SwiperSlide
          style={{ width: "500px", height: "400px" }}
          className="bg-white text-black flex items-center justify-center dark:bg-[#262449] dark:text-white"
        >
          <h1 className="text-6xl">TEZ KUNDA !</h1>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default OurStudents;
