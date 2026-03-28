import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconSandbox = themed(memo(function (props) {
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
      d: "M19.953 8.017l1.047 6.983v2a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-2l1.245 -8.297a2 2 0 0 1 1.977 -1.703h3.778",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 15h18",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M13 3l5.5 1.5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M15.75 3.75l-2 7",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M7 10.5c1.667 -.667 3.333 -.667 5 0c1.667 .667 3.333 .667 5 0",
      stroke: color
    })]
  });
}));
export { IconSandbox };
