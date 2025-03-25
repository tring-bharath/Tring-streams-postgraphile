import { loginService } from "../service/loginService";
import { registerService } from "../service/registerService";
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
