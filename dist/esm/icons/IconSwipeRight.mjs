import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconSwipeRight = themed(memo(function (props) {
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
      d: "M4 12a4 4 0 1 1 8 0a4 4 0 0 1 -8 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 12h8",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M17 15l3 -3l-3 -3",
      stroke: color
    })]
  });
}));
export { IconSwipeRight };
