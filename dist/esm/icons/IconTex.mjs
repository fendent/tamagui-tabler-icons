import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconTex = themed(memo(function (props) {
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
      d: "M9 8v-1h-6v1",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M6 15v-8",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M21 15l-5 -8",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M16 15l5 -8",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M14 11h-4v8h4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M10 15h3",
      stroke: color
    })]
  });
}));
export { IconTex };
