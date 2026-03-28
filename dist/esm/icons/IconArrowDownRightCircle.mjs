import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconArrowDownRightCircle = themed(memo(function (props) {
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
      d: "M8.464 8.464l9.536 9.536",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M14 18h4v-4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M8.414 8.414a2 2 0 1 0 -2.828 -2.828a2 2 0 0 0 2.828 2.828",
      stroke: color
    })]
  });
}));
export { IconArrowDownRightCircle };
