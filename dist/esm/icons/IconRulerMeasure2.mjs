import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconRulerMeasure2 = themed(memo(function (props) {
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
      d: "M12 19.875c0 .621 -.512 1.125 -1.143 1.125h-5.714a1.134 1.134 0 0 1 -1.143 -1.125v-15.875a1 1 0 0 1 1 -1h5.857c.631 0 1.143 .504 1.143 1.125l0 15.75",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 9h-2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 6h-3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 12h-3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 18h-3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 15h-2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M21 3h-4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M19 3v18",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M21 21h-4",
      stroke: color
    })]
  });
}));
export { IconRulerMeasure2 };
