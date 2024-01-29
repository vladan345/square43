import { createClient } from "@sanity/client/stega";

const client = createClient({
  projectId: "twwfkpqa",
  dataset: "production",
  useCdn: false,
  apiVersion: "2024-01-16",
});

export default client;
