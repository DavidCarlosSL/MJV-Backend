import { buildSchemaSync } from "type-graphql";

import container from "../services/container";

import { CategorySchema } from "./schemas/category.schema";
import { UserSchema } from "./schemas/user.schema";
import { ProductSchema } from "./schemas/product.schema";

import ProductResolver from "./resolvers/product.resolver";
import CategoryResolver from './resolvers/category.resolver';
import UserResolver from "./resolvers/user.resolver";

const schema = buildSchemaSync({
    resolvers: [UserSchema, UserResolver, CategorySchema, CategoryResolver, ProductSchema, ProductResolver],
    container: container
})

export default schema;