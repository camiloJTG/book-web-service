import swaggerDoc, { Options } from 'swagger-jsdoc';
import { join } from 'path';
import config from '../configs/config';

const { pathFile } = config.swagger;
const apis = join(__dirname, pathFile);

const opt: Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Books',
      version: '1.0.0',
      description: 'Services document for "Books" project',
    },
  },
  apis: [apis],
};

export default swaggerDoc(opt);
