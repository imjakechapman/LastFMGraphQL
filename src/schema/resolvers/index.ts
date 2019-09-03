import merge from "lodash.merge";
import { IResolvers } from "graphql-tools";

import { SharedResolvers } from "./shared";
import { LastFMResolvers } from "./lastfm";

const RootQueryResolver: IResolvers = {
  Query: {
    lastfm: () => ({})
  },
};

const resolvers: IResolvers = merge(
  RootQueryResolver,
  SharedResolvers,
  LastFMResolvers,
);

export { resolvers };