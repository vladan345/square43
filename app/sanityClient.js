import { createClient } from "@sanity/client/stega";

const client = createClient({
  projectId: "twwfkpqa",
  dataset: "production",
  useCdn: process.env.NODE_ENV === "production",
  apiVersion: "2024-01-16",
});

export default client;
