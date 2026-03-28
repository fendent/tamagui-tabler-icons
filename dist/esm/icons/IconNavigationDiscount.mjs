import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconNavigationDiscount = themed(memo(function (props) {
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
      d: "M16.43 12.603l-4.43 -9.603l-7.97 17.275c-.07 .2 -.017 .424 .135 .572c.15 .148 .374 .193 .57 .116l7.265 -2.463l1.272 .431",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M16 21l5 -5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M21 21v.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M16 16v.01",
      stroke: color
    })]
  });
}));
export { IconNavigationDiscount };
