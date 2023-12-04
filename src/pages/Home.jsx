import React from "react";
import WhyYouChooseUs from "../components/WhyYouChooseUs";
import OurStudents from "../components/OurStudents";
import Courses from "../components/Courses";
import OurLocation from "../components/OurLocation";
import FooterNav from "../components/FooterNav";
import { FaPaperPlane, FaXmark } from "react-icons/fa6";
import { useState } from "react";
import Chat from "../components/Chat";

const Home = () => {
  return <div className="main-home">
    <WhyYouChooseUs />
    <OurStudents />
    <Courses />
    <OurLocation />
    <FooterNav />
    <Chat />
  </div>;
};

export default Home;
