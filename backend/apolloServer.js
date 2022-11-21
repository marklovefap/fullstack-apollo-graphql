const { ApolloServer } = require('apollo-server-express');
const { ApolloServerPluginDrainHttpServer } = require('apollo-server-core');
const express = require('express');
const http = require('http');
const mongoose = require('mongoose');
const typeDefs = require('./gql/typeDefs');
const resolvers = require('./gql/resolvers');

async function startApolloServer(typeDefs, resolvers) {
  const app = express();

  const httpServer = http.createServer(app);

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });

  await server.start();

  server.applyMiddleware({ app });

  await new Promise(resolve => httpServer.listen({ port: 4001 }, resolve));

  await mongoose.connect('mongodb://127.0.0.1:27017/test', () => {
      console.log('Database Connect')
  });


  console.log(`🚀 Server ready at http://localhost:4001${server.graphqlPath}`);
}

startApolloServer(typeDefs, resolvers);