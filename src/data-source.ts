import { DataSource } from "typeorm";
import { User } from "./auth/entities/User";
import { videos } from "./allVideos/entities/videos";
import { OtpEntity } from "./auth/entities/otpEntity";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "1234",
  database: "Tring_streams",
  synchronize: false,
  logging: true,
  entities: [User, videos, OtpEntity],
  migrations: ["src/db/migrations/**/*.ts"],
  subscribers: ["src/subscriber/**/*.ts"]
});

