import { Application } from 'express';

import users from './user.routes';

const routes = (app: Application) => {
  const prefix = '/api';
  app.use(`${prefix}/users`, users);
};

export default routes;
