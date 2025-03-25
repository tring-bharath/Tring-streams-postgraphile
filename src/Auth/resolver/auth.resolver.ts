import { loginService } from "../service/login.service";
import { registerService } from "../service/register.service";
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
