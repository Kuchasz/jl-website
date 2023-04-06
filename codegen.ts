
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://eu-central-1-shared-euc1-02.cdn.hygraph.com/content/clfsoexj9267j01t7d0p16yar/master",
  documents: ["src/queries/*.graphql"],
  generates: {
    "src/gql.ts": {
      plugins: ['typescript', 'typescript-operations', 'typescript-graphql-request']
    }
  }
};

export default config;