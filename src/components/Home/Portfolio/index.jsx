import React from "react";
import { PORTFOLIO_PROJECTS } from "../../../constants";
import { Link } from "react-router";

const Portfolio = () => {
  const previewProjects = PORTFOLIO_PROJECTS.slice(0, 4);

  return (
    <div>
      <h1 className="text-2xl md:text-4xl xl:text-6xl font-bold text-primary text-center">
        Portfolio
      </h1>
      <div className="h-2 w-17 mt-2 rounded-4xl bg-secondary mx-auto"></div>
      <p className="text-center text-dark/60 mt-4 max-w-xl mx-auto text-sm md:text-base px-6">
        200+ luxury homes completed across DHA, Bahria Town, Gulberg, and more.
        Visit our active sites to witness our quality firsthand.
      </p>

      <div className="flex flex-col sm:flex-row gap-6 my-15 mx-6 justify-around">
        <div className="aspect-4/5 flex-1 relative group overflow-hidden rounded-2xl">
          <img
            src={previewProjects[0].image}
            alt={previewProjects[0].title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent flex items-end p-6">
            <div>
              <p className="text-white font-bold text-lg">
                {previewProjects[0].title}
              </p>
              <p className="text-white/70 text-sm">
                {previewProjects[0].location}
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 w-full flex-1">
          <div className="flex-1 relative group overflow-hidden rounded-2xl">
            <img
              src={previewProjects[1].image}
              alt={previewProjects[1].title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent flex items-end p-4">
              <div>
                <p className="text-white font-bold">
                  {previewProjects[1].title}
                </p>
                <p className="text-white/70 text-sm">
                  {previewProjects[1].location}
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-1 gap-4">
            <div className="relative group overflow-hidden rounded-2xl flex-1">
              <img
                src={previewProjects[2].image}
                alt={previewProjects[2].title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent flex items-end p-4">
                <div>
                  <p className="text-white font-bold text-sm">
                    {previewProjects[2].title}
                  </p>
                  <p className="text-white/70 text-xs">
                    {previewProjects[2].location}
                  </p>
                </div>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-2xl flex-1">
              <img
                src={previewProjects[3].image}
                alt={previewProjects[3].title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent flex items-end p-4">
                <div>
                  <p className="text-white font-bold text-sm">
                    {previewProjects[3].title}
                  </p>
                  <p className="text-white/70 text-xs">
                    {previewProjects[3].location}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mb-10">
        <Link
          to="/portfolio"
          className="inline-block bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-lg shadow-primary/20 hover:-translate-y-1"
        >
          View All Projects →
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;
