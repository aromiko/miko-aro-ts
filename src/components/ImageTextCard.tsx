import React, { useState } from "react";
import { ImageTextCardType } from "types/prop-types";

const ImageTextCard: React.FC<ImageTextCardType> = ({
  header,
  body,
  imageUrl,
  color,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const imageBoxStyle = {
    background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${imageUrl}) no-repeat center center`,
    backgroundSize: "cover",
  };

  const imageBoxHoveredStyle = {
    backgroundColor: color,
  };

  return (
    <div
      className="card-image-text flex flex-col h-84 lg:h-120 p-6"
      style={isHovered ? imageBoxHoveredStyle : imageBoxStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h4 className="font-bold">{header}</h4>
      <p className="mt-auto">{body}</p>
    </div>
  );
};

export default ImageTextCard;
