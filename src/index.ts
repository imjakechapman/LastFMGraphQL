import { ApolloServer } from "apollo-server";
import * as dotenv from "dotenv";

// Process env
dotenv.config();

// Apollo-Server Schema
import { Schema } from "./schema";

// GraphQL Server
const server = new ApolloServer(Schema);
server.listen(process.env.port || 8080).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
