import { Query } from "type-graphql";
import { getUserService } from "../service/getUserService";
import { loginService } from "../service/loginService";
import { registerService } from "../service/registerService";
import { setCookie } from "../../db/setCookie";
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
      console.log("result >>>", result);

      setCookie(res, result)
      return "login Successful";
    },

    register: async (_: any, args: any) => {
      return registerService(args);
    },

    logout:async(_:any,args:any,context:any)=>{
      const {res}=context
      await res.clearCookie("jwtToken");
      return "logout successful"
  },

  }
};
