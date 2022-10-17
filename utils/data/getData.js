import projectData from "../constants/projectData.json";

export const getData = projectData;

export const getAllServices = () => {
  return getData.services;
};

export const getAllProjects = () => {
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
