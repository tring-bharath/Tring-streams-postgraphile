import { AppDataSource } from "../../data-source"
import { User } from "../entities/User"
const bcrypt = require('bcrypt');

export const resetPasswordService = async (args: any) => {
    const userRepo = AppDataSource.getRepository(User);
    const { email, password } = args;
    const res = await userRepo.findOne({ where: { email } });
    if (!res) {
        throw new Error("Email is not Valid");
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    userRepo.update({ email }, { password: hashedPassword });
    return "Password Updated"
}