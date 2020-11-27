import { useDispatch, useSelector } from "react-redux";

import React from "react";
import { State } from "redux/Reducers";
// import { toggleNavbar } from "redux/Actions";

const Navbar: React.FC = () => {
  // const navbarToggle: boolean = useSelector(
  //   (state: State) => state.navbarToggle
  // );
  // const dispatch = useDispatch();

  return (
    <div className="flex justify-between items-center w-full p-6 xl:px-80 z-50">
      <h2 className="font-bold">miko aro</h2>
    </div>
  );
};

export default Navbar;
