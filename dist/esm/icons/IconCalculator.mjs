import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconCalculator = themed(memo(function (props) {
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
      d: "M4 5a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2l0 -14",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M8 8a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v1a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1l0 -1",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M8 14l0 .01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 14l0 .01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M16 14l0 .01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M8 17l0 .01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 17l0 .01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M16 17l0 .01",
      stroke: color
    })]
  });
}));
export { IconCalculator };
