import type { CodegenConfig } from '@graphql-codegen/cli';
import { loadEnvConfig } from "@next/env";

loadEnvConfig(process.cwd());

const config: CodegenConfig = {
  overwrite: true,
  schema: process.env.API_URL,
  documents: ["src/queries/*.graphql"],
  generates: {
    "src/gql.ts": {
      plugins: ['typescript', 'typescript-operations', 'typescript-graphql-request']
    }
  }
};

export default config;