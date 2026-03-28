import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconKayak = themed(memo(function (props) {
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
      d: "M6.414 6.414a2 2 0 0 0 0 -2.828l-1.414 -1.414l-2.828 2.828l1.414 1.414a2 2 0 0 0 2.828 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M17.586 17.586a2 2 0 0 0 0 2.828l1.414 1.414l2.828 -2.828l-1.414 -1.414a2 2 0 0 0 -2.828 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M6.5 6.5l11 11",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M22 2.5c-9.983 2.601 -17.627 7.952 -20 19.5c9.983 -2.601 17.627 -7.952 20 -19.5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M6.5 12.5l5 5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12.5 6.5l5 5",
      stroke: color
    })]
  });
}));
export { IconKayak };
