import { Column, Entity, PrimaryColumn } from "typeorm";

export interface ICategory {
    id_category: number;
    name_category: string;
}

@Entity({name: 'category'})
export class Category {
    @PrimaryColumn({
        type: 'int', 
        primary: true,
        generated: 'increment',
        name: 'id_category'
    })
    id_category: number;

    @Column({
        type: 'varchar',
        length: 60,
        nullable: false,
        unique: true,
        name: 'name_category'
    })
    name_category: string;
}