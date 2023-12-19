import React from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "@phosphor-icons/react";
import { projects } from "../projects";

const Project = () => {
  const { id } = useParams();

  const project = projects[id - 1];

  console.log(project?.title);
  return (
    <section className="w-full   relative py-20">
      <div className="max-w-6xl mx-auto px-4 pt-10 sm:px-10 sm:pt-16">
        <div className="w-full h-96 grid grid-cols-12 py-24">
          <div className="col-span-6 flex flex-col justify-center">
            <img src={project?.logo} alt="" className="w-52 mb-5" />
          </div>
          <div className="col-span-6 flex items-center">
            <p className="text-slate-200 text-lg">{project?.description[0]}</p>
          </div>
        </div>
        <div className="flex flex-col sm:grid sm:grid-cols-2 gap-3">
          {project?.images.shots.map((image, i) => (
            <div>
              <img src={image} alt="" />
            </div>
          ))}
        </div>
        <div className="grid grid-cols-12 gap-3 h-screen py-48">
          <div className="col-span-6">
            <img src={project?.images?.features[0]} alt="" />
          </div>
          <div className="col-span-6">
            <h2 className="text-slate-300 text-4xl">Features</h2>
          </div>
        </div>
      </div>
      <Link
        to="/"
        className="w-24 h-24 p-8 rounded-tr-full rounded-br-full bg-white  absolute top-0 left-0 z-10 flex items-center justify-center"
      >
        <p className="flex gap-1 items-center">
          {" "}
          <ArrowLeft size={26} color="#1a1919" weight="bold" /> Home
        </p>
      </Link>
    </section>
  );
};

export default Project;
