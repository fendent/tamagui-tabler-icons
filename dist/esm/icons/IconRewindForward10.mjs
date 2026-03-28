import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconRewindForward10 = themed(memo(function (props) {
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
      d: "M17 9l3 -3l-3 -3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M8 17.918a5.997 5.997 0 0 1 -5 -5.918a6 6 0 0 1 6 -6h11",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 14v6",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M15 15.5v3a1.5 1.5 0 0 0 3 0v-3a1.5 1.5 0 0 0 -3 0",
      stroke: color
    })]
  });
}));
export { IconRewindForward10 };
