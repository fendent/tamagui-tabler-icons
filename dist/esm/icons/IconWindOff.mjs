import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconWindOff = themed(memo(function (props) {
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
      d: "M5 8h3m4 0h1.5a2.5 2.5 0 1 0 -2.34 -3.24",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 12h9",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M16 12h2.5a2.5 2.5 0 0 1 1.801 4.282",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M4 16h5.5a2.5 2.5 0 1 1 -2.34 3.24",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 3l18 18",
      stroke: color
    })]
  });
}));
export { IconWindOff };
