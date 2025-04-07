import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from "typeorm";
import { videos } from "../../allVideos/entities/videos";
enum gender {
  male = "MALE",
  female = "FEMALE"
}
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  firstName!: string;

  @Column({ unique: true })
  email!: string;

  @Column()
  password!: string;

  @Column({ nullable: true })
  lastName: string;

  @Column({ nullable: true })
  location: string;

  @Column({ nullable: true })
  phoneNumber: string;

  @Column({ nullable: true })
  dateOfBirth: Date;

  @Column({ nullable: true, type: "enum", enum: gender })
  gender: gender;

  @Column({ nullable: true })
  profilePicture: string;

  @Column({ nullable: true })
  bio: string;

  @ManyToMany(() => videos)
  @JoinTable({ name: "userWatchlist" })
  watchList: videos[];

  @ManyToMany(() => videos)
  @JoinTable({ name: "userHistory" })
  history: videos[];
}
