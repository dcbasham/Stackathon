# Neo4j fundamentals:

[graphConcepts](https://neo4j.com/docs/getting-started/current/graphdb-concepts/#graphdb-concepts)
[graphacademy](https://graphacademy.neo4j.com/)

- A _node_ is a person, place or thing. It is an entity.
- A _relationship_ is the relationship that exists between 2+ entities. An "edge"

- graphs are structured where the relationships can have direction and weights
- represents a variety of measures (time, distance, cost)
- e.g. finding the shortest path from one point to another

### Cool Fact:

- Normally To find answers like what's the shortest path from A to B the graph would traverse all the connected node paths from A-to-B to find the shortest path. This impacts performance- even worse when using RDBMS like Sequelize with JOIN queries.
- **Cypher query language for neo4j is optimized so that _relationships_ are not traversed multiple times.**
- Graph gists are available for visualization for use cases or for industry specific needs.
- Graph stores or databases added to your project can provide real time recommendations (e-commerce).
  e.g. In e-commerce:
  -The Category Hierarchy

  - products in parent categories and subcategories are difficult to query in SQL or require the duplication of data.

- This can be represented in a couple lines of cypher. Much smaller portion of the graph needs to be traversed compared to tables by traversing product nodes and the relationship to the purchaser.

## Property graphs

- Social Graphs
- Labels
  A node can have many labels in Cypher.
  e.g. Michael could have labels: Person, Employee
  Graph Inc. could have labels: Company
  relationship: Michael works at Graph Inc. with directionality pointing toward Graph Inc.

- **Properties**: Key value pairs. Can be added to and removed from nodes.
- Relationships MUST have a direction and a type.
- Labels for nodes.
- Properties for nodes _and_ Relationships.
  - Values of keys can be singular or plural (a list)
  - Property keys must conform to Cypher type.
  - by default are null if no value provided.

## Native Graph Database

- Index free adjacency
- reference to nodes at start and end of relationship is stored
- it just chases pointers in memory.

### In an RDBMS table:

**Indexes**:

- Primary Key
- Foreign Key
- has to locate innermost clause, build and execute a query plan and repeat.
- Depending on how nested the query is, It will have to perform at least that many index lookups and reads from the DB that many times..

- Graphs are similar to a linked list. But it can start from the "anchor" specified (like node with id= 3) and it uses that index to retrieve the anchor node.
- Then it uses pointers to traverse the node objects that hold the relationships.

**Advantage of Neo4j: leads to fewer index lookups and tablescans, reduced duplication of data**

### Non Graph DBs to Graph

- Northwind ex.

  - An order can contain one or more products
  - A product can contain appear in one or more orders.
  - many - to - many relationship: requires the order_products join table.
  - The more orders added and the longer the join table becomes - more relationships => longer query time

  In a Graph

  - each order node can use a CONTAINS relationship to model the relationship from each Order Node to Product node

- NoSQL databases best for Graphs:
- key value stores and documents.
  Each key is related to a value and values can be interconnected
- Document data models (Tree) hierarchy

## Tools used:

- Neo4j AuraDB- a database instance stored in the cloud
  - StackOverflow relationships (Comment, Commented, User, Answer etc. ) Sort of difficult to
    figure out at first.
- Neo4j Desktop + Neo4j Browser
- **Neo4j Sandbox + Neo4j Browser (Most beginner friendly)**
  - Opened blank sandbox
    - **play: northwind graph**
    - Demonstrates how to migrate from RDBMS to Neo4j:
      - Relational Tables to Nodes
