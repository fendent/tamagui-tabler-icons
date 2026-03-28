import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconHttpHead = themed(memo(function (props) {
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
      d: "M3 16v-8",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M7 8v8",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 12h4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M14 8h-4v8h4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M10 12h2.5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M17 16v-6a2 2 0 1 1 4 0v6",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M17 13h4",
      stroke: color
    })]
  });
}));
export { IconHttpHead };
