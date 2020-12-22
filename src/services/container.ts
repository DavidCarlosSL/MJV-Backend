import { Container } from 'inversify';

import UserService from './user.service';

import UserResolver from '../graphql/resolvers/user.resolver';

const container = new Container();

container.bind<UserService>("UserService").to(UserService);
container.bind<UserResolver>(UserResolver).toSelf();

export default container;