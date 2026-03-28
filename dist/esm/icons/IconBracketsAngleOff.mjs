import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconBracketsAngleOff = themed(memo(function (props) {
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
      d: "M8 4h.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M6.453 6.474l-3.453 5.526l5 8",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M16 4l5 8l-1.917 3.067",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M17.535 17.544l-1.535 2.456",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 3l18 18",
      stroke: color
    })]
  });
}));
export { IconBracketsAngleOff };
