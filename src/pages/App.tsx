import "assets/styles/main.css";

import Footer from "components/Footer";
import Home from "pages/Home";
import Navbar from "components/Navbar";
import Navmenu from "components/Navmenu";
import React from "react";

const App = () => {
  return (
    <div>
      <Navbar />
      <Navmenu />
      <Home />
      <Footer />
    </div>
  );
};

export default App;
