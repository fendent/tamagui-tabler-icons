import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconMoodPuzzled = themed(memo(function (props) {
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
      d: "M14.986 3.51a9 9 0 1 0 1.514 16.284c2.489 -1.437 4.181 -3.978 4.5 -6.794",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M10 10h.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M14 8h.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 15c1 -1.333 2 -2 3 -2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M20 9v.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M20 6a2.003 2.003 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483",
      stroke: color
    })]
  });
}));
export { IconMoodPuzzled };
