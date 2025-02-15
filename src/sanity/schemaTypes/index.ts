import { type SchemaTypeDefinition } from 'sanity'
import blog from './blog'
import post from './post'
import author from './author'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blog,post,author],
}
