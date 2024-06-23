import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "https://spacex-production.up.railway.app/",
  documents: ["src/**/*.{ts,tsx}"],
  generates: {
    "./src/graphql/generated/": {
      preset: "client",

      plugins: [],

      presetConfig: {
        gqlTagName: "gql",
      },
    },
  },

  ignoreNoDocuments: true,
};

export default config;
