const User = require("../model/user");
import { Request, Response } from "express";

const signup = async (req: Request, res: Response) => {
  try {
    const user =await  User.create({
      firstname: req.body.firstname,
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });
    res.status(201).json({ message: "User registered successfully", user });
  } catch (error) {
    console.log("error", error);
  }
};

const login = async (req: Request, res: Response) => {
  try {
    const user = await User.findOne({
      email: req.body.email,
      password: req.body.password,
    });
    if (!user) {
      return res.status(401).json({ error: "Invalid credentials" });
    }
    return res.status(200).json({ success: "Login Successful" ,user});
  } catch (error) {
    console.log("error", error);
  }
};

const getAllUsers = async (req:Request,res:Response)=>
{
try {
  const userList = await User.find();
  if(userList)
    {
      return res.status(200).json({userList:userList})
    }
    else
    {
      return res.status(200).json({userList:[]})

    }

} catch (error) {
  console.log('error', error)
}
}
module.exports = { signup, login,getAllUsers };
