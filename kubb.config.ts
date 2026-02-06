import { defineConfig } from "@kubb/core";
import { pluginOas } from "@kubb/plugin-oas";
import { pluginTs } from "@kubb/plugin-ts";

export default defineConfig({
  root: ".",
  input: {
    path: "./openapi-v1.json", // Path to your OpenAPI specification file
  },
  output: {
    path: "./src/gen", // Where to save generated files
    clean: true,
  },
  plugins: [
    pluginOas({
      collisionDetection: true,
      output: {
        path: "./json",
      },
      validate: true,
    }),
    pluginTs({
      // dateType: "date",
      enumKeyCasing: "pascalCase",
      enumType: "asPascalConst",
      unknownType: "unknown",
    }),
  ],
});
