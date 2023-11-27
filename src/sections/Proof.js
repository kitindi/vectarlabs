import React from "react";
import Learnlyhq from "../images/learnly.svg";
import vascopharmaceutical from "../images/vascopharmaceutical.svg";
import matrix from "../images/matrix-elibrary.svg";

const Proof = () => {
  return (
    <section className="w-full">
      <div className="max-w-7xl mx-auto py-8 sm:px-20 px-8">
        <h2 className="text-md sm:text-lg text-center font-medium text-slate-600 ">
          Trusted by
        </h2>
        <ul className="py-8 flex gap-8 items-center justify-center">
          <li>
            {" "}
            <img src={Learnlyhq} alt="" className="h-10 sm:h-5" />
          </li>
          <li>
            {" "}
            <img src={matrix} alt="" className="h-8 sm:h-4" />
          </li>
          <li>
            {" "}
            <img src={vascopharmaceutical} alt="" className="h-8 sm:h-4" />
          </li>
          <li></li>
        </ul>
      </div>
    </section>
  );
};

export default Proof;
