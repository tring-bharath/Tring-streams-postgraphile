import { makeExtendSchemaPlugin } from "postgraphile"
import { watchListResolver } from "../resolver/watchList.resolver"
import { watchListSchema } from "../schema/watchList.schema"

export const watchListPlugin= makeExtendSchemaPlugin((build)=>
{
    return{
        typeDefs:watchListSchema,
        resolvers:watchListResolver
    }
})