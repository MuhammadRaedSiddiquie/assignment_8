import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId: "ywuhed49",
  dataset: "production",
  apiVersion: "v2022-03-07",
  useCdn: false,
  token: 'skBIkM4Zv1QltY9DT8g4XSWJC9D7ETugzWp3jagzntUk3DwuY6nnnv4G85fIz8kxospkZaRmzHFC1mY0dwnSvIMRhLetvOVts1KQhaQHK7nXQhuK2OhGnG23mWRRWArLbsmCYnmBAlluQgnCetlPe5JwkOT9zkW1b132xasqfwO5pn45W0zO'
});


