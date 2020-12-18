import "reflect-metadata";
import { ApolloServer } from 'apollo-server';
import { dbConnFactory } from './database/db';

const server = new ApolloServer({
    context: ({req}) => {
        const context = {
            req,
            token: req.headers.authorization
        }
        return context
    }
});

dbConnFactory().then(() => {
    console.log("Success Database Connection");
    server.listen(3000).then(({ url }) => {
        console.log(`Server ready at ${url}`);
    })
}).catch((err) => {
    console.log({message: 'Problems to connect the Database', error: err})
});