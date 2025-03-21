import "reflect-metadata";
import express from "express";
import { AppDataSource } from "./data-source";
import { authPlugin } from "./Auth/plugin/auth.plugin";
const {postgraphile} = require('postgraphile');
const app = express();
const cors=require('cors');
const {User} =require('./entities/User');
app.use(express.json());
app.use(cors());
  app.use(
    postgraphile("postgres://postgres:1234@localhost:5432/Tring_streams", "public", {
      watchPg: true, 
      graphiql: true,
      enhanceGraphiql: true,
      dynamicJson: true, 
      enableCors: true, 
      appendPlugins: [authPlugin]
    })
  );

  AppDataSource.initialize()
  .then(() => {
    console.log("Database Connected Successfully!");
    app.listen(4000,()=>console.table([1,2,3]));
  })
  .catch((error) => console.log("Database Connection Failed!", error));
  