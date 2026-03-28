import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconNavigationPause = themed(memo(function (props) {
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
      d: "M16.666 13.114l-4.666 -10.114l-7.97 17.275c-.07 .2 -.017 .424 .135 .572c.15 .148 .374 .193 .57 .116l7.265 -2.463l1.056 .358",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M17 17v5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M21 17v5",
      stroke: color
    })]
  });
}));
export { IconNavigationPause };
