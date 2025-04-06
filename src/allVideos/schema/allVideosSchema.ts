import { gql } from "graphile-utils";

export const allVideosSchema=gql`
extend type Mutation
{
    updateViews(videoId:Int!):String!
}
    `