import { AppDataSource } from "../../data-source";
import { User } from "../../db/entities/User";
const bcrypt =require('bcrypt');

export const registerService=async (args:any)=>
    {
        const userRepo=AppDataSource.getRepository(User)
        const { firstName,lastName,email, password } = args;   
        const user = await userRepo.findOne({ where: { email } });
        console.table(args);
        if (user) {
          return "Email already Exists";
        }
        const hashedPassword= await bcrypt.hash(password,10);
        const userDetails=userRepo.create({
            email,
            firstName,
            lastName,
            password:hashedPassword
        })

        userRepo.save(userDetails);

        return "User registered Successfully";
    }