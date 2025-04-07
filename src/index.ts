import "reflect-metadata";
import express from "express";
import 'dotenv/config';
import { AppDataSource } from "./data-source";
import { authPlugin } from "./auth/plugin/authPlugin";
import cookieParser from "cookie-parser";
import { additionalGraphQLContextFromRequest } from "./auth/auth";
import ConnectionFilterPlugin from "postgraphile-plugin-connection-filter";
import { allVideosPlugin } from "./allVideos/plugin/allVideosPlugin";
const {postgraphile} = require('postgraphile');
const app = express();
const cors=require('cors');
app.use(express.json());
app.use(cors({
  origin:["http://localhost:5173","https://nzqqkzs6-5173.inc1.devtunnels.ms"],
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
      enableCors: true,
      appendPlugins: [authPlugin,ConnectionFilterPlugin,allVideosPlugin],
      disableDefaultMutations: false,  
      showErrorStack: true,
      extendedErrors: ["hint", "detail", "errcode"],
      additionalGraphQLContextFromRequest,
    })
  );

  AppDataSource.initialize()
  .then(() => {
    console.log("Database Connected Successfully!");
    app.listen(4000);
  })
  .catch((error) => console.log("Database Connection Failed!", error));
  