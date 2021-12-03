import React from "react";
import MockProjects from "./MockProjects";

const Projects = () => {
  const myProjects = MockProjects;

  return (
    <div className="container p-3">
      <div className="row m-0">
        <h1 className="fs-1 text-white text-center bg-dark rounded shadow p-3">Some of my Projects</h1>
        {myProjects.map((project) => (
          <div key={project.id} className="col-12 col-lg-6 p-2">
            <div className="bg-transparentblack rounded-3 shadow-lg text-white px-1 py-3">
              <div className="row m-0">
                <img className="col-12 col-md-6 projectImg" src={project.img} alt="" />
                <div className="col-12 col-md-6 d-flex flex-column justify-content-between">
                  <p className="fs-3 m-0">{project.name}</p>
                  <div className="d-flex">
                    {project.technologies.map((technologie) => (
                      <span className="badge bg-info m-1">{technologie}</span>
                    ))}
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