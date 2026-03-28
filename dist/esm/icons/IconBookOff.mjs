import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconBookOff = themed(memo(function (props) {
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
      d: "M3 19a9 9 0 0 1 9 0a9 9 0 0 1 5.899 -1.096",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 6a9 9 0 0 1 2.114 -.884m3.8 -.21c1.07 .17 2.116 .534 3.086 1.094a9 9 0 0 1 9 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 6v13",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 6v2m0 4v7",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M21 6v11",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 3l18 18",
      stroke: color
    })]
  });
}));
export { IconBookOff };
