import { IResolvers } from "graphql-tools";

const UserResolvers: IResolvers = {
  User: {
    info: async ({ user }, _args, { dataSources: { LastFM } }) => {
      const data = await LastFM.call({ resource: "user", method: "getInfo", user });
      return data.user;
    },
    charts: ({ user }) => ({ user }),
    tracks: ({ user }, { limit, page }) => ({ user, limit, page }),
    top: ({ user }, { period, limit, page }) => ({ user, period, limit, page}),
  },
  UserInfo: {
    images({ image }) {
      return image;
    }
  },
  UserCharts: {
    list: async ({ user }, _args, { dataSources: { LastFM } }) => {
      const { weeklychartlist: { chart }} = await LastFM.call({ resource: "user", "method": "getWeeklyChartList", user });
      return chart;
    },
    weeklyAlbums: async ({ user }, { from, to }, { dataSources: { LastFM } }) => {
      const { weeklyalbumchart: { album }} = await LastFM.call({ resource: "user", "method": "getWeeklyAlbumChart", user, from, to });
      return album;
    },
    weeklyArtists: async ({ user }, { from, to }, { dataSources: { LastFM } }) => {
      const { weeklyartistchart: { artist }} = await LastFM.call({ resource: "user", "method": "getWeeklyArtistChart", user, from, to });
      return artist;
    },
    weeklyTracks: async ({ user }, { from, to }, { dataSources: { LastFM } }) => {
      const { weeklytrackchart: { track }} = await LastFM.call({ resource: "user", "method": "getWeeklyTrackChart", user, from, to });
      return track;
    }
  },
  UserTops: {
    albums: async ({ user, period, limit, page }, _args, { dataSources: { LastFM } }) => {
      const { topalbums: { album }} = await LastFM.call({ resource: "user", method: "getTopAlbums", user, period, limit, page });
      return album;
    },
    artists: async ({ user, period, limit, page }, _args, { dataSources: { LastFM } }) => {
      const { topartists: { artist }} = await LastFM.call({ resource: "user", method: "getTopArtists", user, period, limit, page });
      return artist;
    },
    tracks: async ({ user, period, limit, page }, _args, { dataSources: { LastFM } }) => {
      let { toptracks: { track }} = await LastFM.call({ resource: "user", method: "getTopTracks", user, period, limit, page });
      return track;
    }
  },
  UserTracks: {
    loved: async ({ user }, { limit, page }, { dataSources: { LastFM } }) => {
      const { lovedtracks: { track }} = await LastFM.call({ resource: "user", method: "getLovedTracks", user, limit, page });
      return track;
    },
    recent: async ({ user }, { limit, page }, { dataSources: { LastFM } }) => {
      const { recenttracks: { track }} = await LastFM.call({ resource: "user", method: "getRecentTracks", user, limit, page });
      return track;
    }
  },
  UserWeeklyAlbum: {
    rank: obj => {
      return obj["@attr"]["rank"];
    }
  },
  UserWeeklyArtist: {
    name: obj => {
      if (obj["name"]) {
        return obj["name"];
      } else {
        return obj["#text"];
      }
    },
    rank: obj => {
      const rank = obj["@attr"]["rank"];
      if (rank) {
        return rank;
      }
    }
  },
  UserWeeklyTrack: {
    rank: obj => {
      return obj["@attr"]["rank"];
    }
  }
};

export { UserResolvers };
