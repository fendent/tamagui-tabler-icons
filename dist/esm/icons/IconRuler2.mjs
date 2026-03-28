import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconRuler2 = themed(memo(function (props) {
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
      d: "M17 3l4 4l-14 14l-4 -4l14 -14",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M16 7l-1.5 -1.5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M13 10l-1.5 -1.5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M10 13l-1.5 -1.5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M7 16l-1.5 -1.5",
      stroke: color
    })]
  });
}));
export { IconRuler2 };
