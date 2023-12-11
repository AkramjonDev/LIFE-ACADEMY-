import React from "react";
import EduLocation from "../assets/images/photo_2023-12-06_13-42-52.jpg";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";
import logo from "../assets/images/photo_2023-10-31_21-42-00.jpg"
const OurLocation = () => {
  return (
    <div id="location" className="location mb-20">
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
                  "https://maps.google.com/maps?q=40.382336,71.793142&ll=40.382336,71.793142&z=16"
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
