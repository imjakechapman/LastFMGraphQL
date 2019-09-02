import { gql } from "apollo-server";

const SharedDefs = gql`
  "Last.fm image resource"
  type Image {
    size: String!
    url: String!
  }
`;

const SharedSchemaDefs = [SharedDefs];

export { SharedSchemaDefs };