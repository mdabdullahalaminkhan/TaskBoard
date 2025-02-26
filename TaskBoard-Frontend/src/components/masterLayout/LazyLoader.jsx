import React from "react";
import { RingLoader } from "react-spinners";

const LazyLoader = () => { 
  return (
    <div className="Loader">
      <RingLoader
        className="ringLoader"
        color="#12e2a3"
        cssOverride={{}}
        loading
        speedMultiplier={1}
      />
    </div>
  );
};

export default LazyLoader;
