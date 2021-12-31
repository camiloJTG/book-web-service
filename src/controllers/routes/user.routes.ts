import { Router } from 'express';
import * as userSvc from '../../services/user.service';
import { response2xx, response4xx } from '../../utils/responses';

const router = Router();

router.post('/', async (req, res, next) => {
  try {
    const result = await userSvc.createUser(req.body);
    typeof result === 'string'
      ? response4xx(res, result, 400)
      : response2xx(res, result, 201);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const result = await userSvc.getOneUser(req.params.id);
    typeof result === 'string'
      ? response4xx(res, result, 404)
      : response2xx(res, result, 200);
  } catch (error) {
    next(error);
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    const result = await userSvc.updateUser(req.params.id, req.body);
    typeof result === 'string'
      ? response4xx(res, result, 400)
      : response2xx(res, result, 200);
  } catch (error) {
    next(error);
  }
});

export default router;
