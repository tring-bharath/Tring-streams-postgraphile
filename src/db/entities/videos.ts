import { Entity, Column, PrimaryColumn, ManyToMany, JoinTable } from "typeorm";
import { User } from "./User";
@Entity("allVideos")
export class videos{
  @PrimaryColumn({unique:true})
  id:number;

  @Column()
  tags:string;

  @Column()
  videoURL:string;

  @Column()
  thumbnail:string;

  @Column()
  likes:number;

  @Column()
  views:number;

  @ManyToMany(()=>User)
  @JoinTable({name:"userWatchlist"})
  watchList:User[];

  @ManyToMany(()=>User)
  @JoinTable({name:"userHistory"})
  history:User[];

}