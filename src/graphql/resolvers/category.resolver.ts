import { inject, injectable } from 'inversify';
import { Query, Resolver } from "type-graphql";

import { CategorySchema } from '../schemas/category.schema';

import CategoryService from '../../services/category.service';

@injectable()
@Resolver(of => CategorySchema)
class CategoryResolver {
    
    constructor(@inject("CategoryService") private categoryService: CategoryService) {}

    @Query(returns => [CategorySchema], {nullable: true})
    private async getAllCategories(){
        try{
            return await this.categoryService.getCategories();
        }catch(error){
            return error;
        }
    }
}

export default CategoryResolver;