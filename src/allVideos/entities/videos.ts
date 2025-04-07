import { Entity, Column, PrimaryColumn, ManyToMany, JoinTable } from "typeorm";
import { User } from "../../auth/entities/User";
@Entity("allVideos")
export class videos {
  @PrimaryColumn({ unique: true })
  id: number;

  @Column({ nullable: true })
  tags: string;

  @Column({ select: false, nullable: true })
  videoURL: string;

  @Column({ nullable: true })
  likes: Number;

  @Column({ nullable: true })
  thumbnail: string;

  @Column({ nullable: true })
  views: number;

  @ManyToMany(() => User)
  @JoinTable({ name: "userWatchlist" })
  watchList: User[];

  @ManyToMany(() => User)
  @JoinTable({ name: "userHistory" })
  history: User[];

}