import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconBuildingBurjAlArab = themed(memo(function (props) {
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
      d: "M3 21h18",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M7 21v-18",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M7 4c5.675 .908 10 5.613 10 11.28a11 11 0 0 1 -1.605 5.72",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M5 9h12",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M7 13h4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M7 17h4",
      stroke: color
    })]
  });
}));
export { IconBuildingBurjAlArab };
