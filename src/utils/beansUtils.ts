import { Request } from 'express';

export const validateQuery = (req: Request) => {
  let cant = 10;
  let page = 0;
  if (req.query) {
    const { take, skip } = req.query;
    if (typeof take === 'string') {
      cant = parseInt(take);
    }
    if (typeof skip === 'string') {
      page = parseInt(skip);
    }
  }
  return { cant, page };
};
