import React from "react";
import { FaPhone, FaMoon, FaSun } from "react-icons/fa6";
const FooterNav = () => {
  return (
    <div>
      <div className="bg-[#332942] ">
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
    </div>
  );
};

export default FooterNav;
