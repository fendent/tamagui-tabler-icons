import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconAperture = themed(memo(function (props) {
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
      d: "M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3.6 15h10.55",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M6.551 4.938l3.26 10.034",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M17.032 4.636l-8.535 6.201",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M20.559 14.51l-8.535 -6.201",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12.257 20.916l3.261 -10.034",
      stroke: color
    })]
  });
}));
export { IconAperture };
