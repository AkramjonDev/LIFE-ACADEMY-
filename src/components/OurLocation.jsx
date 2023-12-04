import React from "react";
import EduLocation from "../assets/images/Education-center.webp";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";
import logo from "../assets/images/photo_2023-10-31_21-42-00.jpg";
const OurLocation = () => {
  return (
    <div className="location mb-20">
      <h1
        data-aos="zoom-in"
        className="font-bold md:text-6xl mb-24 md:mt-20 text-center"
      >
        Farg'ona shahridagi filiallimiz
      </h1>
      <div data-aos="zoom-in-up" className="location-main flex justify-center">
        <div className="location-center bg-[#fff] w-[80%] rounded-3xl overflow-hidden dark:bg-[#262449]">
          <div className="location-card flex gap-64">
            <img className="w-1/2 rounded-l-3xl" src={EduLocation} alt="" />
            <div className="location-about w-1/2 p-4">
              <div className="logo-title w-[220px] flex gap-3">
                <img className="w-[50px] h-[50px] rounded-[50%]" src={logo} />
                <h1 className="font-bold dark:text-[#fff] flex items-center gap-3 text-5xl">
                  LIFE ACADEMY
                </h1>
              </div>
              <p className="font-semibold flex items-center mb-6">
                <FaLocationDot /> Address:
              </p>
              <p className="opacity-50 mb-16 ">
                л. Инженерная, дом 12(подвал) Ориентир: Школа №9
              </p>
              <Link
                className="map border-solid border-slate-300 border-b-8"
                to={
                  "https://www.google.com/maps/place/Najot+Ta'lim+Farg'ona/@40.3879817,71.7852899,17z/data=!3m1!4b1!4m6!3m5!1s0x38bb83a471c6b55b:0x9927f2609db0d333!8m2!3d40.3879776!4d71.7878648!16s%2Fg%2F11tk6mv2s0?entry=ttu"
                }
              >
                Google Maps
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurLocation;
