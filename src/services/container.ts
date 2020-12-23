import { Container } from 'inversify';

import UserService from './user.service';
import CategoryService from './category.service';

import UserResolver from '../graphql/resolvers/user.resolver';
import CategoryResolver from '../graphql/resolvers/category.resolver';
import ProductService from './product.service';
import ProductResolver from '../graphql/resolvers/product.resolver';

const container = new Container();

container.bind<UserService>("UserService").to(UserService);
container.bind<UserResolver>(UserResolver).toSelf();

container.bind<CategoryService>("CategoryService").to(CategoryService);
container.bind<CategoryResolver>(CategoryResolver).toSelf();

container.bind<ProductService>("ProductService").to(ProductService);
container.bind<ProductResolver>(ProductResolver).toSelf();

export default container;