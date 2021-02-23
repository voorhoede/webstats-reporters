import 'dotenv/config'
import { GraphQLClient } from 'graphql-request';

const apiKey = process.env?.WEBSTATS_API_KEY

if (!apiKey) {
  throw new Error('Environment variable WEBSTATS_API_KEY not set');
}

const BASE_URL = process.env.WEBSTATS_BASE_URL ?? 'https://webstats.vercel.app/api/graphql';

export const initWebstatsGraphqlClient = () => {
  const client = new GraphQLClient(BASE_URL, {
    headers: {
      "x-api-key": apiKey
    }
  });
  return client;
};
