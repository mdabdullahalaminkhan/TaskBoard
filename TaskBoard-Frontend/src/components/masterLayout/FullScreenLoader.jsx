'use client'
import React from "react";
import { useSelector } from "react-redux";
import { RingLoader } from "react-spinners";

const FullScreenLoader = () => {
  const loader = useSelector((state) => state.setting.loader);
  return (
    <div className={"Loader " + loader}>
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

export default FullScreenLoader;
