import { makeExtendSchemaPlugin } from "graphile-utils";
import { authSchema } from "../schema/auth.schema";
import { authResolver } from "../resolver/auth.resolver";

export const authPlugin = makeExtendSchemaPlugin((build) => {
  return {
    typeDefs: authSchema,
    resolvers: authResolver,
  };
});