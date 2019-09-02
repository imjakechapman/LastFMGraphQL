import { gql } from "apollo-server";

const ArtistDefs = gql`
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