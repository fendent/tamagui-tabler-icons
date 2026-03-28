import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconHexagonsOff = themed(memo(function (props) {
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
      d: "M4 18v-5l4 -2l4 2v5l-4 2l-4 -2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M8 11v-3m1.332 -2.666l2.668 -1.334l4 2v5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 13l.661 -.331",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M15.345 11.328l.655 -.328l4 2v3m-1.334 2.667l-2.666 1.333l-4 -2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 3l18 18",
      stroke: color
    })]
  });
}));
export { IconHexagonsOff };
