import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconAsset = themed(memo(function (props) {
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
      d: "M3 15a6 6 0 1 0 12 0a6 6 0 1 0 -12 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M7 15a2 2 0 1 0 4 0a2 2 0 1 0 -4 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M17 5a2 2 0 1 0 4 0a2 2 0 1 0 -4 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M14.218 17.975l6.619 -12.174",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M6.079 9.756l12.217 -6.631",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M7 15a2 2 0 1 0 4 0a2 2 0 1 0 -4 0",
      stroke: color
    })]
  });
}));
export { IconAsset };
