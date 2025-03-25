import "reflect-metadata";
import express from "express";
import 'dotenv/config';
import { AppDataSource } from "./data-source";
import { authPlugin } from "./auth/plugin/authPlugin";
import  jwt  from "jsonwebtoken";
const {postgraphile} = require('postgraphile');
const app = express();
const cors=require('cors');
app.use(express.json());
app.use(cors());
  app.use(
    postgraphile("postgres://postgres:1234@localhost:5432/Tring_streams", 
      {
      watchPg: true, 
      graphiql: true,
      enhanceGraphiql: true,
      dynamicJson: true, 
      enableCors: true,
      appendPlugins: [authPlugin],
      additionalGraphQLContextFromRequest:async (req:any)=>
      {
        const auth=req.header.Authorization||null;
        const token=auth.split(" ")[1];
        if(auth)
        {
          throw new Error("UnAuthorized")
        }
        const decodedUser=jwt.verify(token,process.env.SECRET_KEY!);
        if(!decodedUser)
        {
          throw new Error("UnAuthorized")
        }
      }
    })
  );

  AppDataSource.initialize()
  .then(() => {
    console.log("Database Connected Successfully!");
    app.listen(4000,()=>console.table([1,2,3]));
  })
  .catch((error) => console.log("Database Connection Failed!", error));
  