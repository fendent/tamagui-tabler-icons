import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconHomeBolt = themed(memo(function (props) {
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
      d: "M19 10l-7 -7l-9 9h2v7a2 2 0 0 0 2 2h7.5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M9 21v-6a2 2 0 0 1 2 -2h2c.661 0 1.248 .32 1.612 .815",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M19 14l-2 4h4l-2 4",
      stroke: color
    })]
  });
}));
export { IconHomeBolt };
