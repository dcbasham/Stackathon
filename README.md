# Stackathon Project Topic: Search Engine Optimization for Users

https://www.youtube.com/watch?v=Mjol0OENpvY

## Problem:

- Google is a common tool I use to find answers to questions i'm having as a developer and in general everyday life.
- It is often flooded with ads, arranged according to whether the search result was paid for or not, not automatically sorted or filtered besides keyword matching.
- the available filter located in tools on the main page needs to be set for every search.
- the programmable search engine offered by google still needs to be paid for to use on your site if you want to avoid ads.

## Goal:

- From a high level, I wanted to build something that would automatically filter search results to provide the most up to date and relevant information without ads.

### Narrowing it down:

- A way to find answers more quickly and efficiently in stack overflow.
  ---> answer: use stackExchange to run queries [Link](https://data.stackexchange.com/stackoverflow/queries)
  ----> can't help with google because they don't allow webscraping for search. didn't really look into that further.

### Technologies explored:

- neo4j [Getting Started](https://neo4j.com/docs/getting-started/4.4/)
- [Graph databases for Beginners guide](https://neo4j.com/developer/graph-database/)
- Creating an instance of a neo4j auraDB graph database
- Using neo4j Desktop and Browser, Movie and Actor guide.

- graphQL
  - [Why](https://www.howtographql.com/basics/1-graphql-is-the-better-rest/)
  - [React+Apollo](./GraphQL.md)
  - [in Node: ApolloServer](./hackernews-tutorial/README.md)
- Cypher - graph query language
  - [Cypher in Neo4j](https://neo4j.com/docs/getting-started/4.4/cypher-intro/patterns/#cypher-intro-patterns)
- [See here for more links/info]('./GraphQL.md')
- Apollo Server/ Apollo Client
- **Other APIs**
  - StackExchange to query information for filtered results.
  - Stack Exchange Data Explorer- A query composer for Stack Overflow and other Q & A sites.
    - [StackExchange](https://data.stackexchange.com/)
- Web Scraping
  -> google.com/robots.txt
  - shows you what you can and can't scrape
  - crawling sites and indexing information- saving content
