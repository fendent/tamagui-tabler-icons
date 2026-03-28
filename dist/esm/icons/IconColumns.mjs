import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconColumns = themed(memo(function (props) {
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
      d: "M4 6l5.5 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M4 10l5.5 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M4 14l5.5 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M4 18l5.5 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M14.5 6l5.5 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M14.5 10l5.5 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M14.5 14l5.5 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M14.5 18l5.5 0",
      stroke: color
    })]
  });
}));
export { IconColumns };
