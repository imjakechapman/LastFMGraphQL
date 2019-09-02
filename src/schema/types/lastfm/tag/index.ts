import { gql } from "apollo-server";

const TagDefs = gql`
  type Tag {
    name: String!
  }
`;

export { TagDefs };