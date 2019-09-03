import { gql } from "apollo-server";

const AlbumDefs = gql`
  extend type LastFM {
    albums(artist: String, album: String, mbid: String): Albums
  }

  type Albums {
    info(autocorrect: Int = 1): AlbumInfo
    tags: [AlbumTag]
    # search(limit: Int = 10, page: Int = 1): AlbumSearch
  }

  # type AlbumSearch {
  #   info: AlbumSearchInfo
  #   results: [AlbumSearchResult]
  # }

  # type AlbumSearchInfo {
  #   term: String!
  #   totalResults: String!
  #   page: String!
  #   itemsPerPage: String!
  # }

  # type AlbumSearchResult {
  #   name: String!
  #   artist: String!
  #   url: String!
  #   images: [Image]
  # }

  type AlbumInfo {
    name: String!
    artist: String!
    url: String!
    images: [Image]
    listeners: String!
    playcount: String!
    tracks: [AlbumTrack]
    tags: [Tag]
    wiki: AlbumWiki
  }

  type AlbumWiki {
    published: String!
    summary: String!
    content: String!
  }

  type AlbumTrack {
    name: String!
    url: String!
    duration: String!
    rank: String!
    arist: Artist!
  }

  type AlbumTag {
    name: String!
    count: Int!
    url: String!
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
`;

export { AlbumDefs };
