import { NextFunction, Request, Response } from 'express';
import joi from 'joi';
import { deleteLocalFile } from '../../utils/files';

export const checkReq = (schema: any, check: string) => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (check === 'body') {
      const error = validate(req.body, schema);
      validateFile(req, error);
      next(error);
    }
    if (check === 'params') {
      const error = validate(req.params, schema);
      validateFile(req, error);
      next(error);
    }
  };
};

export const validate = (data: Request | unknown, schema: any) => {
  const { error } = joi.object(schema).validate(data);
  return error;
};

const validateFile = async (
  req: Request,
  checkStatus: joi.ValidationError | undefined
): Promise<void> => {
  if (typeof req.file !== 'undefined') {
    const { path } = req.file;
    if (checkStatus) await deleteLocalFile(path);
  }
};
