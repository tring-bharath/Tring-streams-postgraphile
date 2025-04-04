import { DataSource } from "typeorm";
import { User } from "./db/entities/User";
import { videos } from "./db/entities/videos";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "1234",
  database: "Tring_streams",
  synchronize: false,  
  logging: true,
  entities: [User,videos],
  migrations: ["src/db/migrations/**/*.ts"],
  subscribers: ["src/subscriber/**/*.ts"]
});

