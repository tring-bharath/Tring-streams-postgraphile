import "reflect-metadata";
import express from "express";
import 'dotenv/config';
import { AppDataSource } from "./data-source";
import { authPlugin } from "./auth/plugin/authPlugin";
import  jwt  from "jsonwebtoken";
import cookieParser from "cookie-parser";
import { additionalGraphQLContextFromRequest } from "./auth/auth";
import ConnectionFilterPlugin from "postgraphile-plugin-connection-filter";
const {postgraphile} = require('postgraphile');
const app = express();
const cors=require('cors');
app.use(express.json());
app.use(cors({
  origin:"http://localhost:5173",
  credentials:true
}));
app.use(cookieParser());
  app.use(
    postgraphile("postgres://postgres:1234@localhost:5432/Tring_streams", 
      {
      watchPg: true, 
      graphiql: true,
      enhanceGraphiql: true,
      dynamicJson: true, 
      // enableCors: true,
      appendPlugins: [authPlugin,ConnectionFilterPlugin],
      disableDefaultMutations: false,  
      showErrorStack: true,
      extendedErrors: ["hint", "detail", "errcode"],
      additionalGraphQLContextFromRequest,
    })
  );

  AppDataSource.initialize()
  .then(() => {
    console.log("Database Connected Successfully!");
    app.listen(4000,()=>console.table([1,2,3]));
  })
  .catch((error) => console.log("Database Connection Failed!", error));
  