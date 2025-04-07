import { Query } from "type-graphql";
import { getUserService } from "../service/getUserService";
import { loginService } from "../service/loginService";
import { registerService } from "../service/registerService";
import { checkOtpService, sendOtpService } from "../service/otpService";
import { resetPasswordService } from "../service/resetPasswordService";
export const authResolver = {
  Query:
  {

    getUserData: async (_: any, args: any, context: any) => {
      return getUserService(context.user);
    }

  },

  Mutation: {

    login: async (_: any, args: any, context: any) => {
      const { res } = context;
      const result = await loginService(args);
      res.cookie("jwtToken", result, { maxAge: 3 * 24 * 60 * 60 * 1000 });
      return "login Successful";
    },

    register: async (_: any, args: any) => {
      return registerService(args);
    },

    logout: async (_: any, args: any, context: any) => {
      const { res } = context
      await res.clearCookie("jwtToken");
      return "logout successful"
    },

    sendOtp: async (_: any, args: any) => {
      return sendOtpService(args.email);
    },

    checkOtp: async (_: any, args: any) => {
      console.log(args);
      return checkOtpService(args);
    },

    resetPassword: async (_: any, args: any) => {
      return resetPasswordService(args);
    }

  }
};
