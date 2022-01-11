import { Request, Response, NextFunction } from 'express';
import { response4xx, response5xx } from '../../utils/responses';
import config from '../../configs/config';

const { server } = config;
const { dev } = server;

export const handlerError = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (dev) return checkError(err, req, res);
  return checkError(err.message, req, res);
};

const checkError = (msg: Error | string, req: Request, res: Response) => {
  if (typeof msg === 'string') {
    switch (msg) {
      case 'ValidationError':
        return response4xx(req, res, msg, 400);

      default:
        return response5xx(req, res, msg, 500);
    }
  }
  if (msg) {
    switch (msg.name) {
      case 'ValidationError':
        return response4xx(req, res, msg, 400);

      default:
        return response5xx(req, res, msg.message, 500);
    }
  }
  return response5xx(req, res, 'Internal server error', 500);
};
