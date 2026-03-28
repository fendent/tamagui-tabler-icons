import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconBuildingFortress = themed(memo(function (props) {
  const {
    color = "black",
    size = 24,
    ...otherProps
  } = props;
  return /* @__PURE__ */jsxs(Svg, {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    ...otherProps,
    children: [/* @__PURE__ */jsx(Path, {
      d: "M7 21h1a1 1 0 0 0 1 -1v-1a3 3 0 0 1 6 0m3 2h1a1 1 0 0 0 1 -1v-15l-3 -2l-3 2v6h-4v-6l-3 -2l-3 2v15a1 1 0 0 0 1 1h2m8 -2v1a1 1 0 0 0 1 1h2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M7 7v.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M7 10v.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M7 13v.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M17 7v.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M17 10v.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M17 13v.01",
      stroke: color
    })]
  });
}));
export { IconBuildingFortress };
