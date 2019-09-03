import { gql } from "apollo-server";

// TypeDefs
import { LastFMSchemaDefs } from "./lastfm";
import { SharedSchemaDefs } from "./shared";

const RootDefs = gql`
  type Query {
    _empty: String
  }
`;

const typeDefs = [RootDefs, ...SharedSchemaDefs, ...LastFMSchemaDefs];

export { typeDefs };
