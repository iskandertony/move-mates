import React, { useState } from "react";

const importAll = (r) => {
  let images = {};
  r.keys().forEach((item) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
};

const images = importAll(
  require.context("../../assets/icons", false, /\.(png|jpe?g|svg)$/)
);

console.log("images", images);

const Icon = (props) => {
  const {
    name,
    height,
    width,
    hover,
    style,
    className,
    onClick,
    onMouseCustom,
  } = props;

  const [over, setOver] = useState(false);

  const handleSetOver = () => {
    setOver(true);
  };

  if (!images[name + ".svg"] && !images["_active.svg"]) {
    return <span>none*</span>;
  }
  console.log("images", images);
  return (
    <div
      className={`icon ${className}`}
      onMouseOver={onMouseCustom || handleSetOver}
      onMouseOut={() => setOver(false)}
      style={style}
      onClick={onClick}
    >
      <img
        width={width}
        height={height}
        src={images[over && hover ? name + "_active.svg" : name + ".svg"]}
        alt={name}
      />
    </div>
  );
};

export default Icon;
