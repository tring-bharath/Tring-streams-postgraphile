import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "1234",
  database: "Tring_stream",
  synchronize: false,  
  logging: true,
  entities: ["src/entities/**/*.ts"],
  migrations: ["src/migrations/**/*.ts"],
  subscribers: ["src/subscriber/**/*.ts"]
});

AppDataSource.initialize()
  .then(() => {
    console.log("Database Connected Successfully!");
  })
  .catch((error) => console.log("Database Connection Failed!", error));