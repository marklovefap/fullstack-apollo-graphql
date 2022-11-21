const {gql} = require('apollo-server-express');

const typeDefs = gql`

    type Register {
        id: ID!,
        username: String!,
        email: String!,
        birthday: String,
        password: String!,
        confirmPassword: String!
    }
    
    type Query {
        hello: String!,
        getallRe: [Register!]!
    },

    type Mutation {
        addRe(username: String!, email: String!, birthday: String, password: String!, confirmPassword: String!): Register
    }



`;

module.exports = typeDefs;