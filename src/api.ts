import { request } from "graphql-request";

const endpoint = 'https://eu-central-1-shared-euc1-02.cdn.hygraph.com/content/clfsoexj9267j01t7d0p16yar/master';

export const query = (q: string, vars?: {[key: string]: any}) => request(endpoint, q, vars);