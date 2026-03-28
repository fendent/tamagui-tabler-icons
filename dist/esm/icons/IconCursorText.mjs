import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconCursorText = themed(memo(function (props) {
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
      d: "M10 12h4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M9 4a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M15 4a3 3 0 0 0 -3 3v10a3 3 0 0 0 3 3",
      stroke: color
    })]
  });
}));
export { IconCursorText };
