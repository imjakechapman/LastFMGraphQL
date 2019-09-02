import { gql } from "apollo-server";

const typeDefs = gql `
  "Root Query"
  type Query {
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

  "Last.fm user resource"
  type User {
    info: UserInfo
    tracks: UserTracks

    "Last.fm user's top resources"
    top(
      """
      The time period over which to retrieve top albums for.
      Available options: overall | 7day | 1month | 3month | 6month | 12month
      """
      period: String!

      "The number of results to fetch per page. Defaults to 50."
      limit: Int

      "The page number to fetch. Defaults to first page."
      page: Int
    ): UserTops
  }

  "Last.fm track resources"
  type TrackType {
    info: User

    "Last.fm track's similar songs"
    similar(
      """
      Transform misspelled artist and track names into correct artist and track names, returning the correct version instead.
      The corrected artist and track name will be returned in the response.
      """
      autocorrect: Boolean

      "Maximum number of similar tracks to return"
      limit: Int
    ): [SimilarTrack]
  }

  "Last.fm similar track resource"
  type SimilarTrack {
    name: String!
    playcount: Int!
    mbid: String!
    url: String!
    duration: Int!
    artist: Artist
    images: [Image]
  }

  "Last.fm user info"
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

  "Last.fm user tracks resources"
  type UserTracks {
    "User's recent tracks"
    recent(
      "The number of results to fetch per page. Defaults to 50. Maximum is 200."
      limit: Int

      "The page number to fetch. Defaults to first page."
      page: Int

      """
      Beginning timestamp of a range
      only display scrobbles after this time, in UNIX timestamp format (integer number of seconds since 00:00:00, January 1st 1970 UTC).
      This must be in the UTC time zone.
      """
      from: String

      """
      End timestamp of a range
      only display scrobbles before this time, in UNIX timestamp format (integer number of seconds since 00:00:00, January 1st 1970 UTC).
      This must be in the UTC time zone.
      """
      to: String

      "Includes extended data in each artist, and whether or not the user has loved each track"
      extended: Boolean = 1
    ): [Track]

    "User's loved tracks"
    loved(
      "The number of results to fetch per page. Defaults to 50."
      limit: Int

      "The page number to fetch. Defaults to first page."
      page: Int
    ): [Track]
  }

  "Last.fm user tops resources"
  type UserTops {
    "User's top albums"
    albums: [Album]
    
    "User's top artists"
    artists: [Artist]

    "User's top tracks"
    tracks: [Track]
  }

  "Last.fm track resource - *May include rank and playcount if included as a 'top' request"
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

  "Last.fm album resource - *May include rank and playcount if included as a 'top' request"
  type Album {
    name: String!
    mbid: String
    artist: Artist
    url: String
    images: [Image]
    rank: String
    playcount: Int
  }

  "Last.fm artist resource - *May include rank and playcount if included as a 'top' request"
  type Artist {
    name: String!
    mbid: String
    url: String!
    images: [Image]
    rank: String
    playcount: Int
  }

  "Last.fm image resource"
  type Image {
    size: String!
    url: String!
  }
`;

export { typeDefs };