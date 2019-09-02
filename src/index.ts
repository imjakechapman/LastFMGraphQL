import { ApolloServer } from "apollo-server";
import * as dotenv from "dotenv";

// Process env
dotenv.config();

// Apollo-Server Schema
import { schema } from "./schema";

// GraphQL Server
const server = new ApolloServer(schema);
server.listen(process.env.port || 8080).then(({ url }: any) => {
  console.log(`🚀 Server ready at ${url}`);
});
