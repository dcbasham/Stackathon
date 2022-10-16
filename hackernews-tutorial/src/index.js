const { ApolloServer } = require('apollo-server');
const fs = require('fs');
const path = require('path');
//1 GraphQL schema - --> Moved to schema.graphql file
/* const typeDefs = `
 type Query {
 info: String!
 }`;
*/

// dummy data
const links = [
  {
    id: '0',
    url: 'www.howtographql.com',
    description: 'fullstack tutorial',
  },
];

// resolvers are defined for all fields of the Schema type
const resolvers = {
  Query: {
    // root fields' resolver functions
    info: () => `This is the API of a Hackernews Clone`,
    feed: () => links,
  },
  /* don't need these resolvers anymore because our Schema defn ...( feed : [Link!]! ) tells graphQL that feed returns a list of Link objects and Link is defined in the schema. It infers what they look like .
  //Link: {
  //   id: (parent) => parent.id,
  //   description: (parent) => parent.description,
  //   url: (parent) => parent.url,
  // },
  */
  Mutation: {
    // args carries the arguments for the operation (description, url) as defined in the Schema defn.
    post: (parent, args) => {
      //creates a new link object
      let idCount = links.length;

      const link = {
        // id: unique integer variable for each link element
        id: `link-${idCount++}`,
        description: args.description,
        url: args.url,
      };
      //adds the newly created link obj to the links list.
      links.push(link);

      return link;
    },
  },
};

/* the schema and resolvers are bundled and passed to ApolloServer.

This tells the server what API operations are accepted and how they should be resolved. */
const server = new ApolloServer({
  typeDefs: fs.readFileSync(path.join(__dirname, 'schema.graphql'), 'utf-8'),
  resolvers,
});

server.listen().then(({ url }) => console.log(`server is running on ${url}`));
