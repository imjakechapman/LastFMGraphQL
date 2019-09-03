import { IResolvers } from "graphql-tools";

const SharedResolvers: IResolvers = {
  Image: {
    url(obj) {
      return obj["#text"];
    }
  }
};

export { SharedResolvers };