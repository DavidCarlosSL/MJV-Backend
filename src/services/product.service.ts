import { injectable } from "inversify";
import { Connection, getConnection, Repository } from "typeorm";

import { Product } from "../models/product.model";

@injectable()
class ProductService {
    private connection: Connection;
    private productRepository: Repository<Product>

    constructor(){
        this.connection = getConnection("default");
        this.productRepository = this.connection.getRepository(Product);
    }

    public async getProducts(limit: number, offset: number): Promise<Product[]>{
        const products = this.productRepository.createQueryBuilder("product")
        .leftJoinAndSelect("product.categories", "category")
        .limit(limit)
        .offset(offset)
        .getMany();

        return products;
    }

    public async getProductsByCategory(categoryId: number, limit: number, offset: number): Promise<Product[]>{
        const products = this.productRepository.createQueryBuilder("product")
        .innerJoinAndSelect("product.categories", "category", "category.id_category = :categoryId", {categoryId})
        .limit(limit)
        .offset(offset)
        .getMany();

        return products;
    }

    public async getProductsByName(productName: string, limit: number, offset: number): Promise<Product[]>{
        const products = await this.productRepository.createQueryBuilder("product")
        .where("name_product LIKE :productName", {productName: `%${productName}%`})
        .leftJoinAndSelect("product.categories", "category")
        .limit(limit)
        .offset(offset)
        .getMany();

        return products;
    }
}

export default ProductService;