import { Connection } from "typeorm";

import { populateUser } from "./user.populate";
import { populateCategory } from "./category.populate";
import { populateProduct } from './product.populate';

import { User } from "../../models/user.model";
import { Category } from "../../models/category.model";
import { Product } from "../../models/product.model";

export default async function populateDatabase(connection: Connection){
    
    const userRepository = connection.getRepository(User);
    const categoryRepository = connection.getRepository(Category);
    const productRepository = connection.getRepository(Product);

    await populateUser(userRepository)
    await populateCategory(categoryRepository);
    await populateProduct(productRepository);
}