import { buildSchemaSync } from "type-graphql";

import container from "../services/container";
import UserResolver from "./resolvers/user.resolver";
import CategoryResolver from './resolvers/category.resolver';

import { CategorySchema } from "./schemas/category.schema";
import { UserSchema } from "./schemas/user.schema";

const schema = buildSchemaSync({
    resolvers: [UserSchema, UserResolver, CategorySchema, CategoryResolver],
    container: container
})

export default schema;