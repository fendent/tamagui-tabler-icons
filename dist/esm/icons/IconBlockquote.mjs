import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconBlockquote = themed(memo(function (props) {
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
      d: "M6 15h15",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M21 19h-15",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M15 11h6",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M21 7h-6",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M9 9h1a1 1 0 1 1 -1 1v-2.5a2 2 0 0 1 2 -2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 9h1a1 1 0 1 1 -1 1v-2.5a2 2 0 0 1 2 -2",
      stroke: color
    })]
  });
}));
export { IconBlockquote };
