import { terser } from "rollup-plugin-terser";

function createConfig(format) {
  const dir = format === "module" ? "esm" : format;
  return {
    input: require.resolve("lodash-es"),
    output: {
      file: `${dir}/index.js`,
      sourcemap: true,
      format,
    },
    plugins: [terser()],
  };
}

export default [createConfig("module"), createConfig("system")];
