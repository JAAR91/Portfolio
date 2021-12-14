import React from "react";
import MockProjects from "./MockProjects";

const Projects = () => {
  const myProjects = MockProjects;

  return (
    <div className="project-container">
      <div className="row m-0">
        <h1 className="fs-1 fw-bold text-white text-center p-3">Check out some of my projects</h1>
        {myProjects.map((project, index) => (
          <div key={project.id} className="col-12 col-md-6 col-xl-4 p-2">
            <div className="bg-transparentblack rounded-3 shadow-lg text-white px-1 py-3 h-100">
              <div className="row m-0 h-100">
                <img
                  className={`col-12 col-sm-6 col-md-12 col-lg-6 col-xl-12 
                    order-1 ${([1, 0][index % 2]) === 0 ? 'order-sm-1' : 'order-sm-2'}
                    order-md-1 ${([1, 0, 0, 1][index % 4]) === 0 ? 'order-lg-2' : 'order-lg-1'}
                    order-xl-1
                    projectImg
                  `}
                  src={project.img}
                  alt=""
                />
                <div
                  className={`col-12 col-sm-6 col-md-12 col-lg-6 col-xl-12 
                    order-2 ${([1, 0][index % 2]) === 0 ? 'order-sm-2' : 'order-sm-1'}
                    order-md-2 ${([1, 0, 0, 1][index % 4]) === 0 ? 'order-lg-1' : 'order-lg-2'}
                    order-xl-2
                    d-flex flex-column justify-content-between
                  `}
                >
                  <p className="fs-3 m-0">{project.name}</p>
                  <div className="d-flex">
                    {project.technologies.map((technologie, index) => {
                      const knum = index + 1;
                      return (
                        <span key={knum} className="badge bg-info m-1">{technologie}</span>
                      );
                    })}
                  </div>
                  <span>{project.description}</span>
                  <a className="btn btn-outline-info" href={project.link} target="_blank" rel="noreferrer">More info</a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

};

export default Projects;