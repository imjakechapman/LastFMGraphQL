import { IResolvers } from "graphql-tools";

const UserResolvers: IResolvers = {
  User: {
    info: async ({ user }, _args, { dataSources:{ LastFM }}) => {
      const data = await LastFM.call({ resource: "user", method: "getInfo", user });
      return data.user;
    },
    tracks: ({ user }, { limit, page }) => ({ user, limit, page }),
    top: ({ user }, { period, limit, page }) => ({ user, period, limit, page}),
  },
  UserInfo: {
    images({ image }) {
      return image;
    }
  },
  UserTops: {
    albums: async ({ user, period, limit, page }, _args, { dataSources:{ LastFM }}) => {
      const { topalbums: { album }} = await LastFM.call({ resource: "user", method: "getTopAlbums", user, period, limit, page });
      return album;
    },
    artists: async ({ user, period, limit, page }, _args, { dataSources:{ LastFM }}) => {
      const { topartists: { artist }} = await LastFM.call({ resource: "user", method: "getTopArtists", user, period, limit, page });
      return artist;
    },
    tracks: async ({ user, period, limit, page }, _args, { dataSources:{ LastFM }}) => {
      let { toptracks: { track }} = await LastFM.call({ resource: "user", method: "getTopTracks", user, period, limit, page });
      return track;
    },
  },
  UserTracks: {
    recent: async ({ user }, { limit, page }, { dataSources:{ LastFM }}) => {
      const { recenttracks: { track }} = await LastFM.call({ resource: "user", method: "getRecentTracks", user, limit, page });
      return track;
    },
    loved: async ({ user }, { limit, page }, { dataSources:{ LastFM }}) => {
      const { lovedtracks: { track }} = await LastFM.call({ resource: "user", method: "getLovedTracks", user, limit, page });
      return track;
    },
  },
};

export { UserResolvers };