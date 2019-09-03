import { IResolvers } from "graphql-tools";

const ArtistResolver: IResolvers = {
  Artists: {
    info: async ({ options }, args, { dataSources: { LastFM } }) => {
      const data = await LastFM.call({ resource: "artist", method: "getInfo", ...options, ...args });
      return data.artist;
    },
    albums: async ({ options }, args, { dataSources: { LastFM } }) => {
      const { topalbums } = await LastFM.call({ resource: "artist", method: "getTopAlbums", ...options, ...args });
      return {
        meta: {
          page: topalbums["@attr"]["page"],
          perPage: topalbums["@attr"]["perPage"],
          totalPages: topalbums["@attr"]["totalPages"],
          total: topalbums["@attr"]["total"]
        },
        nodes: topalbums.album
      };
    },
    tags: async ({ options }, args, { dataSources: { LastFM } }) => {
      const { toptags } = await LastFM.call({ resource: "artist", method: "getTopTags", ...options, ...args });
      return toptags.tag;
    },
    tracks: async ({ options }, args, { dataSources: { LastFM } }) => {
      const { toptracks } = await LastFM.call({ resource: "artist", method: "getTopTracks", ...options, ...args });
      return {
        meta: {
          page: toptracks["@attr"]["page"],
          perPage: toptracks["@attr"]["perPage"],
          totalPages: toptracks["@attr"]["totalPages"],
          total: toptracks["@attr"]["total"]
        },
        nodes: toptracks.track
      };
    },
    similar: async ({ options }, args, { dataSources: { LastFM } }) => {
      const { similarartists } = await LastFM.call({ resource: "artist", method: "getSimilar", ...options, ...args });
      return similarartists.artist;
    }
  },
  ArtistInfo: {
    images: ({ image }) => image,
    tags: ({ tags }) => tags.tag,
    similar: ({ similar }) => similar.artist
  },
  Artist: {
    rank(obj) {
      return obj["@attr"]["rank"];
    },
    images({ image }) {
      return image;
    }
  }
};

export { ArtistResolver };
