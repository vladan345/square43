import projectData from "../constants/projectData.json";

export const getData = projectData;

export const getAllServices = () => {
  return getData.services;
};

// export const getAllProjects = () => {
//   return getData.projects;
// };

// //Needs to be deconstructed
// export const getCurrentService = () => {
//   return getData.services.filter(
//     (service) => service.id === useParams().serviceName
//   );
// };
export const getProjectsByService = (serviceId) => {
  return getData.projects.filter((project) =>
    project.services.includes(serviceId)
  );
};
// //Needs to be deconstructed
export const getCurrentProject = (projectId) => {
  return getData.projects.filter((project) => project.id === projectId);
};
