import { Router } from 'express';
import { response2xx, response4xx } from '../../utils/responses';
import { checkReq } from '../middlewares/handlerValidation';
import * as authSvc from '../../services/user.service';
import * as authSch from '../schemas/auth.schema';

const router = Router();

router.post('/', checkReq(authSch.login, 'body'), async (req, res, next) => {
  try {
    const result = await authSvc.loginUser(req.body);
    typeof result === 'string'
      ? response4xx(req, res, result, 401)
      : response2xx(res, result, 200);
  } catch (error) {
    next(error);
  }
});

export default router;
