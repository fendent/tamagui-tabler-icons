import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconHelicopter = themed(memo(function (props) {
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
      d: "M3 10l1 2h6",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 9a2 2 0 0 0 -2 2v3c0 1.1 .9 2 2 2h7a2 2 0 0 0 2 -2c0 -3.31 -3.13 -5 -7 -5h-2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M13 9l0 -3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M5 6l15 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M15 9.1v3.9h5.5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M15 19l0 -3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M19 19l-8 0",
      stroke: color
    })]
  });
}));
export { IconHelicopter };
