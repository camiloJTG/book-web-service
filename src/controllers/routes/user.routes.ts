import { Router } from 'express';
import { response2xx, response4xx } from '../../utils/responses';
import { checkReq } from '../middlewares/handlerValidation';
import * as userSvc from '../../services/user.service';
import * as userSch from '../schemas/user.schema';
import { checkAuth } from '../middlewares/handlerAuth';

const router = Router();

router.post(
  '/',
  checkReq(userSch.createUserSch, 'body'),
  async (req, res, next) => {
    try {
      const result = await userSvc.createUser(req.body);
      typeof result === 'string'
        ? response4xx(req, res, result, 400)
        : response2xx(res, result, 201);
    } catch (error) {
      next(error);
    }
  }
);

router.get(
  '/:id',
  checkAuth,
  checkReq({ id: userSch.idSchema }, 'params'),
  async (req, res, next) => {
    try {
      const result = await userSvc.getOneUser(req.params.id);
      typeof result === 'string'
        ? response4xx(req, res, result, 404)
        : response2xx(res, result, 200);
    } catch (error) {
      next(error);
    }
  }
);

router.put(
  '/:id',
  checkAuth,
  checkReq({ id: userSch.idSchema }, 'params'),
  checkReq(userSch.updateUserSch, 'body'),
  async (req, res, next) => {
    try {
      const result = await userSvc.updateUser(req.params.id, req.body);
      typeof result === 'string'
        ? response4xx(req, res, result, 400)
        : response2xx(res, result, 200);
    } catch (error) {
      next(error);
    }
  }
);

export default router;
