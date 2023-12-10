import { FaPhone, FaMoon, FaSun } from "react-icons/fa6";
import { useState, useEffect } from "react";
import logo from "../assets/images/photo_2023-10-31_21-42-00.jpg"
const local = () => {
  return JSON.parse(localStorage.getItem("item")) || [];
};

const themes = {
  light: "light",
  dark: "dark",
};

const darkLocal = () => {
  return localStorage.getItem("mode") || themes.light;
};
function Navbar() {
  const [items, setItems] = useState(local());
  const [theme, setTheme] = useState(darkLocal());

  const darkMode = () => {
    setTheme((prev) => {
      const newTheme = prev === themes.light ? themes.dark : themes.light;
      localStorage.setItem("mode", newTheme);
      return newTheme;
    });
  };
  useEffect(() => {
    localStorage.setItem("item", JSON.stringify(items));
    if (theme === "light") {
      document.body.classList.remove("dark");
    } else {
      document.body.classList.add("dark");
    }
  }, [items, theme]);
  return (
    <div>
      <div className="bg-[#332942]">
        <div className="container flex flex-col md:flex-row justify-between flex-wrap py-6 social-top">
          <p className="flex items-center gap-2 text-white text-[14px]">
            <FaPhone className="text-xl" color="white" />{" "}
            <span>+998 77 250 05 30</span> - O'quv markazimiz haqida bepul
            ma’lumot olish uchun qo'ng'iroq qiling! -
            <span className="text-[16px] md:text-[14px]">
              Ish vaqti: 09:00 - 18:00
            </span>
          </p>
          <ul className="text-white flex flex-wrap md:flex-nowrap items-center gap-5 cosial-medias">
            <li>
              <a href="https://www.youtube.com/">You Tube</a>
            </li>
            <li>
              <a href="#">Telegram</a>
            </li>
            <li>
              <a href="https://www.instagram.com/">Instagram</a>
            </li>
          </ul>
        </div>
      </div>

      <nav className="container flex justify-between items-center py-[26px] text-[#141024]">
        <div className="dropdown dark:text-[#fff]">
          <label tabIndex={0} className="btn btn-ghost btn-circle border">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-md dropdown-content mt-3 z-[1] p-2 gap-8 shadow rounded-box w-80 h-64 text-center bg-white"
          >
            <li>
              <a href="#qulayliklar"
                className="flex items-center gap-[4px] font-semibold text-2xl text-[#141024]"
              >
                Qulayliklar
              </a>
            </li>
            <li>
              <a href="#main-courses"
                className="font-semibold text-2xl text-[#141024]"
              >
                Kurslar
              </a>
            </li>
            <li>
              <a href="#location"
                className="font-semibold text-2xl text-[#141024]"
              >
                Location
              </a>
            </li>
          </ul>
        </div>
        <a href="" className="navbar-logo">
          <h1 className="font-bold text-[#fff] dark:text-[#fff] flex items-center gap-3"> <img className="w-[50px] h-[50px] rounded-[50%]" src={logo} alt="" />LIFE ACADEMY</h1>
        </a>
        <ul className="flex gap-[24px] items-center navbar-items text-[#fff] dark:text-[#fff]">
          <li>
            <a href="#qulayliklar"
              className=" flex items-center gap-[4px] text-[18px] font-semibold "
            >
              Qulayliklar
            </a>
          </li>
          <li>
            <a href="#main-courses" className="text-[18px] font-semibold">
              Kurslar
            </a>
          </li>
          <li>
            <a href="#location" className=" text-[18px] font-semibold" to={"/bizhaqimizda"}>
              Location
            </a>
          </li>
        </ul>
        <div className="flex items-center gap-[10px]">
          <button onClick={darkMode} className="btn bg-[#fff] h-[48px] w-[48px] text-[#141024] text-2xl ">
             {items ? <FaMoon /> : <FaSun />}
          </button>
          <button className="btn bg-[#fff] h-[48px] w-[48px] text-[#141024] text-2xl">
            UZ
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
