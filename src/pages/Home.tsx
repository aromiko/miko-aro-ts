// import Building from "assets/images/building.jpg";

import Laptop from "assets/images/laptop.jpg";
import React from "react";
import Windmill from "assets/images/windmill.jpg";

const Home = () => {
  return (
    <div className="px-6 xl:px-80">
      <div className="flex flex-col">
        <div className="text-center lg:text-left text-xl lg:text-3xl py-20 lg:py-40 lg:order-1 order-2">
          I'm Miko, a web developer with a focus on front end development, user
          experience and design. Discover more about my life here.
        </div>
        <div className="lg:order-2 order-1 pt-20 lg:p-0">
          <img
            src={Windmill}
            alt="windmill"
            className="object-cover h-64 md:h-full w-full"
          />
        </div>
      </div>
      <div className="flex lg:flex-row flex-col lg:py-40 py-20">
        <div className="flex flex-col lg:w-1/2 lg:pr-3">
          <div className="text-lg lg:text-2xl text font-bold pb-3">
            Technology with a soul.
          </div>
          <div>
            <p className="text-base lg:text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
        <div className="lg:w-1/2 lg:pl-3">
          <img src={Laptop} alt="laptop" className="w-full" />
        </div>
      </div>
      {/* <div className="flex flex-col lg:flex-row">
        <div>
          <img src={Building} alt="building" className="w-full" />
        </div>
        <div>
          <img src={Laptop} alt="laptop" className="w-full" />
        </div>
      </div> */}
      <div className="flex lg:flex-row flex-col lg:py-40 py-20">
        <div className="text-lg lg:text-2xl text font-bold lg:w-1/3">
          Creating experiences that fuel work and life.
        </div>
        <div className="text-base lg:text-xl text lg:w-2/3">
          <p className="text-base lg:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Home;
