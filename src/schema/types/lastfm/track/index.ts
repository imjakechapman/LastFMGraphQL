import { gql } from "apollo-server";

const TrackDefs = gql`
  extend type LastFM {
    track(
      "The artist name"
      artist: String!

      "The track name"
      track: String!
    ): TrackType
  }

  "Last.fm track resources"
  type TrackType {
    info: Track

    "Last.fm track's similar songs"
    similar(
      """
      Transform misspelled artist and track names into correct artist and track names, returning the correct version instead.
      The corrected artist and track name will be returned in the response.
      """
      autocorrect: Boolean

      "Maximum number of similar tracks to return"
      limit: Int
    ): [Track]
  }
  
  "Last.fm track resource - *May include rank and playcount if included as a 'top' request"
  type Track {
    name: String!
    mbid: String!
    url: String!
    artist: Artist
    album: Album
    duration: Int
    images: [Image]
    streamable: Boolean
    rank: String
    playcount: Int
  }
`;

export { TrackDefs };
