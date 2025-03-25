import { makeExtendSchemaPlugin } from "graphile-utils";
import { authSchema } from "../schema/authSchema";
import { authResolver } from "../resolver/authResolver";

export const authPlugin = makeExtendSchemaPlugin((build) => {
  return {
    typeDefs: authSchema,
    resolvers: authResolver,
  };
});