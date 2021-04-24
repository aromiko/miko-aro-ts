import "assets/styles/main.scss";

import Footer from "components/Footer";
import Navbar from "components/Navbar";
import ScrollToTop from "helpers/ScrollToTop";
import Routes from "pages/Routes";
import React, { Fragment } from "react";
import { BrowserRouter } from "react-router-dom";

const App: React.FC = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <ScrollToTop />
        <div className="main-container">
          <Navbar />
          <Routes />
          <Footer />
        </div>
      </BrowserRouter>
    </Fragment>
  );
};

export default App;
