const express = require("express");
import userRouter from './user';

const app = () => {
  const router = express.Router();

  router.use('/user', userRouter);

  return router;
};

module.exports = app;
