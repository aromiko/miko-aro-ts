// import { useDispatch, useSelector } from "react-redux";

import React from "react";
import { useHistory } from "react-router-dom";
// import { useScrollPosition } from "@n8tb1t/use-scroll-position";
// import { State } from "redux/Reducers";
// import { toggleNavbar } from "redux/Actions";

const Navbar: React.FC = () => {
  // const navbarToggle: boolean = useSelector(
  //   (state: State) => state.navbarToggle
  // );
  // const dispatch = useDispatch();
  const history = useHistory();

  // const [hasBackground, setHasbackground] = useState(false);

  const goToHome = () => {
    history.push("/home");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // useScrollPosition(({ prevPos, currPos }) => {
  //   if (currPos.y <= -84) {
  //     setHasbackground(true);
  //   } else {
  //     setHasbackground(false);
  //   }
  // });

  return (
    // <section
    //   className={`header h-21 flex justify-between items-center w-full p-6 xl:px-80 z-50 fixed transition-colors duration-300 ${
    //     hasBackground ? "bg-black bg-opacity-50" : ""
    //   }`}
    // >
    <section
      className={`header h-21 flex justify-between items-center w-full p-6 xl:px-80 z-50 fixed transition-colors duration-300`}
    >
      <button onClick={goToHome}>
        <h2 className="font-bold">miko aro</h2>
      </button>
    </section>
  );
};

export default Navbar;
