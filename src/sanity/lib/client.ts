<<<<<<< HEAD:src/sanity/lib/client.ts
import { createClient } from "next-sanity";
import { projectId, dataset, apiVersion } from "../env";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN, // Add token here
});
=======
import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})

export { projectId, dataset }
>>>>>>> 53e511dcf57095dfd307c9ea8251814e6e1d1979:sanity/lib/client.ts
