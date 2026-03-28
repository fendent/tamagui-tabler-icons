import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconBuildingPavilion = themed(memo(function (props) {
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
      d: "M3 21h7v-3a2 2 0 0 1 4 0v3h7",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M6 21l0 -9",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M18 21l0 -9",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M6 12h12a3 3 0 0 0 3 -3a9 8 0 0 1 -9 -6a9 8 0 0 1 -9 6a3 3 0 0 0 3 3",
      stroke: color
    })]
  });
}));
export { IconBuildingPavilion };
