## Tutorial on [howtographQL](https://www.howtographql.com/graphql-js/2-a-simple-query/)

### Node tutorial on setting up the server.

#### Notes:

- parent keyword:
- important to note that every GraphQL resolver function actually receives four input arguments. As the remaining three are not needed in our scenario right now, we’re simply omitting them. Don’t worry, you’ll get to know them soon.
  [LinkToPage](https://www.howtographql.com/graphql-js/2-a-simple-query/)
  the argument of parent (or sometimes root) is the result of the previous resolver execution level. === Each nesting level
- . Each level of nesting (i.e. nested curly braces) corresponds to one resolver execution level. The query for
  _query_ _{_
  feed {
  id
  url
  description
  }
  _}_
  ** is 2 levels - every field inside the schema defn is backed by one resolver fn. whose responsibility is to return data from that field **
  On the first level, it invokes the feed resolver and returns the entire data stored in links. For the second 2. invokes resolvers of the Link type b/c of our schema it knows that a list feed return a list of Link elements
  So the incoming parent obj is the element inside of the links list.

### GraphQL resolves queries by invoking the resolver functions for the fields contained in the query.
