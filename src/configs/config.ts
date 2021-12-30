export default {
  server: {
    port: process.env.PORT || 3000,
    dev: process.env.NODE_ENV !== 'production',
  },
  db: {
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  },
};
