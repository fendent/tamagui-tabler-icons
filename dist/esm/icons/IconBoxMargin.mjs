import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconBoxMargin = themed(memo(function (props) {
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
      d: "M8 8h8v8h-8l0 -8",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M4 4v.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M8 4v.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 4v.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M16 4v.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M20 4v.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M4 20v.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M8 20v.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 20v.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M16 20v.01",
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
export { IconBoxMargin };
