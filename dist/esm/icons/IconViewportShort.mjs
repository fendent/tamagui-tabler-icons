import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconViewportShort = themed(memo(function (props) {
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
      d: "M12 3v7l3 -3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M9 7l3 3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 21v-7l3 3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M9 17l3 -3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M18 9h1a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-1",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M6 9h-1a2 2 0 0 0 -2 2v2a2 2 0 0 0 2 2h1",
      stroke: color
    })]
  });
}));
export { IconViewportShort };
