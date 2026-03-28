import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconRegex = themed(memo(function (props) {
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
      d: "M6.5 15a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0 -5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M17 7.875l3 -1.687",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M17 7.875v3.375",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M17 7.875l-3 -1.687",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M17 7.875l3 1.688",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M17 4.5v3.375",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M17 7.875l-3 1.688",
      stroke: color
    })]
  });
}));
export { IconRegex };
