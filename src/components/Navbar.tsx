import React from "react";
import { useHistory } from "react-router-dom";

const Navbar: React.FC = () => {
  const history = useHistory();

  const goToHome = () => {
    history.push("/home");
  };

  return (
    <section
      className={`header h-21 flex justify-between items-center w-full p-6 xl:px-86 z-50 fixed transition-colors duration-300`}
    >
      <button onClick={goToHome}>
        <h2 className="font-bold">miko aro</h2>
      </button>
    </section>
  );
};

export default Navbar;
