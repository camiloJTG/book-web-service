import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { join } from 'path';
import routes from '../controllers/routes';
import * as handlerError from '../controllers/middlewares/handlerError';

const app = express();

app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(join(__dirname, 'public')));

routes(app);

app.use(handlerError.handlerError);

export default app;
