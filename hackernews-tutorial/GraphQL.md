## GraphQL's How-To with videos [howtographQL](https://www.howtographql.com/)

### Server-side:

[Node/GraphQL tutorial](https://www.howtographql.com/graphql-js/0-introduction)

### GraphQL vs. REST APIs: Why use it?

- By using 1 single API endpoint to get all the information you need, it minimizes the amount of data that needs to be transferred over the network and is more forgiving than loading data from multiple enpoints that return fixed data structures like in REST.
- This avoids overfetching and downloading of data. Also prevents underfetching and having to send multiple requests because in REST 1 request = 1 response.
- GraphQL is a _query language_ so you can use it much more flexibly with other API's than REST _architecture_.
- For all these benefits, you must send more information to the server regarding what you want from it.

### GraphQL resolves queries by invoking the resolver functions for the fields contained in the query.

- parent keyword:
- important to note that every GraphQL resolver function actually receives four input arguments. As the remaining three are not needed in our scenario right now, we’re simply omitting them. Don’t worry, you’ll get to know them soon.
  https://www.howtographql.com/graphql-js/2-a-simple-query/
  the argument of parent (or sometimes root) is the result of the previous resolver execution level. === Each nesting level
- Each level of nesting (i.e. nested curly braces) corresponds to one resolver execution level. This query is 2 levels: <br>
query _{_
feed _{_
id
url
description
_}_
_}_
Every field inside the schema defn is backed by one resolver fn. whose responsibility is to return data from that field.
<!-- On the first level, it invokes the feed resolver and returns the entire data stored in links. For the second 2. invokes resolvers of the Link type b/c of our schema it knows that a list feed return a list of Link elements
So the incoming parent obj is the element inside of the links list.-->

#### Prisma :

install Prisma CLI and Prisma Client
`npm install prisma --save-dev`
`npm install @prisma/client`

In project root:
`npx prisma init`
<br>
There should now be a prisma directory inside your project, with a file called schema.prisma.

<!--Remember the GraphQL schema that you’ve been working with until now? Well, Prisma has a schema, too! Inside the prisma directory that was created in the last step, you’ll see a file called schema.prisma. You can think of the schema.prisma file as a database schema. It has three components:

1. Data source: Specifies your database connection.
2. Generator: Indicates that you want to generate Prisma Client.
3. Data model: Defines your application models. Each model will be mapped to a table in the underlying database.-->

Let’s break down the three parts:

Data source: (Database Connection) Tells Prisma that SQLite will be used for our database connection.
Generator: Tells it we want to generate Prisma Client.
Data model: (Defines our application models, each model will be a table in the db)
Here we have the Link model.

### Iniitalizing Database SQLite with Prisma

SQLite does not have a separate server process. A complete SQL database with multiple tables, indices, triggers, and views, is contained in a single disk file. This makes it a perfect choice for projects like this.

The Link model we defined is the structure of our Link database table that Prisma will create with SQLite when running the following command:
`npx prisma migrate dev`

- There should now be a /migrations directory inside prisma dir that Prisma Migrate created.

We tell Prisma with our model:

> “I want to create a Link table to store data about links, and here’s what that data will look like. Prisma then generates the necessary migration and packages it into a dedicated directory with its own README.md file containing detailed information about the specific migration. This is then put inside that prisma/migrations directory, which becomes a historical reference of how your database evolves over time with each individual migration you make!

Next, we put the code into src/script.js [tutorial link](https://www.howtographql.com/graphql-js/4-adding-a-database/)

Query the database with the new code, run: `node src/script.js`

- Will return an empty array since the database is empty, lets fix that by creating a new link in the script.
<!--const newLink = await prisma.link.create({
    data: {
      description: 'Fullstack tutorial for GraphQL',
      url: 'www.howtographql.com',
    },
  })-->

### [FrontEnd:React+Apollo](https://www.howtographql.com/react-apollo/0-introduction/)
