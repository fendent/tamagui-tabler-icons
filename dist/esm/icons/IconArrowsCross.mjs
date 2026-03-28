import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconArrowsCross = themed(memo(function (props) {
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
      d: "M16 4h4v4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M15 9l5 -5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M4 20l5 -5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M16 20h4v-4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M4 4l16 16",
      stroke: color
    })]
  });
}));
export { IconArrowsCross };
