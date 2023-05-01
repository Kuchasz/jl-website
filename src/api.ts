import { GraphQLClient } from "graphql-request";
import { getSdk } from "./gql";
import { env } from "./env.mjs";

export const api = getSdk(new GraphQLClient(env.API_URL));