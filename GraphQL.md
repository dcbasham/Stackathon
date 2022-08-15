# GraphQL vs. REST APIs: Why use it?

- single request 1 api endpoint
  - cuts down on the useless information REST api's fetch, more targeted request/responses. To prevent overfetching and downloading of data. Also prevents underfetching and having to send multiple requests because 1 request = 1 response.
- sending a post request to the server, in the body you include the query of all the data you want
- returns a json object in response.data

[Tutorial:React+Apollo](https://www.howtographql.com/react-apollo/0-introduction/)
