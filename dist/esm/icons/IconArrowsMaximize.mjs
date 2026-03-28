import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconArrowsMaximize = themed(memo(function (props) {
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
      d: "M16 4l4 0l0 4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M14 10l6 -6",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M8 20l-4 0l0 -4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M4 20l6 -6",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M16 20l4 0l0 -4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M14 14l6 6",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M8 4l-4 0l0 4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M4 4l6 6",
      stroke: color
    })]
  });
}));
export { IconArrowsMaximize };
