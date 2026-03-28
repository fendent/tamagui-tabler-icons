import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconBrandWikipedia = themed(memo(function (props) {
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
      d: "M3 4.984h2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M8 4.984h2.5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M14.5 4.984h2.5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M22 4.984h-2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M4 4.984l5.455 14.516l6.545 -14.516",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M9 4.984l6 14.516l6 -14.516",
      stroke: color
    })]
  });
}));
export { IconBrandWikipedia };
