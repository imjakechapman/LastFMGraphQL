
import { gql } from "apollo-server";

// Type Defs
import { AlbumDefs } from "./album";
import { ArtistDefs } from "./artist";
import { TagDefs } from "./tag";
import { TrackDefs } from "./track";
import { UserDefs } from "./user";

const LastFMDefs = gql`
  extend type Query {
    lastfm: LastFM
  }

  "Last.fm api resources"
  type LastFM {
    _empty: String
  }
`;

const LastFMSchemaDefs = [
  LastFMDefs,
  UserDefs,
  ArtistDefs,
  AlbumDefs,
  TagDefs,
  TrackDefs
];

export { LastFMSchemaDefs };
