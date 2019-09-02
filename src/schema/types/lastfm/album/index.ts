import { gql } from "apollo-server";

const AlbumDefs = gql`
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