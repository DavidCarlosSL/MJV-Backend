import { ApolloError } from "apollo-server";
import { inject, injectable } from "inversify";
import { Arg, Query, Resolver, UseMiddleware } from "type-graphql";

import CategoryService from "../../services/category.service";
import ProductService from "../../services/product.service";

import { ProductSchema } from "../schemas/product.schema";

import { isAuth } from "../../middlewares/isAuth";

@injectable()
@Resolver(of => ProductSchema)
class ProductResolver {

    constructor(@inject("ProductService") private productService: ProductService, @inject("CategoryService") private categoryService: CategoryService){}

    @UseMiddleware(isAuth)
    @Query(returns => [ProductSchema], {name: "products", nullable: true})
    private async getProducts(
        @Arg('limit', {nullable: true, defaultValue: 20}) limit: number, 
        @Arg('offset', {nullable: true, defaultValue: 0}) offset: number
    ): Promise<ProductSchema[]>{
        try{
            const products = this.productService.getProducts(limit, offset)

            return products;
        }catch(error){
            return error;
        }
    }

    @UseMiddleware(isAuth)
    @Query(returns => [ProductSchema], {name: "productsByCategory", nullable: true})
    private async getProductsByCategory(
        @Arg('categoryId') categoryId: number, 
        @Arg('limit', {nullable: true, defaultValue: 20}) limit: number, 
        @Arg('offset', {nullable: true, defaultValue: 0}) offset: number
    ): Promise<ProductSchema[]>{
        try{
            const category = await this.categoryService.getCategoryById(categoryId)
            if(!category)
                throw new ApolloError("The given category wasn't found", "200", {validCategory: false})

            const products = this.productService.getProductsByCategory(categoryId, limit, offset)

            return products;
        }catch(error){
            return error;
        }
    }

    @UseMiddleware(isAuth)
    @Query(returns => [ProductSchema], {name: "productsByName", nullable: true})
    private async getProductsByName(
        @Arg('productName') productName: string, 
        @Arg('limit', {nullable: true, defaultValue: 20}) limit: number, 
        @Arg('offset', {nullable: true, defaultValue: 0}) offset: number
    ): Promise<ProductSchema[]>{
        try{
            const products = this.productService.getProductsByName(productName, limit, offset)

            return products;
        }catch(error){
            return error;
        }
    }
}

export default ProductResolver;