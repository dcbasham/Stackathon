const neo4j = require('neo4j-driver');
const { Neo4jGraphQL } = require('@neo4j/graphql');
const { gql, ApolloServer } = require('apollo-server');
require('dotenv').config({ path: './.env' });
