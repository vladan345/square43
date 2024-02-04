import client from "@/app/sanityClient";

export async function getAllServices() {
  const query = `
    *[_type == "service"] {
      _id,
      name,
      slug,
      features,
    }
  `;
  try {
    const serviceData = await client.fetch(query);
    return serviceData;
  } catch (error) {
    console.error("Error fetching projects data:", error.message);
    return null;
  }
}

export async function getAllProjects() {
  const query = `
    *[_type == "project"] {
      _id,
      title,
      slug,
      slogan,
      heroImage,
      heroVideo,
      services[]-> {
        _id,
        name,
      },
    }
  `;
  try {
    const projectsData = await client.fetch(query);
    return projectsData;
  } catch (error) {
    console.error("Error fetching projects data:", error.message);
    return null;
  }
}

//Needs to be deconstructed
export async function getCurrentService(serviceId) {
  const query = `
    *[_type == "service" && slug.current == $slug][0] {
      _id,
      name,
      slug,
      description,
      projects[]-> {
        _id,
        title,
        slug,
        heroImage
      }
    }
  `;
  const params = { slug: serviceId };

  try {
    const serviceData = await client.fetch(query, params);
    return serviceData;
  } catch (error) {
    console.error("Error fetching projects data:", error.message);
    return null;
  }
}

// //Needs to be deconstructed
export async function getCurrentProject(projectId) {
  const query = `
    *[_type == "project" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      slogan,
      heroImage,
      heroVideo,
      heroArrow,
      missionShort,
      missionLong,
      solutionShort,
      solutionLong,
      resultShort,
      resultLong,
      liveProject,
      services[]-> {
        _id,
        name,
        slug
      },
    }
  `;
  const params = { slug: projectId };

  try {
    const projectData = await client.fetch(query, params);
    return projectData;
  } catch (error) {
    console.error("Error fetching projects data:", error.message);
    return null;
  }
}

export const getNextProject = async () => {
  const path = require("path");
  const pageName = path.dirname(__filename).split(path.sep).pop();
  let projects = await getAllProjects();

  let currentId = projects.findIndex((obj) => obj.slug.current === pageName);

  currentId === projects.length - 1 ? (currentId = 0) : (currentId += 1);
  let project = projects[currentId];
  return project;
};

export const getProjectMeta = async (projectId) => {
  const query = `
  *[_type == "project" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    "metaTitle": seo.metaTitle,
    "metaDescription": seo.metaDescription,
    "pageTitle": seo.pageTitle,
    "metaLink": seo.metaLink,
    "metaImage": seo.metaImage
  }
`;
  const params = { slug: projectId };

  try {
    const projectData = await client.fetch(query, params);
    return {
      openGraph: {
        title: projectData.metaTitle,
        description: projectData.metaDescription,
        images: [{ url: projectData.metaImage }],
        url: `https://square43.com/projects/${projectId}`,
      },
      title: projectData.pageTitle,
      description: projectData.metaDescription,
      metadataBase: new URL(`https://square43.com/projects/${projectId}`),
    };
  } catch (error) {
    console.error("Error fetching projects data:", error.message);
    return null;
  }
};

export async function getLatestProjects() {
  const query = `
  *[_type == "lastest"] {
    _id,
    title,
    projects[]-> {
      _id,
      title,
      slogan,
      slug,
      heroVideo,
    },
  }
  `;

  try {
    const projectsData = await client.fetch(query);
    return projectsData;
  } catch (error) {
    console.error("Error fetching projects data:", error.message);
    return null;
  }
}
