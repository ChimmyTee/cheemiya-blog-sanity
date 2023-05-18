import { type SchemaTypeDefinition } from 'sanity'
import pet from './schemas.ts/pet'

const post = {
  name: 'post',
  title: 'Posts',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    }
  ]
}

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post],
}

