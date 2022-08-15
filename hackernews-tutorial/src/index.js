const { ApolloServer } = require('apollo-server');
const fs = require('fs');
const path = require('path');

// dummy data
const links = [
  {
    id: '0',
    url: 'www.howtographql.com',
    description: 'fullstack tutorial',
  },
];

// 1
const resolvers = {
  Query: {
    info: () => `This is the API of a Hackernews Clone`,
    feed: () => links,
  },
  Mutation: {
    // 2
    post: (parent, args) => {
      let idCount = links.length;

      const link = {
        id: `link-${idCount++}`,
        description: args.description,
        url: args.url,
      };
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
/*  run node src/index.js -- runs on port 4000 by default
takes you to the GraphQL playground where you can test it
automatically when viewing the docs tab you can see the schema defn */

/* ``````````````schewma````````` */
//  GraphQL schema with Query type and with field info (of type String! (! means the field is required) and cannot be null)
/// [Link!]! returns a list and is required - guaranteed to never be null or contain any elements that are null !!
// mutation: post = post new links to the server.

// adding anoter root field to the Query type to  retrieve a list of link elements
// One convenient thing about the constructor of the GraphQLServer is that typeDefs can be provided either directly as a string (as you previously did) or by referencing a file that contains your schema definition (this is what you’re doing now).
/* `````````````see schema file ````````````` */
/* ------------------Resolvers---------- resolvers object is the actual implementation of the GraphQL schema. Note: its structure is identical to the structure of the type definition inside typeDefs: Query.info.a
- Calling this would look like : query { info } and would return the string below. */
//   Link: {
//     id: (parent) => parent.id,
//     description: (parent) => parent.description,
//     url: (parent) => parent.url,
//   }
// }
/* every GraphQL resolver function actually receives four input arguments. As the remaining three are not needed in our scenario right now, we’re simply omitting them. Don’t worry, you’ll get to know them soon.
  //The first argument, commonly called parent (or sometimes root) is the result of the previous resolver execution level. */
/* ++++++++++++server++++++++++++ */
