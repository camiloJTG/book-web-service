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
  orm: {
    entities: process.env.ORM_ENTITIES,
    synchronize: process.env.ORM_SYNCHRONIZE,
  },
  cloudinary: {
    apiName: process.env.CLOUDINARY_API_NAME,
    apiKey: process.env.CLOUDINARY_API_KEY,
    apiSecret: process.env.CLOUDINARY_API_SECRET,
    mainFolder: process.env.CLOUDINARY_API_FOLDER_MAIN,
    booksFolder: process.env.CLOUDINARY_API_FOLDER_BOOKS,
  },
  jwt: {
    secret: process.env.JWT_SECRET,
    exp: process.env.JWT_EXP,
  },
};
