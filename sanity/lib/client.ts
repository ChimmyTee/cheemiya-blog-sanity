import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn } from '../env'

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
})

/*

qroq usage:\

e.g: *[


]{}
 * -> everything from dataset
 [] -> filter down what we want to query for
 {} -> projection, define what to pull out

*/