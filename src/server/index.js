import express from 'express';
import bodyParser from 'body-parser';
import {apolloExpress, graphiqlExpress} from 'apollo-server';
import {introspectionQuery} from 'graphql/utilities';
import {graphql}  from 'graphql';

import cors from 'cors';
import fs from 'fs';

import schema from './schema';
import connection from './connection';

const PORT = 8000;
const app = express();

// connect with mongo
connection.setup();

// Add headers
app.use(cors());
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
});

app.use('/graphql', bodyParser.json(), apolloExpress({
    schema,
    context: {
        // TODO anything to add ?
    },
    formatError(error) {
        console.error(error.stack);
        return error;
    },
}));

// serve development stuff only in development ;)
if (process.env.NODE_ENV == "development") {
    app.use(
        '/graphiql',
        graphiqlExpress({
            endpointURL: '/graphql',
        })
    );

    // generate a schema file for idea :) (just remove the old one and a new one will be generated)
    const schemaFile = 'graphql.schema.json';
    if (!fs.statSync(schemaFile).isFile()) {
        graphql(schema, introspectionQuery).then(result => {
            fs.writeFileSync(
                schemaFile,
                JSON.stringify(result, null, 2)
            );
        });
    }
}

app.listen(PORT, () => console.log(
    `GraphQL Server is now running on http://localhost:${PORT}/graphiql`
));

// close connections on exit
process.on('exit', () => {
    console.log('Shutting down!');
    connection.disconnection();
});
