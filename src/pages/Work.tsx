import React, { Fragment } from "react";
import { WorkPageType } from "types/prop-types";
import { PageTags } from "utilities/PageTags";

const Work: React.FC<WorkPageType> = ({
  company,
  metaDescription,
  position,
  tenure,
  titleImage,
  sectionImage,
  sectionImageTwo,
  sectionOne,
  sectionTwo,
  technology,
}) => {
  return (
    <Fragment>
      <PageTags
        title={`${company} | Miko Aro`}
        description={metaDescription}
        image={titleImage}
      />
      <section className="home px-6 xl:px-86">
        <div className="flex flex-col">
          <div className="text-left text-xl lg:text-3xl my-30 lg:mb-42 lg:mt-57 lg:order-1 order-2">
            <p className="section-title mb-6">{company}</p>
            <p className="section-subtitle text-white font-light">{position}</p>
            <h5 className="text-white text-opacity-60 font-light mt-1">
              {tenure}
            </h5>
          </div>
          <div className="lg:order-2 order-1 mt-51 lg:m-0 lg:mb-42">
            <img
              src={titleImage}
              alt={company}
              className="object-cover h-84 lg:h-120 w-full"
            />
          </div>
        </div>
        {sectionOne && (
          <div className="pb-42">
            <p className="section-body">{sectionOne}</p>
          </div>
        )}

        {sectionImage && (
          <div className="mb-42">
            <img
              src={sectionImage}
              alt={company}
              className="object-cover object-top h-84 lg:h-120 w-full"
            />
          </div>
        )}

        {sectionTwo && (
          <div className="pb-42">
            <p className="section-body">{sectionTwo}</p>
          </div>
        )}

        {sectionImageTwo && (
          <div className="mb-42">
            <img
              src={sectionImageTwo}
              alt={company}
              className="object-cover object-top h-84 lg:h-120 w-full"
            />
          </div>
        )}

        {technology && (
          <div className="section-list pb-36">
            <p className="section-label text-white pb-2">Technology</p>
            <ul>
              {technology.map((tech) => {
                return <li>{tech}</li>;
              })}
            </ul>
          </div>
        )}
      </section>
    </Fragment>
  );
};

export default Work;
