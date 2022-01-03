import jwt from 'jsonwebtoken';
import config from '../configs/config';
import { payload, tokenResponse } from '../interfaces/auth.interface';

const { exp, secret } = config.jwt;

export const createToken = (payload: payload): tokenResponse => {
  const timeExpire = exp;
  const token = jwt.sign(payload, secret, {
    expiresIn: timeExpire,
  });
  const tokenStructure: tokenResponse = {
    token,
    type: 'Bearer',
    exp: `${timeExpire} seconds`,
  };
  return tokenStructure;
};

export const verifyToken = (token: string) => {
  const isValid = jwt.verify(token, secret);
  return isValid;
};
