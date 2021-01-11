import React, { CSSProperties, Fragment } from "react";

import Stopover from "assets/images/stopover.jpg";
import { WorkPageType } from "types/prop-types";

const Work: React.FC<WorkPageType> = ({ company, title, tenure }) => {
  const imageBoxStyle = (): CSSProperties => {
    return {
      background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${Stopover}) no-repeat center center`,
      backgroundSize: "cover",
    };
  };

  return (
    <Fragment>
      <div
        className="flex items-end text-white h-84 xl:mx-80"
        style={imageBoxStyle()}
      >
        <div className="p-6 w-full">
          <div className="section-title font-bold leading-11">{company}</div>
          <h4 className="mt-2">{title}</h4>
          <h5 className="mt-2">{tenure}</h5>
        </div>
      </div>
      <div className="px-6 xl:px-86">
        <div className="text-left text-xl lg:text-3xl my-30 lg:my-42 lg:order-1 order-2">
          <p className="section-title mb-6">
            Creating experiences that fuel work and life.
          </p>
          <p className="section-subtitle text-white text-opacity-60">
            I'm Miko, a web developer focusing mainly on frontend development,
            user interface and experience.
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default Work;
