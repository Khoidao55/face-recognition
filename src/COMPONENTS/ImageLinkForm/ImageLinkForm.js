import React from "react";
import "./ImageLinkForm.css";

const ImageLinkForm = ({ inputChange, submitChange }) => {
  return (
    <div>
      <p className="f3 shadow-2 pa2">{"Face Detection App"}</p>
      <div className="center">
        <div className="form center pa4 br3 shadow-5">
          <input
            className="f4 pa2 w-70 center"
            type="tex"
            onChange={inputChange}
          />
          <button
            className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple pointer"
            onClick={submitChange}
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
