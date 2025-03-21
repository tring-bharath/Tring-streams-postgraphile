const bcrypt=require('bcrypt');
import jwt from "jsonwebtoken";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/User";
import { loginService } from "../service/login.service";
import { registerService } from "../service/register.service";
const key = process.env.SECRET_KEY;
const userRepo=AppDataSource.getRepository(User) 
export const authResolver = {

  Mutation: {

    login: async (_:any,args:any) => {
        return loginService(args);
    },

    register:async(_:any,args:any)=>
    {
      return registerService(args);
    }
  }
};
