import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconFenceOff = themed(memo(function (props) {
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
      d: "M12 12h-8v4h12m4 0v-4h-4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M6 16v4h4v-4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M10 12v-2m0 -4l-2 -2m-2 2v6",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M14 16v4h4v-2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M18 12v-6l-2 -2l-2 2v4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 3l18 18",
      stroke: color
    })]
  });
}));
export { IconFenceOff };
