import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconDeer = themed(memo(function (props) {
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
      d: "M3 3c0 2 1 3 4 3c2 0 3 1 3 3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M21 3c0 2 -1 3 -4 3c-2 0 -3 .333 -3 3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 18c-1 0 -4 -3 -4 -6c0 -2 1.333 -3 4 -3s4 1 4 3c0 3 -3 6 -4 6",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M15.185 14.889l.095 -.18a4 4 0 1 1 -6.56 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M17 3c0 1.333 -.333 2.333 -1 3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M7 3c0 1.333 .333 2.333 1 3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M7 6c-2.667 .667 -4.333 1.667 -5 3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M17 6c2.667 .667 4.333 1.667 5 3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M8.5 10l-1.5 -1",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M15.5 10l1.5 -1",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 15h.01",
      stroke: color
    })]
  });
}));
export { IconDeer };
