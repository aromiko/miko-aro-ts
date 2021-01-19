import React, { Fragment } from "react";

// import Stopover from "assets/images/stopover.jpg";
import { WorkPageType } from "types/prop-types";

const Work: React.FC<WorkPageType> = ({
  company,
  title,
  tenure,
  titleImage,
}) => {
  // const imageBoxStyle = (): CSSProperties => {
  //   return {
  //     background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
  //   url(${Stopover}) no-repeat center center`,
  //     backgroundSize: "cover",
  //   };
  // };

  return (
    <Fragment>
      {/* <div
        className="flex items-end text-white h-84 xl:mx-80"
        style={imageBoxStyle()}
      >
        <div className="p-6 w-full">
          <div className="section-title font-bold leading-11">{company}</div>
          <h4 className="mt-2">{title}</h4>
          <h5 className="mt-2">{tenure}</h5>
        </div>
      </div> */}
      <section className="home px-6 xl:px-86">
        <div className="flex flex-col">
          <div className="text-left text-xl lg:text-3xl my-30 lg:mb-42 lg:mt-57 lg:order-1 order-2">
            <p className="section-title mb-6">{company}</p>
            <p className="section-subtitle text-white font-light">{title}</p>
            <h5 className="text-white text-opacity-60 font-light">{tenure}</h5>
          </div>
          <div className="lg:order-2 order-1 mt-51 lg:m-0 lg:mb-42">
            <img
              src={titleImage}
              alt="windmill"
              className="object-cover h-96 w-full"
            />
          </div>
        </div>
      </section>
      {/* <div className="px-6 xl:px-86">
        <div className="text-left text-xl lg:text-3xl my-30 lg:my-42 lg:order-1 order-2">
          <p className="section-title mb-6">
            Creating experiences that fuel work and life.
          </p>
          <p className="section-subtitle text-white text-opacity-60">
            I'm Miko, a web developer focusing mainly on frontend development,
            user interface and experience.
          </p>
        </div>
      </div> */}
    </Fragment>
  );
};

export default Work;
