import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconBuildingCommunity = themed(memo(function (props) {
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
      d: "M8 9l5 5v7h-5v-4m0 4h-5v-7l5 -5m1 1v-6a1 1 0 0 1 1 -1h10a1 1 0 0 1 1 1v17h-8",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M13 7l0 .01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M17 7l0 .01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M17 11l0 .01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M17 15l0 .01",
      stroke: color
    })]
  });
}));
export { IconBuildingCommunity };
