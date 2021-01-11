import "assets/styles/main.scss";

import React, { Fragment } from "react";

import { BrowserRouter } from "react-router-dom";
import Footer from "components/Footer";
import Navbar from "components/Navbar";
import Routes from "pages/Routes";

const App: React.FC = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Navbar />
        <Routes />
        <Footer />
      </BrowserRouter>
    </Fragment>
  );
};

export default App;
