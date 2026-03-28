import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconMoodAnnoyed2 = themed(memo(function (props) {
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
      d: "M12 21a9 9 0 1 1 0 -18a9 9 0 0 1 0 18",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M15 14c-2 0 -3 1 -3.5 2.05",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M10 9.25c-.5 1 -2.5 1 -3 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M17 9.25c-.5 1 -2.5 1 -3 0",
      stroke: color
    })]
  });
}));
export { IconMoodAnnoyed2 };
