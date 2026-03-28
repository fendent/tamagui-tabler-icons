import { readFileSync, writeFileSync, mkdirSync, readdirSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");

// ── Helpers ──────────────────────────────────────────────────────────────────

function kebabToPascal(str) {
  return str
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("");
}

function filenameToComponentName(filename, filled) {
  const base = filename.replace(/\.svg$/, "");
  const pascal = kebabToPascal(base);
  return filled ? `Icon${pascal}Filled` : `Icon${pascal}`;
}

// NOTE: only handles <path> elements — tabler currently only uses paths
function parsePaths(svgContent) {
  const paths = [];
  const pathRegex = /<path\s([^>]*?)\/>/gs;
  let match;
  while ((match = pathRegex.exec(svgContent)) !== null) {
    const attrs = match[1];
    // Skip bounding box path
    if (attrs.includes('stroke="none"') && attrs.includes('d="M0 0h24v24H0z"')) {
      continue;
    }
    const dMatch = /\bd="([^"]*)"/.exec(attrs);
    if (dMatch) {
      paths.push(dMatch[1]);
    }
  }
  return paths;
}

function ensureDir(dir) {
  mkdirSync(dir, { recursive: true });
}

function writeFile(filePath, content) {
  ensureDir(dirname(filePath));
  writeFileSync(filePath, content, "utf8");
}

// SVG prop blocks as plain strings (no template-literal quoting issues)
const OUTLINE_SVG_PROPS =
  'fill: "none",\n    stroke: color,\n    strokeWidth: "2",\n    strokeLinecap: "round",\n    strokeLinejoin: "round"';
const FILLED_SVG_PROPS = "fill: color";

// ── ESM generator ─────────────────────────────────────────────────────────────

function buildEsm(name, paths, filled) {
  const svgProps = filled ? FILLED_SVG_PROPS : OUTLINE_SVG_PROPS;

  const pathElements = paths.map((d) => {
    const pathProps = filled
      ? `d: "${d}"`
      : `d: "${d}",\n      stroke: color`;
    return `/* @__PURE__ */jsx(Path, {\n      ${pathProps}\n    })`;
  });

  const jsxFn = pathElements.length === 1 ? "jsx" : "jsxs";
  const jrImport =
    pathElements.length === 1
      ? `import { jsx } from "react/jsx-runtime";`
      : `import { jsx, jsxs } from "react/jsx-runtime";`;

  const childrenValue =
    pathElements.length === 1
      ? pathElements[0]
      : `[${pathElements.join(", ")}]`;

  return (
    `import { memo } from "react";\n` +
    `import { Svg, Path } from "react-native-svg";\n` +
    `import { themed } from "@tamagui/helpers-icon";\n` +
    `${jrImport}\n` +
    `const ${name} = themed(memo(function (props) {\n` +
    `  const {\n` +
    `    color = "black",\n` +
    `    size = 24,\n` +
    `    ...otherProps\n` +
    `  } = props;\n` +
    `  return /* @__PURE__ */${jsxFn}(Svg, {\n` +
    `    width: size,\n` +
    `    height: size,\n` +
    `    viewBox: "0 0 24 24",\n` +
    `    ${svgProps},\n` +
    `    ...otherProps,\n` +
    `    children: ${childrenValue}\n` +
    `  });\n` +
    `}));\n` +
    `export { ${name} };\n`
  );
}

// ── Native generator ──────────────────────────────────────────────────────────

function buildNative(name, paths, filled) {
  const svgProps = filled ? FILLED_SVG_PROPS : OUTLINE_SVG_PROPS;

  const pathElements = paths.map((d) => {
    const pathProps = filled
      ? `d: "${d}"`
      : `d: "${d}",\n      stroke: color`;
    return `/* @__PURE__ */_jsx(Path, {\n      ${pathProps}\n    })`;
  });

  const jsxFn = pathElements.length === 1 ? "_jsx" : "_jsxs";
  const jrImport =
    pathElements.length === 1
      ? `import { jsx as _jsx } from "react/jsx-runtime";`
      : `import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";`;

  const childrenValue =
    pathElements.length === 1
      ? pathElements[0]
      : `[${pathElements.join(", ")}]`;

  return (
    `${jrImport}\n` +
    `import { memo } from "react";\n` +
    `import { Svg, Path } from "react-native-svg";\n` +
    `import { themed } from "@tamagui/helpers-icon";\n` +
    `var ${name} = themed(/* @__PURE__ */memo(function (props) {\n` +
    `  var {\n` +
    `    color = "black",\n` +
    `    size = 24,\n` +
    `    ...otherProps\n` +
    `  } = props;\n` +
    `  return /* @__PURE__ */${jsxFn}(Svg, {\n` +
    `    width: size,\n` +
    `    height: size,\n` +
    `    viewBox: "0 0 24 24",\n` +
    `    ${svgProps},\n` +
    `    ...otherProps,\n` +
    `    children: ${childrenValue}\n` +
    `  });\n` +
    `}));\n` +
    `export { ${name} };\n`
  );
}

// ── CJS generator ─────────────────────────────────────────────────────────────

const CJS_BOILERPLATE =
  `var __defProp = Object.defineProperty;\n` +
  `var __getOwnPropDesc = Object.getOwnPropertyDescriptor;\n` +
  `var __getOwnPropNames = Object.getOwnPropertyNames;\n` +
  `var __hasOwnProp = Object.prototype.hasOwnProperty;\n` +
  `var __export = (target, all) => {\n` +
  `    for (var name in all) __defProp(target, name, {\n` +
  `      get: all[name],\n` +
  `      enumerable: !0\n` +
  `    });\n` +
  `  },\n` +
  `  __copyProps = (to, from, except, desc) => {\n` +
  `    if (from && typeof from == "object" || typeof from == "function") for (let key of __getOwnPropNames(from)) !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, {\n` +
  `      get: () => from[key],\n` +
  `      enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable\n` +
  `    });\n` +
  `    return to;\n` +
  `  };\n` +
  `var __toCommonJS = mod => __copyProps(__defProp({}, "__esModule", {\n` +
  `  value: !0\n` +
  `}), mod);`;

function buildCjs(name, paths, filled) {
  const svgProps = filled ? FILLED_SVG_PROPS : OUTLINE_SVG_PROPS;

  const pathElements = paths.map((d) => {
    const pathProps = filled
      ? `d: "${d}"`
      : `d: "${d}",\n      stroke: color`;
    return `/* @__PURE__ */(0, import_jsx_runtime.jsx)(import_react_native_svg.Path, {\n      ${pathProps}\n    })`;
  });

  const jsxFn =
    pathElements.length === 1
      ? "(0, import_jsx_runtime.jsx)"
      : "(0, import_jsx_runtime.jsxs)";

  const childrenValue =
    pathElements.length === 1
      ? pathElements[0]
      : `[${pathElements.join(", ")}]`;

  return (
    `${CJS_BOILERPLATE}\n` +
    `var ${name}_exports = {};\n` +
    `__export(${name}_exports, {\n` +
    `  ${name}: () => ${name}\n` +
    `});\n` +
    `module.exports = __toCommonJS(${name}_exports);\n` +
    `var import_react = require("react"),\n` +
    `  import_react_native_svg = require("react-native-svg"),\n` +
    `  import_helpers_icon = require("@tamagui/helpers-icon"),\n` +
    `  import_jsx_runtime = require("react/jsx-runtime");\n` +
    `const ${name} = (0, import_helpers_icon.themed)((0, import_react.memo)(function (props) {\n` +
    `  const {\n` +
    `    color = "black",\n` +
    `    size = 24,\n` +
    `    ...otherProps\n` +
    `  } = props;\n` +
    `  return /* @__PURE__ */${jsxFn}(import_react_native_svg.Svg, {\n` +
    `    width: size,\n` +
    `    height: size,\n` +
    `    viewBox: "0 0 24 24",\n` +
    `    ${svgProps},\n` +
    `    ...otherProps,\n` +
    `    children: ${childrenValue}\n` +
    `  });\n` +
    `}));\n`
  );
}

// ── CJS native generator ──────────────────────────────────────────────────────

function buildCjsNative(name, paths, filled) {
  const svgProps = filled ? FILLED_SVG_PROPS : OUTLINE_SVG_PROPS;

  const pathElements = paths.map((d) => {
    const pathProps = filled
      ? `d: "${d}"`
      : `d: "${d}",\n      stroke: color`;
    return `/* @__PURE__ */(0, import_jsx_runtime.jsx)(import_react_native_svg.Path, {\n      ${pathProps}\n    })`;
  });

  const jsxFn =
    pathElements.length === 1
      ? "(0, import_jsx_runtime.jsx)"
      : "(0, import_jsx_runtime.jsxs)";

  const childrenValue =
    pathElements.length === 1
      ? pathElements[0]
      : `[${pathElements.join(", ")}]`;

  return (
    `"use strict";\n\n` +
    `${CJS_BOILERPLATE}\n` +
    `var ${name}_exports = {};\n` +
    `__export(${name}_exports, {\n` +
    `  ${name}: () => ${name}\n` +
    `});\n` +
    `module.exports = __toCommonJS(${name}_exports);\n` +
    `var import_jsx_runtime = require("react/jsx-runtime"),\n` +
    `  import_react = require("react"),\n` +
    `  import_react_native_svg = require("react-native-svg"),\n` +
    `  import_helpers_icon = require("@tamagui/helpers-icon"),\n` +
    `  ${name} = (0, import_helpers_icon.themed)(/* @__PURE__ */(0, import_react.memo)(function (props) {\n` +
    `    var {\n` +
    `      color = "black",\n` +
    `      size = 24,\n` +
    `      ...otherProps\n` +
    `    } = props;\n` +
    `    return /* @__PURE__ */${jsxFn}(import_react_native_svg.Svg, {\n` +
    `      width: size,\n` +
    `      height: size,\n` +
    `      viewBox: "0 0 24 24",\n` +
    `      ${svgProps},\n` +
    `      ...otherProps,\n` +
    `      children: ${childrenValue}\n` +
    `    });\n` +
    `  }));\n`
  );
}

// ── Types generator ───────────────────────────────────────────────────────────

function buildTypes(name) {
  return (
    `import type { IconProps } from "@tamagui/helpers-icon";\n` +
    `type IconComponent = (propsIn: IconProps) => JSX.Element;\n` +
    `export declare const ${name}: IconComponent;\n` +
    `export {};\n`
  );
}

// ── Index generators ──────────────────────────────────────────────────────────

function buildEsmIndex(names) {
  const imports = names.map((n) => `import { ${n} } from "./icons/${n}.mjs";`).join("\n");
  const exLine = `export { ${names.join(", ")} };`;
  return `${imports}\n${exLine}\n`;
}

function buildNativeIndex(names) {
  const imports = names.map((n) => `import { ${n} } from "./icons/${n}.native.js";`).join("\n");
  const exLine = `export { ${names.join(", ")} };`;
  return `${imports}\n${exLine}\n`;
}

function buildCjsIndex(names) {
  const exportEntries = names
    .map((n) => `  ${n}: () => require("./icons/${n}.cjs").${n}`)
    .join(",\n");
  return (
    `${CJS_BOILERPLATE}\n` +
    `var index_exports = {};\n` +
    `__export(index_exports, {\n` +
    `${exportEntries}\n` +
    `});\n` +
    `module.exports = __toCommonJS(index_exports);\n`
  );
}

function buildCjsNativeIndex(names) {
  const exportEntries = names
    .map((n) => `  ${n}: () => import_${n}.${n}`)
    .join(",\n");
  const requires = names
    .map((n, i) =>
      i === 0
        ? `var import_${n} = require("./icons/${n}.native.js")`
        : `  import_${n} = require("./icons/${n}.native.js")`
    )
    .join(",\n");
  return (
    `"use strict";\n\n` +
    `${CJS_BOILERPLATE}\n` +
    `var index_exports = {};\n` +
    `__export(index_exports, {\n` +
    `${exportEntries}\n` +
    `});\n` +
    `module.exports = __toCommonJS(index_exports);\n` +
    `${requires};\n`
  );
}

function buildTypesIndex(names) {
  return names.map((n) => `export { ${n} } from "./icons/${n}";`).join("\n") + "\n";
}

// ── Package.json exports ──────────────────────────────────────────────────────

function buildExports(names) {
  const exportsMap = {
    ".": {
      types: "./types/index.d.ts",
      "react-native": "./dist/esm/index.native.js",
      browser: "./dist/esm/index.mjs",
      module: "./dist/esm/index.mjs",
      import: "./dist/esm/index.mjs",
      require: "./dist/cjs/index.cjs",
      default: "./dist/esm/index.mjs",
    },
  };
  for (const name of names) {
    exportsMap[`./icons/${name}`] = {
      types: `./types/icons/${name}.d.ts`,
      "react-native": `./dist/esm/icons/${name}.native.js`,
      browser: `./dist/esm/icons/${name}.mjs`,
      module: `./dist/esm/icons/${name}.mjs`,
      import: `./dist/esm/icons/${name}.mjs`,
      require: `./dist/cjs/icons/${name}.cjs`,
      default: `./dist/esm/icons/${name}.mjs`,
    };
  }
  return exportsMap;
}

// ── Main ──────────────────────────────────────────────────────────────────────

const tablerIconsDir = join(root, "node_modules/@tabler/icons");
if (!existsSync(tablerIconsDir)) {
  console.error("Error: @tabler/icons is not installed. Run `npm install` first.");
  process.exit(1);
}

const iconsDir = join(tablerIconsDir, "icons");
const distEsm = join(root, "dist/esm");
const distCjs = join(root, "dist/cjs");
const typesDir = join(root, "types");

const categories = [
  { dir: "outline", filled: false },
  { dir: "filled", filled: true },
];

const allNames = [];

for (const { dir, filled } of categories) {
  const categoryDir = join(iconsDir, dir);
  const files = readdirSync(categoryDir).filter((f) => f.endsWith(".svg"));

  for (const file of files) {
    const name = filenameToComponentName(file, filled);
    const svgContent = readFileSync(join(categoryDir, file), "utf8");
    const paths = parsePaths(svgContent);

    if (paths.length === 0) {
      console.warn(`[WARN] No paths found in ${dir}/${file}, skipping`);
      continue;
    }

    writeFile(join(distEsm, "icons", `${name}.mjs`), buildEsm(name, paths, filled));
    writeFile(join(distEsm, "icons", `${name}.native.js`), buildNative(name, paths, filled));
    writeFile(join(distCjs, "icons", `${name}.cjs`), buildCjs(name, paths, filled));
    writeFile(join(distCjs, "icons", `${name}.native.js`), buildCjsNative(name, paths, filled));
    writeFile(join(typesDir, "icons", `${name}.d.ts`), buildTypes(name));

    allNames.push(name);
  }
}

allNames.sort();

writeFile(join(distEsm, "index.mjs"), buildEsmIndex(allNames));
writeFile(join(distEsm, "index.native.js"), buildNativeIndex(allNames));
writeFile(join(distCjs, "index.cjs"), buildCjsIndex(allNames));
writeFile(join(distCjs, "index.native.js"), buildCjsNativeIndex(allNames));
writeFile(join(typesDir, "index.d.ts"), buildTypesIndex(allNames));

const pkgPath = join(root, "package.json");
const pkg = JSON.parse(readFileSync(pkgPath, "utf8"));
pkg.exports = buildExports(allNames);
writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + "\n", "utf8");

console.log(`Done. Generated ${allNames.length} icons.`);
