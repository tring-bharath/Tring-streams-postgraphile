import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from "typeorm";
import { videos } from "./videos";
enum gender{
  male,
  female
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

  @Column()
  lastName:string;

  @Column()
  location:string;

  @Column()
  phoneNumber:string;

  @Column()
  dateOfBirth:Date;

  @Column()
  gender:gender;

  @Column()
  profilePicture:string;

  @ManyToMany(()=>videos)
  @JoinTable({ name: "userWatchlist" })
  watchList:videos[];

  @ManyToMany(()=>videos)
  @JoinTable({name:"userHistory"})
  history:videos[];
}
