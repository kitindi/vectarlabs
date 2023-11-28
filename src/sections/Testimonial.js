import React from "react";
import { Quotes } from "@phosphor-icons/react";

const Testimonial = () => {
  return (
    <section className="w-full h-screen py-20 px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-xl sm:text-4xl font-bold">
          The vectarLab effect:
          <br /> client testimonials
        </h1>
        <div className="grid grid-cols-2 px-10 gap-5 py-10">
          <div className="bg-[#1f1f1f]  rounded-md px-5 py-8">
            <span>
              <Quotes size={32} color="#4E43CA" weight="fill" />
            </span>
            <div>
              <p className="text-slate-200 text-sm">
                “The design is not only visually stunning but also highly
                functional. . I've received numerous compliments from customers
                about the website's sleek design. It has truly elevated my
                online presence and boosted my sales! ”
              </p>
              <div className="flex gap-4 items-center pt-8 pb-2">
                <img
                  src="https://userstock.io/data/wp-content/uploads/2017/07/chelsea-ferenando-201355-300x300.jpg"
                  alt=""
                  className="h-10 w-10 rounded-full"
                />
                <div>
                  <p className="text-sm font-medium  text-slate-200">
                    Ritha Douglas
                  </p>
                  <p className="text-xs  text-slate-400 py-2">
                    Director | Golden Trust
                  </p>
                </div>
              </div>
              <hr className="w-full bg-gray-600" />
            </div>
          </div>
          <div className="bg-[#1f1f1f]  rounded-md px-5 py-8">
            <span>
              <Quotes size={32} color="#4E43CA" weight="fill" />
            </span>
            <div>
              <p className="text-slate-200 text-sm">
                “The design is not only visually stunning but also highly
                functional. . I've received numerous compliments from customers
                about the website's sleek design. It has truly elevated my
                online presence and boosted my sales! ”
              </p>
              <div className="flex gap-4 items-center pt-8 pb-2">
                <img
                  src="https://userstock.io/data/wp-content/uploads/2017/07/chelsea-ferenando-201355-300x300.jpg"
                  alt=""
                  className="h-10 w-10 rounded-full"
                />
                <div>
                  <p className="text-sm font-medium  text-slate-200">
                    Ritha Douglas
                  </p>
                  <p className="text-xs  text-slate-400 py-2">
                    Director | Golden Trust
                  </p>
                </div>
              </div>
              <hr className="w-full bg-gray-600" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
