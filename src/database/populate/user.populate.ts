import { Repository } from "typeorm";
import * as momentTz from 'moment-timezone'
import * as md5 from 'md5';

import { IUser, User } from "../../models/user.model";

import { AuthPrivateKey } from '../../config/custom-environment-variables.json';

export async function populateUser(userRepository: Repository<User>) {
    const now = momentTz(new Date()).tz('America/Sao_Paulo').format('YYYY-MM-DD HH:mm:ss');

    const users: IUser[] = [
        {
            name_user: "David",
            email_user: "david@carlos.com",
            password_user: md5("david123" + AuthPrivateKey),
            createdAt: now,
            updatedAt: now
        },
        {
            name_user: "Teste",
            email_user: "teste@teste.com",
            password_user: md5("teste123" + AuthPrivateKey),
            createdAt: now,
            updatedAt: now
        }
    ]
    
    await userRepository.save(users);
}