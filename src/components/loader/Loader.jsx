import React from "react";
import loading from "../../assets/img/loader.gif";

function Loader() {
  return (
    <div className="loader">
      <img src={loading} alt="loader" />
    </div>
  );
}

export default Loader;
