import "assets/styles/main.scss";

import React, { Fragment } from "react";

import { BrowserRouter } from "react-router-dom";
import Footer from "components/Footer";
import Navbar from "components/Navbar";
import Routes from "pages/Routes";
import ScrollToTop from "helpers/ScrollToTop";

const App: React.FC = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes />
        <Footer />
      </BrowserRouter>
    </Fragment>
  );
};

export default App;
