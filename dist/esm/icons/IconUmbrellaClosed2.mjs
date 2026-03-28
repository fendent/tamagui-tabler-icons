import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconUmbrellaClosed2 = themed(memo(function (props) {
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
      d: "M6.697 12.071l11.313 -7.071l-7.07 11.314l-4.243 -4.243",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M8.743 14.475l-2.121 2.121c-1.886 1.886 .943 4.715 2.828 2.829",
      stroke: color
    })]
  });
}));
export { IconUmbrellaClosed2 };
