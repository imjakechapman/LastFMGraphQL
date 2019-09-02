import { gql } from "apollo-server";

const typeDefs = gql `
  # Root Query
  type Query {
    lastfm: LastFM
  }

  type LastFM {
    user(user: String!): User
    track(artist: String!, track: String!): TrackType
  }

  type User {
    info: UserInfo
    tracks: UserTracks
    top(period: String!, limit: Int, page: Int): UserTops
  }

  type TrackType {
    info: User
    similar(autocorrect: Boolean, limit: Int): [SimilarTrack]
  }

  type SimilarTrack {
    name: String!
    playcount: Int!
    mbid: String!
    url: String!
    duration: Int!
    artist: Artist
    images: [Image]
  }

  type UserInfo {
    playlists: Int!,
    playcount: Int!,
    gender: String!,
    name: String!,
    subscriber: Int!,
    url: String!,
    country: String!,
    images: [Image]!
    age: Int!,
    realname: String!
  }

  type UserTracks {
    recent(limit: Int, page: Int): [Track]
    loved(limit: Int, page: Int): [Track]
  }

  type UserTops {
    albums: [Album]
    artists: [Artist]
    tracks: [Track]
  }

  type Track {
    name: String!
    mbid: String!
    artist: Artist
    album: Album
    url: String!
    images: [Image]
    streamable: Boolean
    rank: String
    playcount: Int
  }

  type Album {
    name: String!
    mbid: String
    artist: Artist
    rank: String
    images: [Image]
    playcount: Int
    url: String
  }

  type Artist {
    name: String!
    mbid: String
    url: String!
    images: [Image]
    rank: String
    playcount: Int
  }

  type Image {
    size: String!
    url: String!
  }
`;

export { typeDefs };