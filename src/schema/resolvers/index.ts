import { IResolvers } from "graphql-tools";
import { lastFM } from "../../services/lastfm";

const resolvers: IResolvers = {
  Query: {
    lastfm: () => ({})
  },
  LastFM: {
    user: (_: any, { user }: any) => {
      return { user };
    }
  },
  User: {
    info: async ({ user }: any) => {
      const data = await lastFM({ resource: "user", method: "getInfo", user });
      return data.user;
    },
    tracks: ({ user }: any, { limit, page }: any) => ({ user, limit, page }),
    top: ({ user }: any, { period, limit, page }) => ({ user, period, limit, page}),
  },
  UserInfo: {
    images({ image }) {
      return image;
    }
  },
  UserTops: {
    albums: async ({ user, period, limit, page }: any) => {
      const { topalbums: { album }} = await lastFM({ resource: "user", method: "getTopAlbums", user, period, limit, page });
      return album;
    },
    artists: async ({ user, period, limit, page }: any) => {
      const { topartists: { artist }} = await lastFM({ resource: "user", method: "getTopArtists", user, period, limit, page });
      return artist;
    },
    tracks: async ({ user, period, limit, page }: any) => {
      let { toptracks: { track }} = await lastFM({ resource: "user", method: "getTopTracks", user, period, limit, page });
      return track;
    },
  },
  UserTracks: {
    recent: async ({ user }: any, { limit, page }: any) => {
      const { recenttracks: { track }} = await lastFM({ resource: "user", method: "getRecentTracks", user, limit, page });
      return track;
    },
    loved: async ({ user }: any, { limit, page }: any) => {
      const { lovedtracks: { track }} = await lastFM({ resource: "user", method: "getLovedTracks", user, limit, page });
      return track;
    },
  },
  Album: {
    rank(obj) {
      return obj["@attr"]["rank"];
    },
    images({ image }) {
      return image;
    }
  },
  Artist: {
    rank(obj) {
      return obj["@attr"]["rank"];
    },
    images({ image }) {
      return image;
    }
  },
  Track: {
    images({ image }) {
      return image;
    }
  },
  Image: {
    url(obj) {
      return obj["#text"];
    }
  }
};

export { resolvers };