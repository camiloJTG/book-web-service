import { Application } from 'express';

import users from './user.routes';
import books from './book.routes';
import auth from './auth.routes';

const routes = (app: Application) => {
  const prefix = '/api';
  app.use(`${prefix}/users`, users);
  app.use(`${prefix}/books`, books);
  app.use(`${prefix}/auth`, auth);
};

export default routes;
