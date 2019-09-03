import { IResolvers } from "graphql-tools";

const ArtistResolver: IResolvers = {
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