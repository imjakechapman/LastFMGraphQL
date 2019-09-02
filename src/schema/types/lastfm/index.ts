
// Type Defs
import { UserDefs } from "./user";
import { TrackDefs } from "./track";
import { TagDefs } from "./tag";
import { gql } from "apollo-server";

import { ArtistDefs } from "./artist";
import { AlbumDefs } from "./album";

const LastFMDefs = gql`
  extend type Query {
    lastfm: LastFM
  }

  "Last.fm api resources"
  type LastFM {
    user(
      "The user to fetch info for."
      user: String!
    ): User
    
    track(
      "The artist name"
      artist: String!

      "The track name"
      track: String!

    ): TrackType
  }
`;

const LastFMSchemaDefs = [LastFMDefs, UserDefs, ArtistDefs, AlbumDefs, TagDefs, TrackDefs];

export { LastFMSchemaDefs };