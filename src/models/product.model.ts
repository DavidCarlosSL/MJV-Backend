import { Column, Entity, JoinTable, ManyToMany, PrimaryColumn } from "typeorm";

import { Category } from "./category.model";

export interface IProduct {
    id_product: number;
    name_product: string;
    price_product: number;
    image_product: string;
    createdAt: Date;
    updatedAt: Date;
}

@Entity({name: 'product'})
export class Product {
    @PrimaryColumn({
        type: 'int', 
        primary: true,
        generated: 'increment',
        name: 'id_product'
    })
    id_product: number;

    @Column({
        type: 'varchar',
        length: 120,
        nullable: false,
        name: 'name_product'
    })
    name_product: string;

    @Column({
        type: 'float',
        width: 6.2,
        nullable: false,
        default: 0,
        name: 'price_product'
    })
    price_product: number;

    @Column({
        type: 'varchar',
        length: 200,
        name: 'image_product'
    })
    image_product: string;

    @Column({
        type: 'datetime',
        nullable: false,
        name: "createdAt"
    })
    createdAt: Date;

    @Column({
        type: 'datetime',
        nullable: false,
        name: "updatedAt"
    })
    updatedAt: Date;

    @ManyToMany(() => Category)
    @JoinTable()
    categories: Category[];
}