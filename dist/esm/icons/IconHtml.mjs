import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconHtml = themed(memo(function (props) {
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
      d: "M13 16v-8l2 5l2 -5v8",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M1 16v-8",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M5 8v8",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M1 12h4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M7 8h4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M9 8v8",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M20 8v8h3",
      stroke: color
    })]
  });
}));
export { IconHtml };
