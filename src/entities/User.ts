import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

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
}
