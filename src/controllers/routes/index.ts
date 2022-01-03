import { Application } from 'express';

import users from './user.routes';
import books from './book.routes';

const routes = (app: Application) => {
  const prefix = '/api';
  app.use(`${prefix}/users`, users);
  app.use(`${prefix}/books`, books);
};

export default routes;
