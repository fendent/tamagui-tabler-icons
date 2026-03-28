import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconBrandDjango = themed(memo(function (props) {
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
      d: "M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 7v8.5l-2.015 .201a2.715 2.715 0 1 1 0 -5.402l2.015 .201",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M16 7v.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M16 10v5.586c0 .905 -.36 1.774 -1 2.414",
      stroke: color
    })]
  });
}));
export { IconBrandDjango };
