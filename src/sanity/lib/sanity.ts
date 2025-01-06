import { createClient } from "next-sanity";

export const sanityClient = createClient({
  projectId: "gmkpchzq", // Replace with your actual Sanity project ID
  dataset: "production", // Replace with your dataset name (usually "production")
  apiVersion: "2023-01-01", // Use the correct API version
  useCdn: false, // Set to false to fetch real-time data (no caching)
});

export default sanityClient;
