import { Field, ObjectType } from "type-graphql";

import { UserSchema } from "./user.schema";

@ObjectType()
export class AuthSchema {
    @Field({nullable: false})
    token: string;

    @Field({nullable: false})
    user: UserSchema
}