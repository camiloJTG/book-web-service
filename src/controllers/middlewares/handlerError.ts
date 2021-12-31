import { Request, Response, NextFunction } from 'express';
import { response5xx, response4xx } from '../../utils/responses';
import config from '../../configs/config';

const { server } = config;
const { dev } = server;

export const handlerError = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (dev) return response5xx(res, err, 500);
  return response5xx(res, err.message, 500);
};
