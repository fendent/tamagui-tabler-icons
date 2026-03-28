import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconMasksTheaterOff = themed(memo(function (props) {
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
      d: "M13 9c.058 0 .133 0 .192 0h6.616a2 2 0 0 1 1.992 2.183l-.554 6.041m-1.286 2.718a3.99 3.99 0 0 1 -2.71 1.058h-1.5a4 4 0 0 1 -3.983 -3.635l-.567 -6.182",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M18 13h.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M15 16.5c.657 .438 1.313 .588 1.97 .451",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M8.632 15.982a4.05 4.05 0 0 1 -.382 .018h-1.5a4 4 0 0 1 -3.983 -3.635l-.567 -6.182a2 2 0 0 1 .514 -1.531a1.99 1.99 0 0 1 1.286 -.652m4 0h2.808a2 2 0 0 1 2 2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M6 8h.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M6 12c.764 -.51 1.528 -.63 2.291 -.36",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 3l18 18",
      stroke: color
    })]
  });
}));
export { IconMasksTheaterOff };
