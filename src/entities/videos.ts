import { Entity, Column } from "typeorm";

@Entity("allVideos")
export class videos{
  @Column({unique:true})
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
}