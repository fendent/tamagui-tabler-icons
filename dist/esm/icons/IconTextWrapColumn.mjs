import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconTextWrapColumn = themed(memo(function (props) {
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
      d: "M7 9h7a3 3 0 0 1 0 6h-4l2 -2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 17l-2 -2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 3v18",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M21 3v18",
      stroke: color
    })]
  });
}));
export { IconTextWrapColumn };
