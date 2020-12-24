import { Repository } from "typeorm";

import { ICategory, Category } from "../../models/Category.model";

export async function populateCategory(categoryRepository: Repository<Category>) {
    const categories: ICategory[] = [
        {name_category: 'Moda'},
        {name_category: 'Brinquedo'},
        {name_category: 'Beleza'},
        {name_category: 'Celular'},
        {name_category: 'Computador'},
        {name_category: 'Esporte'},
    ]
    
    await categoryRepository.save(categories)
}