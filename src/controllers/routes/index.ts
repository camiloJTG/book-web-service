import { Application } from 'express';
import swaggerUI from 'swagger-ui-express';
import users from './user.routes';
import books from './book.routes';
import auth from './auth.routes';
import swagger from '../../utils/swagger';

const { serve, setup } = swaggerUI;

const routes = (app: Application) => {
  const prefix = '/api';
  app.use(`${prefix}/users`, users);
  app.use(`${prefix}/books`, books);
  app.use(`${prefix}/auth`, auth);
  app.use(`${prefix}/docs`, serve, setup(swagger));
};

export default routes;
