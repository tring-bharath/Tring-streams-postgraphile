import "reflect-metadata";
import express from "express";
const {postgraphile} = require('postgraphile');
const app = express();
const cors=require('cors');
const {User} =require('./entities/User')
app.use(express.json());
app.use(cors());

  app.use(
    postgraphile("postgres://postgres:1234@localhost:5432/Tring_stream", "public", {
      watchPg: true, 
      graphiql: true,
      enhanceGraphiql: true,
      dynamicJson: true, 
      enableCors: true, 
    })
  );

  app.listen(4000);