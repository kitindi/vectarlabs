import React from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "@phosphor-icons/react";
import { projects } from "../projects";

const Project = () => {
  const { id } = useParams();

  const project = projects[id - 1];

  console.log(project?.title);
  return (
    <section className="w-full   relative">
      <div className="max-w-6xl mx-auto px-6 pt-10 sm:px-10 sm:pt-16">
        <div className="w-full h-96 flex  flex-col gap-5 sm:gap-0 sm:grid sm:grid-cols-12 py-16">
          <div className="col-span-6 ">
            <img src={project?.logo} alt="" className="w-52 mb-5" />
          </div>
          <div className="col-span-6 flex flex-col gap-5">
            <h3 className="text-3xl text-slate-200 font-semibold">Overview</h3>
            <p className="text-slate-300 text-lg">{project?.description[0]}</p>
          </div>
        </div>
        <div className="flex flex-col sm:grid sm:grid-cols-2 gap-8 sm:gap-4 ">
          {project?.images.shots.map((image, i) => (
            <div>
              <img src={image} alt="" className="w-full object-cover" />
            </div>
          ))}
        </div>
        <div className=" py-36 sm:grid sm:grid-cols-12">
          <div className="col-span-6">
            <h3 className="text-slate-200 text-3xl">Features</h3>
          </div>
          <div className="col-span-6">
            <img
              src={project?.images.featureImg[0]}
              alt=""
              className="w-full object-cover"
            />
          </div>
        </div>
      </div>
      {/* <Link
        to="/"
        className="w-20 h-20 sm:w-24 sm:h-24 p-8 rounded-tr-full rounded-br-full bg-white  absolute top-0 left-0 z-10 flex items-center justify-center"
      >
        <p className="flex gap-1 items-center">
          {" "}
          <ArrowLeft size={26} color="#1a1919" weight="bold" /> Home
        </p>
      </Link> */}
    </section>
  );
};

export default Project;
