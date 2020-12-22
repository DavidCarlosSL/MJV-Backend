import { Column, Entity, PrimaryColumn } from "typeorm";

export interface IUser {
    id_user: number;
    name_user: string;
    email_user: string;
    password_user: string;
    createdAt: Date;
    updatedAt: Date;
}

@Entity({name: 'user'})
export class User {
    @PrimaryColumn({
        type: 'int', 
        primary: true,
        generated: 'increment',
        name: 'id_user'
    })
    id_user: number;

    @Column({
        type: 'varchar',
        length: 80,
        nullable: false,
        name: 'name_user'
    })
    name_user: string;

    @Column({
        type: 'varchar',
        length: 80,
        nullable: false,
        unique: true,
        name: 'email_user',
    })
    email_user: string;

    @Column({
        type: 'varchar',
        length: 32,
        nullable: false,
        name: 'password_user'
    })
    password_user: string;

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
}