import { AppDataSource } from "../../data-source";
import { User } from "../../entities/User";
const bcrypt =require('bcrypt');
import jwt from "jsonwebtoken";
const key=process.env.secret_key;
export const loginService=async (args:any)=>
{
    const userRepo=AppDataSource.getRepository(User)
    const { email, password } = args;   
    const user = await userRepo.findOne({ where: { email } });

    if (!user) {
      throw new Error("User not found");
    }
    console.log(key);
    
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      throw new Error("Invalid password");
    }

    const token = jwt.sign({ userId: user.id },"bharath@123", {
      expiresIn: "1d",
    });

    return {
      user,
      token,
    };
}
