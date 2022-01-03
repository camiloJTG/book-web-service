import { Router } from 'express';
import { response2xx, response4xx } from '../../utils/responses';
import { validateQuery } from '../../utils/beansUtils';
import { checkReq } from '../middlewares/handlerValidation';
import handlerFile from '../middlewares/handlerFile';
import * as bookSvc from '../../services/book.service';
import * as bookSch from '../schemas/book.schema';
import { checkAuth } from '../middlewares/handlerAuth';

const router = Router();

router.post(
  '/',
  handlerFile.single('image'),
  checkAuth,
  checkReq(bookSch.createBook, 'body'),
  async (req, res, next) => {
    try {
      if (!req.file) response4xx(res, 'The image field is required', 400);
      const result = await bookSvc.createBook(req.body, req.file!);
      typeof result === 'string'
        ? response4xx(res, result, 404)
        : response2xx(res, result, 201);
    } catch (error) {
      next(error);
    }
  }
);

router.put(
  '/:id',
  checkAuth,
  checkReq({ id: bookSch.reqParams.bookId }, 'params'),
  checkReq(bookSch.updateBook, 'body'),
  handlerFile.single('image'),
  async (req, res, next) => {
    try {
      const result = await bookSvc.updateBook(
        req.params.id,
        req.body,
        req.file!
      );
      typeof result === 'string'
        ? response4xx(res, result, 404)
        : response2xx(res, result, 201);
    } catch (error) {
      next(error);
    }
  }
);

router.get(
  '/:bookId/user/:userId',
  checkAuth,
  checkReq(bookSch.reqParams, 'params'),
  async (req, res, next) => {
    try {
      const { bookId, userId } = req.params;
      const result = await bookSvc.getOneBook(bookId, userId);
      typeof result === 'string'
        ? response4xx(res, result, 400)
        : response2xx(res, result, 200);
    } catch (error) {
      next(error);
    }
  }
);

router.get(
  '/user/:userId',
  checkAuth,
  checkReq({ userId: bookSch.reqParams.userId }, 'params'),
  async (req, res, next) => {
    try {
      const { userId } = req.params;
      const { cant, page } = validateQuery(req);
      const result = await bookSvc.getAllBooks(userId, cant, page);
      typeof result === 'string'
        ? response4xx(res, result, 400)
        : response2xx(res, result, 200);
    } catch (error) {
      next(error);
    }
  }
);

router.get(
  '/author-and-publisher/:userId',
  checkAuth,
  checkReq({ userId: bookSch.reqParams.userId }, 'params'),
  async (req, res, next) => {
    try {
      const { userId } = req.params;
      const result = await bookSvc.getPublisherAndAuthors(userId);
      typeof result === 'string'
        ? response4xx(res, result, 400)
        : response2xx(res, result, 200);
    } catch (error) {
      next(error);
    }
  }
);

router.get(
  '/search/:userId/value/:value',
  checkAuth,
  checkReq(bookSch.reqSearch, 'params'),
  async (req, res, next) => {
    try {
      const { userId, value } = req.params;
      const result = await bookSvc.searchByValue(userId, value);
      typeof result === 'string'
        ? response4xx(res, result, 400)
        : response2xx(res, result, 200);
    } catch (error) {
      next(error);
    }
  }
);

router.delete(
  '/:bookId/user/:userId',
  checkAuth,
  checkReq(bookSch.reqParams, 'params'),
  async (req, res, next) => {
    try {
      const { bookId, userId } = req.params;
      const result = await bookSvc.deleteBook(bookId, userId);
      typeof result === 'string'
        ? response4xx(res, result, 404)
        : response2xx(res, result, 200);
    } catch (error) {
      throw error;
    }
  }
);

export default router;
