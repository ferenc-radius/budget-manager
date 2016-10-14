import express from 'express';
import graphqlHTTP from 'express-graphql';
import cors from 'cors';

import schema from './graphql';
let app = express();

// Add headers
app.use(cors());
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
});

// GraphqQL server route
app.use('/graphql', graphqlHTTP(req => ({
    schema,
    pretty: true,
    graphiql: true
})));

// start server
let server = app.listen(8000, () => {
    `GraphQL Server is now running on http://localhost:${server.address().port}/graphql`
});
