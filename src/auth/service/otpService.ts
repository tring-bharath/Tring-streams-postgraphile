import { AppDataSource } from "../../data-source";
import { OtpEntity } from "../../db/entities/otpEntity";
import { User } from "../../db/entities/User";
const nodemailer = require("nodemailer");

export const sendOtpService = async (email: string) => {
    const otpRepo = AppDataSource.getRepository(OtpEntity)
    const userRepo = AppDataSource.getRepository(User)
    const user = await userRepo.findOne({ where: { email } })
    if (!user) {
        throw new Error("user not Registered")
    }
    const otp = Math.floor(Math.random() * 10000);
    const newOtp =otpRepo.create({otp,email})
    otpRepo.save(newOtp);
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
          user: "bharath7010467677@gmail.com",
          pass: "mllk opdr jwfb mmko",
        },
      });
  
      const mailOptions = {
        from: "bharath7010467677@gmail.com",
        to: email,
        subject: "Tring-Streams - Forgot Password OTP",
        text: `Your OTP code is: ${otp}`,
        html: `
        <div style="font-family: Arial, sans-serif; text-align: center; padding: 20px; border: 1px solid #ddd; border-radius: 5px; max-width: 400px; margin: auto;">
          <h2 style="color: #4CAF50;">Your OTP Code</h2>
          <p style="font-size: 16px; color: #333;">Use the following OTP to reset your password</p>
          <h3 style="font-size: 24px; color: #000;">${otp}</h3>
        </div>
      `,
      };
    try{
        transporter.sendMail(mailOptions, (error:any, info:any) => {
            console.log(info);
            if (error) {
                throw new Error(error);
            } else {
              return "OTP sent successfully";
            }
          });
    }
    catch(err)
    {
        return err
    }
    return "otp sent"
}
export const checkOtpService = async (args: any) => {
    const otpRepo = AppDataSource.getRepository(OtpEntity);
    const { email, otp } = args;
    const userOtp = await otpRepo.findOne({ where: { email } });
    console.log(userOtp);
    console.log(userOtp?.otp == otp);
    if (userOtp?.otp == otp) {
        otpRepo.delete({email});
        return "OTP Verified";
    }
    else {
        return "Wrong OTP"
    }
}