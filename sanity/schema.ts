import { type SchemaTypeDefinition } from "sanity";
import foodReview from "./schemas/foodReview";

// const post = {
//   name: "post",
//   title: "Posts",
//   type: "document",
//   fields: [
//     {
//       name: "name",
//       title: "Name",
//       type: "string",
//     },
//   ],
// };

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [foodReview],
};
