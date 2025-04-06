import { makeExtendSchemaPlugin } from "postgraphile";
import { allVideosSchema } from "../schema/allVideosSchema";
import { allVideosResolver } from "../resolver/allVideosResolver";

export const allVideosPlugin=makeExtendSchemaPlugin((build)=>
{
    return{
        typeDefs:allVideosSchema,
        resolvers:allVideosResolver
    }
})