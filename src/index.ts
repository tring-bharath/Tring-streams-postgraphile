import "reflect-metadata";
import express from "express";
import { AppDataSource } from "./data-source";
const {postgraphile} = require('postgraphile')
const app = express();
const cors=require('cors')
app.use(express.json());
app.use(cors());
const PORT = process.env.PORT || 4000;

AppDataSource.initialize()
  .then(() => {
    console.log(" Database connected successfully!");

    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => console.error("Database connection failed:", error));

  app.use(
    postgraphile(process.env.DATABASE_URL, "public", {
      watchPg: true, // Automatically update schema changes
      graphiql: true, // Enable GraphiQL interface
      enhanceGraphiql: true, // Better UI for GraphiQL
      dynamicJson: true, // Return JSON fields as objects
      enableCors: true, // Allow CORS
    })
  );
