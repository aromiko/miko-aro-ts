import React from "react";
import Windmill from "assets/images/windmill.jpg";
import Building from "assets/images/building.jpg";

const Home = () => {
  return (
    <div className="px-6 xl:px-80">
      <section>
        <div className="flex flex-col">
          <div className="text-left text-xl lg:text-3xl my-20 lg:my-40 lg:order-1 order-2">
            <p className="section-title mb-6">
              Creating experiences that fuel work and life.
            </p>
            <p className="section-subtitle">
              I'm Miko, a web developer focusing mainly on frontend development,
              user interface and experience.
            </p>
          </div>
          <div className="lg:order-2 order-1 mt-14 lg:m-0 lg:mb-40">
            <img
              src={Windmill}
              alt="windmill"
              className="object-cover h-64 md:h-full w-full"
            />
          </div>
        </div>
      </section>
      <section>
        <div className="flex flex-col mb-40">
          <div className="section-title">Work</div>
          <div className="flex flex-wrap">
            <div className="lg:w-1/2 w-full">Bolton International Inc.</div>
            <div className="lg:w-1/2 w-full">Tanda/Workforce.com</div>
            <div className="lg:w-1/2 w-full">
              Fujitsu Global Delivery Center
            </div>
            <div className="lg:w-1/2 w-full">
              <div className="image-box h-20">Misys</div>
            </div>
          </div>
        </div>
      </section>
      {/* <div className="flex lg:flex-row flex-col lg:py-40 py-20">
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
      </div> */}
    </div>
  );
};
export default Home;
