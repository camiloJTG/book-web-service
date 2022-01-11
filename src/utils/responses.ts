import { Response, Request } from 'express';
import { deleteLocalFile } from './files';

export const response2xx = (
  res: Response,
  message: String | Document | {},
  status: number
) => {
  return res.status(status).json({
    error: false,
    statusCode: status,
    message: message,
  });
};

export const response4xx = (
  req: Request,
  res: Response,
  message: Error | string,
  status: number
) => {
  if (req.file) deleteLocalFile(req.file.path);
  return res.status(status).json({
    error: true,
    statusCode: status,
    message: message,
  });
};

export const response5xx = (
  req: Request,
  res: Response,
  message: Error | String,
  status: number
) => {
  if (req.file) deleteLocalFile(req.file.path);
  return res.status(status).json({
    error: true,
    statusCode: status,
    message: message,
  });
};
