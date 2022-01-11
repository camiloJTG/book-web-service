import { Request, Response, NextFunction } from 'express';
import { response4xx } from '../../utils/responses';
import { verifyToken } from '../../utils/jwt';

export const checkAuth = (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers['authorization'] || '';
    if (!token) return response4xx(req, res, 'Token not provided', 401);
    const data = token.split(' ');
    const verify = verifyToken(data[1]);
    !verify ? response4xx(req, res, 'Invalid token', 401) : next();
  } catch (error) {
    throw error;
  }
};
