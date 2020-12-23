import { injectable } from "inversify";
import { Connection, getConnection, Repository } from "typeorm";

import { Category } from "../models/category.model";

@injectable()
class CategoryService {
    private connection: Connection;
    private categoryRepository: Repository<Category>

    constructor() {
        this.connection = getConnection('default');
        this.categoryRepository = this.connection.getRepository(Category);
    }

    public async getCategories(){
        const categories = await this.categoryRepository.createQueryBuilder().orderBy("name_category", "ASC").getMany();

        return categories;
    }
}

export default CategoryService