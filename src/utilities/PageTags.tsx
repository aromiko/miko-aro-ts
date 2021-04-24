import React from "react";
import { Helmet } from "react-helmet";

interface PageTagsType {
  title: string;
  description: string;
  image?: string;
}

export const PageTags: React.FC<PageTagsType> = (props) => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{props.title}</title>
      <meta name="title" content={props.title}></meta>
      <meta name="description" content={props.description} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={props.title} />
      <meta property="og:description" content={props.description} />
      <meta property="og:image" content={props.image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://metatags.io/" />
      <meta property="twitter:title" content={props.title} />
      <meta property="twitter:description" content={props.description} />
      <meta property="twitter:image" content={props.image} />
    </Helmet>
  );
};
