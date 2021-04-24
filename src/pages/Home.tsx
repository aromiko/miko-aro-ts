import Windmill from "assets/images/windmill.jpg";
import ImageTextCard from "components/ImageTextCard";
import { WorkHistoryData } from "data";
import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { PageTags } from "utilities/PageTags";

const Home: React.FC = () => {
  return (
    <Fragment>
      <PageTags
        title="Miko Aro | Web Developer"
        description="Miko Aro is a web developer focusing mainly on frontend development,
            user interface and experience. Discover more about his work and life here."
        image={Windmill}
      />
      <section className="home px-6 xl:px-86">
        <div className="flex flex-col">
          <div className="text-left text-xl lg:text-3xl my-30 lg:mb-42 lg:mt-57 lg:order-1 order-2">
            <p className="section-title mb-6">
              Creating experiences that fuel work and life.
            </p>
            <p className="section-subtitle text-white text-opacity-60">
              I'm Miko, a web developer focusing mainly on frontend development,
              user interface and experience.
            </p>
          </div>
          <div className="lg:order-2 order-1 mt-51 lg:m-0 lg:mb-42">
            <img
              src={Windmill}
              alt="windmill"
              className="object-cover h-72 lg:h-96 w-full"
            />
          </div>
        </div>
        <div className="section-work flex flex-col mb-18 lg:mb-30">
          <div className="section-title mb-6">Work</div>
          <div className="flex flex-wrap">
            {WorkHistoryData.map(
              ({ company, description, imageUrl, route, theme }) => {
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
                        color={theme}
                      />
                    </Link>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </section>
    </Fragment>
  );
};
export default Home;
