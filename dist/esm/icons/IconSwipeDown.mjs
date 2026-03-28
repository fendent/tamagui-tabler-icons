import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconSwipeDown = themed(memo(function (props) {
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
      d: "M12 4a4 4 0 1 1 0 8a4 4 0 0 1 0 -8",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 12v8",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M9 17l3 3l3 -3",
      stroke: color
    })]
  });
}));
export { IconSwipeDown };
