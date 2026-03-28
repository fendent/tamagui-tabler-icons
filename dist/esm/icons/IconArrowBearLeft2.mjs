import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconArrowBearLeft2 = themed(memo(function (props) {
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
      d: "M9 3h-5v5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M4 3l7.536 7.536a5 5 0 0 1 1.464 3.534v6.93",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M20 5l-4.5 4.5",
      stroke: color
    })]
  });
}));
export { IconArrowBearLeft2 };
