import express from 'express';
import AccountController from '../controllers/account.controller';
import { performEventActionRequest } from '../middlewares/requests';

const router = express.Router();

/* Ping API */
router.get('/', function(req, res) {
  res.json({ok: true});
});

router.get('/balance', AccountController.getBalance);
router.post('/event', performEventActionRequest, AccountController.performEventAction);


export default router;
