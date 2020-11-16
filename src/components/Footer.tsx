import React, { useEffect, useRef, useState } from "react";

import { State } from "redux/Reducers";
import { useSelector } from "react-redux";

const Footer: React.FC = () => {
  const navbarToggle: boolean = useSelector(
    (state: State) => state.navbarToggle
  );
  const [footerToggle, setFooterToggle] = useState(false);

  const mounted = useRef() as React.MutableRefObject<Boolean>;
  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      console.log("mounted");
      window.addEventListener("scroll", function () {
        if (
          window.innerHeight + Math.round(window.scrollY) >=
          document.body.offsetHeight
        ) {
          setFooterToggle(true);
        } else {
          setFooterToggle(false);
        }
      });
      return () => {
        window.removeEventListener("scroll", () => {});
      };
    } else {
      console.log("updated");
    }
  });

  // useEffect(() => {
  //   window.addEventListener("scroll", function () {
  //     if (
  //       window.innerHeight + Math.round(window.scrollY) >=
  //       document.body.offsetHeight
  //     ) {
  //       setFooterToggle(true);
  //     } else {
  //       setFooterToggle(false);
  //     }
  //   });
  //   return () => {
  //     window.removeEventListener("scroll", () => {});
  //   };
  // }, []);

  const getCurrentYear: Number = new Date().getFullYear();
  return (
    <div
      className={`flex flex-col justify-center items-center fixed w-full p-6 z-50 transition-all ease-in-out duration-400 ${
        footerToggle === true || navbarToggle === true
          ? "bottom-0 opacity-1"
          : "-bottom-24 opacity-0"
      }`}
    >
      <div>
        <a href="mailto:contact@miko-aro.com">contact@miko-aro.com</a>
      </div>
      <div>© {getCurrentYear}</div>
    </div>
  );
};

export default Footer;
