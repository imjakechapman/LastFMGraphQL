import { IResolvers } from "graphql-tools";
import merge from "lodash.merge";

import { LastFMResolvers } from "./lastfm";
import { SharedResolvers } from "./shared";

const RootQueryResolver: IResolvers = {
  Query: {
    lastfm: () => ({})
  }
};

const resolvers: IResolvers = merge(
  RootQueryResolver,
  SharedResolvers,
  LastFMResolvers
);

export { resolvers };
