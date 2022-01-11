# book-web-service

## What is this ?

Web service of the "books" project that is in charge of business validations and database access.

The project consists in the creation of a website where users can register their favorite books and manage them.

The web service is built inside NodeJS together with a connection to a Mysql database and an image storage in the Cloudinary service.

## Development information

### Scripts

```
- dev = run server in local.
- build = generate dist folder with older js syntax.
- start = run the service in production.
```

'In case of testing on window systems, the start script must be prefixed with the SET value. Example: SET NODE_ENV={VALUE}'

### Environment Variable

The .env.example file contains the model of the environment variables used in this project.

## API documentation

The documentation can be found by clicking on the swagger link. In addition, inside the docs folder are the endpoints used in development.

```
 swagger: https://jtg-books-web-service.herokuapp.com/api/docs
 postman: docs/postman/
```

## URL api server

```
https://jtg-books-web-service.herokuapp.com/api
```

## Tools implements

```
- NodeJS
- Express
- Typescript
- Cloudinary
- Swagger
- Mysql
```
