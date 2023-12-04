import React, { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import AOS from "aos";
import "aos/dist/aos.css";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function App() {
  useEffect(() => {
    AOS.init({
      offset: 50,
      delay: 100,
      duration: 600,
      easing: "ease-in-out-back",
      mirror: true,
    });
  }, []);

  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
      ],
    },
  ]);

  return (
    <div className="bg-[#F4F7FD] dark:bg-[#1F1D36] dark:text-white">
      <div style={{ fontFamily: "inter, sans-serif" }}>
        <RouterProvider router={routes} />
      </div>
    </div>
  );
}

export default App;
