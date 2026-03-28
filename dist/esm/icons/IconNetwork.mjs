import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconNetwork = themed(memo(function (props) {
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
      d: "M6 9a6 6 0 1 0 12 0a6 6 0 0 0 -12 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 3c1.333 .333 2 2.333 2 6s-.667 5.667 -2 6",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 3c-1.333 .333 -2 2.333 -2 6s.667 5.667 2 6",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M6 9h12",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 20h7",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M14 20h7",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M10 20a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 15v3",
      stroke: color
    })]
  });
}));
export { IconNetwork };
