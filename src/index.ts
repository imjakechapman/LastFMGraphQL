import { ApolloServer, gql } from "apollo-server";

const port = 8080;

const books = [
  {
    author: "J.K. Rowling",
    title: "Harry Potter and the Chamber of Secrets",
  },
  {
    author: "Michael Crichton",
    title: "Jurassic Park",
  },
];

// Type definitions define the "shape" of your data and specify
// which ways the data can be fetched from the GraphQL server.
const typeDefs = gql`
  # Comments in GraphQL are defined with the hash (#) symbol.

  # This "Book" type can be used in other type declarations.
  type Book {
    title: String
    author: String
  }

  # The "Query" type is the root of all GraphQL queries.
  # (A "Mutation" type will be covered later on.)
  type Query {
    books: [Book]
  }
`;

// Resolvers define the technique for fetching the types in the
// schema.  We'll retrieve books from the "books" array above.
const resolvers = {
  Query: {
    books: () => books,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen(port).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
