import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconAnchorOff = themed(memo(function (props) {
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
      d: "M12 12v9",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M4 13a8 8 0 0 0 14.138 5.13m1.44 -2.56a7.99 7.99 0 0 0 .422 -2.57",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M21 13h-2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M5 13h-2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12.866 8.873a3 3 0 1 0 -3.737 -3.747",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 3l18 18",
      stroke: color
    })]
  });
}));
export { IconAnchorOff };
