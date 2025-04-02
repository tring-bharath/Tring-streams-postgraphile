import { AppDataSource } from "../../data-source";
import { User } from "../../db/entities/User";
const bcrypt =require('bcrypt');
import jwt from "jsonwebtoken";
import 'dotenv/config';
export const loginService=async (args:any)=>
  {
  const key=process.env.SECRET_KEY;
    const userRepo=AppDataSource.getRepository(User)
    const { email, password } = args;   
    const user = await userRepo.findOne({ where: { email } });

    if (!user) {
      throw new Error ("User not found");
    }
    
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      throw new Error("Invalid password");
    }

    const token = jwt.sign({ userId: user.id },key!, {expiresIn: "24h"});

    return token;
}
