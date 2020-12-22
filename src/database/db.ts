import { ConnectionOptions, createConnection } from 'typeorm';
import { Category } from '../models/category.model';
import { Product } from '../models/product.model';
import { User } from '../models/user.model';

const connParams: ConnectionOptions = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'mjv',
    name: 'mjv',
    entities: [
        User,
        Category,
        Product,
    ],
    synchronize: false,
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