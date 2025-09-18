import { ApolloServer } from "@apollo/server";
import { User } from './user/index.js'


async function createApolloGraphqlServer() {
    // Create a Graphql Server
  const gqlServer = new ApolloServer({
    typeDefs: `
        type Query {
            hello: String
            ${User.queries}
        }
        type Mutation {
            ${User.mutations}
        }
    `,
    resolvers: {
        Query: {
            ...User.resolvers.queries,
        },

        Mutation: {
            ...User.resolvers.mutations,
        }
    },
  });

  await gqlServer.start();

  return gqlServer
}

export default createApolloGraphqlServer