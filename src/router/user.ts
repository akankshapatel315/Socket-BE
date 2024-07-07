import express from 'express';
const userController = require("../controller/user")

const router = express.Router();

router.post('/signup', userController.signup);
router.post('/login', userController.login);
router.get('/userlist', userController.getAllUsers);


// router.get('/signup', ((req:any,res:any)=> res.send("Hello")));


export default router;
