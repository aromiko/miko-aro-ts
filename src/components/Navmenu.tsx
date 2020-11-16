import Facebook from "assets/images/icons/facebook.svg";
import Instagram from "assets/images/icons/instagram.svg";
import Linkedin from "assets/images/icons/linkedin.svg";
import React from "react";
import { State } from "redux/Reducers";
import Twitter from "assets/images/icons/twitter.svg";
import { useSelector } from "react-redux";

const openSocialMedia = (url: string) => {
  window.open(url, "_blank");
};

const Navmenu = () => {
  const navbarToggle = useSelector((state: State) => state.navbarToggle);
  return (
    <div
      className={`flex flex-col sm:flex-row items-center justify-between w-screen h-screen bg-white fixed transition ease-in-out duration-400 p-20 lg:px-30 lg:py-0 z-40 ${
        navbarToggle === true ? "opacity-1" : "opacity-0 pointer-events-none"
      }`}
    >
      <button
        className="transition ease-in-out duration-500 rounded-full hover:bg-grayTransparent-500 p-10 select-none"
        onClick={() => {
          openSocialMedia("https://facebook.com/miko.aro");
        }}
      >
        <img src={Facebook} alt="facebook" className="h-16 lg:h-20" />
      </button>
      <button
        className="transition ease-in-out duration-500 rounded-full hover:bg-grayTransparent-500 p-10 select-none"
        onClick={() => {
          openSocialMedia("https://www.instagram.com/mikoaro/");
        }}
      >
        <img src={Instagram} alt="instagram" className="h-16 lg:h-20" />
      </button>
      <button
        className="transition ease-in-out duration-500 rounded-full hover:bg-grayTransparent-500 p-10 select-none"
        onClick={() => {
          openSocialMedia("https://twitter.com/aromiko");
        }}
      >
        <img src={Twitter} alt="twitter" className="h-16 lg:h-20" />
      </button>
      <button
        className="transition ease-in-out duration-500 rounded-full hover:bg-grayTransparent-500 p-10 select-none"
        onClick={() => {
          openSocialMedia("https://www.linkedin.com/in/mikoaro");
        }}
      >
        <img src={Linkedin} alt="linkedin" className="h-16 lg:h-20" />
      </button>
    </div>
  );
};

export default Navmenu;
