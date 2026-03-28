import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconFilters = themed(memo(function (props) {
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
      d: "M7 8a5 5 0 1 0 10 0a5 5 0 1 0 -10 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M8 11a5 5 0 1 0 3.998 1.997",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12.002 19.003a5 5 0 1 0 3.998 -8.003",
      stroke: color
    })]
  });
}));
export { IconFilters };
