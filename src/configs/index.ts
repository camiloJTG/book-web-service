import app from './server';
import './database';
import config from './config';

const { server } = config;

const main = async () => {
  app.listen(server.port);
  console.log(`Server on port ${server.port}`);
};

main();
