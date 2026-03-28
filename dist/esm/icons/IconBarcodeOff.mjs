import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconBarcodeOff = themed(memo(function (props) {
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
      d: "M4 7v-1c0 -.552 .224 -1.052 .586 -1.414",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M4 17v1a2 2 0 0 0 2 2h2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M16 4h2a2 2 0 0 1 2 2v1",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M16 20h2c.551 0 1.05 -.223 1.412 -.584",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M5 11h1v2h-1l0 -2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M10 11v2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M15 11v.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M19 11v2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 3l18 18",
      stroke: color
    })]
  });
}));
export { IconBarcodeOff };
