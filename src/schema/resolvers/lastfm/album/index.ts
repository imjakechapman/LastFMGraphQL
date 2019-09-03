import { IResolvers } from "graphql-tools";

const AlbumsResolvers: IResolvers = {
  Albums: {
    info: async ({ options }, { autocorrect }, { dataSources: { LastFM } }) => {
      const { album } = await LastFM.call({ resource: "album", method: "getInfo", ...options, autocorrect });
      return album;
    },
    tags: async ({ options }, args, { dataSources: { LastFM } }) => {
      const { toptags } = await LastFM.call({ resource: "album", method: "getTopTags", ...options });
      return toptags.tag;
    }
  },
  AlbumInfo: {
    images: ({ image }) => {
      return image;
    },
    tags: ({ tags }) => {
      return tags.tag;
    },
    tracks: ({ tracks }) => {
      return tracks.track;
    }
  },
  AlbumTrack: {
    rank: obj => {
      return obj["@attr"]["rank"];
    }
  },
  Album: {
    rank(obj) {
      return obj["@attr"]["rank"];
    },
    images({ image }) {
      return image;
    }
  }
};

export { AlbumsResolvers };
