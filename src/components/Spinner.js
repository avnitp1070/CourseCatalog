import React from "react";
import "./Spinner.css";
const Spinner = () => {
  return (
    <div className="load-spin">
      <div className="custom-loader"></div>
      <p className="load-para">loading....</p>
    </div>
  );
};

export default Spinner;
