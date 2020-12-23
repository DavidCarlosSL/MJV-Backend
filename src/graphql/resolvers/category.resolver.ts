import { inject, injectable } from 'inversify';
import { Query, Resolver, UseMiddleware } from "type-graphql";

import CategoryService from '../../services/category.service';

import { CategorySchema } from '../schemas/category.schema';

import { isAuth } from '../../middlewares/isAuth';

@injectable()
@Resolver(of => CategorySchema)
class CategoryResolver {
    
    constructor(@inject("CategoryService") private categoryService: CategoryService) {}

    @UseMiddleware(isAuth)
    @Query(returns => [CategorySchema], {name: "categories", nullable: true})
    private async getAllCategories(): Promise<CategorySchema[]>{
        try{
            return await this.categoryService.getCategories();
        }catch(error){
            return error;
        }
    }
}

export default CategoryResolver;