import { createConnection, Connection } from 'typeorm';

import config from './config';

const { db } = config;
const { database, host, password, port, username } = db;
const connection = async () =>
  await createConnection({
    type: 'mysql',
    host,
    port: parseInt(port!),
    username,
    password,
    database,
  });

(async () => {
  try {
    const result: Connection = await connection();
    if (result.isConnected) {
      console.log('Database is connected');
    }
  } catch (e: any) {
    console.error(
      `Could not establish a connection to the database: ${e.message}`
    );
  }
})();
