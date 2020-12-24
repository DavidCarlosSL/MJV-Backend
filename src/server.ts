import "reflect-metadata";
import { ApolloServer } from 'apollo-server';
import { dbConnFactory } from './database/db';

import schema from "./graphql";

import populateDatabase from "./database/populate/index.populate";

const server = new ApolloServer({
    schema: schema,
    context: ({req}) => {
        const context = {
            req,
            token: req.headers.authorization || ""
        }
        return context
    }
});

dbConnFactory().then((connection) => {
    console.log("Success Database Connection");

    server.listen(process.env.PORT || 3000).then(({ url }) => {
        console.log(`Server ready at ${url}`);

        if(process.env.POPULATE == 'true')
            populateDatabase(connection)
    })
}).catch((err) => {
    console.log({message: 'Problems to connect the Database', error: err})
});