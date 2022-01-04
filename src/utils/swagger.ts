import swaggerDoc, { Options } from 'swagger-jsdoc';
import { join } from 'path';
import config from '../configs/config';
// import { servers } from '../interfaces/swagger.interface';

const { pathFile, urls } = config.swagger;
const apis = join(__dirname, pathFile);
/*const getServers = (servers: string): servers[] => {
  try {
    let newArray: servers[] = [];
    const result = servers.split(' ').map((x) => {
      newArray.push({ url: x });
    });
    return newArray;
  } catch (error) {
    throw `Error in swagger configuration. Error: ${error}`;
  }
};*/

const opt: Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Books',
      version: '1.0.0',
      description: 'Documentación de los servicios del proyecto "Books"',
    },
  },
  apis: [apis],
};

export default swaggerDoc(opt);
