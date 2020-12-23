import { Field, ID, ObjectType } from "type-graphql";

import { ICategory } from "../../models/category.model";

@ObjectType()
export class CategorySchema implements ICategory {
    @Field(type => ID)
    id_category: number;

    @Field()
    name_category: string;
}