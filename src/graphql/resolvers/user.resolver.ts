import { ApolloError } from 'apollo-server';
import { inject, injectable } from 'inversify';
import { Arg, Mutation, Query, Resolver } from "type-graphql";
import * as jwt from 'jsonwebtoken';
import * as md5 from 'md5';
import * as momentTz from 'moment-timezone';

import { AddUserInput, UserSchema } from '../schemas/user.schema';
import { AuthSchema } from '../schemas/auth.schema'; 

import UserService from '../../services/user.service';

import { JwtPrivateKey, AuthPrivateKey } from '../../config/custom-environment-variables.json'; 

@injectable()
@Resolver(of => UserSchema)
class UserResolver {
    
    constructor(@inject("UserService") private userService: UserService) {}

    @Query(returns => AuthSchema)

    @Mutation(returns => AuthSchema, {name: 'SignIn'})
    async getUserByEmailAndPassword(@Arg('email_user', {nullable: false}) email_user: string, @Arg('password_user', {nullable: false}) password_user: string): Promise<AuthSchema>{
        try{
            const userResponse = await this.userService.getUserByEmailAndPassword(email_user, md5(password_user + AuthPrivateKey));
            if(!userResponse)
                throw new ApolloError("Email and/or password is incorret", "200", {authenticated: false});
    
            const generatedToken = jwt.sign({userId: userResponse.id_user}, JwtPrivateKey, {expiresIn: 3600 * 24 * 30});
    
            return {
                token: generatedToken,
                user: {...userResponse}
            };
        }catch(error){
            return error;
        }
    }

    @Mutation(returns => UserSchema, {name: 'SignUp'})
    async addUser(@Arg('data', {nullable: false}) newUserData: AddUserInput): Promise<UserSchema> {
        try{
            const { name_user, email_user, password_user } = newUserData;

            let userResponse = await this.userService.getUserByEmail(email_user);
            if(userResponse)
                throw new ApolloError("This email is already being used", "200", {emailInUse: true});
            
            const now = momentTz(new Date()).tz('America/Sao_Paulo').format('YYYY-MM-DD HH:mm:ss');
            
            userResponse = await this.userService.addUser({
                name_user, 
                email_user, 
                password_user: md5(password_user + AuthPrivateKey), 
                createdAt: now, 
                updatedAt: now
            });
            
            return userResponse;
        }catch(error){
            return error;
        }
    }
}

export default UserResolver;