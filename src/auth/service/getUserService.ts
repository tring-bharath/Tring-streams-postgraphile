import { AppDataSource } from "../../data-source";
import { User } from "../../db/entities/User";

export const getUserService= async (args:any)=>
{
    const {userId}=args;
    const userRepo=AppDataSource.getRepository(User);
    const user=await userRepo.findOne({where:userId});
    console.log({...user});
    return {...user}
}