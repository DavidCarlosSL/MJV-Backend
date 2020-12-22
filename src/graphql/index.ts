import { buildSchemaSync } from "type-graphql";

import container from "../services/container";
import UserResolver from "./resolvers/user.resolver";

import { UserSchema } from "./schemas/user.schema";

const schema = buildSchemaSync({
    resolvers: [UserSchema, UserResolver],
    container: container
})

export default schema;