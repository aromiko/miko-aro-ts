import React, { CSSProperties } from "react";

import { ImageTextCardType } from "types/prop-types";

const ImageTextCard: React.FC<ImageTextCardType> = ({
  header,
  body,
  imageUrl,
}: ImageTextCardType) => {
  const imageBoxStyle = (url: string): CSSProperties => {
    return {
      background: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url(${url}) no-repeat center center`,
      backgroundSize: "cover",
    };
  };

  return (
    <div
      className="card-image-text flex flex-col h-80 p-6"
      style={imageBoxStyle(imageUrl)}
    >
      <h4 className="font-semibold">{header}</h4>
      <p className="mt-auto">{body}</p>
    </div>
  );
};

export default ImageTextCard;
