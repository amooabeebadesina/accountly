import express from 'express';
const router = express.Router();

/* Ping API */
router.get('/', function(req, res) {
  res.json({ok: true});
});


export default router;
