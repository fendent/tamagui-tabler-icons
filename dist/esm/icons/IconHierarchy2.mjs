import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconHierarchy2 = themed(memo(function (props) {
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
      d: "M10 3h4v4h-4l0 -4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 17h4v4h-4l0 -4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M17 17h4v4h-4l0 -4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M7 17l5 -4l5 4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 7l0 6",
      stroke: color
    })]
  });
}));
export { IconHierarchy2 };
