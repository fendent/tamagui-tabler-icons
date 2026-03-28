import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconFerry = themed(memo(function (props) {
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
      d: "M2 18h15.293c1.02 0 1.972 -.503 2.536 -1.34l2.171 -3.66h-18.479l-1.521 5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M14 8l-1 -2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M6.107 12.675l1.384 -4.675h8l2.675 4.598",
      stroke: color
    })]
  });
}));
export { IconFerry };
