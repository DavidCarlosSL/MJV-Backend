import { Field, ID, ObjectType } from "type-graphql";

import { IProduct } from "../../models/product.model";

import { CategorySchema } from "./category.schema";

@ObjectType()
export class ProductSchema implements IProduct {
    @Field(type => ID)
    id_product: number;

    @Field()
    name_product: string;

    @Field()
    price_product: number;

    @Field()
    image_product: string;

    @Field()
    createdAt: Date;
    
    @Field()
    updatedAt: Date;

    @Field(type => [CategorySchema], {nullable: true})
    categories?: CategorySchema[];
}