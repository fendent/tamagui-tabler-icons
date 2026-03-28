import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconBuildings = themed(memo(function (props) {
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
      d: "M4 21v-15c0 -1 1 -2 2 -2h5c1 0 2 1 2 2v15",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M16 8h2c1 0 2 1 2 2v11",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 21h18",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M10 12v.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M10 16v.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M10 8v.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M7 12v.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M7 16v.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M7 8v.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M17 12v.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M17 16v.01",
      stroke: color
    })]
  });
}));
export { IconBuildings };
