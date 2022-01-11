import { NextFunction, Request, Response } from 'express';
import joi from 'joi';

export const checkReq = (schema: any, check: string) => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (check === 'body') {
      const error = validate(req.body, schema);
      next(error);
    }
    if (check === 'params') {
      const error = validate(req.params, schema);
      next(error);
    }
  };
};

export const validate = (data: Request | unknown, schema: any) => {
  const { error } = joi.object(schema).validate(data);
  return error;
};
