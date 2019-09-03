import { IResolvers } from "graphql-tools";

const TrackResolver: IResolvers = {
  Track: {
    images({ image }) {
      return image;
    }
  }
};

export { TrackResolver };