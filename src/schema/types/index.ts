import { gql } from "apollo-server";

// TypeDefs
import { SharedSchemaDefs } from "./shared";
import { LastFMSchemaDefs } from "./lastfm";

const RootDefs = gql`
  type Query {
    _empty: String
  }
`;

const typeDefs = [
  RootDefs,
  ...SharedSchemaDefs,
  ...LastFMSchemaDefs
];

export { typeDefs };