import {
  faChalkboardTeacher,
  faChartLine,
  faCheck,
  faCommentDots,
  faFilm,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const WhyYouChooseUs = () => {
  return (
    <div id="qulayliklar" className="main-choose containerOn text-center">
      <h1 data-aos="zoom-in" className="main-choose-title font-bold md:text-6xl mb-4 md:mt-20 sm:text-4xl text-5xl">
        Nima uchun aynan bizni tanlashingiz kerak?
      </h1>
      <p data-aos="zoom-in" className="font-medium text-4xl opacity-100 mb-10 md:text-3xl">
        Talabalarimizning har biri quyidagi afzalliklarga ega bo'ladi
      </p>
      <div className="choose-cards flex justify-between flex-wrap mt-40">
        <div
          data-aos="flip-left"
          className="choose-card rounded-[32px] mb-10 bg-[#fff] w-[30%] h-[240px] p-5 flex flex-col items-center justify-center dark:bg-[#262449]"
        >
          <div className="icon bg-[#4A00FF] w-24 h-24 mb-5 rounded-3xl text-[#fff] flex items-center justify-center">
            <FontAwesomeIcon icon={faChartLine} />
          </div>
          <h4 className="font-bold text-4xl mb-3">Biz tajribalimiz</h4>
          <p className="text-center text-[16px] mb-5 font-medium w-80 leading-[160%]">
            8 yildan ortiq O’zbekiston bozorida tajribaga egamiz
          </p>
        </div>
        <div
          data-aos="flip-left"
          className="choose-card rounded-[32px] bg-[#fff] w-[30%] h-[240px] p-5 flex flex-col items-center justify-center dark:bg-[#262449] mb-10"
        >
          <div className="icon bg-[#4A00FF] w-24 h-24 mb-5 rounded-3xl text-[#fff] flex items-center justify-center">
            <FontAwesomeIcon icon={faChalkboardTeacher} />
          </div>
          <h4 className="font-bold text-4xl mb-3">Tajribali ustozlar</h4>
          <p className="text-center text-[16px] mb-5 font-medium w-80 leading-[160%]">
            Bizda IELTS darajasi 9.0 gacha bo’lgan ustozlar bor
          </p>
        </div>
        <div
          data-aos="flip-left"
          className="choose-card rounded-[32px] bg-[#fff] w-[30%] h-[240px] p-5 flex flex-col items-center justify-center dark:bg-[#262449] mb-10"
        >
          <div className="icon bg-[#4A00FF] w-24 h-24 mb-12 rounded-3xl text-[#fff] flex items-center justify-center">
            <FontAwesomeIcon icon={faLocationDot} />
          </div>
          <h4 className="font-bold text-4xl mb-3">Filiallar</h4>
          <p className="text-center text-[16px] mb-5 font-medium w-80 leading-[160%]">
            Bizning Farg'ona shahrida 3ta filialimiz bor
          </p>
        </div>
        <div
          data-aos="flip-left"
          className="choose-card rounded-[32px] bg-[#fff] w-[30%] h-[240px] p-5 flex flex-col items-center justify-center dark:bg-[#262449] mb-10"
        >
          <div className="icon bg-[#4A00FF] w-24 h-24 mb-5 rounded-3xl text-[#fff] flex items-center justify-center">
            <FontAwesomeIcon icon={faFilm} />
          </div>
          <h4 className="font-bold text-4xl mb-3">Kino Time</h4>
          <p className="text-center text-[16px] mb-5 font-medium w-80 leading-[160%]">
            Filmlar orqali siz o'qiyotgan tillarni oson va tez o'rganing
          </p>
        </div>
        <div
          data-aos="flip-left"
          className="choose-card rounded-[32px] mb-10 bg-[#fff] w-[30%] h-[240px] p-5 flex flex-col items-center justify-center dark:bg-[#262449]"
        >
          <div className="icon bg-[#4A00FF] w-24 h-24 mb-5 rounded-3xl text-[#fff] flex items-center justify-center">
            <FontAwesomeIcon icon={faCommentDots} />
          </div>
          <h4 className="font-bold text-4xl mb-3">Speaking Club</h4>
          <p className="text-center text-[16px] mb-5 font-medium w-80 leading-[160%]">
            O'rganayotgan tillaringizni speaking clubda kuchaytiring
          </p>
        </div>
        <div
          data-aos="flip-left"
          className="choose-card rounded-[32px] bg-[#fff] w-[30%] h-[240px] p-5 mb-16 flex flex-col items-center justify-center dark:bg-[#262449]"
        >
          <div className="icon bg-[#4A00FF] w-24 h-24 mb-5 rounded-3xl text-[#fff] flex items-center justify-center">
            <FontAwesomeIcon icon={faCheck} />
          </div>
          <h4 className="font-bold text-4xl mb-3">Mock exam</h4>
          <p className="text-center text-[16px] mb-5 font-medium w-80 leading-[160%]">
            Sinov imtihonlari haqiyqiy Imtihonlarga tayyormisiz yo'qmi biz bilan
            bilib oling
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyYouChooseUs;
