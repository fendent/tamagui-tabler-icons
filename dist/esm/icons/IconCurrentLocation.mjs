import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconCurrentLocation = themed(memo(function (props) {
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
      d: "M9 12a3 3 0 1 0 6 0a3 3 0 1 0 -6 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M4 12a8 8 0 1 0 16 0a8 8 0 1 0 -16 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 2l0 2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 20l0 2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M20 12l2 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M2 12l2 0",
      stroke: color
    })]
  });
}));
export { IconCurrentLocation };
