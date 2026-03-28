import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconCar4wd = themed(memo(function (props) {
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
      d: "M5 5a2 2 0 0 1 2 -2a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2a2 2 0 0 1 -2 -2l0 -2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M5 17a2 2 0 0 1 2 -2a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2a2 2 0 0 1 -2 -2l0 -2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M15 5a2 2 0 0 1 2 -2a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2a2 2 0 0 1 -2 -2l0 -2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M15 17a2 2 0 0 1 2 -2a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2a2 2 0 0 1 -2 -2l0 -2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M9 18h6",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M9 6h6",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 6.5v-.5v12",
      stroke: color
    })]
  });
}));
export { IconCar4wd };
