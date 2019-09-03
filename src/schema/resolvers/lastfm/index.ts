import merge from "lodash.merge";
import { IResolvers } from "graphql-tools";

// LastFM Resource Resolvers
import { AlbumResolvers } from "./album";
import { ArtistResolver } from "./artist";
import { TrackResolver } from "./track";
import { UserResolvers } from "./user";

const LastFMRootResolver: IResolvers = {
  LastFM: {
    user: (_root, { user }) => {
      return { user };
    }
  },
};

const LastFMResolvers: IResolvers = merge(
  LastFMRootResolver,
  UserResolvers,
  AlbumResolvers,
  ArtistResolver,
  TrackResolver
);

export { LastFMResolvers };