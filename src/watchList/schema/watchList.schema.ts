import { gql } from "postgraphile";

export const watchListSchema=gql`
type video
{
    id:Number
    tags:String
    videoURL:String
    thumbnail:String
    likes:Number
    views:Number
}
extend type mutation
{
    getAllWatchListVideos(userId:Number!):[video]
    addW
    removeWatchList(userId:Number!,videoId:Number!):String

}
`