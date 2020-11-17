import { useDispatch, useSelector } from "react-redux";

import React from "react";
import { State } from "redux/Reducers";
import { toggleNavbar } from "redux/Actions";

const Navbar: React.FC = () => {
  const navbarToggle: boolean = useSelector(
    (state: State) => state.navbarToggle
  );
  const dispatch = useDispatch();

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex justify-between items-center fixed w-full p-6 z-50">
      <h2 className="header-title-link font-bold" onClick={scrollTop}>
        miko aro
      </h2>
      <button
        className="flex items-center rounded-full font-bold p-3 transition ease-in-out duration-500 hover:bg-grayTransparent-400"
        onClick={() => dispatch(toggleNavbar(!navbarToggle))}
      >
        <span className="material-icons pointer-events-none">
          {navbarToggle === true ? "close" : "menu"}
        </span>
      </button>
    </div>
  );
};

export default Navbar;
