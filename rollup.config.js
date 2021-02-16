import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { terser } from "rollup-plugin-terser";

export default [
  {
    input: "src/main.js",
    output: [{ file: "dist/rollup.js", format: "es" }],

    // common Common JS deps
    external: (id) =>
      [
        "classnames",
        "keyboard-key",
        "react",
        "react-dom",
        "react-is",
        "prop-types",
      ].includes(id.split("/")[0]),

    plugins: [resolve(), commonjs(), terser()],
  },
];
