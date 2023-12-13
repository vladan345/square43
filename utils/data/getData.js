import projectData from "../constants/projectData.json";

export const getData = projectData;

export const getAllServices = () => {
  return getData.services;
};

export const getAllProjects = async () => {
  return getData.projects;
};
export const getAllProjectsExcept = (projectId) => {
  return getData.projects.filter((project) => project.id !== projectId);
};
//Needs to be deconstructed
export const getCurrentService = (serviceId) => {
  let [data] = getData.services.filter((service) => service.id === serviceId);
  return data;
};
export const getProjectsByService = (serviceId) => {
  return getData.projects.filter((project) =>
    project.services.includes(serviceId)
  );
};
// //Needs to be deconstructed
export const getCurrentProject = (projectId) => {
  let [data] = getData.projects.filter((project) => project.id === projectId);
  return data;
};

export const getNextProject = async () => {
  const path = require("path");
  const pageName = path.dirname(__filename).split(path.sep).pop();

  let projects = await getAllProjects();
  let currentId = projects.findIndex((obj) => obj.id === pageName);

  currentId === projects.length - 1 ? (currentId = 0) : (currentId += 1);
  let project = projects[currentId];

  return project;
};

export const getProjectMeta = (slug) => {
  const [currentProject] = getData.projects.filter(
    (project) => project.id === slug
  );

  return {
    openGraph: {
      title: `Square43 Studio | ${currentProject.name}`,
      description: currentProject.slogan,
      images: [{ url: "/images/Projects.png" }],
      url: `https://square43.com/projects/${slug}`,
    },
    title: `Square43 Studio | ${currentProject.name}`,
    description: currentProject.slogan,
    metadataBase: new URL(`https://square43.com/projects/${slug}`),
  };
};
