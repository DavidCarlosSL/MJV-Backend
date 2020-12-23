import { MiddlewareFn } from "type-graphql";
import { AuthenticationError } from "apollo-server";
import { verify } from 'jsonwebtoken';

import {JwtPrivateKey} from '../config/custom-environment-variables.json';

interface TContext {
    token?: string;
}

export const isAuth: MiddlewareFn<TContext> = async({context}, next) => {
    const token = context.token || null;
    if(!token)
        throw new Error("Authorization token not provided.");
    try{
        const decodedToken: any = verify(token, JwtPrivateKey);
        context.token = decodedToken.userId;
        return next();
    }catch(err){
        throw new AuthenticationError("Invalid/Expired authorization token provided");
    }
}