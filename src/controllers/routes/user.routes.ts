import { Router } from 'express';

const router = Router();

router.get('/', (req, res, next) => {
  return res.json({
    status: '200',
  });
});

router.get('/test', (req, res, next) => {
  return res.json({
    status: '200',
  });
});

export default router;
