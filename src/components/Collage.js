import React from "react";

const Collage = ({ images }) => {
  return (
    <div style={{ position: "relative", height: "100%" }}>
      {images.map((image, index) => (
        <img
          key={index}
          src={image.src}
          alt=""
          style={{
            position: "absolute",
            left: `${image.x*.5}px`,
            top: `${image.y*.5}px`,
            width: `${image.width*.5}px`,
            height: `${image.height*.5}px`,
            objectFit: "cover",
          }}
        />
      ))}
    </div>
  );
};

export default Collage;