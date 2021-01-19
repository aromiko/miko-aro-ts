import React from "react";
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
    <section className="home px-6 xl:px-86">
      <div className="flex flex-col">
        <div className="text-left text-xl lg:text-3xl my-30 lg:mb-42 lg:mt-57 lg:order-1 order-2">
          <p className="section-title mb-6">{company}</p>
          <p className="section-subtitle text-white font-light">{title}</p>
          <h5 className="text-white text-opacity-60 font-light mt-1">
            {tenure}
          </h5>
        </div>
        <div className="lg:order-2 order-1 mt-51 lg:m-0 lg:mb-42">
          <img
            src={titleImage}
            alt={company}
            className="object-cover h-72 lg:h-96 w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Work;
