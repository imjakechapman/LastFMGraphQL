import { UserInputError } from "apollo-server";
import { IResolvers } from "graphql-tools";
import merge from "lodash.merge";

// LastFM Resource Resolvers
import { AlbumsResolvers } from "./album";
import { ArtistResolver } from "./artist";
import { TrackResolver } from "./track";
import { UserResolvers } from "./user";

const LastFMRootResolver: IResolvers = {
  LastFM: {
    users: (_root, { user }) => {
      return { user };
    },
    albums: (_root, { artist, album, mbid }) => {
      if (mbid) {
        return { options: { mbid } };
      } else {
        if (!artist || !album) {
          throw new UserInputError(
            "Must provide artist and album if mbid is not supplied"
          );
        } else {
          return { options: { artist, album } };
        }
      }
    },
    artists: (_root, { mbid, artist }) => {
      if (mbid) {
        return { options: { mbid } };
      } else {
        if (!artist) {
          throw new UserInputError(
            "Must provide an artist if no mbid is supplied"
          );
        } else {
          return { options: { artist } };
        }
      }
    }
  }
};

const LastFMResolvers: IResolvers = merge(
  LastFMRootResolver,
  UserResolvers,
  AlbumsResolvers,
  ArtistResolver,
  TrackResolver
);

export { LastFMResolvers };
