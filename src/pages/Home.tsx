import React, { CSSProperties } from "react";
import Windmill from "assets/images/windmill.jpg";
import Building from "assets/images/building.jpg";
import Laptop from "assets/images/laptop.jpg";
import Port from "assets/images/port.jpeg";
import Sunset from "assets/images/sunset.jpeg";

const Home = () => {
  const imageBoxStyle = (url: string): CSSProperties => {
    return {
      background: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url(${url}) no-repeat center center`,
      backgroundSize: "cover",
    };
  };

  return (
    <section className="home px-6 xl:px-80">
      <div className="flex flex-col">
        <div className="text-left text-xl lg:text-3xl my-30 lg:mb-42 lg:mt-36 lg:order-1 order-2">
          <p className="section-title mb-6">
            Creating experiences that fuel work and life.
          </p>
          <p className="section-subtitle text-white text-opacity-30">
            I'm Miko, a web developer focusing mainly on frontend development,
            user interface and experience.
          </p>
        </div>
        <div className="lg:order-2 order-1 mt-24 lg:m-0 lg:mb-42">
          <img
            src={Windmill}
            alt="windmill"
            className="object-cover h-64 md:h-full w-full"
          />
        </div>
      </div>
      <div className="flex flex-col mb-18 lg:mb-30">
        <div className="section-title mb-6">Work</div>
        <div className="flex flex-wrap">
          <div className="lg:w-1/2 w-full">
            <div
              className="flex flex-col h-80 p-6 lg:mr-3 mb-6"
              style={imageBoxStyle(Building)}
            >
              <h4 className="font-semibold">Bolton International</h4>
              <p className="mt-auto">
                Work description here. Duration of work. Industry and clients
                involved. Click here for more details.
              </p>
            </div>
          </div>
          <div className="lg:w-1/2 w-full">
            <div
              className="flex flex-col h-80 p-6 lg:ml-3 mb-6"
              style={imageBoxStyle(Laptop)}
            >
              <h4 className="font-semibold">Tanda | Workforce.com</h4>
              <p className="mt-auto">
                Work description here. Duration of work. Industry and clients
                involved. Click here for more details.
              </p>
            </div>
          </div>
          <div className="lg:w-1/2 w-full">
            <div
              className="flex flex-col h-80 p-6 lg:mr-3 mb-6"
              style={imageBoxStyle(Port)}
            >
              <h4 className="font-semibold">Fujitsu Philippines</h4>
              <p className="mt-auto">
                Work description here. Duration of work. Industry and clients
                involved. Click here for more details.
              </p>
            </div>
          </div>
          <div className="lg:w-1/2 w-full">
            <div
              className="flex flex-col h-80 p-6 lg:ml-3 mb-6 "
              style={imageBoxStyle(Sunset)}
            >
              <h4 className="font-semibold">Misys</h4>
              <p className="mt-auto">
                Work description here. Duration of work. Industry and clients
                involved. Click here for more details.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Home;
