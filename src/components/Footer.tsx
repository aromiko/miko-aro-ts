import React from "react";

import { ReactComponent as Facebook } from "assets/images/icons/facebook.svg";
import { ReactComponent as Instagram } from "assets/images/icons/instagram.svg";
import { ReactComponent as Twitter } from "assets/images/icons/twitter.svg";
import { ReactComponent as Linkedin } from "assets/images/icons/linkedin.svg";

// import { State } from "redux/Reducers";
// import { useSelector } from "react-redux";

const Footer: React.FC = () => {
  // const navbarToggle: boolean = useSelector(
  //   (state: State) => state.navbarToggle
  // );

  const getCurrentYear: Number = new Date().getFullYear();
  return (
    <section className="footer h-42 flex flex-col justify-center w-full px-6 pt-6 pb-12 xl:px-80 xl:py-6">
      <div className="flex flex-row mb-4">
        <a
          href="https://facebook.com/miko.aro"
          target="_blank"
          rel="noreferrer"
          className="mr-3"
        >
          <Facebook height="1.85rem" width="1.85rem" />
        </a>
        <a
          href="https://www.instagram.com/mikoaro"
          target="_blank"
          rel="noreferrer"
          className="mx-3"
        >
          <Instagram height="1.85rem" width="1.85rem" />
        </a>
        <a
          href="https://twitter.com/aromiko"
          target="_blank"
          rel="noreferrer"
          className="mx-3"
        >
          <Twitter height="1.85rem" width="1.85rem" />
        </a>
        <a
          href="https://www.linkedin.com/in/mikoaro"
          target="_blank"
          rel="noreferrer"
          className="ml-3"
        >
          <Linkedin height="1.85rem" width="1.85rem" />
        </a>
      </div>
      <div>
        <a href="mailto:contact@miko-aro.com">contact@miko-aro.com</a>
      </div>
      <div>© {getCurrentYear}</div>
    </section>
  );
};

export default Footer;
