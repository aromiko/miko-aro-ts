import ImageTextCard from "components/ImageTextCard";
import { Link } from "react-router-dom";
import React from "react";
import Windmill from "assets/images/windmill.jpg";
import { WorkHistoryData } from "data";

const Home: React.FC = () => {
  return (
    <section className="home px-6 xl:px-86">
      <div className="flex flex-col">
        <div className="text-left text-xl lg:text-3xl my-30 lg:mb-42 lg:mt-57 lg:order-1 order-2">
          <p className="section-title mb-6">
            Creating experiences that fuel work and life.
          </p>
          <p className="section-subtitle text-white text-opacity-30">
            I'm Miko, a web developer focusing mainly on frontend development,
            user interface and experience.
          </p>
        </div>
        <div className="lg:order-2 order-1 mt-51 lg:m-0 lg:mb-42">
          <img
            src={Windmill}
            alt="windmill"
            className="object-cover h-64 md:h-full w-full"
          />
        </div>
      </div>
      <div className="section-work flex flex-col mb-18 lg:mb-30">
        <div className="section-title mb-6">Work</div>
        <div className="flex flex-wrap">
          {WorkHistoryData.map(({ company, description, imageUrl, route }) => {
            return (
              <div
                className="lg:w-1/2 w-full mb-6 lg:even:pl-3 lg:odd:pr-3"
                key={company}
              >
                <Link to={route}>
                  <ImageTextCard
                    header={company}
                    body={description}
                    imageUrl={imageUrl}
                  />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default Home;
