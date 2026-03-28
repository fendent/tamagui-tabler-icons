import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconHome2 = themed(memo(function (props) {
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
      d: "M5 12l-2 0l9 -9l9 9l-2 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M10 12h4v4h-4l0 -4",
      stroke: color
    })]
  });
}));
export { IconHome2 };
