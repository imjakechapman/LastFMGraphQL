import { gql } from "apollo-server";

const ArtistDefs = gql`
  extend type LastFM {
    artists(mbid: String, artist: String): Artists
  }

  "Last.fm artists resources"
  type Artists {
    info(
      "(Optional) Transform misspelled artist names into correct artist names, returning the correct version instead. The corrected artist name will be returned in the response."
      autocorrect: Int = 1

      "(Optional) Language to return bio in. expressed as an ISO 639 alpha-2 code"
      lang: String = "eng"

      "(Optional) The username for the context of the request. If supplied, the user's playcount for this artist is included in the response."
      username: String
    ): ArtistInfo

    albums(
      "(Optional) : The number of results to fetch per page. Defaults to 50."
      limit: Int = 50

      "(Optional) : The page number to fetch. Defaults to first page."
      page: Int = 1

      "(Optional) Transform misspelled artist names into correct artist names, returning the correct version instead. The corrected artist name will be returned in the response."
      autocorrect: Int = 1
    ): ArtistAlbums

    tracks(
      "(Optional) : The number of results to fetch per page. Defaults to 50."
      limit: Int = 50

      "(Optional) : The page number to fetch. Defaults to first page."
      page: Int = 1

      "(Optional) Transform misspelled artist names into correct artist names, returning the correct version instead. The corrected artist name will be returned in the response."
      autocorrect: Int = 1
    ): ArtistTracks

    tags(
      "(Optional) Transform misspelled artist names into correct artist names, returning the correct version instead. The corrected artist name will be returned in the response."
      autocorrect: Int = 1
    ): [Tag]

    similar(
      "(Optional) Limit the number of similar artists returned"
      limit: Int

      "(Optional) Transform misspelled artist names into correct artist names, returning the correct version instead. The corrected artist name will be returned in the response."
      autocorrect: Int = 1
    ): [Artist]
  }

  type ArtistAlbums {
    meta: PaginationInfo
    nodes: [Album]
  }

  type ArtistTracks {
    meta: PaginationInfo
    nodes: [Track]
  }

  type PaginationInfo {
    page: String!
    perPage: String!
    totalPages: String!
    total: String!
  }

  type ArtistInfo {
    name: String!
    mbid: String
    url: String!
    images: [Image]
    ontour: String!
    tags: [Tag]
    stats: ArtistStats!
    similar: [Artist]
  }

  type ArtistStats {
    listeners: String!
    playcount: String!
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
`;

export { ArtistDefs };
