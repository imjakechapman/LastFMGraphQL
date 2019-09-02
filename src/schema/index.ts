import { typeDefs } from "./types";
import { resolvers } from "./resolvers";

// Datasources
import { LastFM } from "../datasources/lastfm";

const Schema = {
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      LastFM: new LastFM()
    };
  }
};

export { Schema }