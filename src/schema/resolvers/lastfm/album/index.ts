import { IResolvers } from "graphql-tools";

const AlbumResolvers: IResolvers = {
  Album: {
    rank(obj) {
      return obj["@attr"]["rank"];
    },
    images({ image }) {
      return image;
    }
  }
};

export { AlbumResolvers };