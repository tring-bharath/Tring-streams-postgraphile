import jwt from "jsonwebtoken";
import 'dotenv/config';
export const additionalGraphQLContextFromRequest = async (req: any,res:any) => {
  const SECRET_KEY = process.env.SECRET_KEY;
  const operationName = req.body.operationName;
  if (operationName === "guest") {
    return {req,res};
  }
  else 
  {
    try {
      
      console.log(">>>>>>>>>>>>>>>>>",req?.cookies?.jwtToken);
      const decodedId = jwt.verify(req?.cookies?.jwtToken, SECRET_KEY!);
      
      return { user: decodedId,req,res };
    }
    catch (error) {
      throw new Error("Invalid user token");
    }
  }

};
