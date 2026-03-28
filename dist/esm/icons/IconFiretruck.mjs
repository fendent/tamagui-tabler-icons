import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconFiretruck = themed(memo(function (props) {
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
      d: "M3 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M15 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M7 18h8m4 0h2v-6a5 5 0 0 0 -5 -5h-1l1.5 5h4.5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 18v-11h3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 17l0 -5l9 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 9l18 -6",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M6 12l0 -4",
      stroke: color
    })]
  });
}));
export { IconFiretruck };
