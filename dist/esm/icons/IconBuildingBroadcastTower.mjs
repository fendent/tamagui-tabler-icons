import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconBuildingBroadcastTower = themed(memo(function (props) {
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
      d: "M11 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M16.616 13.924a5 5 0 1 0 -9.23 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M20.307 15.469a9 9 0 1 0 -16.615 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M9 21l3 -9l3 9",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M10 19h4",
      stroke: color
    })]
  });
}));
export { IconBuildingBroadcastTower };
