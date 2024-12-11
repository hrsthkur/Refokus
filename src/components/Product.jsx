import React from "react";
import Button from "./Button";

const Product = ({ val, mover, index }) => {
  return (
    <div className="w-full py-20 h-[23rem] text-white">
      <div
        onMouseEnter={() => {
          mover(index);
        }}
        className="max-w-screen-xl mx-auto flex  items-center justify-between "
      >
        <h1 className="text-6xl  capitalize font-medium">{val.title}</h1>
        <div className="dets w-1/3">
          <p>{val.description}</p>
          <div className="flex gap-10 mt-5">
            {val.live && <Button />}
            {val.case && <Button title="Case Study" />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
