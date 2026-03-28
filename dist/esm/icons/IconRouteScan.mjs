import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconRouteScan = themed(memo(function (props) {
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
      d: "M4 8v-2a2 2 0 0 1 2 -2h2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M4 16v2a2 2 0 0 0 2 2h2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M16 4h2a2 2 0 0 1 2 2v2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M16 20h2a2 2 0 0 0 2 -2v-2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M7 12v-3h3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M14 9h3v3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M7 9l4.414 4.414a2 2 0 0 1 .586 1.414v2.172",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M17 9l-4.414 4.414a2 2 0 0 0 -.586 1.414v2.172",
      stroke: color
    })]
  });
}));
export { IconRouteScan };
