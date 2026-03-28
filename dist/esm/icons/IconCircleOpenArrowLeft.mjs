import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconCircleOpenArrowLeft = themed(memo(function (props) {
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
      d: "M20.066 8.002a9 9 0 1 0 .934 3.998h-13",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 8l-4 4l4 4",
      stroke: color
    })]
  });
}));
export { IconCircleOpenArrowLeft };
