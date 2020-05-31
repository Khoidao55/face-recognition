import React from "react";
import "./FaceRecognition.css";

const FaceRecognition = ({ imageURLSubmit, pictureBox }) => {
  return (
    <div className="pa3 center ma">
      <div className="absolute mt2">
        <img
          id="inputimage"
          alt=""
          src={imageURLSubmit}
          width="500px"
          height="auto"
        />
        <div
          className="drawBox"
          style={{
            top: pictureBox.topRow,
            right: pictureBox.rightCol,
            bottom: pictureBox.bottomRow,
            left: pictureBox.leftCol,
          }}
        ></div>
      </div>
    </div>
  );
};

export default FaceRecognition;
