
## Stackathon Project Topic: SEO, Neo4j and GraphQL

https://www.youtube.com/watch?v=Mjol0OENpvY

### Further Development of GraphQL files
- [GraphQL with ApolloServer](./hackernews-tutorial/GraphQL.md)

#### UPDATE- 10/8/22:

- I've learned a little more about how Google works to come up with search results. For example, when you look up your own name you may notice some results are very old. By clicking on the three dots, like how it indexes pages with your name, the web crawlers (think robots) "crawl" pages searching for key words like your first and last name that appear together on another website. It is very difficult to have things removed from search results in the US unless there is some emergency reason like your bank account number, or home address being present, [more info on submitting removal requests](https://support.google.com/websearch/answer/9673730).



## SEO:

- Google is a common tool I use to find answers to questions i'm having as a developer and in general everyday life.
- It is often flooded with ads, arranged according to whether the search result was paid for or not, not automatically sorted or filtered besides keyword matching.
- the available filter located in tools on the main page needs to be set for every search.
- the programmable search engine offered by google still needs to be paid for to use on your site if you want to avoid ads.

## Goal:

- From a high level, I wanted to build something that would automatically filter search results to provide the most up to date and relevant information without ads.

### On SEO objective :

- Ran into blocks with SEO when trying to understand how one could use endpoints to query search results with Google because of things like web scraping and I didn't really have time to look into that further.
- "Web Scraping"
  - In your browser: google.com/robots.txt
  - This shows you what you can and can't "scrape" a.k.a. use as endpoints to target the information you want in another API.

#### [StackExchange](https://data.stackexchange.com/)

- StackExchange to query information for filtered results from stackoverflow.com [Stack Exchange Data Explorer](https://data.stackexchange.com/stackoverflow/queries) is a query composer for Stack Overflow and other Q & A sites.



### Neo4j :

- It uses a really cool query language called Cypher.
- Great Docs, tutorials, playground.
- the Visual representation of relationships is much easier to understand than a traditional SQL database with join tables and foreign keys.

  - #### Links:
    - [Getting Started](https://neo4j.com/docs/getting-started/4.4/)
    - [Graph databases for Beginners guide](https://neo4j.com/developer/graph-database/)

- I created an instance of a neo4j auraDB graph database and tried using neo4j Desktop and Browser, for their Movie and Actor guide.
  - [Cypher in Neo4j](https://neo4j.com/docs/getting-started/4.4/cypher-intro/patterns/#cypher-intro-patterns)

#### Other Links:

- [Why GraphQL](https://www.howtographql.com/basics/1-graphql-is-the-better-rest/)

