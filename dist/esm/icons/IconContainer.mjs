import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconContainer = themed(memo(function (props) {
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
      d: "M20 4v.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M20 20v.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M20 16v.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M20 12v.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M20 8v.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M8 5a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1l0 -14",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M4 4v.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M4 20v.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M4 16v.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M4 12v.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M4 8v.01",
      stroke: color
    })]
  });
}));
export { IconContainer };
