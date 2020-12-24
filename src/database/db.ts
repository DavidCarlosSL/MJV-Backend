import { ConnectionOptions, createConnection } from 'typeorm';
import { Category } from '../models/category.model';
import { Product } from '../models/product.model';
import { User } from '../models/user.model';

const connParams: ConnectionOptions = {
    type: 'mysql',
    host: process.env.DB_HOST,
    port: 3306,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    name: process.env.DB_DATABASE,
    entities: [
        User,
        Category,
        Product,
    ],
    synchronize: true,
    logging: true
};

export const dbConnFactory = () => {
    return createConnection({
        ...connParams,
        name: "default"
    }).catch((err) => {
        console.dir(err);
        console.dir(connParams);
        console.log(`DB conn err: ${err}`);
        throw err;
    });   
};