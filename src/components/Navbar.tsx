import { useDispatch, useSelector } from "react-redux";

import React from "react";
import { State } from "redux/Reducers";
import { toggleNavbar } from "redux/Actions";

const Navbar = () => {
  const navbarToggle: boolean = useSelector(
    (state: State) => state.navbarToggle
  );
  const dispatch = useDispatch();

  return (
    <div className="flex justify-between items-center fixed w-full p-6 z-50">
      <h2 className="font-bold">miko aro</h2>
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
