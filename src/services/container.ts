import { Container } from 'inversify';

import UserService from './user.service';
import CategoryService from './category.service';

import UserResolver from '../graphql/resolvers/user.resolver';
import CategoryResolver from '../graphql/resolvers/category.resolver';

const container = new Container();

container.bind<UserService>("UserService").to(UserService);
container.bind<UserResolver>(UserResolver).toSelf();

container.bind<CategoryService>("CategoryService").to(CategoryService);
container.bind<CategoryResolver>(CategoryResolver).toSelf();

export default container;